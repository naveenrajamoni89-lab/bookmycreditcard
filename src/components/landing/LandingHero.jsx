import { useState } from 'react';
import { Link } from 'react-router-dom';
import heroCards from '../../data/heroCards.json';
import './LandingHero.css';

export default function LandingHero() {
  const [replay, setReplay] = useState(0);
  const [loaded, setLoaded] = useState(() => new Set());

  const markLoaded = index => setLoaded(images => new Set(images).add(index));

  return (
    <section className="card-hero" aria-labelledby="card-hero-title">
      <div className="card-hero-heading">
        <p className="card-hero-eyebrow">YOUR NEXT GOOD MOVE</p>
        <h1 id="card-hero-title">Find the credit card<br />made for you.</h1>
        <p>Everyday rewards. Bigger adventures. A card for your kind of life.</p>
      </div>
      <div key={replay} className={`card-hero-fan ${loaded.size === heroCards.length ? 'is-ready' : ''}`}>
        <div className="card-hero-floor" aria-hidden="true" />
        <div className="card-hero-stack">
          {heroCards.map((card, index) => (
            <Link to={card.route} className={`card-hero-card card-hero-card-${index}${card.landscape ? ' is-landscape' : ''}`} key={index} aria-label={`View ${card.name}`} style={{ '--art-zoom': card.zoom }}>
              <div className="card-hero-face">
                <img src={`/images/cards/${card.file}`} alt="" draggable="false" loading="eager" fetchPriority={index === 2 ? 'high' : 'auto'} onLoad={() => markLoaded(index)} onError={() => markLoaded(index)} />
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="card-hero-actions">
        <Link to="/compare-credit-cards" className="card-hero-primary">Compare cards <span aria-hidden="true">↗</span></Link>
        <Link to="/credit-card-eligibility" className="card-hero-secondary">Check your eligibility <span aria-hidden="true">→</span></Link>
      </div>
      <div className="card-hero-footer">
        <Link to="/explore">Explore all cards <span aria-hidden="true">↗</span></Link>
        <button type="button" onClick={() => setReplay(value => value + 1)}>Replay spread <span aria-hidden="true">↻</span></button>
      </div>
    </section>
  );
}
