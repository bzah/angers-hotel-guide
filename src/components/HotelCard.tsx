import { gygSearchUrl } from "@/lib/affiliate";

export type Hotel = {
  name: string;
  area: string;
  description: string;
  priceFrom: number;
  badge?: string;
  image: string;
  searchQuery?: string;
};

export function HotelCard({ hotel }: { hotel: Hotel }) {
  const url = gygSearchUrl(hotel.searchQuery ?? `${hotel.name} Angers`);
  return (
    <article className="group flex flex-col">
      <div className="relative aspect-[4/5] mb-6 overflow-hidden border border-ink/10 bg-muted">
        <img
          src={hotel.image}
          alt={`${hotel.name} — ${hotel.area}, Angers`}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        {hotel.badge && (
          <div className={`absolute top-4 left-4 px-3 py-1 text-[10px] uppercase tracking-[0.2em] font-medium ${
            hotel.badge === "Coup de Cœur"
              ? "bg-terracotta text-paper-light"
              : "bg-paper text-ink border border-ink/10"
          }`}>
            {hotel.badge}
          </div>
        )}
      </div>
      <div className="flex justify-between items-start mb-2 gap-4">
        <h3 className="font-serif text-2xl tracking-tight">{hotel.name}</h3>
        <div className="text-base font-medium tabular-nums shrink-0">
          {hotel.priceFrom}€
        </div>
      </div>
      <p className="text-sm text-ink-muted mb-3">{hotel.area}</p>
      <p className="text-sm text-ink-muted/90 leading-relaxed mb-6 text-pretty flex-1">
        {hotel.description}
      </p>
      <a
        href={url}
        target="_blank"
        rel="sponsored noopener"
        className="btn-outline w-full group-hover:bg-ink group-hover:text-paper-light"
      >
        Vérifier les disponibilités
      </a>
    </article>
  );
}
