type FaqItem = { q: string; a: string };

type Props = {
  eyebrow?: string;
  title?: string;
  items: FaqItem[];
};

export function FaqSection({ eyebrow = "Questions fréquentes", title = "On vous répond.", items }: Props) {
  return (
    <section className="bg-paper-light border-y border-ink/10 py-16 lg:py-24">
      <div className="container-editorial grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        <div className="lg:col-span-4">
          <div className="mb-4 flex items-center gap-4">
            <span className="rule" />
            <span className="eyebrow">{eyebrow}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light leading-tight">
            {title}
          </h2>
        </div>
        <div className="lg:col-span-8 divide-y divide-ink/15 border-t border-ink/15">
          {items.map((item) => (
            <details key={item.q} className="group py-5 lg:py-6">
              <summary className="flex justify-between items-start gap-4 lg:gap-6 cursor-pointer list-none">
                <h3 className="font-serif text-lg sm:text-xl lg:text-2xl text-ink leading-snug">{item.q}</h3>
                <span className="text-ink-muted text-2xl leading-none mt-1 group-open:rotate-45 transition-transform shrink-0">+</span>
              </summary>
              <p className="mt-4 text-ink-muted leading-relaxed text-pretty text-sm sm:text-base">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: items.map((i) => ({
              "@type": "Question",
              name: i.q,
              acceptedAnswer: { "@type": "Answer", text: i.a },
            })),
          }),
        }}
      />
    </section>
  );
}

export type { FaqItem };
