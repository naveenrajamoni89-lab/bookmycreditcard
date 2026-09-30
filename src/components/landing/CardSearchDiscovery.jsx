import { useEffect, useMemo, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useData } from '../../context/DataContext';
import CardArtwork from '../CardArtwork';
import matchesCardFilter from '../../utils/matchesCardFilter';

export default function CardSearchDiscovery({
  query: propQuery,
  onQueryChange: propOnQueryChange,
  searchFilter: propSearchFilter,
  onSearchFilterChange: propOnSearchFilterChange,
}) {
  const { cards, categories, banks, cardNetworks = [] } = useData();
  const navigate = useNavigate();
  const [internalQuery, setInternalQuery] = useState('');
  const [internalSearchFilter, setInternalSearchFilter] = useState('all');

  const query = propQuery !== undefined ? propQuery : internalQuery;
  const onQueryChange = propOnQueryChange || setInternalQuery;
  const searchFilter = propSearchFilter !== undefined ? propSearchFilter : internalSearchFilter;
  const onSearchFilterChange = propOnSearchFilterChange || setInternalSearchFilter;

  const [open, setOpen] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const searchRef = useRef(null);
  const inputRef = useRef(null);
  const trimmedQuery = query.trim().toLocaleLowerCase('en-IN');
  const filterLabel = searchFilter === 'all' ? 'Cards' : searchFilter.startsWith('category:')
    ? categories.find(category => category.id === searchFilter.slice(9))?.name || 'Cards'
    : searchFilter.startsWith('network:')
    ? cardNetworks.find(network => network.id === searchFilter.slice(8))?.name || 'Cards'
    : banks.find(bank => bank.id === searchFilter.slice(5))?.name || 'Cards';
  const showSuggestions = open && Boolean(trimmedQuery || searchFilter !== 'all');

  useEffect(() => {
    if (!open && !filterOpen && !mobileOpen) return;
    const closeOutside = event => {
      if (searchRef.current && !searchRef.current.contains(event.target)) { setOpen(false); setFilterOpen(false); setMobileOpen(false); }
    };
    document.addEventListener('pointerdown', closeOutside);
    return () => document.removeEventListener('pointerdown', closeOutside);
  }, [open, filterOpen, mobileOpen]);

  const matches = useMemo(() => {
    if (!trimmedQuery && searchFilter === 'all') return [];
    return cards.filter(card => matchesCardFilter(card, searchFilter) && (!trimmedQuery ||
      [card.name, card.bankName, ...(card.categories || []), ...(card.benefits || []).map(benefit => benefit.text)]
        .some(value => String(value || '').toLocaleLowerCase('en-IN').includes(trimmedQuery)))).slice(0, 5);
  }, [cards, trimmedQuery, searchFilter]);

  const chooseFilter = value => {
    onSearchFilterChange(value);
    setFilterOpen(false);
    setOpen(value !== 'all' || Boolean(trimmedQuery));
    requestAnimationFrame(() => inputRef.current?.focus({ preventScroll: true }));
  };

  return (
    <div id="search" className={`landing-search-section header-card-search ${mobileOpen ? 'is-open' : ''}`} ref={searchRef}>
      <div className="search-input-field">
        <input
          ref={inputRef}
          id="search-input"
          type="search"
          aria-label="Search credit cards"
          autoComplete="off"
          placeholder="What credit card are you looking for?"
          value={query}
          onChange={event => { onQueryChange(event.target.value); setOpen(true); }}
          onFocus={() => setOpen(Boolean(trimmedQuery || searchFilter !== 'all'))}
          onKeyDown={event => {
            if (event.key === 'Escape') { setOpen(false); setFilterOpen(false); setMobileOpen(false); }
            if (event.key === 'Enter') {
              setOpen(false);
              setFilterOpen(false);
              setMobileOpen(false);
              if (matches.length > 0) {
                navigate(matches[0].detailRoute || matches[0].route);
              } else {
                navigate('/explore');
              }
            }
          }}
          aria-controls="search-suggestions"
          aria-expanded={showSuggestions}
        />
        <button type="button" className="header-search-category" aria-haspopup="menu" aria-expanded={filterOpen} aria-controls="header-search-filters" onClick={() => { setFilterOpen(value => !value); setOpen(false); }}><span className="header-search-category-label">{filterLabel}</span><svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><path d="m2.5 4.5 3.5 3 3.5-3" /></svg></button>
        <button type="button" className="header-search-submit" aria-label="Show matching credit cards" onClick={() => {
          if (window.matchMedia('(max-width: 800px)').matches && !mobileOpen) { setMobileOpen(true); requestAnimationFrame(() => inputRef.current?.focus({ preventScroll: true })); return; }
          setOpen(false);
          setMobileOpen(false);
          if (matches.length > 0) {
            navigate(matches[0].detailRoute || matches[0].route);
          } else if (trimmedQuery || searchFilter !== 'all') {
            navigate('/explore');
          } else {
            requestAnimationFrame(() => inputRef.current?.focus({ preventScroll: true }));
          }
        }}>
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m16 16 5 5"/></svg>
        </button>
      </div>
      {filterOpen && <div id="header-search-filters" className="header-search-filter-menu" role="menu" aria-label="Filter credit cards">
        <button type="button" role="menuitemradio" aria-checked={searchFilter === 'all'} onClick={() => chooseFilter('all')}>All cards</button>
        <span className="header-search-filter-heading">By network</span>
        {cardNetworks.map(network => <button key={network.id} type="button" role="menuitemradio" aria-checked={searchFilter === `network:${network.id}`} onClick={() => chooseFilter(`network:${network.id}`)}>{network.name}</button>)}
        <span className="header-search-filter-heading">By benefit</span>
        {categories.filter(category => category.showInFilter !== false).map(category => <button key={category.id} type="button" role="menuitemradio" aria-checked={searchFilter === `category:${category.id}`} onClick={() => chooseFilter(`category:${category.id}`)}>{category.name}</button>)}
        <span className="header-search-filter-heading">By bank</span>
        {banks.map(bank => <button key={bank.id} type="button" role="menuitemradio" aria-checked={searchFilter === `bank:${bank.id}`} onClick={() => chooseFilter(`bank:${bank.id}`)}>{bank.name}</button>)}
      </div>}
      {showSuggestions && (
        <div id="search-suggestions" className="search-results-dropdown" aria-label="Matching cards">
          {matches.length ? matches.map(card => (
            <Link key={card.id} to={card.detailRoute || card.route} onClick={() => { setOpen(false); setMobileOpen(false); }} className="search-result-row">
              <CardArtwork card={card} className="search-card-art" width="62" height="40" />
              <span><strong>{card.name}</strong><small>{card.bankName}</small></span>
              <span aria-hidden="true">↗</span>
            </Link>
          )) : <p className="search-no-results">No matching cards. Try another bank or benefit.</p>}
        </div>
      )}
    </div>
  );
}
