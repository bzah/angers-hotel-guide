import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHero } from "@/components/PageHero";
import { FaqSection, type FaqItem } from "@/components/FaqSection";
import { RelatedLinks } from "@/components/RelatedLinks";
import { JsonLd } from "@/components/JsonLd";
import { AffiliateCta } from "@/components/AffiliateCta";
import { Link } from "@tanstack/react-router";
import heroImg from "@/assets/angers-aerial.jpg";

const faq: FaqItem[] = [
  {
    q: "Pourquoi Angers est-elle classée parmi les villes où il fait bon vivre ?",
    a: "Angers figure régulièrement en tête des classements (L'Express, Le Figaro) grâce à sa douceur de vivre, son patrimoine UNESCO, son tramway efficace, ses 100 hectares de parcs, sa scène culturelle dense (Quai, Chabada) et la proximité du Val de Loire et de l'océan.",
  },
  {
    q: "Combien d'habitants compte Angers ?",
    a: "La ville d'Angers compte environ 155 000 habitants intra-muros et son agglomération (Angers Loire Métropole) près de 305 000 habitants. C'est la 17e ville de France.",
  },
  {
    q: "Angers est-elle dans le Val de Loire ?",
    a: "Oui, Angers est la capitale historique de l'Anjou et l'une des grandes villes du Val de Loire, classé au patrimoine mondial de l'UNESCO. Elle se trouve au confluent de la Maine, de la Loire, de la Sarthe et du Mayenne.",
  },
  {
    q: "Quelle est la spécialité culinaire d'Angers ?",
    a: "Le Quernon d'Ardoise (chocolat bleu rappelant les ardoises angevines), les rillauds (poitrine de porc confite), la fouée (petit pain au four à bois), le poisson de Loire (sandre, brochet beurre blanc), et bien sûr les vins d'Anjou et Saumur.",
  },
  {
    q: "Que voir absolument à Angers ?",
    a: "Le Château d'Angers et la Tenture de l'Apocalypse, la cathédrale Saint-Maurice, le quartier de la Doutre, le musée Jean Lurçat (Le Chant du Monde), la Place du Ralliement et le Grand Théâtre, et une promenade au bord de la Maine au coucher du soleil.",
  },
];


export const Route = createFileRoute("/destination")({
  head: () => ({
    meta: [
      { title: "Destination Angers — Le guide complet de la cité angevine" },
      {
        name: "description",
        content:
          "Tout ce qu'il faut savoir sur Angers : quartiers, transports, meilleure période, gastronomie, agenda culturel. Le guide indépendant pour préparer votre séjour.",
      },
      { property: "og:title", content: "Destination Angers — Guide complet" },
      { property: "og:description", content: "Préparez votre séjour à Angers, capitale de l'Anjou." },
      { property: "og:image", content: heroImg },
      { property: "og:locale", content: "fr_FR" },
    ],
    links: [{ rel: "canonical", href: "https://hotelangers.com/destination" }],
  }),
  component: Page,
});

const sections = [
  {
    title: "Quand venir à Angers",
    body:
      "La meilleure période s'étend d'avril à octobre. Mai et juin offrent un climat doux et la floraison des jardins du Château ; septembre est idéal pour les vendanges et le festival des Accroche-Cœurs.",
  },
  {
    title: "Comment s'y rendre",
    body:
      "TGV direct depuis Paris-Montparnasse (1h30), Nantes (40 min), Lyon (4h) et Bordeaux (3h). En voiture, A11 puis A87. L'aéroport Angers-Marcé propose des liaisons saisonnières.",
  },
  {
    title: "Se déplacer",
    body:
      "Le tramway (lignes A et B) traverse la ville du nord au sud et dessert la gare, le centre et le Parc Expo. Le centre historique se découvre intégralement à pied. Vélos en libre-service Vélocité.",
  },
  {
    title: "Gastronomie angevine",
    body:
      "Quernon d'Ardoise, rillauds, fouée, poisson de Loire (sandre, brochet) accompagné d'un Saumur-Champigny ou d'un Coteaux-du-Layon. Les Halles centrales sont une étape obligatoire.",
  },
];

export const linkedPages = [
  { to: "/hotels-centre-ville", label: "Centre-ville" },
  { to: "/quartier-doutre", label: "La Doutre" },
  { to: "/que-faire", label: "Activités" },
  { to: "/parc-expositions", label: "Parc Expo" },
] as const;

function Page() {
  return (
    <div className="min-h-dvh bg-paper text-ink">
      <SiteHeader />
      <PageHero
        eyebrow="Le Guide Angers"
        title={<>Destination <span className="italic text-ink-muted">Angers.</span></>}
        intro="Capitale historique de l'Anjou, Angers cultive l'art de vivre du Val de Loire entre patrimoine UNESCO, douceur angevine et scène culturelle vivante. Notre guide pour tout savoir avant de venir."
        image={heroImg}
        imageAlt="Vue aérienne d'Angers"
      />

      <section className="container-editorial py-20 grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
        {sections.map((s) => (
          <article key={s.title} className="border-t border-ink/15 pt-6">
            <h2 className="font-serif text-3xl mb-4">{s.title}</h2>
            <p className="text-ink-muted leading-relaxed">{s.body}</p>
          </article>
        ))}
      </section>

      <section className="container-editorial pb-24">
        <div className="bg-paper-light border border-ink/10 p-10 lg:p-14">
          <span className="eyebrow">Continuer la lecture</span>
          <h3 className="font-serif text-3xl lg:text-4xl mt-3 mb-8">
            Explorez Angers <span className="italic text-ink-muted">par thème</span>
          </h3>
          <div className="flex flex-wrap gap-3">
            {linkedPages.map((p) => (
              <Link
                key={p.to}
                to={p.to}
                className="text-xs uppercase tracking-[0.2em] border border-ink/30 px-5 py-3 hover:bg-ink hover:text-paper-light transition-colors"
              >
                {p.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FaqSection items={faq} />
      <AffiliateCta
        title="Vivre Angers comme un local"
        description="Plus de 80 expériences sélectionnées à Angers et dans le Val de Loire : visites guidées en français, ateliers gastronomiques, dégustations, croisières et excursions aux châteaux royaux."
        ctaLabel="Toutes les expériences"
      />



      <RelatedLinks exclude={["/destination"]} />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "TouristDestination",
          name: "Angers",
          description: "Capitale historique de l'Anjou, ville d'art et d'histoire au cœur du Val de Loire (UNESCO).",
          touristType: ["Couples", "Famille", "Voyageurs culturels", "Œnotourisme"],
          address: { "@type": "PostalAddress", addressLocality: "Angers", postalCode: "49000", addressCountry: "FR" },
        }}
      />

      <SiteFooter />
    </div>
  );
}
