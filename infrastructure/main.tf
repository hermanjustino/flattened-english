terraform {
  required_providers {
    google = {
      source  = "hashicorp/google"
      version = "~> 5.0"
    }
  }
  backend "gcs" {
    bucket  = "flattened-english-tf-state"
    prefix  = "terraform/state"
  }
}

provider "google" {
  project = var.project_id
  region  = var.region
}

# Enable Essential APIs
resource "google_project_service" "apis" {
  for_each = toset([
    "bigquery.googleapis.com",
    "cloudbuild.googleapis.com",
    "run.googleapis.com",
    "artifactregistry.googleapis.com",
    "aiplatform.googleapis.com", # Vertex AI
    "cloudscheduler.googleapis.com",
    "iam.googleapis.com"
  ])
  service            = each.key
  disable_on_destroy = false
}

# BigQuery Dataset for Analysis
resource "google_bigquery_dataset" "main_dataset" {
  dataset_id                  = "flattened_english_analysis"
  friendly_name               = "Flattened English Analysis"
  description                 = "Storage for linguistic labor audit data (TikTok, Scholar)"
  location                    = var.region
  default_table_expiration_ms = null

  labels = {
    env = "production"
  }
}

# Artifact Registry for Container Images (Ingestion & Frontend)
resource "google_artifact_registry_repository" "repo" {
  location      = var.region
  repository_id = "flattened-english-repo"
  description   = "Docker repository for ingestion and frontend"
  format        = "DOCKER"
}

# Service Account for Ingestion Jobs
resource "google_service_account" "ingestion_sa" {
  account_id   = "ingestion-sa"
  display_name = "Ingestion Service Account"
}

# IAM: Grant Ingestion SA access to BigQuery
resource "google_bigquery_dataset_access" "ingestion_sa_access" {
  dataset_id    = google_bigquery_dataset.main_dataset.dataset_id
  role          = "roles/bigquery.dataEditor"
  user_by_email = google_service_account.ingestion_sa.email
}

# IAM: Vertex AI User for Analysis
resource "google_project_iam_member" "vertex_user" {
  project = var.project_id
  role    = "roles/aiplatform.user"
  member  = "serviceAccount:${google_service_account.ingestion_sa.email}" # Reusing for simplicity, or create separate
}
