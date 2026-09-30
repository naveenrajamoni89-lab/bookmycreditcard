import { useState } from 'react';
import { feeOptions } from '../data/cards';
import { useData } from '../context/DataContext';

export default function FilterSidebar({ filters, onChange, onClear, className = '' }) {
  const [showAllBanks, setShowAllBanks] = useState(false);
  const { banks, categories, cardNetworks = [] } = useData();
  const visibleBanks = showAllBanks ? banks : banks.slice(0, 5);

  const toggle = (type, id) => {
    const selected = filters[type] || [];
    onChange({ ...filters, [type]: selected.includes(id) ? selected.filter(value => value !== id) : [...selected, id] });
  };

  return (
    <aside className={`pb-filter ${className}`} id="card-filters" aria-label="Filter cards">
      <div className="pb-filter-header">
        <h3 className="pb-filter-title">Filter cards</h3>
        <button type="button" className="pb-filter-clear" onClick={onClear}>Clear all</button>
      </div>
      <div className="pb-filter-body">
        <fieldset className="pb-filter-section">
          <legend className="pb-filter-section-title">Bank</legend>
          <div className="pb-filter-items">
            {visibleBanks.map(bank => (
              <label key={bank.id} className="pb-filter-item">
                <input type="checkbox" checked={filters.banks.includes(bank.id)} onChange={() => toggle('banks', bank.id)} />
                <span className="pb-filter-label">{bank.name}</span>
              </label>
            ))}
            {banks.length > 5 && <button type="button" className="pb-filter-show-more" onClick={() => setShowAllBanks(open => !open)}>{showAllBanks ? 'Show fewer banks' : 'Show all banks'}</button>}
          </div>
        </fieldset>
        <fieldset className="pb-filter-section">
          <legend className="pb-filter-section-title">Card network</legend>
          <div className="pb-filter-items">
            {cardNetworks.map(network => (
              <label key={network.id} className="pb-filter-item">
                <input
                  type="checkbox"
                  checked={(filters.networks || []).includes(network.id)}
                  onChange={() => toggle('networks', network.id)}
                />
                <span className="pb-filter-label">{network.name}</span>
              </label>
            ))}
          </div>
        </fieldset>
        <fieldset className="pb-filter-section">
          <legend className="pb-filter-section-title">Benefit</legend>
          <div className="pb-filter-items">
            {categories.filter(category => category.showInFilter !== false).map(category => {
              const checked = filters.categories.includes(category.id);
              return (
                <label key={category.id} className="pb-filter-item">
                  <input type="checkbox" checked={checked} disabled={!checked && filters.categories.length >= 3} onChange={() => toggle('categories', category.id)} />
                  <span className="pb-filter-label">{category.name}</span>
                </label>
              );
            })}
            <p className="pb-filter-help">Choose up to three benefits.</p>
          </div>
        </fieldset>
        <fieldset className="pb-filter-section">
          <legend className="pb-filter-section-title">Joining fee</legend>
          <div className="pb-filter-items">
            {feeOptions.map(fee => (
              <label key={fee.id} className="pb-filter-item">
                <input type="checkbox" checked={filters.fee.includes(fee.id)} onChange={() => toggle('fee', fee.id)} />
                <span className="pb-filter-label">{fee.label}</span>
              </label>
            ))}
          </div>
        </fieldset>
      </div>
    </aside>
  );
}
