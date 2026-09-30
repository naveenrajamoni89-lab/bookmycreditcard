import { useLocation, useNavigate } from 'react-router-dom';
import { useCompare } from '../context/CompareContext';
import { useData } from '../context/DataContext';

/**
 * Global sticky bar shown whenever the user has selected cards to compare.
 * "Compare Now" navigates to the comparison page.
 */
export default function CompareBar() {
  const { compareIds, toggleCompare, clearCompare } = useCompare();
  const { cards } = useData();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  // The compare page shows its own table; keep the bar out of the way there.
  if (compareIds.length === 0 || pathname === '/compare-credit-cards') return null;

  const compareList = compareIds
    .map(id => cards.find(c => c.id === id))
    .filter(Boolean);

  return (
    <div className="pb-compare-bar" role="region" aria-label="Selected cards for comparison">
      <div className="pb-compare-bar-inner">
        <span className="pb-compare-bar-title">Compare cards ({compareList.length}/3)</span>
        <div className="pb-compare-slots">
          {compareList.map(card => (
            <div key={card.id} className="pb-compare-slot filled">
              <span>{card.name}</span>
              <button type="button" className="pb-compare-slot-remove" aria-label={`Remove ${card.name} from comparison`} onClick={() => toggleCompare(card.id)}>×</button>
            </div>
          ))}
        </div>
        <div className="pb-compare-bar-actions">
          <button type="button" className="pb-compare-cancel" onClick={clearCompare}>Clear</button>
          <button
            type="button"
            className="pb-compare-now"
            disabled={compareList.length < 2}
            onClick={() => navigate('/compare-credit-cards')}
          >
            Compare cards
          </button>
        </div>
      </div>
    </div>
  );
}
