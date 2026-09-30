import { Link } from 'react-router-dom';
import { useData } from '../context/DataContext';
import { useCompare } from '../context/CompareContext';
import { useAuth } from '../context/AuthContext';
import { logActivity } from '../services/activityService';
import CardArtwork from './CardArtwork';

function formatFee(value) {
  if (value === 0 || value === '0' || value === 'Nil' || value === 'Free') return '₹0';
  const amount = Number(value);
  return Number.isFinite(amount) ? `₹${amount.toLocaleString('en-IN')}` : 'Check issuer';
}

export default function CreditCardItem({ card }) {
  const { categories, cardNetworks = [] } = useData();
  const { isCompared, isFull, toggleCompare } = useCompare();
  const { user } = useAuth();
  const compared = isCompared(card.id);
  const compareDisabled = isFull && !compared;
  const detailUrl = card.detailRoute || card.route || `/credit-card/${card.id}`;
  const networkName = cardNetworks.find(n => n.id === card.network)?.name || '';
  const tags = categories.filter(category => (card.categories || []).includes(category.id)).slice(0, 2);
  const viewCard = () => logActivity(user, 'card_viewed', { card: card.name, bank: card.bankName });
  const changeCompare = () => {
    logActivity(user, compared ? 'compare_removed' : 'compare_added', { card: card.name });
    toggleCompare(card.id);
  };

  return (
    <article className="pb-card-item">
      <div className="pb-card-left">
        <Link to={detailUrl} className="pb-card-img-wrap" onClick={viewCard} aria-label={`View ${card.name}`}>
          <CardArtwork card={card} className="pb-card-img" width="200" height="126" />
        </Link>
        <label className="pb-card-compare">
          <input type="checkbox" checked={compared} disabled={compareDisabled} onChange={changeCompare} />
          <span>Compare</span>
        </label>
      </div>

      <div className="pb-card-right">
        <div className="pb-card-header">
          <div>
            <p className="pb-card-bank">{card.bankName}</p>
            <Link to={detailUrl} className="pb-card-name-link" onClick={viewCard}>{card.name}</Link>
          </div>
          <div className="pb-card-tags">
            {networkName && <span className="pb-card-tag pb-card-tag-network">{networkName}</span>}
            {tags.map(tag => <span key={tag.id} className="pb-card-tag">{tag.name}</span>)}
          </div>
        </div>

        <div className="pb-card-benefits">
          {(card.benefits || []).slice(0, 2).map((benefit, index) => <p key={index} className="pb-card-benefit">{benefit.text}</p>)}
        </div>

        <div className="pb-card-bottom">
          <dl className="pb-card-fees">
            <div><dt>Joining fee</dt><dd>{formatFee(card.joiningFee)}</dd></div>
            <div><dt>Annual fee</dt><dd>{formatFee(card.annualFee)}</dd></div>
          </dl>
          <div className="pb-card-actions">
            <Link to={detailUrl} className="pb-read-more" onClick={viewCard}>View details <span aria-hidden="true">↗</span></Link>
            <Link to="/credit-card-eligibility" className="pb-check-eligibility" onClick={() => logActivity(user, 'eligibility_click', { card: card.name, bank: card.bankName })}>Check eligibility</Link>
          </div>
        </div>
      </div>
    </article>
  );
}
