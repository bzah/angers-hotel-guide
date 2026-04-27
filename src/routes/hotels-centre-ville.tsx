import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHero } from "@/components/PageHero";
import { HotelCard } from "@/components/HotelCard";
import { featuredHotels } from "@/data/hotels";
import heroImg from "@/assets/angers-aerial.jpg";

export const Route = createFileRoute("/hotels-centre-ville")({
  head: () => ({
    meta: [
      { title: "Hôtel Angers Centre Ville — Les meilleures adresses du cœur historique" },
      {
        name: "description",
        content:
          "Sélection des meilleurs hôtels au centre-ville d'Angers : à pied du Château, de la cathédrale Saint-Maurice et du tramway. Comparez et réservez au meilleur prix.",
      },
      { property: "og:title", content: "Hôtel Angers Centre Ville — Guide éditorial" },
      { property: "og:description", content: "Hôtels au cœur historique d'Angers, à deux pas du Château et de la cathédrale." },
      { property: "og:image", content: heroImg },
      { property: "og:locale", content: "fr_FR" },
    ],
    links: [{ rel: "canonical", href: "https://hotelangers.com/hotels-centre-ville" }],
  }),
  component: Page,
});

function Page() {
  return (
    <div className="min-h-dvh bg-paper text-ink">
      <SiteHeader />
      <PageHero
        eyebrow="Hyper-centre · Hôtel Angers Centre Ville"
        title={<>Au cœur historique <span className="italic text-ink-muted">d'Angers.</span></>}
        intro="Notre sélection d'hôtels au centre-ville d'Angers : à quelques minutes à pied du Château, de la cathédrale Saint-Maurice, du tramway et des meilleurs restaurants angevins."
        image={heroImg}
        imageAlt="Vue aérienne du centre-ville d'Angers"
      />

      <section className="container-editorial py-20">
        <div className="max-w-3xl space-y-5 text-lg text-ink-muted leading-relaxed mb-16">
          <p>
            Loger en plein <strong className="text-ink font-medium">centre-ville d'Angers</strong> reste
            la meilleure manière de profiter de la ville. Tout se fait à pied : le
            Château et sa Tenture de l'Apocalypse, la cathédrale Saint-Maurice, la
            Place du Ralliement, les Halles et les ruelles du vieil Angers.
          </p>
          <p>
            Les hôtels que nous avons retenus se situent dans un rayon de 600
            mètres autour de la Place du Ralliement et bénéficient tous d'un accès
            direct au tramway — pratique pour rejoindre la gare TGV ou le Parc des
            Expositions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
          {featuredHotels.map((h) => (
            <HotelCard key={h.name} hotel={h} />
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
