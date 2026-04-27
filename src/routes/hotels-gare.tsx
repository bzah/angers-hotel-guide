import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHero } from "@/components/PageHero";
import { HotelCard } from "@/components/HotelCard";
import { budgetHotels, apartHotels } from "@/data/hotels";
import heroImg from "@/assets/hotel-3.jpg";

export const Route = createFileRoute("/hotels-gare")({
  head: () => ({
    meta: [
      { title: "Hôtel Angers Gare — À deux pas de la gare TGV Saint-Laud" },
      {
        name: "description",
        content:
          "Hôtels près de la gare d'Angers Saint-Laud : pratique pour les voyageurs TGV et les déplacements pros. Sélection à moins de 10 minutes à pied de la gare.",
      },
      { property: "og:title", content: "Hôtel Angers Gare — Près de la gare Saint-Laud" },
      { property: "og:description", content: "Hôtels à 10 min à pied de la gare TGV d'Angers Saint-Laud." },
      { property: "og:image", content: heroImg },
      { property: "og:locale", content: "fr_FR" },
    ],
    links: [{ rel: "canonical", href: "https://hotelangers.com/hotels-gare" }],
  }),
  component: Page,
});

function Page() {
  return (
    <div className="min-h-dvh bg-paper text-ink">
      <SiteHeader />
      <PageHero
        eyebrow="Gare Saint-Laud · Hôtel Angers Gare"
        title={<>Pratique, à deux pas <span className="italic text-ink-muted">du quai.</span></>}
        intro="Notre sélection d'hôtels près de la gare d'Angers Saint-Laud, à moins de 10 minutes à pied. Idéal pour voyageurs TGV, déplacements professionnels ou correspondances tardives."
        image={heroImg}
        imageAlt="Suite d'hôtel à Angers avec vue sur la cathédrale"
      />

      <section className="container-editorial py-20">
        <div className="max-w-3xl space-y-5 text-lg text-ink-muted leading-relaxed mb-16">
          <p>
            La <strong className="text-ink font-medium">gare d'Angers Saint-Laud</strong> est
            le point d'arrivée principal de la ville : TGV directs depuis Paris
            (1h30), Nantes (40 min) et Bordeaux (3h). Loger près de la gare, c'est
            gagner du temps et accéder facilement au reste de la ville par
            tramway (ligne A, station "Gare Saint-Laud").
          </p>
          <p>
            Bonne nouvelle : la gare est à seulement 15 minutes à pied du Château
            d'Angers et du centre historique. Les hôtels que nous recommandons
            cumulent donc proximité TGV et accessibilité touristique.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
          {[...budgetHotels, ...apartHotels].slice(0, 6).map((h) => (
            <HotelCard key={h.name} hotel={h} />
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
