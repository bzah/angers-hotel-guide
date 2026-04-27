import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHero } from "@/components/PageHero";
import { Activities } from "@/components/Activities";
import heroImg from "@/assets/activities.jpg";

export const Route = createFileRoute("/que-faire")({
  head: () => ({
    meta: [
      { title: "Que faire à Angers — Activités, visites et excursions" },
      {
        name: "description",
        content:
          "Que faire à Angers et en Anjou ? Château d'Angers, Tenture de l'Apocalypse, croisières sur la Loire, dégustation de vins, châteaux du Val de Loire. Réservez vos billets.",
      },
      { property: "og:title", content: "Que faire à Angers — Le guide complet des activités" },
      { property: "og:description", content: "Activités et expériences à Angers et en Val de Loire, réservables en ligne." },
      { property: "og:image", content: heroImg },
      { property: "og:locale", content: "fr_FR" },
    ],
    links: [{ rel: "canonical", href: "https://hotelangers.com/que-faire" }],
  }),
  component: Page,
});

function Page() {
  return (
    <div className="min-h-dvh bg-paper text-ink">
      <SiteHeader />
      <PageHero
        eyebrow="Activités & Expériences"
        title={<>Que faire <span className="italic text-ink-muted">à Angers ?</span></>}
        intro="De la forteresse médiévale aux vignobles d'Anjou, en passant par les croisières sur la Maine et les châteaux de la Loire — voici notre sélection d'expériences à vivre absolument lors de votre séjour à Angers."
        image={heroImg}
        imageAlt="Vignoble d'Anjou au coucher du soleil"
      />

      <Activities />

      <SiteFooter />
    </div>
  );
}
