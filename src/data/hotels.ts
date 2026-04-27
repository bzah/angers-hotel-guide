import type { Hotel } from "@/components/HotelCard";
import hotel1 from "@/assets/hotel-1.jpg";
import hotel2 from "@/assets/hotel-2.jpg";
import hotel3 from "@/assets/hotel-3.jpg";
import doutre from "@/assets/doutre.jpg";

export const featuredHotels: Hotel[] = [
  {
    name: "Le Domaine d'Éléonore",
    area: "Quartier de la Doutre — Vue sur cour pavée",
    description:
      "Hôtel particulier du XVIIIe siècle restauré avec une élégance brute. Pierres apparentes, parquet d'époque et petit-déjeuner servi sous la verrière.",
    priceFrom: 240,
    badge: "Historique",
    image: hotel1,
    searchQuery: "Angers Doutre boutique hotel",
  },
  {
    name: "La Demoiselle sur Maine",
    area: "Bords de Maine — Spa et boiseries d'époque",
    description:
      "Une ancienne maison de maître transformée en retraite contemporaine. Vues panoramiques sur la rivière et lumière dorée de fin de journée.",
    priceFrom: 315,
    image: hotel3,
    searchQuery: "Angers Maine spa hotel",
  },
  {
    name: "L'Hôtel des Plantagenêts",
    area: "Hyper-centre — Proche cathédrale Saint-Maurice",
    description:
      "Adresse confidentielle à deux pas du Château d'Angers. Décoration soignée, accueil personnalisé et conciergerie attentionnée.",
    priceFrom: 185,
    badge: "Coup de Cœur",
    image: hotel2,
    searchQuery: "Angers centre cathedrale hotel",
  },
];

export const budgetHotels: Hotel[] = [
  {
    name: "Maison de la Doutre",
    area: "Quartier de la Doutre — Charme à petit prix",
    description:
      "Une chambre d'hôtes au cœur du quartier médiéval, avec un excellent rapport qualité-prix. Idéal pour découvrir Angers à pied.",
    priceFrom: 68,
    badge: "Pas Cher",
    image: doutre,
    searchQuery: "Angers cheap hotel",
  },
  {
    name: "Les Toits d'Angers",
    area: "Centre — Studio rénové",
    description:
      "Studios fonctionnels et propres, parfaits pour un court séjour. Wifi rapide et lits confortables à prix doux.",
    priceFrom: 79,
    image: hotel2,
    searchQuery: "Angers cheap studio",
  },
  {
    name: "Le Petit Anjou",
    area: "Près de la gare — Pratique et abordable",
    description:
      "Hôtel deux étoiles bien tenu, à 5 minutes de la gare TGV. Le bon plan pour les escales express ou les voyages d'affaires.",
    priceFrom: 62,
    badge: "Bon Plan",
    image: hotel1,
    searchQuery: "Angers gare cheap hotel",
  },
];

export const apartHotels: Hotel[] = [
  {
    name: "Résidence des Ardoisières",
    area: "Centre — Appartements 1 à 3 chambres",
    description:
      "Appartements meublés avec cuisine équipée. Idéal pour familles ou longs séjours en plein cœur d'Angers.",
    priceFrom: 95,
    image: hotel1,
    searchQuery: "Angers aparthotel residence",
  },
  {
    name: "Appart' Loire & Maine",
    area: "Bords de Maine — Vue rivière",
    description:
      "Studios et T2 contemporains face à la Maine. Service hôtelier flexible avec ménage à la demande.",
    priceFrom: 110,
    badge: "Vue rivière",
    image: hotel3,
    searchQuery: "Angers aparthotel river view",
  },
  {
    name: "Le Logis du Château",
    area: "Pied du Château d'Angers",
    description:
      "Appart-hôtel boutique de 12 logements à deux pas de la forteresse médiévale. Petit-déjeuner en option.",
    priceFrom: 130,
    image: hotel2,
    searchQuery: "Angers chateau aparthotel",
  },
];
