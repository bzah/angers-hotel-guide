import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { HotelCard } from "@/components/HotelCard";
import { Activities } from "@/components/Activities";
import { featuredHotels } from "@/data/hotels";
import { GYG_ANGERS_URL } from "@/lib/affiliate";
import heroImg from "@/assets/hero-chateau.jpg";
import aerialImg from "@/assets/angers-aerial.jpg";

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
      <section className="grid grid-cols-1 lg:grid-cols-12 min-h-[85vh] border-b border-ink/10">
        <div className="lg:col-span-7 flex flex-col justify-center px-6 lg:px-20 py-20">
          <div className="mb-8 flex items-center gap-4">
            <span className="rule" />
            <span className="eyebrow">Val de Loire, France</span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-balance leading-[0.9] tracking-tight mb-8">
            Le raffinement <br />
            <span className="italic text-ink-muted">à l'ombre du</span> château.
          </h1>
          <p className="text-lg text-ink-muted max-w-[55ch] leading-relaxed mb-12 text-pretty">
            Une sélection rigoureuse d'hôtels particuliers, d'appart-hôtels et de
            retraites historiques au cœur d'Angers. Reposez-vous là où l'histoire
            de France s'est écrite — entre tuffeau, ardoise et bords de Maine.
          </p>
          <div className="flex flex-wrap gap-3">
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

        <div className="lg:col-span-5 relative border-l border-ink/10 bg-muted min-h-[500px]">
          <img
            src={heroImg}
            alt="Château d'Angers au coucher du soleil sur les rives de la Maine"
            width={1024}
            height={1408}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute bottom-6 right-6 bg-paper/95 backdrop-blur-sm px-4 py-2 text-[10px] uppercase tracking-[0.2em] border border-ink/10">
            Château d'Angers · XIIIe siècle
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="container-editorial py-24 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <div className="mb-6 flex items-center gap-4">
            <span className="rule" />
            <span className="eyebrow">L'Anjou, autrement</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-light leading-tight">
            Angers, capitale <span className="italic text-ink-muted">discrète</span> du Val de Loire.
          </h2>
        </div>
        <div className="lg:col-span-7 lg:col-start-7 space-y-6 text-ink-muted text-lg leading-relaxed">
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
      <section id="hotels" className="bg-paper-light py-28 border-y border-ink/10">
        <div className="container-editorial">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <div className="mb-4 flex items-center gap-4">
                <span className="rule" />
                <span className="eyebrow">Adresses Confidentielles</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-light tracking-tight">
                Nos hôtels coups de <span className="italic text-ink-muted">cœur</span>
              </h2>
            </div>
            <p className="text-ink-muted max-w-md">
              Trois établissements emblématiques d'Angers, alliant héritage architectural et confort contemporain.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
            {featuredHotels.map((h) => (
              <HotelCard key={h.name} hotel={h} />
            ))}
          </div>
        </div>
      </section>

      {/* AERIAL / DESTINATION */}
      <section className="relative h-[60vh] min-h-[400px] flex items-end overflow-hidden">
        <img
          src={aerialImg}
          alt="Vue aérienne d'Angers et de la cathédrale Saint-Maurice"
          loading="lazy"
          width={1408}
          height={800}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />
        <div className="container-editorial relative pb-16 text-paper-light">
          <span className="eyebrow text-paper-light/80">Destination Angers</span>
          <h2 className="font-serif text-4xl lg:text-6xl font-light max-w-3xl mt-4">
            Une ville à taille humaine, <span className="italic">une histoire millénaire.</span>
          </h2>
        </div>
      </section>

      <Activities />

      <SiteFooter />
    </div>
  );
}
