import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHero } from "@/components/PageHero";
import { Activities } from "@/components/Activities";
import { FaqSection, type FaqItem } from "@/components/FaqSection";
import { RelatedLinks } from "@/components/RelatedLinks";
import { JsonLd } from "@/components/JsonLd";
import heroImg from "@/assets/activities.jpg";

const faq: FaqItem[] = [
  {
    q: "Que faire à Angers en 1 journée ?",
    a: "Matin : visite du Château d'Angers et de la Tenture de l'Apocalypse (2h). Midi : déjeuner aux Halles ou Place du Ralliement. Après-midi : cathédrale Saint-Maurice puis flânerie dans la Doutre. Fin d'après-midi : musée Jean Lurçat. Soir : dîner sur les bords de Maine.",
  },
  {
    q: "Que faire à Angers en famille ?",
    a: "Le Château d'Angers (parcours enfants), le parc de Pignerolle, Terra Botanica (parc à thème végétal), une croisière sur la Maine ou la Loire, le Bioparc de Doué-la-Fontaine à 1h, et l'accrobranche de la Forêt de Brissac.",
  },
  {
    q: "Que faire à Angers quand il pleut ?",
    a: "Musée des Beaux-Arts, Galerie David d'Angers, musée Pincé, Collégiale Saint-Martin, Tenture de l'Apocalypse au Château (intérieur), musée Jean Lurçat à la Doutre, ou dégustation de vins d'Anjou dans une cave du centre.",
  },
  {
    q: "Quelle excursion faire depuis Angers ?",
    a: "Châteaux du Val de Loire (Saumur, Brissac, Le Plessis-Bourré), vignobles d'Anjou et dégustation, Abbaye de Fontevraud, Doué-la-Fontaine et son bioparc, ou journée vélo le long de la Loire à Vélo.",
  },
  {
    q: "Comment réserver les activités à Angers ?",
    a: "Nous recommandons GetYourGuide pour la réservation en ligne : annulation gratuite jusqu'à 24h avant, billets sur smartphone, guides francophones. Les liens de notre page redirigent directement vers les activités vérifiées.",
  },
];


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

      <FaqSection items={faq} />

      <RelatedLinks exclude={["/que-faire"]} />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Accueil", item: "https://hotelangers.com/" },
            { "@type": "ListItem", position: 2, name: "Que faire à Angers", item: "https://hotelangers.com/que-faire" },
          ],
        }}
      />

      <SiteFooter />
    </div>
  );
}
