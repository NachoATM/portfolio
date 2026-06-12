import { defineCollection, z } from "astro:content";

const proyectos = defineCollection({
  type: "content",
  schema: z.object({
    idioma: z.enum(["es", "en"]),
    titulo: z.string(),
    fecha: z.date(),
    resumen: z.string(),
    stack: z.array(z.string()),
    repo: z.string().url().optional(),
    demo: z.string().url().optional(),
    destacado: z.boolean().default(false),
    icono: z.string().default("🔧"),
    badge: z.string().optional(),
  }),
});

const titulos = defineCollection({
  type: "content",
  schema: z.object({
    idioma: z.enum(["es", "en"]),
    titulo: z.string(),
    institucion: z.string(),
    fecha_inicio: z.date().optional(),
    fecha: z.date(),
    categoria: z.string(),
  }),
});

const certificaciones = defineCollection({
  type: "content",
  schema: z.object({
    idioma: z.enum(["es", "en"]),
    titulo: z.string(),
    emisor: z.string(),
    fecha: z.date(),
    categoria: z.string(),
    logo: z.string().default(""),
    enlace_verificacion: z.string().url().optional(),
    credencial_id: z.string().optional(),
    pdf: z.string().optional(),
  }),
});

const repos = defineCollection({
  type: "content",
  schema: z.object({
    idioma: z.enum(["es", "en"]),
    titulo: z.string(),
    descripcion: z.string(),
    repo: z.string().url(),
    lenguaje: z.string(),
    color: z.string().default("#3572A5"),
    tags: z.array(z.string()),
    destacado: z.boolean().default(false),
  }),
});

const prompts = defineCollection({
  type: "content",
  schema: z.object({
    idioma: z.enum(["es", "en"]),
    titulo: z.string(),
    categoria: z.string(),
    descripcion: z.string(),
    tags: z.array(z.string()),
    github: z.string().url().optional(),
    demo: z.string().optional(),
  }),
});

const articulos = defineCollection({
  type: "content",
  schema: z.object({
    idioma: z.enum(["es", "en"]),
    titulo: z.string(),
    fecha: z.date(),
    resumen: z.string(),
    tags: z.array(z.string()),
    imagen: z.string().optional(),
  }),
});

export const collections = {
  proyectos,
  titulos,
  certificaciones,
  repos,
  prompts,
  articulos,
};
