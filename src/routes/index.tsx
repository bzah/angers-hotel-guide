import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { HotelCard } from "@/components/HotelCard";
import { Activities } from "@/components/Activities";
import { FaqSection, type FaqItem } from "@/components/FaqSection";
import { RelatedLinks } from "@/components/RelatedLinks";
import { JsonLd } from "@/components/JsonLd";
import { SeoContent } from "@/components/SeoContent";
import { featuredHotels } from "@/data/hotels";
import { GYG_ANGERS_URL } from "@/lib/affiliate";
import heroImg from "@/assets/hero-chateau.jpg";
import aerialImg from "@/assets/angers-aerial.jpg";

const homeFaq: FaqItem[] = [
  {
    q: "Quel est le meilleur hôtel à Angers ?",
    a: "Cela dépend de votre budget et de vos priorités. Pour le charme et le centre historique, privilégiez un boutique-hôtel près du Château ou de la cathédrale. Pour le confort moderne, les 4★ de la Place du Ralliement. Pour les petits budgets, les hôtels près de la gare Saint-Laud offrent un excellent rapport qualité/prix dès 65€.",
  },
  {
    q: "Combien de jours faut-il pour visiter Angers ?",
    a: "Deux jours suffisent pour les incontournables : Château et Tenture de l'Apocalypse, cathédrale Saint-Maurice, quartier de la Doutre, musée Jean Lurçat. Comptez 3-4 jours pour étendre l'exploration aux châteaux du Val de Loire et aux vignobles d'Anjou.",
  },
  {
    q: "Quand venir à Angers ?",
    a: "La meilleure période s'étend de mai à octobre. Mai-juin pour la douceur et la floraison, septembre pour les Accroche-Cœurs et les vendanges, octobre pour les couleurs d'automne sur la Loire. Évitez août (chaleur, certains restaurants fermés).",
  },
  {
    q: "Comment aller à Angers depuis Paris ?",
    a: "TGV direct depuis Paris-Montparnasse en 1h30 (environ 1 train par heure, dès 25€ avec Ouigo). En voiture, A11 puis A87, comptez 3h avec péages.",
  },
  {
    q: "Quel quartier choisir pour dormir à Angers ?",
    a: "Le centre-ville historique pour visiter à pied, la Doutre pour le charme médiéval, le quartier de la gare pour les TGV et les pros, Saint-Serge pour les salons et le Parc Expo. Notre guide détaille chaque option.",
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hôtel Angers — Guide des meilleurs hôtels à Angers (Val de Loire)" },
      {
        name: "description",
        content:
          "Sélection éditoriale des meilleurs hôtels d'Angers : centre-ville, pas chers, appart'hôtels, près de la gare. Réservez au meilleur prix avec notre guide indépendant du Val de Loire.",
      },
      { property: "og:title", content: "Hôtel Angers — Le guide des plus beaux hôtels d'Angers" },
      { property: "og:description", content: "Notre sélection éditoriale d'hôtels à Angers, du palais historique au pied-à-terre confidentiel." },
      { property: "og:image", content: heroImg },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "fr_FR" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: heroImg },
      { httpEquiv: "content-language", content: "fr" },
    ],
    links: [{ rel: "canonical", href: "https://hotelangers.com/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-dvh bg-paper text-ink">
      <SiteHeader />

      {/* HERO */}
      <section className="grid grid-cols-1 lg:grid-cols-12 lg:min-h-[85vh] border-b border-ink/10">
        <div className="lg:col-span-7 flex flex-col justify-center px-5 sm:px-8 lg:px-20 py-16 lg:py-20 order-2 lg:order-1">
          <div className="mb-6 lg:mb-8 flex items-center gap-4">
            <span className="rule" />
            <span className="eyebrow">Val de Loire, France</span>
          </div>
          <h1 className="text-[2.75rem] sm:text-6xl lg:text-7xl xl:text-8xl font-light text-balance leading-[0.95] tracking-tight mb-6 lg:mb-8">
            Le raffinement <br />
            <span className="italic text-ink-muted">à l'ombre du</span> château.
          </h1>
          <p className="text-base sm:text-lg text-ink-muted max-w-[55ch] leading-relaxed mb-8 lg:mb-12 text-pretty">
            Une sélection rigoureuse d'hôtels particuliers, d'appart-hôtels et de
            retraites historiques au cœur d'Angers. Reposez-vous là où l'histoire
            de France s'est écrite — entre tuffeau, ardoise et bords de Maine.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href="#hotels" className="btn-primary">Voir notre sélection</a>
            <a
              href={GYG_ANGERS_URL}
              target="_blank"
              rel="sponsored noopener"
              className="btn-outline"
            >
              Activités à Angers
            </a>
          </div>
        </div>

        <div className="lg:col-span-5 relative lg:border-l border-ink/10 bg-muted h-[55vh] min-h-[320px] lg:min-h-[500px] order-1 lg:order-2">
          <img
            src={heroImg}
            alt="Château d'Angers au coucher du soleil sur les rives de la Maine"
            width={1024}
            height={1408}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute bottom-4 right-4 lg:bottom-6 lg:right-6 bg-paper/95 backdrop-blur-sm px-3 py-1.5 lg:px-4 lg:py-2 text-[9px] lg:text-[10px] uppercase tracking-[0.2em] border border-ink/10">
            Château d'Angers · XIIIe siècle
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="container-editorial py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        <div className="lg:col-span-5">
          <div className="mb-6 flex items-center gap-4">
            <span className="rule" />
            <span className="eyebrow">L'Anjou, autrement</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light leading-tight">
            Angers, capitale <span className="italic text-ink-muted">discrète</span> du Val de Loire.
          </h2>
        </div>
        <div className="lg:col-span-7 lg:col-start-7 space-y-5 text-ink-muted text-base sm:text-lg leading-relaxed">
          <p>
            Classée parmi les villes les plus agréables de France, Angers conjugue
            patrimoine UNESCO, douceur angevine et une scène hôtelière en plein
            renouveau. De la forteresse médiévale aux maisons à pans de bois de la
            Doutre, chaque adresse de notre guide a été visitée et choisie pour
            son caractère.
          </p>
          <p>
            Que vous cherchiez un <strong className="text-ink font-medium">hôtel
            au centre-ville d'Angers</strong>, un <strong className="text-ink font-medium">appart'hôtel</strong> pour
            un long séjour, ou un <strong className="text-ink font-medium">hôtel pas cher près de la gare</strong>,
            nous avons une recommandation honnête à vous faire.
          </p>
        </div>
      </section>

      {/* FEATURED HOTELS */}
      <section id="hotels" className="bg-paper-light py-20 lg:py-28 border-y border-ink/10">
        <div className="container-editorial">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 gap-6">
            <div>
              <div className="mb-4 flex items-center gap-4">
                <span className="rule" />
                <span className="eyebrow">Adresses Confidentielles</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight">
                Nos hôtels coups de <span className="italic text-ink-muted">cœur</span>
              </h2>
            </div>
            <p className="text-ink-muted max-w-md text-sm sm:text-base">
              Trois établissements emblématiques d'Angers, alliant héritage architectural et confort contemporain.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 lg:gap-x-10 gap-y-12 lg:gap-y-16">
            {featuredHotels.map((h) => (
              <HotelCard key={h.name} hotel={h} />
            ))}
          </div>
        </div>
      </section>

      {/* AERIAL / DESTINATION */}
      <section className="relative h-[55vh] min-h-[340px] lg:h-[60vh] lg:min-h-[400px] flex items-end overflow-hidden">
        <img
          src={aerialImg}
          alt="Vue aérienne d'Angers et de la cathédrale Saint-Maurice"
          loading="lazy"
          width={1408}
          height={800}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />
        <div className="container-editorial relative pb-12 lg:pb-16 text-paper-light">
          <span className="eyebrow text-paper-light/80">Destination Angers</span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-6xl font-light max-w-3xl mt-3 lg:mt-4">
            Une ville à taille humaine, <span className="italic">une histoire millénaire.</span>
          </h2>
        </div>
      </section>

      <Activities />

      <FaqSection items={homeFaq} />

      <RelatedLinks exclude={["/"]} />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "TravelAgency",
          name: "HotelAngers.com",
          url: "https://hotelangers.com/",
          description:
            "Guide éditorial indépendant des meilleurs hôtels d'Angers — Val de Loire, France.",
          areaServed: {
            "@type": "City",
            name: "Angers",
            address: { "@type": "PostalAddress", addressLocality: "Angers", postalCode: "49000", addressCountry: "FR" },
          },
        }}
      />

      <SiteFooter />
    </div>
  );
}
