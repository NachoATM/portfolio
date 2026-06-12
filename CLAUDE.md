# Portfolio — CLAUDE.md

Lee este archivo antes de hacer cualquier cambio.

## Arquitectura

```
src/
├── content/          ← SOLO edita aquí para añadir contenido
│   ├── proyectos/    → nombre.es.md + nombre.en.md
│   ├── titulos/      → nombre.es.md + nombre.en.md
│   ├── certificaciones/
│   ├── repos/
│   ├── prompts/
│   └── articulos/
├── pages/
│   ├── es/index.astro   ← protegido
│   └── en/index.astro   ← protegido
├── components/          ← protegido
├── layouts/             ← protegido
└── styles/global.css    ← protegido
```

## Para añadir contenido

1. Crea `src/content/<seccion>/nombre.es.md` y `nombre.en.md`
2. Rellena el frontmatter (ver plantillas abajo)
3. `npm run dev` para previsualizar
4. `git push main` para publicar

## Plantillas de frontmatter

### Proyecto
```yaml
slug: "mi-proyecto"
idioma: "es"
titulo: "Nombre del proyecto"
fecha: 2026-01-15
resumen: "Una frase de qué hace"
stack: ["Tech1", "Tech2"]
repo: "https://github.com/usuario/repo"
demo: "https://demo.com"
destacado: false
icono: "🔧"
badge: "IA"
```

### Título académico
```yaml
slug: "mi-titulo"
idioma: "es"
titulo: "Nombre del título"
institucion: "Nombre de la institución"
fecha: 2024-06-15
categoria: "Ingeniería"
```

### Certificación
```yaml
slug: "mi-cert"
idioma: "es"
titulo: "Nombre de la certificación"
emisor: "Emisor"
fecha: 2025-01-15
categoria: "Cloud"
logo: "AWS"
enlace_verificacion: ""
credencial_id: ""
```

### Repo
```yaml
slug: "mi-repo"
idioma: "es"
titulo: "nombre-repo"
descripcion: "Qué hace"
repo: "https://github.com/usuario/repo"
lenguaje: "Python"
color: "#3572A5"
tags: ["tag1"]
destacado: false
```

## Reglas

- Todo contenido necesita versión ES y EN con el mismo `slug`
- No toques `src/pages/`, `src/components/`, `src/layouts/` sin preguntar
- El tema claro/oscuro usa la clase `dark` en `<html>` (gestionado por JS en Base.astro)
- Deploy automático al hacer push a `main`
- Configura `site` y `base` en `astro.config.mjs` con tu usuario y nombre de repo de GitHub
