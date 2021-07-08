locals {
  project_id = "randomquotes-app"
  region = "europe-west1"
  zone = "europe-west1-b"
}

provider "google" {
  credentials = file("terraform-sa-gcp-key.json")
  project = local.project_id
  region = local.region
  zone = local.zone
}

terraform {
  backend "gcs" {
    bucket = "randomquotes-app-terraform"
    prefix = "/state"
  }
}

# IP Address
resource "google_compute_address" "ip_address" {
  name = "randomquotes-ip"
}

# Network
data "google_compute_network" "default" {
  name = "default"
}

# Firewall Rule
resource "google_compute_firewall" "allow_http" {
  name    = "allow-http"
  network = data.google_compute_network.default.name

  allow {
    protocol = "tcp"
    ports    = ["80"]
  }

  source_ranges = ["0.0.0.0/0"]

  target_tags = ["allow-http"]
}

# OS Image
data "google_compute_image" "cos_image" {
  family = "cos-89-lts"
  project = "cos-cloud"
}

# Compute Engine Instance
resource "google_compute_instance" "instance" {
  name         = "${local.project_id}-vm"
  machine_type = "f1-micro"
  zone         = local.zone

  tags = google_compute_firewall.allow_http.target_tags

  boot_disk {
    initialize_params {
      image = data.google_compute_image.cos_image.self_link
    }
  }

  network_interface {
    network = data.google_compute_network.default.name

    access_config {
      nat_ip = google_compute_address.ip_address.address
    }
  }

  service_account {
    scopes = ["storage-ro"]
  }
}