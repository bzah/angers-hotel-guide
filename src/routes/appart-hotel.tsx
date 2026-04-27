import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHero } from "@/components/PageHero";
import { HotelCard } from "@/components/HotelCard";
import { apartHotels } from "@/data/hotels";
import heroImg from "@/assets/hotel-1.jpg";

export const Route = createFileRoute("/appart-hotel")({
  head: () => ({
    meta: [
      { title: "Appart Hôtel Angers — Studios & appartements meublés" },
      {
        name: "description",
        content:
          "Les meilleurs appart'hôtels d'Angers : studios, T2 et T3 meublés avec cuisine équipée. Idéal pour familles, longs séjours et déplacements professionnels.",
      },
      { property: "og:title", content: "Appart Hôtel Angers — Studios & appartements meublés" },
      { property: "og:description", content: "Appart'hôtels à Angers avec cuisine équipée pour courts et longs séjours." },
      { property: "og:image", content: heroImg },
      { property: "og:locale", content: "fr_FR" },
    ],
    links: [{ rel: "canonical", href: "https://hotelangers.com/appart-hotel" }],
  }),
  component: Page,
});

function Page() {
  return (
    <div className="min-h-dvh bg-paper text-ink">
      <SiteHeader />
      <PageHero
        eyebrow="Long séjour · Appart Hôtel Angers"
        title={<>L'art de vivre <span className="italic text-ink-muted">comme chez soi.</span></>}
        intro="Notre sélection d'appart'hôtels à Angers : studios, T2 et T3 entièrement meublés avec cuisine équipée. La solution idéale pour familles, déplacements professionnels et longs séjours dans la cité angevine."
        image={heroImg}
        imageAlt="Salon élégant d'un appart-hôtel à Angers"
      />

      <section className="container-editorial py-20">
        <div className="max-w-3xl space-y-5 text-lg text-ink-muted leading-relaxed mb-16">
          <p>
            L'<strong className="text-ink font-medium">appart'hôtel à Angers</strong> est
            la formule qui monte. Plus spacieux qu'une chambre d'hôtel, plus
            flexible qu'une location, il combine l'autonomie d'un appartement
            (cuisine, salon, machine à laver) et les services d'un établissement
            hôtelier (réception, ménage, wifi).
          </p>
          <p>
            Particulièrement adapté aux familles, aux groupes d'amis, aux salariés
            en mission longue durée et aux étudiants en stage à Angers. Comptez
            entre 95€ et 180€ la nuit selon la taille et la localisation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
          {apartHotels.map((h) => (
            <HotelCard key={h.name} hotel={h} />
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
