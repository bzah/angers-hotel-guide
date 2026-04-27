import { gygSearchUrl, GYG_ANGERS_URL, GYG_LOIRE_URL } from "@/lib/affiliate";

type Activity = {
  title: string;
  description: string;
  url: string;
  duration: string;
  price: string;
};

const activities: Activity[] = [
  {
    title: "Visite guidée du Château d'Angers",
    description:
      "Forteresse royale du XIIIe siècle abritant la fabuleuse Tenture de l'Apocalypse, plus grande tapisserie médiévale au monde.",
    url: gygSearchUrl("Château d'Angers"),
    duration: "2 h",
    price: "à partir de 25€",
  },
  {
    title: "Croisière sur la Maine et la Loire",
    description:
      "Embarquez pour une croisière romantique au coucher du soleil entre Angers et la confluence avec la Loire.",
    url: gygSearchUrl("Loire river cruise Angers"),
    duration: "2 h 30",
    price: "à partir de 38€",
  },
  {
    title: "Dégustation de vins d'Anjou",
    description:
      "Visite d'un domaine viticole familial avec dégustation de Chenin, Cabernet Franc et Crémant de Loire.",
    url: gygSearchUrl("Anjou wine tasting"),
    duration: "3 h",
    price: "à partir de 45€",
  },
  {
    title: "Châteaux de la Loire — Excursion d'une journée",
    description:
      "Saumur, Brissac et Brézé : les plus beaux châteaux du sud du Val de Loire en une journée au départ d'Angers.",
    url: GYG_LOIRE_URL,
    duration: "8 h",
    price: "à partir de 89€",
  },
  {
    title: "Visite à vélo des bords de Maine",
    description:
      "Empruntez La Loire à Vélo entre vignobles, troglodytes et villages classés. Vélos électriques disponibles.",
    url: gygSearchUrl("Angers bike tour"),
    duration: "4 h",
    price: "à partir de 32€",
  },
  {
    title: "Cathédrale Saint-Maurice et vieux Angers",
    description:
      "Guide-conférencier passionné pour explorer la cathédrale gothique angevine et le quartier de la Doutre.",
    url: gygSearchUrl("Angers walking tour"),
    duration: "1 h 30",
    price: "à partir de 18€",
  },
];

export function Activities() {
  return (
    <section className="container-editorial py-24">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <div className="mb-4 flex items-center gap-4">
            <span className="rule" />
            <span className="eyebrow">Expériences sélectionnées</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-light tracking-tight">
            Que faire <span className="italic text-ink-muted">à Angers</span>
          </h2>
        </div>
        <a
          href={GYG_ANGERS_URL}
          target="_blank"
          rel="sponsored noopener"
          className="text-xs uppercase tracking-[0.2em] font-medium border-b border-ink pb-1 hover:text-terracotta hover:border-terracotta transition-colors self-start md:self-auto"
        >
          Voir toutes les activités →
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-14">
        {activities.map((a) => (
          <article key={a.title} className="border-t border-ink/15 pt-6 group">
            <div className="flex justify-between text-[11px] uppercase tracking-[0.2em] text-ink-muted mb-4">
              <span>{a.duration}</span>
              <span>{a.price}</span>
            </div>
            <h3 className="font-serif text-2xl mb-3 group-hover:text-terracotta transition-colors">
              {a.title}
            </h3>
            <p className="text-sm text-ink-muted leading-relaxed mb-6 text-pretty">
              {a.description}
            </p>
            <a
              href={a.url}
              target="_blank"
              rel="sponsored noopener"
              className="text-xs uppercase tracking-[0.2em] font-medium pb-1 border-b border-ink/40 hover:text-terracotta hover:border-terracotta transition-colors"
            >
              Réserver l'expérience
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
