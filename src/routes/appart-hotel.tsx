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

      <SeoContent
        title="Appart-Hôtel à Angers : la formule liberté pour long séjour"
        intro={
          <>
            <p>
              L'<strong className="text-ink font-medium">appart-hôtel à Angers</strong> séduit chaque année davantage de voyageurs : familles avec enfants, salariés en mission longue durée, étudiants en stage à l'<em>Université d'Angers</em>, l'<em>ESSCA</em> ou l'<em>ESEO</em>, intermittents et patients de l'<em>ICO Paul-Papin</em>. La formule combine cuisine équipée, espace salon, machine à laver et services hôteliers (réception, ménage, wifi).
            </p>
            <p>
              Notre sélection couvre les principales enseignes (<strong className="text-ink font-medium">Adagio Aparthotel</strong>, <strong className="text-ink font-medium">Appart'City</strong>, <strong className="text-ink font-medium">Citadines</strong>, <strong className="text-ink font-medium">Néméa</strong>, <strong className="text-ink font-medium">All Suites</strong>, <strong className="text-ink font-medium">Séjours & Affaires</strong>) ainsi que des résidences indépendantes plus confidentielles. Tarifs négociés à partir de 95€ la nuit en studio.
            </p>
          </>
        }
        sections={[
          { heading: "Studio, T2 ou T3 : que choisir à Angers ?", body: <p>Studio (20-25 m²) pour 1-2 personnes : 95-130€/nuit. T2 (35-45 m²) pour 2-4 personnes : 130-180€. T3 (55-70 m²) pour familles ou colocations : 180-240€. Au-delà de 7 nuits, comptez -20 à -30%.</p> },
          { heading: "Tarifs mensuels et longs séjours", body: <p>Pour un mois complet : 1 200€ pour un studio, 1 600€ pour un T2, 2 000€ pour un T3 (charges, ménage hebdo, wifi, parking inclus). Facturation entreprise possible avec TVA récupérable. Idéal mission, intérim, formation.</p> },
          { heading: "Appart-hôtel pour familles à Angers", body: <p>T2 et T3 avec lit bébé sur demande, cuisine pour les biberons, espace salon pour les jeux. Plus économique qu'un hôtel pour 4+ personnes et infiniment plus confortable. Plusieurs résidences ont une piscine extérieure.</p> },
          { heading: "Appart-hôtel pour étudiants et stagiaires", body: <p>Proximité Université d'Angers (Belle-Beille), ESSCA, ESEO, ENSAM, IRCOM. Contrats au mois sans caution démesurée, ménage inclus, wifi haut débit, parfait pour stage de 3-6 mois sans avoir à monter un dossier classique de location.</p> },
          { heading: "Appart-hôtel pour voyage d'affaires", body: <p>Espace bureau dédié, wifi pro, parking sécurisé, facturation entreprise, petit-déjeuner buffet en option. À proximité des principales entreprises angevines : Thalès, Bull, Brioche Pasquier, Scania, Cointreau, Eram.</p> },
          { heading: "Quartiers où trouver un appart-hôtel à Angers", body: <p>Centre-ville (Adagio, Citadines), gare Saint-Laud (Appart'City), Saint-Serge (All Suites, près du Parc Expo), zone d'activités Beaucouzé/Saint-Sylvain (Néméa). Choix selon vos déplacements quotidiens.</p> },
          { heading: "Services et équipements standards", body: <p>Cuisine équipée (plaques, micro-ondes, frigo, vaisselle), wifi, télévision, salle de bain privative, linge de lit fourni. Options : ménage quotidien, petit-déjeuner, parking, lave-vaisselle, four (T2+).</p> },
          { heading: "Annulation et flexibilité", body: <p>La plupart des appart-hôtels d'Angers proposent l'annulation gratuite jusqu'à 48h avant. Pour les longs séjours et tarifs mensuels, préavis d'un mois standard. Caution typique : 200-300€ par CB pré-autorisée.</p> },
        ]}
        keywords={[
          "Appart hotel Angers",
          "Appart'hotel Angers",
          "Aparthotel Angers",
          "Residence hoteliere Angers",
          "Appartement meublé Angers court séjour",
          "Studio meublé Angers",
          "Adagio Angers",
          "Appart City Angers",
          "Citadines Angers",
          "Appart hotel Angers gare",
          "Appart hotel Angers centre",
          "Appart hotel Angers mois",
          "Logement temporaire Angers",
          "Appart hotel Angers stage",
        ]}
      />

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
