import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHero } from "@/components/PageHero";
import { HotelCard } from "@/components/HotelCard";
import { budgetHotels } from "@/data/hotels";
import heroImg from "@/assets/doutre.jpg";

export const Route = createFileRoute("/hotels-pas-cher")({
  head: () => ({
    meta: [
      { title: "Hôtel Angers Pas Cher — Bons plans à partir de 60€" },
      {
        name: "description",
        content:
          "Trouvez un hôtel pas cher à Angers : bonnes adresses dès 60€/nuit, propres et bien situées. Sélection vérifiée par notre rédaction angevine.",
      },
      { property: "og:title", content: "Hôtel Angers Pas Cher — Bons plans à partir de 60€" },
      { property: "og:description", content: "Les meilleures adresses pas chères d'Angers, vérifiées et recommandées." },
      { property: "og:image", content: heroImg },
      { property: "og:locale", content: "fr_FR" },
    ],
    links: [{ rel: "canonical", href: "https://hotelangers.com/hotels-pas-cher" }],
  }),
  component: Page,
});

function Page() {
  return (
    <div className="min-h-dvh bg-paper text-ink">
      <SiteHeader />
      <PageHero
        eyebrow="Petits prix · Hôtel Angers Pas Cher"
        title={<>Bien dormir à Angers <span className="italic text-ink-muted">sans se ruiner.</span></>}
        intro="Notre sélection d'hôtels pas chers à Angers : adresses propres, bien tenues et bien situées dès 60€ la nuit. Le bon plan, sans compromis sur le confort."
        image={heroImg}
        imageAlt="Rue pavée du quartier de la Doutre à Angers"
      />

      <section className="container-editorial py-20">
        <div className="max-w-3xl space-y-5 text-lg text-ink-muted leading-relaxed mb-16">
          <p>
            Trouver un <strong className="text-ink font-medium">hôtel pas cher à Angers</strong> est
            tout à fait possible, même en haute saison. La ville offre une bonne
            densité d'hôtels deux et trois étoiles à des tarifs raisonnables,
            notamment autour de la gare et dans les quartiers résidentiels à
            10 minutes en tramway du centre.
          </p>
          <p>
            Notre conseil : réserver tôt pour les week-ends de mai-juin (saison
            des Accroche-Cœurs) et privilégier les adresses près du tramway plutôt
            que celles éloignées du centre — l'écart de prix ne compense pas
            toujours les frais de transport.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
          {budgetHotels.map((h) => (
            <HotelCard key={h.name} hotel={h} />
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
