# Prometheus Configuration Guide

This README outlines the configuration for a Prometheus instance designed to scrape metrics from various targets and write data to a remote Mimir instance.

## Configuration Overview

The configuration sets global parameters for scraping intervals and assigns external labels to identify the cluster and namespace. It includes four scrape jobs for cAdvisor, Prometheus itself, node metrics, and a Mimir instance. Additionally, it configures remote write capabilities to send metrics to a Mimir instance with the appropriate tenant header.

## Global Settings

- `scrape_interval`: Defines how often Prometheus scrapes metrics (every 5 seconds).
- `evaluation_interval`: Sets the interval for evaluating alerting and recording rules (every 5 seconds).
- `external_labels`: Adds additional labels to all metrics for identifying the cluster and namespace.

## Scrape Configurations

- `cadvisor`: Scrapes container metrics from cAdvisor running on port 8081.
- `prometheus`: Scrapes metrics of the Prometheus server itself on port 9090.
- `node`: Collects system metrics from a Node Exporter on port 9100.
- `mimir`: Targets a Mimir instance for scraping on port 9009.

## Remote Write

- Configured to send scraped metrics to a remote Mimir instance.
- Includes a custom header `X-Scope-OrgID` set to 'demo' for tenant identification.

## Usage

Replace `ip_address` with the actual IP address of your targets and Mimir instance. Ensure that the `X-Scope-OrgID` header matches the tenant ID used in your Mimir setup.