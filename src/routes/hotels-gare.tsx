import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHero } from "@/components/PageHero";
import { HotelCard } from "@/components/HotelCard";
import { FaqSection, type FaqItem } from "@/components/FaqSection";
import { RelatedLinks } from "@/components/RelatedLinks";
import { JsonLd } from "@/components/JsonLd";
import { SeoContent } from "@/components/SeoContent";
import { AffiliateCta } from "@/components/AffiliateCta";
import { budgetHotels, apartHotels } from "@/data/hotels";
import heroImg from "@/assets/hotel-3.jpg";

export const Route = createFileRoute("/hotels-gare")({
  head: () => ({
    meta: [
      { title: "Hôtel Angers Gare — Près de la gare TGV Saint-Laud (2026)" },
      {
        name: "description",
        content:
          "Hôtels près de la gare d'Angers Saint-Laud : à moins de 10 minutes à pied. Pratique pour TGV, déplacements professionnels et correspondances. Tarifs dès 65€.",
      },
      { name: "keywords", content: "hotel angers gare, hotel gare saint laud angers, hotel pres gare angers, hotel angers tgv" },
      { property: "og:title", content: "Hôtel Angers Gare — Près de la gare Saint-Laud" },
      { property: "og:description", content: "Hôtels à 10 min à pied de la gare TGV d'Angers Saint-Laud." },
      { property: "og:image", content: heroImg },
      { property: "og:locale", content: "fr_FR" },
    ],
    links: [{ rel: "canonical", href: "https://hotelangers.com/hotels-gare" }],
  }),
  component: Page,
});

const faq: FaqItem[] = [
  {
    q: "Quel est le meilleur hôtel près de la gare d'Angers ?",
    a: "Plusieurs adresses se trouvent à moins de 5 minutes à pied de la gare Saint-Laud, notamment dans le quartier Saint-Laud / Foch. Notre comparatif présente 3 à 6 hôtels selon votre budget, du 2★ économique au 4★ d'affaires.",
  },
  {
    q: "À quelle distance la gare est-elle du centre-ville ?",
    a: "La gare d'Angers Saint-Laud est à 12-15 minutes à pied du Château et de la Place du Ralliement, ou 5 minutes en tramway (ligne A, direction Avrillé). Le centre est donc parfaitement accessible depuis les hôtels de la gare.",
  },
  {
    q: "Y a-t-il des hôtels avec parking près de la gare ?",
    a: "Oui, plusieurs hôtels disposent d'un parking privé (15 à 18€/24h) ou de partenariats avec les parkings publics Saint-Laud et Foch-Haras. Pratique pour combiner train et voiture.",
  },
  {
    q: "Quels TGV partent de la gare d'Angers Saint-Laud ?",
    a: "Liaisons directes : Paris-Montparnasse (1h30, environ 1 train/heure), Nantes (40 min), Bordeaux (3h), Lyon (4h), Lille, Strasbourg et Marseille. Des Ouigo desservent également Paris à tarif réduit.",
  },
  {
    q: "Les hôtels près de la gare proposent-ils un check-in tardif ?",
    a: "La plupart des hôtels d'affaires acceptent les arrivées jusqu'à minuit, certains 24h/24 (Ibis, Mercure). Indiquez votre heure d'arrivée à la réservation pour éviter les mauvaises surprises.",
  },
];

function Page() {
  return (
    <div className="min-h-dvh bg-paper text-ink">
      <SiteHeader />
      <PageHero
        eyebrow="Gare Saint-Laud · Hôtel Angers Gare"
        title={<>Pratique, à deux pas <span className="italic text-ink-muted">du quai.</span></>}
        intro="Notre sélection d'hôtels près de la gare d'Angers Saint-Laud, à moins de 10 minutes à pied. Idéal pour voyageurs TGV, déplacements professionnels ou correspondances tardives."
        image={heroImg}
        imageAlt="Suite d'hôtel à Angers avec vue sur la cathédrale"
      />

      <section className="container-editorial py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-7 space-y-5 text-lg text-ink-muted leading-relaxed">
            <p>
              La <strong className="text-ink font-medium">gare d'Angers Saint-Laud</strong> est
              le point d'arrivée principal de la ville : TGV directs depuis Paris
              (1h30), Nantes (40 min) et Bordeaux (3h). Loger près de la gare, c'est
              gagner du temps et accéder facilement au reste de la ville par
              tramway (ligne A, station "Gare Saint-Laud").
            </p>
            <p>
              Bonne nouvelle : la gare est à seulement 15 minutes à pied du Château
              d'Angers et du centre historique. Les hôtels que nous recommandons
              cumulent donc proximité TGV et accessibilité touristique — un atout
              majeur pour les courts séjours et les déplacements professionnels.
            </p>
          </div>
          <aside className="lg:col-span-5 bg-paper-light border border-ink/10 p-8">
            <h3 className="font-serif text-2xl mb-4">Gare Saint-Laud en bref</h3>
            <ul className="space-y-3 text-sm text-ink-muted">
              <li className="flex justify-between border-b border-ink/10 pb-2"><span>Adresse</span><span className="text-ink">Place de la Gare</span></li>
              <li className="flex justify-between border-b border-ink/10 pb-2"><span>Paris-Montparnasse</span><span className="text-ink">1h30 TGV</span></li>
              <li className="flex justify-between border-b border-ink/10 pb-2"><span>Nantes</span><span className="text-ink">40 min</span></li>
              <li className="flex justify-between border-b border-ink/10 pb-2"><span>Tramway</span><span className="text-ink">Ligne A</span></li>
              <li className="flex justify-between"><span>Centre à pied</span><span className="text-ink">12 min</span></li>
            </ul>
          </aside>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
          {[...budgetHotels, ...apartHotels].slice(0, 6).map((h) => (
            <HotelCard key={h.name} hotel={h} />
          ))}
        </div>
      </section>

      <SeoContent
        title="Hôtel près de la gare d'Angers Saint-Laud"
        intro={
          <>
            <p>
              La <strong className="text-ink font-medium">gare d'Angers Saint-Laud</strong> est l'une des plus fréquentées du Grand Ouest, avec plus de 4 millions de voyageurs par an. Située à 12 minutes à pied du centre historique et à 5 minutes en tramway de la Place du Ralliement, elle dessert Paris-Montparnasse en 1h30 par TGV InOui et Ouigo, ainsi que Nantes, Rennes, Le Mans, Tours, Lyon et Marseille.
            </p>
            <p>
              Loger à proximité de la gare est idéal pour les <strong className="text-ink font-medium">voyageurs d'affaires</strong>, les correspondances tardives, les départs matinaux et les courts séjours TGV. Notre sélection couvre tous les budgets, du low-cost à 65€ aux 4★ comme le Mercure Centre Gare.
            </p>
          </>
        }
        sections={[
          { heading: "Hôtels à moins de 5 minutes à pied de la gare", body: <p>Mercure Angers Centre Gare, Ibis Angers Centre Gare, Best Western Anjou, Hôtel de France, Première Classe Saint-Laud. Tous accessibles bagages roulants, sans traverser de grands axes.</p> },
          { heading: "Pourquoi loger près de la gare Saint-Laud", body: <p>Départs TGV à 6h sans stress, retours tardifs sécurisés (quartier bien éclairé et fréquenté), accès direct au tramway A vers le centre, parkings souterrains à proximité (Saint-Laud P1 et P2).</p> },
          { heading: "Restaurants autour de la gare", body: <p>L'Atypik, La Table de Saint-Laud, Le Bouchon Lyonnais, Le Vintage : excellentes adresses ouvertes en service du soir tardif (jusqu'à 23h), idéales après une arrivée TGV.</p> },
          { heading: "Liaisons TGV depuis Angers Saint-Laud", body: <p>Paris-Montparnasse 1h30 (1 train/heure), Nantes 40 min, Le Mans 45 min, Rennes 1h15, Bordeaux 4h, Lyon 4h, Marseille 5h, Strasbourg 5h30 via Massy.</p> },
          { heading: "Parking pour clients de la gare", body: <p>Effia Saint-Laud P1 et P2 : 14€/24h, 70€/semaine. Plusieurs hôtels du quartier offrent un partenariat à 12€/24h. Indigo La Roseraie pour les longs séjours.</p> },
          { heading: "Tramway depuis la gare", body: <p>Station Gare Saint-Laud sur la ligne A : 8 min jusqu'au Ralliement (centre), 12 min jusqu'à Foch-Maison Bleue, 25 min jusqu'à Avrillé. Ticket 1,60€, pass 24h à 4,30€.</p> },
        ]}
        keywords={[
          "Hotel gare Angers",
          "Hotel Angers Saint-Laud",
          "Hotel près gare Angers",
          "Hotel Angers TGV",
          "Mercure Angers Centre Gare",
          "Ibis Angers Centre Gare",
          "Best Western Anjou Angers",
          "Hotel Angers business",
          "Hotel Angers court séjour TGV",
          "Hotel Angers correspondance",
        ]}
      />

      <FaqSection items={faq} />
      <AffiliateCta
        title="Arrivée TGV ? Démarrez votre séjour avec une activité"
        description="À 8 minutes en tram du centre, vous pouvez enchaîner directement sur une visite guidée, un atelier Cointreau ou une croisière sur la Loire. Réservation immédiate, billets sur smartphone."
        ctaLabel="Programmer mon séjour"
      />



      <RelatedLinks exclude={["/hotels-gare"]} />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Accueil", item: "https://hotelangers.com/" },
            { "@type": "ListItem", position: 2, name: "Hôtels Gare", item: "https://hotelangers.com/hotels-gare" },
          ],
        }}
      />

      <SiteFooter />
    </div>
  );
}
