import { createFileRoute } from "@tanstack/react-router";

const SITE = "https://hotelangers.com";

const pages = [
  { loc: "/hotels-centre-ville", priority: "0.9", changefreq: "weekly" },
  { loc: "/hotels-pas-cher", priority: "0.9", changefreq: "weekly" },
  { loc: "/appart-hotel", priority: "0.9", changefreq: "weekly" },
  { loc: "/hotels-gare", priority: "0.8", changefreq: "weekly" },
];

export const Route = createFileRoute("/hotel-sitemap.xml")({
  server: {
    handlers: {
      GET: () => {
        const lastmod = new Date().toISOString();
        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="${SITE}/sitemap.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (p) => `  <url>
    <loc>${SITE}${p.loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>`;
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
