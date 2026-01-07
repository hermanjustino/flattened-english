import os
import requests
import time
from google.cloud import bigquery
from datetime import datetime

# Configuration
API_KEY = os.environ.get("SEMANTIC_SCHOLAR_API_KEY")
PROJECT_ID = os.environ.get("GCP_PROJECT_ID", "ai-journalist-audit")
DATASET_ID = "flattened_english_analysis"
TABLE_ID = "scholar_papers"
BASE_URL = "https://api.semanticscholar.org/graph/v1"

def get_bigquery_client():
    return bigquery.Client(project=PROJECT_ID)

def ensure_table_exists(client):
    table_ref = f"{PROJECT_ID}.{DATASET_ID}.{TABLE_ID}"
    schema = [
        bigquery.SchemaField("paper_id", "STRING", mode="REQUIRED"),
        bigquery.SchemaField("title", "STRING", mode="NULLABLE"),
        bigquery.SchemaField("abstract", "STRING", mode="NULLABLE"),
        bigquery.SchemaField("url", "STRING", mode="NULLABLE"),
        bigquery.SchemaField("publication_year", "INTEGER", mode="NULLABLE"),
        bigquery.SchemaField("publication_date", "DATE", mode="NULLABLE"),
        bigquery.SchemaField("authors", "STRING", mode="NULLABLE"), # Comma-separated or use REPEATED
        bigquery.SchemaField("venue", "STRING", mode="NULLABLE"),
        bigquery.SchemaField("ingested_at", "TIMESTAMP", mode="REQUIRED"),
        bigquery.SchemaField("query_keywords", "STRING", mode="NULLABLE"),
    ]
    
    try:
        client.get_table(table_ref)
        print(f"Table {table_ref} exists.")
    except Exception:
        print(f"Creating table {table_ref}...")
        table = bigquery.Table(table_ref, schema=schema)
        client.create_table(table)

def search_bulk(keywords, limit=100):
    query = " | ".join(keywords)
    print(f"Searching for: {query}")
    
    headers = {}
    if API_KEY:
        headers["x-api-key"] = API_KEY
        
    params = {
        "query": query,
        "limit": min(limit, 1000),
        "fields": "paperId,title,abstract,url,year,authors,venue,publicationDate",
        "sort": "publicationDate:desc"
    }
    
    response = requests.get(f"{BASE_URL}/paper/search/bulk", params=params, headers=headers)
    
    if response.status_code != 200:
        print(f"Error: {response.status_code} - {response.text}")
        return []
        
    data = response.json()
    return data.get("data", [])

def ingest_data(keywords):
    client = get_bigquery_client()
    ensure_table_exists(client)
    
    papers = search_bulk(keywords)
    if not papers:
        print("No papers found.")
        return

    rows_to_insert = []
    timestamp = datetime.utcnow().isoformat()
    
    for paper in papers:
        authors = ", ".join([a.get("name", "") for a in paper.get("authors", [])])
        
        # Handle date parsing
        pub_date = paper.get("publicationDate")
        if not pub_date:
            pub_date = None
            
        row = {
            "paper_id": paper.get("paperId"),
            "title": paper.get("title"),
            "abstract": paper.get("abstract"),
            "url": paper.get("url"),
            "publication_year": paper.get("year"),
            "publication_date": pub_date,
            "authors": authors,
            "venue": paper.get("venue"),
            "ingested_at": timestamp,
            "query_keywords": ", ".join(keywords)
        }
        rows_to_insert.append(row)
        
    if rows_to_insert:
        errors = client.insert_rows_json(f"{PROJECT_ID}.{DATASET_ID}.{TABLE_ID}", rows_to_insert)
        if errors:
            print(f"Encountered errors while inserting rows: {errors}")
        else:
            print(f"Successfully inserted {len(rows_to_insert)} rows.")

if __name__ == "__main__":
    # Example keywords relevant to the research
    target_keywords = ["AAVE", "African American Vernacular English", "Linguistic Bias", "NLP Fairness"]
    ingest_data(target_keywords)
