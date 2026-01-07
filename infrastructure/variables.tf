variable "project_id" {
  description = "The GCP Project ID"
  type        = string
  default     = "ai-journalist-audit" # Replace with actual project ID if known
}

variable "region" {
  description = "The default GCP region"
  type        = string
  default     = "us-central1"
}
