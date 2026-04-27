import { createFileRoute } from "@tanstack/react-router";

const SITE = "https://hotelangers.com";

export const Route = createFileRoute("/sitemap_index.xml")({
  server: {
    handlers: {
      GET: () => {
        const lastmod = new Date().toISOString();
        const sitemaps = [
          `${SITE}/page-sitemap.xml`,
          `${SITE}/hotel-sitemap.xml`,
          `${SITE}/guide-sitemap.xml`,
        ];
        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="${SITE}/sitemap.xsl"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemaps
  .map(
    (loc) => `  <sitemap>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
  </sitemap>`,
  )
  .join("\n")}
</sitemapindex>`;
        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml; charset=utf-8",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
