import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHero } from "@/components/PageHero";
import { HotelCard } from "@/components/HotelCard";
import { FaqSection, type FaqItem } from "@/components/FaqSection";
import { RelatedLinks } from "@/components/RelatedLinks";
import { JsonLd } from "@/components/JsonLd";
import { SeoContent } from "@/components/SeoContent";
import { apartHotels } from "@/data/hotels";
import heroImg from "@/assets/hotel-1.jpg";

export const Route = createFileRoute("/appart-hotel")({
  head: () => ({
    meta: [
      { title: "Appart Hôtel Angers — Top studios & T2 meublés (2026)" },
      {
        name: "description",
        content:
          "Les meilleurs appart'hôtels d'Angers : studios, T2 et T3 meublés avec cuisine équipée. Idéal pour familles, longs séjours, missions pro et stages. Dès 95€/nuit.",
      },
      { name: "keywords", content: "appart hotel angers, appart'hotel angers, appartement meublé angers, residence hoteliere angers, studio angers court séjour" },
      { property: "og:title", content: "Appart Hôtel Angers — Studios & T2 meublés" },
      { property: "og:description", content: "Appart'hôtels à Angers avec cuisine équipée pour courts et longs séjours." },
      { property: "og:image", content: heroImg },
      { property: "og:locale", content: "fr_FR" },
    ],
    links: [{ rel: "canonical", href: "https://hotelangers.com/appart-hotel" }],
  }),
  component: Page,
});

const faq: FaqItem[] = [
  {
    q: "Quelle est la différence entre un hôtel et un appart'hôtel ?",
    a: "L'appart'hôtel combine l'autonomie d'un appartement (cuisine équipée, salon, machine à laver) avec les services d'un hôtel (réception, ménage, wifi, petit-déjeuner). Plus économique pour 4+ nuits ou en famille.",
  },
  {
    q: "Quel est le prix d'un appart'hôtel à Angers ?",
    a: "Comptez 95-130€/nuit pour un studio, 130-180€ pour un T2 et 180-240€ pour un T3 ou un appartement familial. Les tarifs baissent significativement à partir de 7 nuits (jusqu'à -30%).",
  },
  {
    q: "Les appart'hôtels d'Angers acceptent-ils les longs séjours ?",
    a: "Oui, la plupart proposent des tarifs dégressifs dès 7 nuits et des contrats mensuels pour les missions professionnelles, stages, formations ou intérim. Comptez 1 200 à 2 000€/mois selon la taille.",
  },
  {
    q: "Y a-t-il une cuisine équipée dans tous les appart'hôtels ?",
    a: "Oui : plaques, micro-ondes, frigo, vaisselle et ustensiles sont systématiquement fournis. Les T2 et plus disposent généralement d'un vrai four et d'un lave-vaisselle.",
  },
  {
    q: "Les appart'hôtels d'Angers sont-ils adaptés aux familles ?",
    a: "Très adaptés : lit bébé sur demande, cuisine pour préparer les repas, espace salon séparé, et souvent un parking. Plusieurs adresses proposent des T3 dormant 4 à 6 personnes.",
  },
];

function Page() {
  return (
    <div className="min-h-dvh bg-paper text-ink">
      <SiteHeader />
      <PageHero
        eyebrow="Long séjour · Appart Hôtel Angers"
        title={<>L'art de vivre <span className="italic text-ink-muted">comme chez soi.</span></>}
        intro="Notre sélection d'appart'hôtels à Angers : studios, T2 et T3 entièrement meublés avec cuisine équipée. La solution idéale pour familles, déplacements professionnels, stages et longs séjours dans la cité angevine."
        image={heroImg}
        imageAlt="Salon élégant d'un appart-hôtel à Angers"
      />

      <section className="container-editorial py-20">
        <div className="max-w-3xl space-y-5 text-lg text-ink-muted leading-relaxed mb-16">
          <p>
            L'<strong className="text-ink font-medium">appart'hôtel à Angers</strong> est
            la formule qui monte. Plus spacieux qu'une chambre d'hôtel, plus
            flexible qu'une location, il combine l'autonomie d'un appartement
            (cuisine, salon, machine à laver) et les services d'un établissement
            hôtelier (réception, ménage, wifi).
          </p>
          <p>
            Particulièrement adapté aux familles, aux groupes d'amis, aux salariés
            en mission longue durée et aux étudiants en stage à Angers. Comptez
            entre 95€ et 180€ la nuit selon la taille et la localisation, avec
            des remises significatives au-delà de 7 nuits.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16 mb-20">
          {apartHotels.map((h) => (
            <HotelCard key={h.name} hotel={h} />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="border-t border-ink/15 pt-6">
            <span className="eyebrow">Pour les familles</span>
            <h3 className="font-serif text-2xl mt-3 mb-3">T2 & T3 spacieux</h3>
            <p className="text-ink-muted leading-relaxed">Espaces séparés, lit bébé sur demande, cuisine pour les repas du soir. Plus économique qu'un hôtel pour 4+ personnes.</p>
          </div>
          <div className="border-t border-ink/15 pt-6">
            <span className="eyebrow">Pour les pros</span>
            <h3 className="font-serif text-2xl mt-3 mb-3">Mission longue durée</h3>
            <p className="text-ink-muted leading-relaxed">Tarifs mensuels, facturation entreprise, parking, espace bureau. Idéal pour missions, intérim et formations.</p>
          </div>
          <div className="border-t border-ink/15 pt-6">
            <span className="eyebrow">Pour les étudiants</span>
            <h3 className="font-serif text-2xl mt-3 mb-3">Stage & semestre</h3>
            <p className="text-ink-muted leading-relaxed">Studios meublés à proximité de l'Université d'Angers, de l'ESSCA et de l'ESEO. Contrats au mois disponibles.</p>
          </div>
        </div>
      </section>

      <FaqSection items={faq} />

      <RelatedLinks exclude={["/appart-hotel"]} />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Accueil", item: "https://hotelangers.com/" },
            { "@type": "ListItem", position: 2, name: "Appart Hôtel", item: "https://hotelangers.com/appart-hotel" },
          ],
        }}
      />

      <SiteFooter />
    </div>
  );
}
