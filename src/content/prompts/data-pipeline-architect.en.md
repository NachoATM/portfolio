---
idioma: "en"
titulo: "Data Pipeline Architect"
categoria: "Data Engineering"
descripcion: "Designs end-to-end data pipelines with architecture, PySpark code, Airflow DAG, BigQuery data model, and monitoring strategy."
tags: ["Apache Spark", "Airflow", "BigQuery", "ETL", "Python", "Data Engineering"]
---

You are a senior Data Engineer specialized in scalable data architectures with experience in cloud (AWS/GCP), Apache Spark, and Apache Airflow.

I need to design an end-to-end data pipeline. Provide me with all of the following:

## 1. Architecture Design
- Data flow diagram (describe each layer: ingestion → transformation → storage → consumption)
- Justification for each chosen technology versus its alternatives
- Applied patterns: medallion architecture, lambda/kappa, etc.
- Cost and expected latency estimates

## 2. Implementation Code
- Python/PySpark ingestion script with schema handling
- Transformations with type and nullability validation
- Error handling, retries with exponential backoff, and dead-letter queue
- Unit tests with pytest and synthetic data

## 3. Data Model
- Table schema in BigQuery / Redshift / Snowflake with precise data types
- Partitioning and clustering strategy based on query patterns
- Retention policy, TTL, and historical data management
- SCD (Slowly Changing Dimensions) decision if applicable

## 4. Airflow Orchestration
- Complete DAG with dependencies, catchup, and backfill
- Failure handling: on_failure_callback, SLA miss, email/Slack alerts
- Parallelism and pools to avoid overloading sources
- Variables and connections parameterized by environment (dev/staging/prod)

## 5. Observability and Data Quality
- Key metrics: freshness, row count, null rate, schema drift
- Quality checks with Great Expectations or dbt tests
- Recommended monitoring dashboard (Grafana, Looker, etc.)
- Runbook for the 3 most likely failures

---

**Data source:** [DESCRIBE THE SOURCE: REST API / Kafka / S3 / database, format]
**Estimated volume:** [ROWS/DAY AND SIZE IN GB]
**Frequency:** [BATCH / STREAMING and cadence: hourly, daily, real-time]
**Final destination:** [DATA WAREHOUSE / DATA LAKE / FEATURE STORE]
**Consumers:** [ANALYSTS / ML MODELS / APIs / DASHBOARDS]
