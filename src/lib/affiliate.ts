// GetYourGuide affiliate config — partner_id is appended to every link
export const GYG_PARTNER_ID = "0IQTGX8";

const BASE = "https://www.getyourguide.com";

// Generic search URL on GYG with our partner_id
export function gygSearchUrl(q: string): string {
  const params = new URLSearchParams({
    partner_id: GYG_PARTNER_ID,
    q,
  });
  return `${BASE}/s/?${params.toString()}`;
}

// Curated location pages
export const GYG_ANGERS_URL = `${BASE}/angers-l165281/?partner_id=${GYG_PARTNER_ID}`;
export const GYG_LOIRE_URL = `${BASE}/loire-valley-l1325/?partner_id=${GYG_PARTNER_ID}`;
export const GYG_SAUMUR_URL = `${BASE}/saumur-l32877/?partner_id=${GYG_PARTNER_ID}`;
export const GYG_NANTES_URL = `${BASE}/nantes-l826/?partner_id=${GYG_PARTNER_ID}`;

// Category shortcuts (search-based for now)
export const GYG_ANGERS_TOURS = gygSearchUrl("Angers guided tour");
export const GYG_ANGERS_WINE = gygSearchUrl("Anjou wine tasting");
export const GYG_ANGERS_CHATEAU = gygSearchUrl("Château d'Angers");
export const GYG_ANGERS_CRUISE = gygSearchUrl("Loire river cruise Angers");
export const GYG_ANGERS_BIKE = gygSearchUrl("Angers bike tour");
export const GYG_ANGERS_FOOD = gygSearchUrl("Angers food tour");

// Backwards-compat alias used in earlier code
export function bookingSearchUrl(query: string): string {
  return gygSearchUrl(query);
}

