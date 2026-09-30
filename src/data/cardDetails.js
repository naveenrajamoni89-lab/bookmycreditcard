import cardDetailsData from './cardDetailsData.json';

export const allCardDetails = cardDetailsData;

export const cardDetailsByRoute = new Map(
  cardDetailsData.flatMap(card => {
    const entries = [];
    const addPath = (p) => {
      if (!p) return;
      const clean = p.replace(/^\//, '').replace(/\/$/, '');
      entries.push([clean, card]);
      entries.push([`/${clean}`, card]);
      entries.push([`/${clean}/`, card]);
      const parts = clean.split('/').filter(Boolean);
      if (parts.length > 0) {
        entries.push([parts[parts.length - 1], card]);
        if (parts.length >= 2) {
          entries.push([`${parts[0]}/${parts[1]}`, card]);
        }
      }
    };

    addPath(card.route);
    addPath(card.detailRoute);
    if (Array.isArray(card.aliases)) {
      card.aliases.forEach(addPath);
    }
    return entries;
  })
);

export function getCardBySlugOrRoute(slugOrPath) {
  if (!slugOrPath) return null;
  const clean = slugOrPath.replace(/^\//, '').replace(/\/$/, '');
  return cardDetailsByRoute.get(clean) || cardDetailsByRoute.get(`/${clean}`) || cardDetailsByRoute.get(`/${clean}/`) || null;
}

export function getCardById(id) {
  const numId = Number(id);
  return allCardDetails.find(c => c.id === numId) || null;
}
