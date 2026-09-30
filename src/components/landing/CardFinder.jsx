import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { useData } from '../../context/DataContext';
import CardArtwork from '../CardArtwork';

const priorities = [
  { id: 'cashback', label: 'Cashback' },
  { id: 'travel', label: 'Travel' },
  { id: 'fuel', label: 'Fuel' },
  { id: 'rewards', label: 'Rewards' },
  { id: 'lounge-access', label: 'Lounge access' },
  { id: 'lifetime-free', label: 'No annual fee' },
];

export default function CardFinder() {
  const { cards } = useData();
  const [priority, setPriority] = useState('cashback');
  const [fee, setFee] = useState('any');
  const [monthlySpend, setMonthlySpend] = useState('');

  const matches = useMemo(() => cards.filter(card => {
    const hasPriority = (card.categories || []).includes(priority) || (priority === 'lifetime-free' && card.annualFee === 0);
    const annualFee = Number(card.annualFee);
    const feeMatches = fee === 'any' || (Number.isFinite(annualFee) && (fee === 'free' ? annualFee === 0 : annualFee <= Number(fee)));
    return hasPriority && feeMatches;
  }).slice(0, 3), [cards, priority, fee]);

  return (
    <details className="landing-finder" id="card-finder">
      <summary><span><strong>Not sure where to start?</strong> Choose a benefit and fee range to see matching cards.</span><span className="landing-finder-open"><span className="finder-closed">Find a fit ↗</span><span className="finder-expanded">Hide matches ↑</span></span></summary>
      <div className="landing-finder-body">
        <div className="landing-finder-fields">
          <label>What matters most?
            <select value={priority} onChange={event => setPriority(event.target.value)}>
              {priorities.map(item => <option key={item.id} value={item.id}>{item.label}</option>)}
            </select>
          </label>
          <label>Maximum annual fee
            <select value={fee} onChange={event => setFee(event.target.value)}>
              <option value="any">Any fee</option>
              <option value="free">No annual fee</option>
              <option value="500">Up to ₹500</option>
              <option value="1000">Up to ₹1,000</option>
              <option value="5000">Up to ₹5,000</option>
            </select>
          </label>
          <label>Estimated monthly card spend
            <input type="number" min="0" step="500" inputMode="numeric" placeholder="Optional, for your reference" value={monthlySpend} onChange={event => setMonthlySpend(event.target.value)} />
          </label>
        </div>
        <p className="landing-finder-note">
          {monthlySpend && Number(monthlySpend) > 0 ? `That is about ₹${(Number(monthlySpend) * 12).toLocaleString('en-IN')} a year. ` : ''}
          Matches use benefit categories and annual fee; spending does not change the ranking.
        </p>
        <div className="landing-finder-results" aria-live="polite">
          {matches.length ? matches.map(card => (
            <Link key={card.id} to={card.detailRoute || card.route} className="landing-finder-match">
              <CardArtwork card={card} className="finder-card-art" width="92" height="60" />
              <span><strong>{card.name}</strong><small>{card.bankName} · {card.annualFee === 0 ? 'No annual fee' : `₹${Number(card.annualFee).toLocaleString('en-IN')} annual fee`}</small></span>
              <span aria-hidden="true">↗</span>
            </Link>
          )) : <p>No cards match those filters. Try a higher fee range or another benefit.</p>}
        </div>
      </div>
    </details>
  );
}
