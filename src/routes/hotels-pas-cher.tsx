import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHero } from "@/components/PageHero";
import { HotelCard } from "@/components/HotelCard";
import { FaqSection, type FaqItem } from "@/components/FaqSection";
import { RelatedLinks } from "@/components/RelatedLinks";
import { JsonLd } from "@/components/JsonLd";
import { budgetHotels } from "@/data/hotels";
import heroImg from "@/assets/doutre.jpg";

export const Route = createFileRoute("/hotels-pas-cher")({
  head: () => ({
    meta: [
      { title: "Hôtel Angers Pas Cher — Top bons plans dès 60€ (2026)" },
      {
        name: "description",
        content:
          "Hôtel pas cher à Angers : sélection de bonnes adresses dès 60€/nuit, propres, bien situées et notées 8/10. Comparatif honnête par notre rédaction angevine.",
      },
      { name: "keywords", content: "hotel angers pas cher, hotel pas cher angers, hotel angers low cost, hotel angers petit budget, hotel angers économique" },
      { property: "og:title", content: "Hôtel Angers Pas Cher — Bons plans dès 60€" },
      { property: "og:description", content: "Les meilleures adresses pas chères d'Angers, vérifiées et recommandées." },
      { property: "og:image", content: heroImg },
      { property: "og:locale", content: "fr_FR" },
    ],
    links: [{ rel: "canonical", href: "https://hotelangers.com/hotels-pas-cher" }],
  }),
  component: Page,
});

const faq: FaqItem[] = [
  {
    q: "Quel est le prix moyen d'un hôtel pas cher à Angers ?",
    a: "Comptez entre 55 et 85€ la nuit pour une chambre double dans un hôtel économique propre et bien situé à Angers. Les Ibis Budget, B&B Hôtels et Première Classe se positionnent autour de 60-75€ en semaine.",
  },
  {
    q: "Où trouver un hôtel pas cher à Angers ?",
    a: "Les meilleurs rapports qualité/prix se concentrent autour de la gare Saint-Laud, dans la zone Saint-Serge (près du Parc Expo) et le long du boulevard du Roi-René. À 10 minutes du centre en tramway, vous économisez 30 à 50% sur la nuit.",
  },
  {
    q: "Quand réserver pour avoir un hôtel pas cher à Angers ?",
    a: "Idéalement 4 à 8 semaines à l'avance. Évitez les week-ends de mai-juin (Accroche-Cœurs, Foire d'Angers, mariages), septembre (rentrée) et les périodes de salons (SIVAL en janvier). Les meilleurs tarifs se trouvent en février, mars et novembre.",
  },
  {
    q: "Existe-t-il des auberges de jeunesse à Angers ?",
    a: "Oui, le Centre International d'Accueil Lac de Maine propose des dortoirs et chambres privées dès 25€/nuit. Idéal pour les voyageurs solos et petits budgets, à 15 minutes du centre par bus.",
  },
  {
    q: "Petit-déjeuner inclus dans les hôtels pas chers ?",
    a: "Rarement. Comptez 8 à 12€ supplémentaires pour le petit-déjeuner buffet. Astuce : les boulangeries autour de la Place du Ralliement proposent un excellent petit-déjeuner à moins de 5€.",
  },
];

function Page() {
  return (
    <div className="min-h-dvh bg-paper text-ink">
      <SiteHeader />
      <PageHero
        eyebrow="Petits prix · Hôtel Angers Pas Cher"
        title={<>Bien dormir à Angers <span className="italic text-ink-muted">sans se ruiner.</span></>}
        intro="Notre sélection 2026 d'hôtels pas chers à Angers : adresses propres, bien tenues et bien situées dès 60€ la nuit. Le bon plan, sans compromis sur le confort ni la sécurité."
        image={heroImg}
        imageAlt="Rue pavée du quartier de la Doutre à Angers"
      />

      <section className="container-editorial py-20">
        <div className="max-w-3xl space-y-5 text-lg text-ink-muted leading-relaxed mb-16">
          <p>
            Trouver un <strong className="text-ink font-medium">hôtel pas cher à Angers</strong> est
            tout à fait possible, même en haute saison. La ville offre une bonne
            densité d'hôtels deux et trois étoiles à des tarifs raisonnables,
            notamment autour de la gare Saint-Laud et dans les quartiers résidentiels
            à 10 minutes en tramway du centre.
          </p>
          <p>
            Notre conseil : réserver tôt pour les week-ends de mai-juin (saison
            des Accroche-Cœurs) et privilégier les adresses près du tramway plutôt
            que celles éloignées du centre — l'écart de prix ne compense pas
            toujours les frais de transport.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16 mb-20">
          {budgetHotels.map((h) => (
            <HotelCard key={h.name} hotel={h} />
          ))}
        </div>

        <div className="bg-paper-light border border-ink/10 p-10 lg:p-14">
          <h2 className="font-serif text-3xl lg:text-4xl font-light mb-6">5 astuces pour payer moins cher</h2>
          <ol className="space-y-4 text-ink-muted leading-relaxed list-decimal pl-6">
            <li><strong className="text-ink font-medium">Voyagez en milieu de semaine.</strong> Mardi et mercredi sont jusqu'à 40% moins chers que samedi.</li>
            <li><strong className="text-ink font-medium">Évitez les périodes de salons.</strong> SIVAL en janvier, Made in Angers en mars : les prix doublent.</li>
            <li><strong className="text-ink font-medium">Réservez 30 jours à l'avance.</strong> La plupart des hôtels appliquent un tarif "early bird" remisé.</li>
            <li><strong className="text-ink font-medium">Acceptez les chambres sans fenêtre extérieure.</strong> Souvent 15-20€ de moins, parfait pour un séjour court.</li>
            <li><strong className="text-ink font-medium">Logez à 1 station de tram du centre.</strong> Saint-Serge, Boulevard Foch, La Roseraie : économies garanties.</li>
          </ol>
        </div>
      </section>

      <FaqSection items={faq} />

      <RelatedLinks exclude={["/hotels-pas-cher"]} />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Accueil", item: "https://hotelangers.com/" },
            { "@type": "ListItem", position: 2, name: "Hôtels Pas Cher", item: "https://hotelangers.com/hotels-pas-cher" },
          ],
        }}
      />

      <SiteFooter />
    </div>
  );
}
