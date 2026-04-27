import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHero } from "@/components/PageHero";
import { HotelCard } from "@/components/HotelCard";
import { FaqSection, type FaqItem } from "@/components/FaqSection";
import { RelatedLinks } from "@/components/RelatedLinks";
import { JsonLd } from "@/components/JsonLd";
import { SeoContent } from "@/components/SeoContent";
import { featuredHotels } from "@/data/hotels";
import heroImg from "@/assets/angers-aerial.jpg";

export const Route = createFileRoute("/hotels-centre-ville")({
  head: () => ({
    meta: [
      { title: "Hôtel Angers Centre Ville — Top 10 des meilleures adresses 2026" },
      {
        name: "description",
        content:
          "Le guide 2026 des meilleurs hôtels au centre-ville d'Angers : à pied du Château, de la cathédrale Saint-Maurice, de la Place du Ralliement et du tramway. Comparatif, tarifs, conseils.",
      },
      { name: "keywords", content: "hotel angers centre ville, hotel angers centre, hotel place du ralliement, hotel chateau angers, hotel angers 49000" },
      { property: "og:title", content: "Hôtel Angers Centre Ville — Le guide éditorial 2026" },
      { property: "og:description", content: "Hôtels au cœur historique d'Angers, à deux pas du Château et de la cathédrale." },
      { property: "og:image", content: heroImg },
      { property: "og:locale", content: "fr_FR" },
    ],
    links: [{ rel: "canonical", href: "https://hotelangers.com/hotels-centre-ville" }],
  }),
  component: Page,
});

const faq: FaqItem[] = [
  {
    q: "Quel est le meilleur quartier où loger à Angers ?",
    a: "Le centre-ville historique, autour de la Place du Ralliement et entre la cathédrale Saint-Maurice et le Château, reste le meilleur choix. Tout est accessible à pied : monuments, restaurants, théâtre, musées, et le tramway qui relie la gare TGV en 8 minutes.",
  },
  {
    q: "Combien coûte un hôtel au centre-ville d'Angers ?",
    a: "Comptez 75 à 110€ la nuit pour un 2 étoiles correct, 110 à 170€ pour un 3 étoiles bien situé et 180 à 280€ pour un 4 étoiles ou un boutique-hôtel de caractère. Les tarifs grimpent lors des Accroche-Cœurs (septembre) et des grands salons.",
  },
  {
    q: "Peut-on se garer en centre-ville d'Angers ?",
    a: "Oui, plusieurs parkings souterrains sont disponibles : Ralliement, Mail, Saint-Laud, Foch-Haras. La plupart des hôtels du centre proposent un partenariat à tarif réduit (15 à 20€/24h). L'idéal reste de venir en TGV et de se déplacer en tramway.",
  },
  {
    q: "Quels hôtels sont près du Château d'Angers ?",
    a: "Plusieurs établissements de notre sélection se trouvent à moins de 400 mètres du Château : ils permettent de visiter la Tenture de l'Apocalypse en quelques minutes à pied et de profiter du quartier de la cathédrale en soirée.",
  },
  {
    q: "Les hôtels du centre sont-ils proches du tramway ?",
    a: "Oui, la ligne A traverse le centre-ville (stations Ralliement, Foch-Maison Bleue, Saint-Laud). Aucune adresse de notre guide n'est à plus de 5 minutes à pied d'un arrêt — pratique pour rejoindre la gare ou le Parc des Expositions.",
  },
];

function Page() {
  return (
    <div className="min-h-dvh bg-paper text-ink">
      <SiteHeader />
      <PageHero
        eyebrow="Hyper-centre · Hôtel Angers Centre Ville"
        title={<>Au cœur historique <span className="italic text-ink-muted">d'Angers.</span></>}
        intro="Notre sélection 2026 des meilleurs hôtels au centre-ville d'Angers : à quelques minutes à pied du Château, de la cathédrale Saint-Maurice, du tramway et des meilleurs restaurants angevins."
        image={heroImg}
        imageAlt="Vue aérienne du centre-ville d'Angers"
      />

      <section className="container-editorial py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          <div className="lg:col-span-7 space-y-5 text-lg text-ink-muted leading-relaxed">
            <p>
              Loger en plein <strong className="text-ink font-medium">centre-ville d'Angers</strong> reste
              la meilleure manière de profiter de la ville. Tout se fait à pied : le
              Château et sa Tenture de l'Apocalypse, la cathédrale Saint-Maurice, la
              Place du Ralliement, les Halles centrales et les ruelles du vieil Angers.
            </p>
            <p>
              Les hôtels que nous avons retenus se situent dans un rayon de 600
              mètres autour de la Place du Ralliement et bénéficient tous d'un accès
              direct au tramway — pratique pour rejoindre la gare TGV Saint-Laud,
              le Parc des Expositions ou le quartier de la Doutre, sur la rive droite
              de la Maine.
            </p>
            <p>
              Notre rédaction angevine a visité chaque établissement, vérifié la
              propreté des chambres, l'insonorisation et la qualité du
              petit-déjeuner. Les liens de réservation que nous proposons sont
              transparents : nous percevons une petite commission, sans aucun impact
              sur le prix que vous payez.
            </p>
          </div>
          <aside className="lg:col-span-5 bg-paper-light border border-ink/10 p-8">
            <h3 className="font-serif text-2xl mb-4">L'essentiel du centre</h3>
            <ul className="space-y-3 text-sm text-ink-muted">
              <li className="flex justify-between border-b border-ink/10 pb-2"><span>Code postal</span><span className="text-ink">49000</span></li>
              <li className="flex justify-between border-b border-ink/10 pb-2"><span>Tramway</span><span className="text-ink">Ligne A & B</span></li>
              <li className="flex justify-between border-b border-ink/10 pb-2"><span>Château d'Angers</span><span className="text-ink">5 min à pied</span></li>
              <li className="flex justify-between border-b border-ink/10 pb-2"><span>Gare TGV</span><span className="text-ink">8 min en tram</span></li>
              <li className="flex justify-between"><span>Tarif moyen</span><span className="text-ink">110 – 170€</span></li>
            </ul>
          </aside>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
          {featuredHotels.map((h) => (
            <HotelCard key={h.name} hotel={h} />
          ))}
        </div>
      </section>

      <section className="container-editorial pb-20">
        <h2 className="font-serif text-3xl lg:text-4xl font-light mb-8">Les incontournables à deux pas de votre hôtel</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-ink-muted leading-relaxed">
          <div>
            <h3 className="font-serif text-xl text-ink mb-3">Château d'Angers</h3>
            <p>Forteresse du XIIIe siècle aux 17 tours emblématiques. Abrite la Tenture de l'Apocalypse, plus grand ensemble de tapisseries médiévales conservé au monde.</p>
          </div>
          <div>
            <h3 className="font-serif text-xl text-ink mb-3">Cathédrale Saint-Maurice</h3>
            <p>Joyau gothique angevin, ses vitraux du XIIe siècle comptent parmi les plus anciens de France. Concerts d'orgue les dimanches d'été.</p>
          </div>
          <div>
            <h3 className="font-serif text-xl text-ink mb-3">Place du Ralliement</h3>
            <p>Cœur battant d'Angers, dominée par le Grand Théâtre. Cafés en terrasse, boutiques, et accès direct au tramway.</p>
          </div>
        </div>
      </section>

      <FaqSection items={faq} />

      <RelatedLinks exclude={["/hotels-centre-ville"]} />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Accueil", item: "https://hotelangers.com/" },
            { "@type": "ListItem", position: 2, name: "Hôtels Centre-Ville", item: "https://hotelangers.com/hotels-centre-ville" },
          ],
        }}
      />

      <SiteFooter />
    </div>
  );
}
