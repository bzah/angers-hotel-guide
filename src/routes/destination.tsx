import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHero } from "@/components/PageHero";
import { Link } from "@tanstack/react-router";
import heroImg from "@/assets/angers-aerial.jpg";

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

      <SiteFooter />
    </div>
  );
}
