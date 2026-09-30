export default function matchesCardFilter(card, filter) {
  if (filter.startsWith('category:')) return (card.categories || []).includes(filter.slice(9));
  if (filter.startsWith('bank:')) return card.bank === filter.slice(5);
  if (filter.startsWith('network:')) {
    const net = filter.slice(8);
    const cardNets = Array.isArray(card.networks) ? card.networks : [card.network].filter(Boolean);
    return cardNets.includes(net);
  }
  return true;
}
