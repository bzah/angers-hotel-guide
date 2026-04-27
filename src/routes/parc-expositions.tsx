import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHero } from "@/components/PageHero";
import { HotelCard } from "@/components/HotelCard";
import { apartHotels, budgetHotels } from "@/data/hotels";
import heroImg from "@/assets/angers-aerial.jpg";

export const Route = createFileRoute("/parc-expositions")({
  head: () => ({
    meta: [
      { title: "Hôtel Parc des Expositions Angers & Centre Congrès Jean Monnier" },
      {
        name: "description",
        content:
          "Hôtels près du Parc des Expositions d'Angers et du Centre des Congrès Jean Monnier. Adapté aux exposants, congressistes et visiteurs des salons (SIVAL, SITEVI, etc.).",
      },
      { property: "og:title", content: "Hôtels Parc Expo & Centre Congrès Jean Monnier — Angers" },
      { property: "og:description", content: "Solutions d'hébergement pour vos salons et congrès à Angers." },
      { property: "og:image", content: heroImg },
      { property: "og:locale", content: "fr_FR" },
    ],
    links: [{ rel: "canonical", href: "https://hotelangers.com/parc-expositions" }],
  }),
  component: Page,
});

function Page() {
  return (
    <div className="min-h-dvh bg-paper text-ink">
      <SiteHeader />
      <PageHero
        eyebrow="Salons & Congrès · Destination Angers"
        title={<>Hébergement professionnel <span className="italic text-ink-muted">à proximité.</span></>}
        intro="Notre sélection d'hôtels proches du Parc des Expositions et du Centre des Congrès Jean Monnier d'Angers — pensée pour les exposants, congressistes et visiteurs des grands rendez-vous angevins (SIVAL, Made in Angers, salons grand public)."
        image={heroImg}
        imageAlt="Vue aérienne d'Angers"
      />

      <section className="container-editorial py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          <div className="lg:col-span-7 space-y-5 text-lg text-ink-muted leading-relaxed">
            <p>
              Le <strong className="text-ink font-medium">Parc des Expositions
              d'Angers</strong> et le <strong className="text-ink font-medium">Centre
              de Congrès Jean Monnier</strong> accueillent chaque année les rendez-vous
              majeurs de la région : SIVAL (salon international des productions
              végétales), Made in Angers, salons de l'habitat, des vins de
              Loire, et de nombreux congrès professionnels.
            </p>
            <p>
              Pour ces événements, nous recommandons soit les hôtels du
              centre-ville (15 min en tramway), soit les établissements de la
              zone Quai Saint-Serge — plus proches du Parc Expo et souvent
              équipés pour la clientèle d'affaires (parking, petit-déjeuner
              tôt, espaces de travail).
            </p>
          </div>
          <aside className="lg:col-span-5 bg-paper-light border border-ink/10 p-8">
            <h3 className="font-serif text-2xl mb-4">Lieux clés</h3>
            <ul className="space-y-3 text-sm text-ink-muted">
              <li className="flex justify-between border-b border-ink/10 pb-2">
                <span>Parc des Expositions</span><span className="text-ink">Quai Saint-Serge</span>
              </li>
              <li className="flex justify-between border-b border-ink/10 pb-2">
                <span>Centre Congrès Jean Monnier</span><span className="text-ink">33 bd Carnot</span>
              </li>
              <li className="flex justify-between border-b border-ink/10 pb-2">
                <span>Gare TGV Saint-Laud</span><span className="text-ink">10 min tram</span>
              </li>
              <li className="flex justify-between">
                <span>Aéroport Angers-Marcé</span><span className="text-ink">25 min</span>
              </li>
            </ul>
          </aside>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
          {[...apartHotels, ...budgetHotels].slice(0, 6).map((h) => (
            <HotelCard key={h.name} hotel={h} />
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
