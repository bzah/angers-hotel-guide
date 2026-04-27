import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHero } from "@/components/PageHero";
import { HotelCard } from "@/components/HotelCard";
import { FaqSection, type FaqItem } from "@/components/FaqSection";
import { RelatedLinks } from "@/components/RelatedLinks";
import { JsonLd } from "@/components/JsonLd";
import { featuredHotels } from "@/data/hotels";
import heroImg from "@/assets/doutre.jpg";

export const Route = createFileRoute("/quartier-doutre")({
  head: () => ({
    meta: [
      { title: "Hôtels Quartier de la Doutre Angers — Charme médiéval & maisons à colombages" },
      {
        name: "description",
        content:
          "Loger dans le quartier de la Doutre à Angers : maisons à pans de bois, ruelles pavées, hôpital Saint-Jean. Notre sélection d'hôtels et chambres d'hôtes de caractère.",
      },
      { name: "keywords", content: "hotel doutre angers, quartier doutre angers, hotel medieval angers, chambre hote angers doutre" },
      { property: "og:title", content: "Hôtels Quartier de la Doutre — Le charme médiéval d'Angers" },
      { property: "og:description", content: "Loger dans le quartier le plus authentique d'Angers." },
      { property: "og:image", content: heroImg },
      { property: "og:locale", content: "fr_FR" },
    ],
    links: [{ rel: "canonical", href: "https://hotelangers.com/quartier-doutre" }],
  }),
  component: Page,
});

const faq: FaqItem[] = [
  {
    q: "Pourquoi loger dans le quartier de la Doutre à Angers ?",
    a: "C'est le quartier le plus authentique et photogénique d'Angers : maisons à colombages, ruelles pavées du XVe siècle, atmosphère village. Calme la nuit, vivant en journée, à 5 minutes à pied du Château par les ponts de la Maine.",
  },
  {
    q: "Quels monuments visiter à la Doutre ?",
    a: "L'hôpital Saint-Jean et son musée Jean Lurçat (Le Chant du Monde, tapisserie monumentale du XXe siècle), l'église de la Trinité, l'abbaye du Ronceray, la Place de la Laiterie et ses bistrots, et le quai des Carmes pour la promenade.",
  },
  {
    q: "La Doutre est-elle loin du centre-ville d'Angers ?",
    a: "Pas du tout : 5 à 10 minutes à pied par le pont de Verdun ou la passerelle. Le tramway (ligne A, station Molière) vous relie à la gare en 12 minutes.",
  },
  {
    q: "Y a-t-il beaucoup d'hôtels dans la Doutre ?",
    a: "Non, c'est ce qui fait son charme. On y trouve principalement des chambres d'hôtes dans des hôtels particuliers restaurés et quelques boutique-hôtels récents qui ont misé sur le patrimoine. Réservation indispensable.",
  },
];

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
            adresses boutique récentes qui ont fait le pari du patrimoine. La
            soirée à la Place de la Laiterie ou aux Halles Saint-Pierre est un
            incontournable angevin.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16 mb-20">
          {featuredHotels.map((h) => (
            <HotelCard key={h.name} hotel={h} />
          ))}
        </div>

        <div className="bg-paper-light border border-ink/10 p-10 lg:p-14">
          <span className="eyebrow">Itinéraire conseillé</span>
          <h2 className="font-serif text-3xl lg:text-4xl font-light mt-3 mb-6">Une journée dans la Doutre</h2>
          <ol className="space-y-3 text-ink-muted leading-relaxed list-decimal pl-6">
            <li><strong className="text-ink font-medium">Matin :</strong> visite du musée Jean Lurçat à l'hôpital Saint-Jean (Le Chant du Monde).</li>
            <li><strong className="text-ink font-medium">Midi :</strong> déjeuner Place de la Laiterie ou rue Beaurepaire.</li>
            <li><strong className="text-ink font-medium">Après-midi :</strong> flânerie rue des Tonneliers, abbaye du Ronceray, église de la Trinité.</li>
            <li><strong className="text-ink font-medium">Apéro :</strong> bord de Maine, quai des Carmes face au Château illuminé.</li>
            <li><strong className="text-ink font-medium">Soir :</strong> dîner dans un bouchon angevin de la Doutre, retour à pied par le pont de Verdun.</li>
          </ol>
        </div>
      </section>

      <FaqSection items={faq} />

      <RelatedLinks exclude={["/quartier-doutre"]} />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Accueil", item: "https://hotelangers.com/" },
            { "@type": "ListItem", position: 2, name: "Quartier de la Doutre", item: "https://hotelangers.com/quartier-doutre" },
          ],
        }}
      />

      <SiteFooter />
    </div>
  );
}
