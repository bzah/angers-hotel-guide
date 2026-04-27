import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHero } from "@/components/PageHero";
import { HotelCard } from "@/components/HotelCard";
import { featuredHotels } from "@/data/hotels";
import heroImg from "@/assets/doutre.jpg";

export const Route = createFileRoute("/quartier-doutre")({
  head: () => ({
    meta: [
      { title: "Hôtels Quartier de la Doutre Angers — Charme médiéval" },
      {
        name: "description",
        content:
          "Hôtels et chambres d'hôtes dans le quartier historique de la Doutre à Angers : maisons à pans de bois, ruelles pavées et atmosphère médiévale préservée.",
      },
      { property: "og:title", content: "Hôtels Quartier de la Doutre — Le charme médiéval d'Angers" },
      { property: "og:description", content: "Loger dans le quartier le plus authentique d'Angers." },
      { property: "og:image", content: heroImg },
      { property: "og:locale", content: "fr_FR" },
    ],
    links: [{ rel: "canonical", href: "https://hotelangers.com/quartier-doutre" }],
  }),
  component: Page,
});

function Page() {
  return (
    <div className="min-h-dvh bg-paper text-ink">
      <SiteHeader />
      <PageHero
        eyebrow="Quartier historique · La Doutre"
        title={<>Le charme préservé <span className="italic text-ink-muted">de la rive droite.</span></>}
        intro="Loger dans le quartier de la Doutre, c'est dormir au cœur du vieil Angers : maisons à pans de bois du XVe siècle, ruelles pavées, hôpital Saint-Jean et son apocalypse contemporaine de Lurçat."
        image={heroImg}
        imageAlt="Rue pavée et maisons à pans de bois du quartier de la Doutre à Angers"
      />

      <section className="container-editorial py-20">
        <div className="max-w-3xl space-y-5 text-lg text-ink-muted leading-relaxed mb-16">
          <p>
            La <strong className="text-ink font-medium">Doutre</strong> — littéralement
            "outre Maine" — est l'âme médiévale d'Angers, à seulement quelques
            ponts du Château. Ses ruelles pavées, ses maisons à colombages et son
            hôpital Saint-Jean (qui abrite la tapisserie monumentale Le Chant du
            Monde de Jean Lurçat) en font le quartier le plus charmant pour un
            séjour authentique.
          </p>
          <p>
            Ici, les hôtels sont rares mais précieux : essentiellement des
            chambres d'hôtes dans des hôtels particuliers restaurés, et quelques
            adresses boutique récentes qui ont fait le pari du patrimoine.
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
