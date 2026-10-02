import { Link } from 'react-router-dom';
import { useState } from 'react';
import { creditCards } from '../data/cards';
import CardListingSection from '../components/CardListingSection';
import '../styles/home-editorial.css';

const carouselCards = [26, 5, 35, 39].map((id, index) => ({
  ...creditCards.find(card => card.id === id),
  zoom: [1.62, 1.72, 1.7, 1.68][index],
}));

function tiltCard(event) {
  if (event.pointerType !== 'mouse') return;
  const card = event.currentTarget;
  const rect = card.getBoundingClientRect();
  const x = Math.max(-1, Math.min(1, (event.clientX - rect.left) / rect.width * 2 - 1));
  const y = Math.max(-1, Math.min(1, (event.clientY - rect.top) / rect.height * 2 - 1));
  card.style.setProperty('--tilt-x', `${-y * 12}deg`);
  card.style.setProperty('--tilt-y', `${x * 12}deg`);
}

function resetTilt(event) {
  event.currentTarget.style.removeProperty('--tilt-x');
  event.currentTarget.style.removeProperty('--tilt-y');
}

export default function Explore() {
  const [paused, setPaused] = useState(false);
  return (
    <div className="landing-page-root bmcc-editorial bmcc-explore">
      <CardListingSection headingId="catalogue" title="Browse credit cards" />
      <section className={`bmcc-final-call${paused ? ' is-paused' : ''}`} aria-labelledby="explore-fit-title">
        <div className="bmcc-card-carousel">
          {carouselCards.map((card, index) => (
            <div className="bmcc-carousel-card" key={card.id} style={{ '--index': index, '--art-zoom': card.zoom }} onPointerMove={tiltCard} onPointerLeave={resetTilt} onPointerCancel={resetTilt}>
              <Link className="bmcc-carousel-face" to={card.detailRoute} aria-label={`View ${card.name}`}>
                <img src={`/images/cards/${card.id}.webp`} alt="" loading="lazy" draggable="false" />
              </Link>
            </div>
          ))}
        </div>
        <div className="bmcc-final-copy">
          <h2 id="explore-fit-title">A little clarity.<br />A better card.</h2>
          <Link to="/credit-card-eligibility">Find your fit</Link>
        </div>
        <button className="bmcc-carousel-pause" type="button" aria-label={paused ? 'Resume animation' : 'Pause animation'} aria-pressed={paused} onClick={() => setPaused(value => !value)}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            {paused ? <path d="M8 5v14l11-7z" /> : <path d="M6 5h4v14H6zm8 0h4v14h-4z" />}
          </svg>
        </button>
      </section>
    </div>
  );
}
