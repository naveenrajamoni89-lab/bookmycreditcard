import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useData } from '../context/DataContext';
import FilterSidebar from './FilterSidebar';
import CreditCardItem from './CreditCardItem';
import Loader from './ui/Loader';
import ErrorMessage from './ui/ErrorMessage';

const emptyFilters = () => ({ banks: [], categories: [], networks: [], fee: [] });

export default function CardListingSection({ cards: cardsProp, headingId, title = 'Browse credit cards', searchQuery = '' }) {
  const { cards: allCards, loading, error } = useData();
  const [searchParams] = useSearchParams();
  const bankParam = searchParams.get('bank');
  const [filters, setFilters] = useState(emptyFilters);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(15);
  const sourceCards = cardsProp || allCards;
  const query = searchQuery.trim().toLocaleLowerCase('en-IN');

  useEffect(() => {
    if (bankParam) setFilters(previous => ({ ...previous, banks: [bankParam] }));
  }, [bankParam]);

  const filtered = useMemo(() => sourceCards.filter(card => {
    if (query && ![card.name, card.bankName, ...(card.categories || []), ...(card.benefits || []).map(benefit => benefit.text)]
      .some(value => String(value || '').toLocaleLowerCase('en-IN').includes(query))) return false;
    if (filters.banks.length && !filters.banks.includes(card.bank)) return false;
    if (filters.networks?.length && !filters.networks.some(net => {
      const cardNets = Array.isArray(card.networks) ? card.networks : [card.network].filter(Boolean);
      return cardNets.includes(net);
    })) return false;
    if (filters.categories.length && !filters.categories.some(category => (card.categories || []).includes(category))) return false;
    if (filters.fee.length) {
      const amount = Number(card.joiningFee);
      if (!Number.isFinite(amount) || !filters.fee.some(range => {
        if (range === 'free') return amount === 0;
        if (range === 'upto500') return amount > 0 && amount <= 500;
        if (range === 'upto1000') return amount > 500 && amount <= 1000;
        if (range === 'upto5000') return amount > 1000 && amount <= 5000;
        return amount > 5000;
      })) return false;
    }
    return true;
  }), [sourceCards, query, filters]);

  useEffect(() => setVisibleCount(15), [filters, query, sourceCards]);

  const activeFilterCount = filters.banks.length + (filters.networks?.length || 0) + filters.categories.length + filters.fee.length;
  const displayedCards = filtered.slice(0, visibleCount);
  const clearFilters = () => setFilters(emptyFilters());

  return (
    <section className="pb-listing" id="apply-for-credit-card">
      <div className="pb-listing-inner">
        <div className="pb-listing-head" id={headingId}>
          <div><h2 className="pb-listing-heading">{title}</h2><p>Compare the details that matter before you decide.</p></div>
          <span className="pb-listing-count" aria-live="polite">{loading ? 'Loading cards' : `Showing ${displayedCards.length} of ${filtered.length} cards`}</span>
        </div>
        <button
          type="button"
          className="pb-mobile-filter-toggle"
          aria-expanded={filtersOpen}
          aria-controls="card-filters"
          onClick={() => setFiltersOpen(open => !open)}
        >
          {filtersOpen ? 'Close filters' : `Filters${activeFilterCount ? ` (${activeFilterCount})` : ''}`}
          <span aria-hidden="true">{filtersOpen ? '−' : '+'}</span>
        </button>
        <div className="pb-listing-layout">
          <FilterSidebar filters={filters} onChange={setFilters} onClear={clearFilters} className={filtersOpen ? 'is-open' : ''} />
          <div className="pb-listing-results">
            {loading ? <Loader label="Loading credit cards..." /> : error ? <ErrorMessage message={error} /> : filtered.length === 0 ? (
              <div className="pb-listing-empty">
                <h3>No cards found</h3>
                <p>Try a different search or clear your filters.</p>
                <button type="button" onClick={clearFilters}>Clear filters</button>
              </div>
            ) : (
              <>
                <div className="pb-card-list">{displayedCards.map(card => <CreditCardItem key={card.id} card={card} />)}</div>
                {visibleCount < filtered.length && <button type="button" className="pb-show-more" onClick={() => setVisibleCount(count => Math.min(count + 15, filtered.length))}>Show more cards <span aria-hidden="true">↓</span></button>}
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
