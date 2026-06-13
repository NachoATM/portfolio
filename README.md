# 💼 Portfolio Personal — Jose Ignacio Esteban González

¡Bienvenido a mi portfolio personal! Este proyecto centraliza mi trayectoria como **AI Engineer, Data Scientist y Desarrollador Odoo**. Está diseñado para ser ultra rápido, minimalista, totalmente accesible y bilingüe.

🚀 **Demostración en vivo:** [nachoatm.github.io/portfolio](https://nachoatm.github.io/portfolio)

---

## 🛠️ Stack Tecnológico

El sitio está construido utilizando arquitectura de islas para un rendimiento óptimo y carga instantánea.

| Tecnología | Rol en el proyecto |
| :--- | :--- |
| **[Astro 4](https://astro.build)** | Framework principal (Generación de Sitios Estáticos - SSG) |
| **[Tailwind CSS 3](https://tailwindcss.com)** | Estilos basados en utilidades y diseño responsivo |
| **[React 18](https://react.dev)** | Componentes interactivos aislados (cuando aplica) |
| **Google Fonts** | Tipografía: `Inter` (cuerpo), `DM Serif` (títulos), `DM Mono` (código) |

---

## 💻 Inicio Rápido

### Requisitos previos
Asegúrate de tener instalado **Node.js** (versión 18 o superior) y **npm**.

### Instalación y desarrollo
1. Clona el repositorio y entra en el directorio.
2. Instala las dependencias y levanta el servidor local:


# Instalar dependencias
npm install

# Iniciar servidor de desarrollo en http://localhost:4321/portfolio
npm run dev

# Compilar el proyecto para producción (genera la carpeta /dist)
npm run build

# Previsualizar el build de producción localmente
npm run preview



---

## 📂 Estructura del Proyecto

El proyecto sigue una estructura limpia donde el contenido está estrictamente separado de la lógica de renderizado.


```bash
src/
├── components/
│   ├── ArticleCard.astro
│   ├── Footer.astro
│   ├── FormacionSection.astro
│   ├── Hero.astro
│   ├── Nav.astro
│   ├── ProjectCard.astro
│   ├── PromptCard.astro
│   └── ReposSection.astro
├── content/
│   ├── articulos/
│   ├── certificaciones/
│   ├── prompts/
│   ├── proyectos/
│   ├── repos/
│   └── titulos/
├── layouts/
│   └── Base.astro
├── pages/
│   ├── en/
│   │   └── index.astro
│   └── es/
│       └── index.astro
└── styles/
    └── global.css
public/
├── logos/
└── pdfs/
```

---

## ✍️ Gestión de Contenido (Añadir nuevos elementos)

El contenido se gestiona en **pares de archivos Markdown** (`.es.md` y `.en.md`). Para añadir un elemento, crea ambos archivos en su respectiva carpeta de `src/content/` y rellena el *frontmatter* siguiendo estas plantillas:


> **Nota:** El cuerpo del archivo Markdown (`.md`) de los prompts se convertirá automáticamente en el texto copiable de la tarjeta en la interfaz.

---

## 🎨 Personalización de Estilos y Visuales

### Catálogo de Iconos para Proyectos

El campo `icono` del Frontmatter acepta los siguientes identificadores definidos por Lucide/Estilos inline:

* `zap` | `brain` | `home` | `activity` | `bar-chart`
* `cpu` | `database` | `network` | `code` | `trending-up` | `layers`

### Añadir nuevos Logos de Certificadoras

Los logos de los emisores están embebidos como SVGs para evitar peticiones HTTP innecesarias. Para añadir uno nuevo:

1. Abre `src/components/FormacionSection.astro`.
2. Localiza el objeto `brandLogos`.
3. Añade tu nueva marca. La **clave** debe coincidir exactamente con el campo `emisor` del Markdown:

javascript
   MiEmisor: {
     bg: 'bg-blue-50 dark:bg-blue-950/30',
     border: 'border-blue-100 dark:border-blue-900/50',
     html: '<svg>...</svg>' // Tu SVG inline aquí
   }



### Paleta de Colores Corporativa

El diseño se rige bajo una identidad visual basada en verdes botánicos/tecnológicos configurados mediante variables CSS en `src/styles/global.css`:

| Variable | Valor Hex | Uso Principal |
| --- | --- | --- |
| `--green` | `#1E5C40` | Color de acento principal, botones y enlaces |
| `--green-dark` | `#123D2A` | Estados *hover* de botones principales |
| `--green-light` | `#8FD6A8` | Gradientes decorativos y acentos en modo oscuro |
| `--green-bg` | `#e5f3eb` | Fondos suaves para Badges, etiquetas e iconos |

---

## 🌐 Internacionalización (i18n)

El sitio soporta **Español (ES)** e **Inglés (EN)** de forma nativa a través del enrutamiento de carpetas de Astro (`src/pages/es/` y `src/pages/en/`).

* Cada vez que agregues un contenido en un idioma, **es obligatorio** crear su contraparte en el otro idioma para evitar inconsistencias en el renderizado de las páginas.
* Las colecciones de Astro filtran automáticamente los archivos usando el parámetro `idioma` definido en el frontmatter.

---

## 🚀 Despliegue Continuo (CI/CD)

El proyecto cuenta con un flujo de trabajo automatizado mediante **GitHub Actions**.

Cada vez que realizas un `push` a la rama `main`, el archivo `.github/workflows/deploy.yml` se activa automáticamente para compilar el sitio con Astro y desplegarlo en **GitHub Pages**.


# Pasos para actualizar el portfolio en vivo:
git add .

git commit -m "feat: añade nuevo proyecto de NLP"

git push origin main





