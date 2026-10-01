import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import Loader from '../components/ui/Loader';
import ErrorMessage from '../components/ui/ErrorMessage';
import { useData } from '../context/DataContext';
import { useCompare } from '../context/CompareContext';
import { useAuth } from '../context/AuthContext';
import { logActivity } from '../services/activityService';
import CardArtwork from '../components/CardArtwork';

const formatFee = (fee) => {
  if (fee === 0 || fee === '0' || fee === 'Free' || fee === 'Nil') return '₹0';
  const amount = Number(fee);
  return Number.isFinite(amount) ? `₹${amount.toLocaleString('en-IN')} + taxes` : 'Not listed';
};

function CompareShowcase({ cards }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [visible, setVisible] = useState(false);
  const stage = useRef(null);
  const featured = [4, 5, 6, 7, 10, 9].map(id => cards.find(card => Number(card.id) === id)).filter(Boolean);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting));
    observer.observe(stage.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let timer;
    const sync = () => {
      clearInterval(timer);
      if (!paused && visible && !document.hidden && !motion.matches && featured.length > 1) {
        timer = setInterval(() => setActive(index => (index + 1) % featured.length), 2400);
      }
    };
    sync();
    document.addEventListener('visibilitychange', sync);
    motion.addEventListener('change', sync);
    return () => {
      clearInterval(timer);
      document.removeEventListener('visibilitychange', sync);
      motion.removeEventListener('change', sync);
    };
  }, [paused, visible, featured.length]);

  return (
    <div ref={stage} className="compare-showcase" role="region" aria-label="Featured credit cards" aria-roledescription="carousel" data-moving={!paused && visible}>
      <div className="compare-card-stage" aria-hidden="true">
        <div className="compare-stage-ring" />
        {featured.map((card, index) => (
          <div key={card.id} className="compare-showcase-card" data-position={index === active ? 'front' : index === (active + 1) % featured.length ? 'next' : index === (active + featured.length - 1) % featured.length ? 'previous' : 'waiting'}>
            <CardArtwork card={card} width="280" height="260" loading="eager" />
          </div>
        ))}
      </div>
      <div className="compare-showcase-caption">
        <span className="compare-showcase-count">0{active + 1}<span> / 0{featured.length}</span></span>
        <p key={active}>{featured[active]?.name || 'Your next card is waiting'}</p>
      </div>
      <div className="compare-showcase-controls">
        <button type="button" aria-label="Previous featured card" disabled={!featured.length} onClick={() => setActive(index => (index + featured.length - 1) % featured.length)}><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m14 6-6 6 6 6M8 12h12" /></svg></button>
        <div className="compare-showcase-dots">{featured.map((card, index) => <button key={card.id} type="button" aria-label={`Show ${card.name}`} aria-pressed={index === active} onClick={() => setActive(index)} />)}</div>
        <button type="button" aria-label="Next featured card" disabled={!featured.length} onClick={() => setActive(index => (index + 1) % featured.length)}><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m10 6 6 6-6 6M4 12h12" /></svg></button>
        <button type="button" className="compare-motion-toggle" aria-label={paused ? 'Play card animation' : 'Pause card animation'} aria-pressed={paused} onClick={() => setPaused(value => !value)}><svg viewBox="0 0 24 24" aria-hidden="true">{paused ? <path d="m9 5 10 7-10 7Z" /> : <path d="M9 5v14M15 5v14" />}</svg></button>
      </div>
    </div>
  );
}

function CardPicker({ index, cards, onSelect }) {
  const [query, setQuery] = useState('');
  const picker = useRef(null);
  const input = useRef(null);
  const matches = cards.filter(card => `${card.name} ${card.bankName}`.toLowerCase().includes(query.trim().toLowerCase()));

  useEffect(() => {
    const dismiss = event => {
      if (!picker.current?.contains(event.target)) picker.current?.removeAttribute('open');
    };
    document.addEventListener('pointerdown', dismiss);
    return () => document.removeEventListener('pointerdown', dismiss);
  }, []);

  return (
    <details className="compare-card-picker" name="compare-card-picker" ref={picker} onBlur={event => {
      if (event.relatedTarget && !event.currentTarget.contains(event.relatedTarget)) picker.current.open = false;
    }} onToggle={event => {
      if (event.currentTarget.open) input.current?.focus({ preventScroll: true });
    }} onKeyDown={event => {
      if (event.key === 'Escape') {
        picker.current.open = false;
        picker.current.querySelector('summary').focus();
      }
    }}>
      <summary aria-label={`Choose card ${index + 1}`}><span className="compare-add-mark" aria-hidden="true" />Choose a card</summary>
      <div className="compare-picker-menu">
        <label htmlFor={`compare-search-${index}`}>Find your card</label>
        <input ref={input} id={`compare-search-${index}`} type="search" placeholder="Search by card or bank" value={query} onChange={event => setQuery(event.target.value)} />
        <div className="compare-picker-options">
          {matches.map(card => (
            <button type="button" key={card.id} onClick={() => onSelect(card.id)}>
              <CardArtwork card={card} width="64" height="42" />
              <span><strong>{card.name}</strong><small>{card.bankName}</small></span>
            </button>
          ))}
          {!matches.length && <p>No cards found. Try another card or bank.</p>}
        </div>
      </div>
    </details>
  );
}

export default function ComparePage() {
  const { cards, categories, loading, error } = useData();
  const { compareIds, toggleCompare, clearCompare, maxCompare } = useCompare();
  const { user } = useAuth();
  const shortlist = useRef(null);

  const addCard = id => {
    toggleCompare(id);
    requestAnimationFrame(() => {
      const next = shortlist.current?.querySelector('summary') || shortlist.current?.querySelector('button');
      next?.focus({ preventScroll: true });
    });
  };

  const selectedCards = compareIds
    .map(id => cards.find(c => c.id === id))
    .filter(Boolean);

  // Log a comparison once per selected combination.
  const comparedNames = selectedCards.map(c => c.name).join('|');
  useEffect(() => {
    if (!user || selectedCards.length < 2) return;
    logActivity(user, 'cards_compared', { cards: comparedNames.split('|') });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [comparedNames, user]);

  const availableCards = cards.filter(c => !compareIds.includes(c.id));

  const categoryNames = (card) =>
    categories.filter(c => card.categories.includes(c.id)).map(c => c.name).join(', ') || 'Not listed';

  return (
    <div className="decision-page decision-compare">
      <div className="container compare-breadcrumb"><Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Compare credit cards' }]} /></div>
      <header className="compare-intro container">
        <div className="compare-intro-copy">
          <h1>Good cards.<br /><span>Better together.</span></h1>
          <p>Compare credit cards, side by side.<br />Find what earns a place in your wallet.</p>
          <a className="compare-intro-link" href="#your-shortlist">Build your shortlist <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4v16m-6-6 6 6 6-6" /></svg></a>
        </div>
        <CompareShowcase cards={cards} />
      </header>

      <section className="pb-page-section decision-section">
        <div className="container">
          {loading ? (
            <Loader label="Loading cards..." />
          ) : error ? (
            <ErrorMessage message={error} />
          ) : (
            <>
              <div className="compare-desk-heading" id="your-shortlist">
                <div><h2>Your shortlist</h2><p>Pick two to compare. Add a third to break the tie.</p></div>
                <div className="compare-desk-actions"><span role="status">{selectedCards.length} of {maxCompare} selected</span>
                  {selectedCards.length > 0 && <button type="button" onClick={clearCompare}>Clear all</button>}
                </div>
              </div>
              <div ref={shortlist} className="pb-compare-pickers" aria-label="Cards selected for comparison">
                {Array.from({ length: maxCompare }, (_, i) => {
                  const card = selectedCards[i];
                  return card ? (
                    <div key={card.id} className="compare-slot is-filled">
                      <div className="compare-slot-top"><span>Card {i + 1}</span><button type="button" onClick={() => toggleCompare(card.id)} aria-label={`Remove ${card.name}`}>Remove</button></div>
                      <div className="compare-slot-art"><CardArtwork card={card} width="220" height="140" /></div>
                      <div className="pb-compare-picker-copy">
                        <span className="pb-compare-picker-bank">{card.bankName}</span>
                        <Link to={card.detailRoute || card.route} className="pb-compare-picker-name">{card.name}</Link>
                      </div>
                      <p className="compare-slot-fee">Annual fee <strong>{formatFee(card.annualFee)}</strong></p>
                      <div className="compare-slot-actions">
                        <button
                          type="button"
                          className="compare-slot-apply"
                          aria-label={`Apply now for ${card.name}`}
                        >
                          Apply now
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div key={`empty-${i}`} className="compare-slot">
                      <div className="compare-slot-top"><span>Card {i + 1}</span><span>{i === 2 ? 'Optional' : 'Your pick'}</span></div>
                      <div className="compare-empty-art" aria-hidden="true"><span className="compare-add-mark" /></div>
                      <h3>{['The first contender', 'A worthy challenger', 'The wild card'][i]}</h3>
                      <p>{['Have a card in mind? Start here.', 'See how another card stacks up.', 'Make it a three-way comparison.'][i]}</p>
                      <CardPicker index={i} cards={availableCards} onSelect={addCard} />
                    </div>
                  );
                })}
              </div>

              {selectedCards.length >= 2 ? (
                <div className="pb-compare-results">
                  <div className="pb-compare-results-heading">
                    <h2>Side-by-side details</h2>
                    <p>Check issuer terms for current charges and conditions.</p>
                  </div>
                  <p className="pb-compare-scroll-hint">Scroll sideways to view every selected card.</p>
                  <div className="pb-table-wrap" tabIndex="0" aria-label="Card comparison table, scroll horizontally">
                  <table className="pb-table pb-compare-table">
                    <thead>
                      <tr>
                        <th scope="col">Feature</th>
                        {selectedCards.map(card => (
                          <th scope="col" key={card.id}>{card.name}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">Issuer</th>
                        {selectedCards.map(card => <td key={card.id}>{card.bankName}</td>)}
                      </tr>
                      <tr>
                        <th scope="row">Joining fee</th>
                        {selectedCards.map(card => <td key={card.id}>{formatFee(card.joiningFee)}</td>)}
                      </tr>
                      <tr>
                        <th scope="row">Annual fee</th>
                        {selectedCards.map(card => <td key={card.id}>{formatFee(card.annualFee)}</td>)}
                      </tr>
                      <tr>
                        <th scope="row">Suited for</th>
                        {selectedCards.map(card => <td key={card.id}>{categoryNames(card)}</td>)}
                      </tr>
                      <tr>
                        <th scope="row">Key benefits</th>
                        {selectedCards.map(card => (
                          <td key={card.id}>
                            <ul className="pb-compare-benefit-list">
                              {(card.benefits || []).map((benefit, index) => <li key={index}>{benefit.text}</li>)}
                            </ul>
                            {!card.benefits?.length && 'Not listed'}
                          </td>
                        ))}
                      </tr>
                      <tr>
                        <th scope="row">Next step</th>
                        {selectedCards.map(card => (
                          <td key={card.id}>
                            <div className="pb-compare-action-cell">
                              <button
                                type="button"
                                className="pb-compare-apply-btn"
                                aria-label={`Apply now for ${card.name}`}
                              >
                                Apply now
                              </button>
                              <Link to="/credit-card-eligibility" className="pb-compare-eligibility">
                                Check basic eligibility
                              </Link>
                            </div>
                          </td>
                        ))}
                      </tr>
                    </tbody>
                  </table>
                  </div>
                </div>
              ) : (
                <div className="compare-start">
                  <div><h2>{selectedCards.length ? 'One more, and it’s a match-up.' : 'Your next card deserves a little competition.'}</h2>
                    <p>{selectedCards.length ? 'Choose a second card to reveal fees, benefits and fit, side by side.' : 'Bring your favourites to the table. We’ll line up the fees, benefits and details so you can make the call.'}</p>
                    <Link to="/explore">Explore the card catalogue <span aria-hidden="true">↗</span></Link>
                  </div>
                  <div className="compare-preview" aria-hidden="true"><span>The details that matter</span><div>Joining & annual fees <i /><i /></div><div>Rewards & benefits <i /><i /></div><div>What suits you <i /><i /></div></div>
                </div>
              )}

              <p className="compare-save-note">Your shortlist stays with you as you browse.</p>
            </>
          )}
        </div>
      </section>
    </div>
  );
}
