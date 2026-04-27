// GetYourGuide affiliate config
export const GYG_PARTNER_ID = "0IQTGX8";

// Build a GetYourGuide affiliate URL.
// q = search query (e.g. "Angers", "Château d'Angers")
export function gygSearchUrl(q: string): string {
  const params = new URLSearchParams({
    partner_id: GYG_PARTNER_ID,
    q,
  });
  return `https://www.getyourguide.com/s/?${params.toString()}`;
}

// Direct location link (Angers)
export const GYG_ANGERS_URL = `https://www.getyourguide.com/angers-l165281/?partner_id=${GYG_PARTNER_ID}`;
export const GYG_LOIRE_URL = `https://www.getyourguide.com/loire-valley-l1325/?partner_id=${GYG_PARTNER_ID}`;

// Booking.com style search URL with our affiliate redirect via GYG
// (We use GYG for hotels-adjacent activities + accommodations)
export function bookingSearchUrl(query: string): string {
  return gygSearchUrl(query);
}
