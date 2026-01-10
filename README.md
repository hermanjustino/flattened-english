# Flattened English: Measuring Linguistic Labor in AI-Mediated Knowledge Work

## Research Question
How do AI-mediated platforms impose uneven linguistic labor on users employing non-standard English varieties in digital work contexts?

## Core Contribution
A quantitative, platform-level audit of how search engines, social media algorithms, and LLMs enforce professional linguistic norms, shifting the burden of standardization onto global and racialized workers.

## Architecture (GCP & Terraform)

This project follows the **Professional Cloud Architect (PCA)** domain standards using a serverless, event-driven architecture.

### Components

1.  **Ingestion (Cloud Run Jobs):**
    *   **TikTok Scraper:** Collects video captions and comments to analyze AAVE usage and algorithmic suppression.
    *   **Semantic Scholar:** Fetches academic papers to track "linguistic drift" in formal research.
    *   *Why Cloud Run Jobs?* Better suitability for long-running scraping tasks compared to Cloud Functions.

2.  **Storage (BigQuery):**
    *   Centralized analytical warehouse for all textual data.
    *   **BigQuery ML:** Used for initial regression analysis and drift detection directly within the warehouse.

3.  **Analysis (Vertex AI):**
    *   **Vertex AI Pipelines:** Orchestrates the NLP "countercoding" experiments and reproducibility workflows.
    *   **Workbench:** For interactive data exploration.

4.  **Frontend (Next.js):**
    *   A minimalist dashboard to visualize the "Linguistic Labor Index" and platform audit results.

5.  **Infrastructure:**
    *   Managed entirely via **Terraform** for reproducibility and security (IAM Least Privilege).

## Project Structure

```
.
├── infrastructure/    # Terraform configuration
├── src/
│   ├── ingestion/     # Python scrapers (TikTok, Scholar)
│   ├── analysis/      # Vertex AI pipelines & BigQuery SQL
│   └── web/           # Next.js Dashboard
├── archive/           # Legacy v1 application
└── README.md
```

## Running

docker compose up --build -d

docker compose ps && docker compose logs --tail=20 web

