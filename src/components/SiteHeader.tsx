import { Link } from "@tanstack/react-router";
import { useState } from "react";
import logoUrl from "@/assets/favicon.png";

const nav = [
  { to: "/", label: "Accueil" },
  { to: "/hotels-centre-ville", label: "Centre-ville" },
  { to: "/hotels-pas-cher", label: "Pas Cher" },
  { to: "/appart-hotel", label: "Appart'Hôtel" },
  { to: "/hotels-gare", label: "Près de la Gare" },
  { to: "/quartier-doutre", label: "La Doutre" },
  { to: "/parc-expositions", label: "Parc Expo" },
  { to: "/que-faire", label: "Que faire" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="border-b border-ink/10 bg-paper sticky top-0 z-40 backdrop-blur-sm bg-paper/90">
      <div className="container-editorial flex items-center justify-between py-5">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logoUrl}
            alt="HotelAngers monogramme"
            width={40}
            height={40}
            className="h-10 w-10 object-contain rounded-sm border border-ink/10"
          />
          <span className="font-serif text-2xl lg:text-3xl tracking-tight leading-none">
            Hôtel <span className="italic text-ink-muted">Angers</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7 text-xs uppercase tracking-[0.15em] font-medium">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-ink-muted hover:text-terracotta transition-colors"
              activeProps={{ className: "text-terracotta" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          aria-label="Menu"
          className="lg:hidden text-xs uppercase tracking-[0.2em] border border-ink/20 px-4 py-2"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Fermer" : "Menu"}
        </button>
      </div>

      {open && (
        <nav className="lg:hidden border-t border-ink/10 px-6 py-4 flex flex-col gap-3 bg-paper-light">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="text-sm uppercase tracking-[0.15em] py-2 text-ink-muted hover:text-terracotta"
              activeProps={{ className: "text-terracotta" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
