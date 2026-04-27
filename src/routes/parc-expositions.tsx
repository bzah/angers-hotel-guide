import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHero } from "@/components/PageHero";
import { HotelCard } from "@/components/HotelCard";
import { FaqSection, type FaqItem } from "@/components/FaqSection";
import { RelatedLinks } from "@/components/RelatedLinks";
import { JsonLd } from "@/components/JsonLd";
import { apartHotels, budgetHotels } from "@/data/hotels";
import heroImg from "@/assets/angers-aerial.jpg";

export const Route = createFileRoute("/parc-expositions")({
  head: () => ({
    meta: [
      { title: "Hôtel Parc des Expositions Angers & Centre Congrès Jean Monnier" },
      {
        name: "description",
        content:
          "Hôtels près du Parc des Expositions d'Angers et du Centre des Congrès Jean Monnier. Adapté aux exposants, congressistes et visiteurs des salons (SIVAL, Made in Angers, etc.).",
      },
      { name: "keywords", content: "hotel parc expo angers, hotel centre congres angers, hotel jean monnier angers, hotel sival angers, hotel salon angers" },
      { property: "og:title", content: "Hôtels Parc Expo & Centre Congrès Jean Monnier — Angers" },
      { property: "og:description", content: "Solutions d'hébergement pour vos salons et congrès à Angers." },
      { property: "og:image", content: heroImg },
      { property: "og:locale", content: "fr_FR" },
    ],
    links: [{ rel: "canonical", href: "https://hotelangers.com/parc-expositions" }],
  }),
  component: Page,
});

const faq: FaqItem[] = [
  {
    q: "Où loger pour visiter le Parc des Expositions d'Angers ?",
    a: "Privilégiez les hôtels du quartier Saint-Serge (à 10 min à pied du Parc Expo) ou ceux du centre-ville (15 min en tramway ligne A). Les hôtels d'affaires 3-4 étoiles près de la gare offrent le meilleur compromis confort/proximité.",
  },
  {
    q: "Quels sont les principaux salons à Angers ?",
    a: "SIVAL (productions végétales, janvier), Made in Angers (mars), Salon de l'Habitat, Salon des Vins de Loire, Salon du Mariage, Foire d'Angers (septembre). Réservez votre hôtel 6 à 10 semaines à l'avance pour ces périodes.",
  },
  {
    q: "Le Centre des Congrès Jean Monnier est-il en centre-ville ?",
    a: "Oui, situé 33 boulevard Carnot, à 5 minutes à pied de la Place du Ralliement et 8 minutes de la gare. Tous les hôtels du centre-ville sont à distance de marche.",
  },
  {
    q: "Y a-t-il des hôtels adaptés aux clientèles d'affaires à Angers ?",
    a: "Oui, plusieurs établissements 3-4 étoiles disposent d'espaces de coworking, de salles de réunion, d'un parking et proposent des facturations entreprise. Petit-déjeuner servi dès 6h30 pour les départs matinaux.",
  },
  {
    q: "Comment se rendre au Parc Expo depuis la gare TGV ?",
    a: "Le tramway ligne A (direction Avrillé) relie la gare Saint-Laud à la station Molière (proche Parc Expo) en 8 minutes. Sinon, taxi ou VTC en 10 minutes pour environ 10€.",
  },
];

function Page() {
  return (
    <div className="min-h-dvh bg-paper text-ink">
      <SiteHeader />
      <PageHero
        eyebrow="Salons & Congrès · Destination Angers"
        title={<>Hébergement professionnel <span className="italic text-ink-muted">à proximité.</span></>}
        intro="Notre sélection d'hôtels proches du Parc des Expositions et du Centre des Congrès Jean Monnier d'Angers — pensée pour les exposants, congressistes et visiteurs des grands rendez-vous angevins (SIVAL, Made in Angers, salons grand public)."
        image={heroImg}
        imageAlt="Vue aérienne d'Angers"
      />

      <section className="container-editorial py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          <div className="lg:col-span-7 space-y-5 text-lg text-ink-muted leading-relaxed">
            <p>
              Le <strong className="text-ink font-medium">Parc des Expositions
              d'Angers</strong> et le <strong className="text-ink font-medium">Centre
              de Congrès Jean Monnier</strong> accueillent chaque année les rendez-vous
              majeurs de la région : SIVAL (salon international des productions
              végétales), Made in Angers, salons de l'habitat, des vins de
              Loire, et de nombreux congrès professionnels.
            </p>
            <p>
              Pour ces événements, nous recommandons soit les hôtels du
              centre-ville (15 min en tramway), soit les établissements de la
              zone Quai Saint-Serge — plus proches du Parc Expo et souvent
              équipés pour la clientèle d'affaires (parking, petit-déjeuner
              tôt, espaces de travail).
            </p>
          </div>
          <aside className="lg:col-span-5 bg-paper-light border border-ink/10 p-8">
            <h3 className="font-serif text-2xl mb-4">Lieux clés</h3>
            <ul className="space-y-3 text-sm text-ink-muted">
              <li className="flex justify-between border-b border-ink/10 pb-2">
                <span>Parc des Expositions</span><span className="text-ink">Quai Saint-Serge</span>
              </li>
              <li className="flex justify-between border-b border-ink/10 pb-2">
                <span>Centre Congrès Jean Monnier</span><span className="text-ink">33 bd Carnot</span>
              </li>
              <li className="flex justify-between border-b border-ink/10 pb-2">
                <span>Gare TGV Saint-Laud</span><span className="text-ink">10 min tram</span>
              </li>
              <li className="flex justify-between">
                <span>Aéroport Angers-Marcé</span><span className="text-ink">25 min</span>
              </li>
            </ul>
          </aside>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16 mb-20">
          {[...apartHotels, ...budgetHotels].slice(0, 6).map((h) => (
            <HotelCard key={h.name} hotel={h} />
          ))}
        </div>

        <div className="border-t border-ink/15 pt-10">
          <h2 className="font-serif text-3xl lg:text-4xl font-light mb-8">Calendrier des grands événements 2026</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 text-ink-muted">
            <div className="border-b border-ink/10 pb-3 flex justify-between"><span><strong className="text-ink">SIVAL</strong> — Productions végétales</span><span className="text-sm">Janvier</span></div>
            <div className="border-b border-ink/10 pb-3 flex justify-between"><span><strong className="text-ink">Made in Angers</strong> — Visites entreprises</span><span className="text-sm">Mars</span></div>
            <div className="border-b border-ink/10 pb-3 flex justify-between"><span><strong className="text-ink">Salon des Vins de Loire</strong></span><span className="text-sm">Février</span></div>
            <div className="border-b border-ink/10 pb-3 flex justify-between"><span><strong className="text-ink">Foire d'Angers</strong></span><span className="text-sm">Septembre</span></div>
            <div className="border-b border-ink/10 pb-3 flex justify-between"><span><strong className="text-ink">Accroche-Cœurs</strong> — Festival arts de rue</span><span className="text-sm">Septembre</span></div>
            <div className="border-b border-ink/10 pb-3 flex justify-between"><span><strong className="text-ink">Salon de l'Habitat</strong></span><span className="text-sm">Octobre</span></div>
          </div>
        </div>
      </section>

      <FaqSection items={faq} />

      <RelatedLinks exclude={["/parc-expositions"]} />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Accueil", item: "https://hotelangers.com/" },
            { "@type": "ListItem", position: 2, name: "Parc Expo & Congrès", item: "https://hotelangers.com/parc-expositions" },
          ],
        }}
      />

      <SiteFooter />
    </div>
  );
}
