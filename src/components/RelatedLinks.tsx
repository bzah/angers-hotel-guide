import { Link } from "@tanstack/react-router";

type RelatedLink = { to: string; label: string; desc: string };

const ALL_LINKS: RelatedLink[] = [
  { to: "/hotels-centre-ville", label: "Hôtels Centre-Ville", desc: "Au cœur historique d'Angers" },
  { to: "/hotels-pas-cher", label: "Hôtels Pas Cher", desc: "Bonnes adresses dès 60€" },
  { to: "/appart-hotel", label: "Appart Hôtel Angers", desc: "Studios & appartements meublés" },
  { to: "/hotels-gare", label: "Hôtels près de la Gare", desc: "À pied de la gare TGV Saint-Laud" },
  { to: "/quartier-doutre", label: "Quartier de la Doutre", desc: "Charme médiéval rive droite" },
  { to: "/parc-expositions", label: "Parc Expo & Congrès", desc: "Salons et déplacements pro" },
  { to: "/que-faire", label: "Que faire à Angers", desc: "Activités & expériences" },
  { to: "/destination", label: "Guide Destination", desc: "Tout savoir sur Angers" },
];

export function RelatedLinks({ exclude = [] as string[] }: { exclude?: string[] }) {
  const links = ALL_LINKS.filter((l) => !exclude.includes(l.to)).slice(0, 6);
  return (
    <section className="container-editorial py-24">
      <div className="mb-12">
        <span className="eyebrow">Continuer la lecture</span>
        <h2 className="font-serif text-3xl lg:text-4xl font-light mt-3">
          Explorez Angers <span className="italic text-ink-muted">par thème</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-8">
        {links.map((l) => (
          <Link
            key={l.to}
            to={l.to}
            className="group border-t border-ink/15 pt-5 hover:border-ink transition-colors"
          >
            <h3 className="font-serif text-xl text-ink group-hover:italic transition-all">{l.label}</h3>
            <p className="text-sm text-ink-muted mt-2">{l.desc}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
