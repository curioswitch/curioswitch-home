import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMarkdown } from "@content-collections/markdown";
import { compileMDX } from "@content-collections/mdx";
import remarkGfm from "remark-gfm";
import { z } from "zod";

const news = defineCollection({
  name: "news",
  directory: "content/news",
  include: "**/*.{md,mdx}",
  schema: z.object({
    title: z.string(),
    pubDate: z.string(),
    content: z.string(),
    heroImage: z.string().optional(),
  }),
  transform: async (document, context) => {
    const isMdx = document._meta.filePath.endsWith(".mdx");

    const m = document._meta.path.match(/\.(ja|en)$/);
    if (!m) throw new Error(`Missing locale suffix: ${document._meta.path}`);

    const locale = m[1] as "ja" | "en";

    const slug = document._meta.path
      .replace(/^\d{4}-\d{2}-\d{2}-/, "")
      .replace(/\.(ja|en)$/, "");

    return {
      ...document,
      slug,
      locale,
      pubDate: new Date(document.pubDate).toISOString(),
      html: isMdx ? null : await compileMarkdown(context, document),
      mdx: isMdx
        ? await compileMDX(context, document, {
            remarkPlugins: [remarkGfm],
          })
        : null,
    };
  },
});

export default defineConfig({
  collections: [news],
});
