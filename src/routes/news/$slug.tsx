import { MDXContent } from "@content-collections/mdx/react";
import { createFileRoute, notFound } from "@tanstack/react-router";
import { allNews } from "content-collections";
import { getLocale } from "src/paraglide/runtime";

export const Route = createFileRoute("/news/$slug")({
  loader: ({ params }) => {
    const locale = getLocale();
    const article = allNews.find(
      (a) => a.slug === params.slug && a.locale === locale,
    );
    if (!article) {
      throw notFound();
    }
    return article;
  },
  component: Article,
});

function Article() {
  const article = Route.useLoaderData();
  return (
    <main>
      <h1>{article.title}</h1>
      {article.mdx ? (
        <MDXContent code={article.mdx} />
      ) : (
        // biome-ignore lint/security/noDangerouslySetInnerHtml: compiled by remark
        <div dangerouslySetInnerHTML={{ __html: article.html ?? "" }} />
      )}
    </main>
  );
}
