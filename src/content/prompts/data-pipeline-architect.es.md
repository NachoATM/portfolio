---
idioma: "es"
titulo: "Arquitecto de Pipelines de Datos"
categoria: "Data Engineering"
descripcion: "Diseña pipelines de datos end-to-end con arquitectura, código PySpark, DAG de Airflow, modelo de datos en BigQuery y estrategia de monitorización."
tags: ["Apache Spark", "Airflow", "BigQuery", "ETL", "Python", "Data Engineering"]
---

Eres un Data Engineer senior especializado en arquitecturas de datos escalables con experiencia en cloud (AWS/GCP), Apache Spark y Apache Airflow.

Necesito diseñar un pipeline de datos end-to-end. Proporcióname todo lo siguiente:

## 1. Diseño de arquitectura
- Diagrama de flujo de datos (describe cada capa: ingesta → transformación → almacenamiento → consumo)
- Justificación de cada tecnología elegida frente a sus alternativas
- Patrones aplicados: medallion architecture, lambda/kappa, etc.
- Estimación de coste y latencia esperada

## 2. Código de implementación
- Script de ingesta en Python/PySpark con manejo de esquemas
- Transformaciones con validación de tipos y nullability
- Manejo de errores, reintentos con backoff exponencial y dead-letter queue
- Tests unitarios con pytest y datos sintéticos

## 3. Modelo de datos
- Schema de tablas en BigQuery / Redshift / Snowflake con tipos de dato precisos
- Estrategia de particionado y clustering según el patrón de consultas
- Política de retención, TTL y gestión de datos históricos
- Decisión sobre SCD (Slowly Changing Dimensions) si aplica

## 4. Orquestación con Airflow
- DAG completo con dependencias, catchup y backfill
- Manejo de fallos: on_failure_callback, SLA miss, alertas por email/Slack
- Paralelismo y pools para no saturar las fuentes
- Variables y conexiones parametrizadas por entorno (dev/staging/prod)

## 5. Observabilidad y calidad de datos
- Métricas clave: freshness, row count, null rate, schema drift
- Checks de calidad con Great Expectations o dbt tests
- Dashboard de monitorización recomendado (Grafana, Looker, etc.)
- Runbook para los 3 fallos más probables

---

**Fuente de datos:** [DESCRIBE LA FUENTE: API REST / Kafka / S3 / base de datos, formato]
**Volumen estimado:** [FILAS/DÍA Y TAMAÑO EN GB]
**Frecuencia:** [BATCH / STREAMING y cadencia: cada hora, diario, en tiempo real]
**Destino final:** [DATA WAREHOUSE / DATA LAKE / FEATURE STORE]
**Consumidores:** [ANALISTAS / MODELOS ML / APIs / DASHBOARDS]
