import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// UTARMP デモのシンプルな記事スキーマ。UMP の generic 系アダプタで入稿・公開する。
// loader: src/content/posts/<slug>/index.md
const posts = defineCollection({
  loader: glob({ base: "./src/content/posts", pattern: "**/index.md" }),
  schema: z.object({
    title: z.string(),
    pubDate: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    heroImage: z.string().optional(),
  }),
});

export const collections = { posts };
