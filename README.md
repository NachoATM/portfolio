# Portfolio — Jose Ignacio Esteban González

Portfolio personal de AI Engineer, Data Scientist y desarrollador Odoo. Construido con Astro, Tailwind CSS y contenido en Markdown.

**Demo:** [nachoatm.github.io/portfolio](https://nachoatm.github.io/portfolio)

---

## Stack

| Tecnología | Uso |
|---|---|
| [Astro 4](https://astro.build) | Framework SSG |
| [Tailwind CSS 3](https://tailwindcss.com) | Estilos |
| [React 18](https://react.dev) | Islas interactivas (si aplica) |
| Google Fonts — Inter + DM Serif + DM Mono | Tipografía |

---

## Inicio rápido

```bash
npm install
npm run dev        # http://localhost:4321/portfolio
npm run build      # genera /dist
npm run preview    # previsualiza el build
```

---

## Estructura

```
src/
├── content/           ← TODO el contenido está aquí
│   ├── proyectos/     → nombre.es.md + nombre.en.md
│   ├── titulos/       → nombre.es.md + nombre.en.md
│   ├── certificaciones/
│   ├── repos/
│   ├── prompts/
│   └── articulos/
├── components/
│   ├── Hero.astro
│   ├── Nav.astro
│   ├── ProjectCard.astro
│   ├── PromptCard.astro
│   ├── ArticleCard.astro
│   ├── FormacionSection.astro
│   ├── ReposSection.astro
│   └── Footer.astro
├── layouts/
│   └── Base.astro
├── pages/
│   ├── es/index.astro
│   └── en/index.astro
└── styles/
    └── global.css
public/
├── logos/             ← SVGs de marcas (AWS, MIT, DataCamp…)
└── pdfs/              ← cv-es.pdf + cv-en.pdf
```

---

## Añadir contenido

Cada sección usa pares de archivos Markdown (`nombre.es.md` / `nombre.en.md`). Crea los dos y rellena el frontmatter según la plantilla de cada tipo.

### Proyecto

```yaml
idioma: "es"
titulo: "Nombre del proyecto"
fecha: 2026-01-15
resumen: "Una frase de qué hace"
stack: ["Python", "Scikit-learn"]
repo: "https://github.com/usuario/repo"   # opcional
demo: "https://demo.com"                   # opcional
destacado: false
icono: "brain"   # zap | brain | home | activity | bar-chart | cpu | database | network | code | trending-up | layers
badge: "TFM"     # opcional
```

### Certificación

```yaml
idioma: "es"
titulo: "Nombre de la certificación"
emisor: "Amazon Web Services"
fecha: 2025-01-15
categoria: "Cloud"
logo: "AWS"
enlace_verificacion: "https://..."   # opcional
credencial_id: ""                    # opcional
```

### Artículo

```yaml
idioma: "es"
titulo: "Título del artículo"
fuente: "Nature Scientific Reports"
fecha: 2026-01-01
url: "https://..."
resumen: "Tu comentario personal sobre por qué es relevante"
tags: ["Machine Learning", "Python"]
```

### Prompt

```yaml
idioma: "es"
titulo: "Nombre del prompt"
categoria: "Data Engineering"
descripcion: "Qué hace en una frase"
tags: ["Python", "Spark"]
```
El cuerpo del Markdown es el texto completo del prompt (se muestra expandible con botón de copiar).

---

## Logos de certificaciones

Los logos inline están definidos en `FormacionSection.astro` en el objeto `brandLogos`. Para añadir una nueva marca:

1. Añade una entrada en `brandLogos` con `bg`, `border` y `html` (SVG inline)
2. La clave es el valor exacto del campo `emisor` en el `.md`

---

## i18n

El sitio es bilingüe (ES/EN). Cada archivo de contenido necesita versión `.es.md` y `.en.md`. Las páginas filtran por el campo `idioma` del frontmatter.

---

## Deploy

El deploy es automático vía GitHub Actions al hacer push a `main`.

```bash
git add .
git commit -m "feat: ..."
git push
```

El workflow (`.github/workflows/deploy.yml`) construye el sitio y lo publica en GitHub Pages. La URL final es `https://nachoatm.github.io/portfolio`.

---

## Paleta de colores

| Variable | Valor | Uso |
|---|---|---|
| `--green` | `#1E5C40` | Acento principal |
| `--green-dark` | `#123D2A` | Hover de botones |
| `--green-light` | `#8FD6A8` | Gradientes, modo oscuro |
| `--green-bg` | `#e5f3eb` | Fondos de badges e iconos |
