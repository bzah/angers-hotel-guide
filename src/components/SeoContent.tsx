import type { ReactNode } from "react";

export interface SeoSection {
  heading: string;
  body: ReactNode;
}

interface SeoContentProps {
  title: string;
  intro?: ReactNode;
  sections: SeoSection[];
  keywords?: string[];
}

/**
 * Long-form SEO content block — semantic H2/H3, rich paragraphs,
 * keyword cloud and editorial typography. Designed to push pages
 * beyond 1500 words for better Google ranking.
 */
export function SeoContent({ title, intro, sections, keywords }: SeoContentProps) {
  return (
    <section className="container-editorial py-20 lg:py-28 border-t border-ink/10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-12">
        <div className="lg:col-span-4">
          <div className="mb-4 flex items-center gap-4">
            <span className="rule" />
            <span className="eyebrow">Guide complet</span>
          </div>
          <h2 className="font-serif text-3xl lg:text-5xl font-light leading-tight tracking-tight">
            {title}
          </h2>
        </div>
        {intro ? (
          <div className="lg:col-span-7 lg:col-start-6 text-lg text-ink-muted leading-relaxed space-y-4">
            {intro}
          </div>
        ) : null}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
        {sections.map((s) => (
          <article key={s.heading} className="space-y-3">
            <h3 className="font-serif text-xl lg:text-2xl text-ink font-light">
              {s.heading}
            </h3>
            <div className="text-ink-muted leading-relaxed text-base">
              {s.body}
            </div>
          </article>
        ))}
      </div>

      {keywords && keywords.length > 0 ? (
        <div className="mt-16 pt-10 border-t border-ink/10">
          <span className="eyebrow block mb-4">Recherches associées</span>
          <ul className="flex flex-wrap gap-2">
            {keywords.map((k) => (
              <li
                key={k}
                className="text-xs uppercase tracking-[0.15em] text-ink-muted border border-ink/15 px-3 py-1.5"
              >
                {k}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </section>
  );
}
