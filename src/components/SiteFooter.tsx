import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t border-ink/10 bg-paper-light mt-20 lg:mt-32">
      <div className="container-editorial py-14 lg:py-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 lg:gap-12">
        <div className="sm:col-span-2 md:col-span-2">
          <div className="font-serif text-2xl lg:text-3xl mb-3 lg:mb-4">
            Hôtel <span className="italic text-ink-muted">Angers</span>
          </div>
          <p className="text-sm text-ink-muted max-w-md leading-relaxed">
            Le guide éditorial des plus beaux hôtels d'Angers et du Val de Loire.
            Une sélection rigoureuse pour voyageurs exigeants — du palais
            historique au pied-à-terre confidentiel.
          </p>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] mb-4 lg:mb-5 font-medium">Hébergements</h4>
          <ul className="space-y-3 text-sm text-ink-muted">
            <li><Link to="/hotels-centre-ville" className="hover:text-terracotta">Centre-ville</Link></li>
            <li><Link to="/hotels-pas-cher" className="hover:text-terracotta">Hôtels pas chers</Link></li>
            <li><Link to="/appart-hotel" className="hover:text-terracotta">Appart'Hôtel</Link></li>
            <li><Link to="/hotels-gare" className="hover:text-terracotta">Près de la Gare</Link></li>
            <li><Link to="/quartier-doutre" className="hover:text-terracotta">Quartier de la Doutre</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] mb-4 lg:mb-5 font-medium">Découvrir</h4>
          <ul className="space-y-3 text-sm text-ink-muted">
            <li><Link to="/que-faire" className="hover:text-terracotta">Que faire à Angers</Link></li>
            <li><Link to="/parc-expositions" className="hover:text-terracotta">Parc des Expositions</Link></li>
            <li><Link to="/destination" className="hover:text-terracotta">Destination Angers</Link></li>
          </ul>
        </div>
      </div>

      <div className="container-editorial border-t border-ink/10 py-6 lg:py-8 flex flex-col md:flex-row justify-between gap-3 lg:gap-4 text-xs text-ink-muted">
        <p>© {new Date().getFullYear()} HotelAngers.com — Édition indépendante.</p>
        <p className="max-w-xl md:text-right">
          Site affilié. Certains liens de réservation sont des liens partenaires
          GetYourGuide. Cela ne change rien à votre prix.
        </p>
      </div>
    </footer>
  );
}
