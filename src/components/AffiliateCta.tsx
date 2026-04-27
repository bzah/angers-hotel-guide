import { GYG_ANGERS_URL } from "@/lib/affiliate";

interface AffiliateCtaProps {
  /** Optional override URL — defaults to Angers GYG page with partner_id */
  href?: string;
  eyebrow?: string;
  title: string;
  description: string;
  ctaLabel?: string;
}

/**
 * Editorial GetYourGuide affiliate banner.
 * Always uses rel="sponsored noopener" for Google compliance and
 * carries our partner_id=0IQTGX8 via the URL.
 */
export function AffiliateCta({
  href = GYG_ANGERS_URL,
  eyebrow = "Partenaire — GetYourGuide®",
  title,
  description,
  ctaLabel = "Réserver sans frais",
}: AffiliateCtaProps) {
  return (
    <section className="container-editorial py-16 lg:py-20">
      <div className="bg-ink text-paper-light p-8 sm:p-12 lg:p-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        <div className="lg:col-span-8 space-y-4">
          <span className="text-[10px] uppercase tracking-[0.25em] text-paper-light/60">
            {eyebrow}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light leading-tight">
            {title}
          </h2>
          <p className="text-paper-light/75 text-base sm:text-lg leading-relaxed max-w-2xl">
            {description}
          </p>
          <ul className="text-xs sm:text-sm text-paper-light/60 flex flex-wrap gap-x-6 gap-y-2 pt-2">
            <li>✓ Annulation gratuite jusqu'à 24h</li>
            <li>✓ Réservation en français</li>
            <li>✓ Confirmation immédiate</li>
            <li>✓ Meilleur prix garanti</li>
          </ul>
        </div>
        <div className="lg:col-span-4 flex lg:justify-end">
          <a
            href={href}
            target="_blank"
            rel="sponsored noopener"
            className="inline-block bg-paper-light text-ink px-8 py-4 text-xs uppercase tracking-[0.2em] font-medium hover:bg-terracotta hover:text-paper-light transition-colors"
          >
            {ctaLabel} →
          </a>
        </div>
      </div>
    </section>
  );
}
