import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useData } from '../context/DataContext';
import { useCompare } from '../context/CompareContext';
import { useAuth } from '../context/AuthContext';
import { logActivity } from '../services/activityService';
import CardArtwork from './CardArtwork';

function formatFee(value) {
  if (value === 0 || value === '0' || value === 'Nil' || value === 'Free') return '₹0';
  const amount = Number(value);
  return Number.isFinite(amount) ? `₹${amount.toLocaleString('en-IN')}` : '₹0';
}

/**
 * 3D / Isometric Illustrative Service Graphics for Tags
 * Replaces plain emoji / unicode symbols with rich dimensional vector service illustrations
 */
function TagIllustration({ tagName = '' }) {
  const lower = tagName.toLowerCase();

  if (lower.includes('travel') || lower.includes('flight') || lower.includes('miles')) {
    return (
      <svg width="15" height="15" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="bmcc-tag-illust">
        <defs>
          <linearGradient id="ti-tr" x1="2" y1="2" x2="18" y2="18" gradientUnits="userSpaceOnUse">
            <stop stopColor="#38BDF8" />
            <stop offset="1" stopColor="#0284C7" />
          </linearGradient>
        </defs>
        <path d="M16.5 3.5C17.2 4.2 17 5.5 16 6.5L11 11.5L9.5 17L7.5 15L8.5 11.5L5 8L1.5 9L0.5 7.5L5.5 4.5L10 2.5C11 1.5 12.5 1.5 13.5 2.5L16.5 3.5Z" fill="url(#ti-tr)" />
        <path d="M16.5 3.5L10 10L11 11.5L16 6.5C16.8 5.7 17 4.5 16.5 3.5Z" fill="#BAE6FD" />
      </svg>
    );
  }

  if (lower.includes('cashback') || lower.includes('valueback')) {
    return (
      <svg width="15" height="15" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="bmcc-tag-illust">
        <defs>
          <linearGradient id="ti-cb" x1="3" y1="3" x2="17" y2="17" gradientUnits="userSpaceOnUse">
            <stop stopColor="#34D399" />
            <stop offset="1" stopColor="#059669" />
          </linearGradient>
        </defs>
        <circle cx="10" cy="10" r="7.5" fill="url(#ti-cb)" />
        <circle cx="10" cy="10" r="5.5" stroke="#A7F3D0" strokeWidth="0.8" opacity="0.8" />
        <text x="10" y="13.2" textAnchor="middle" fontSize="8.5" fontWeight="900" fill="#FFFFFF" fontFamily="sans-serif">₹</text>
      </svg>
    );
  }

  if (lower.includes('reward') || lower.includes('points')) {
    return (
      <svg width="15" height="15" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="bmcc-tag-illust">
        <defs>
          <linearGradient id="ti-rw" x1="4" y1="3" x2="16" y2="17" gradientUnits="userSpaceOnUse">
            <stop stopColor="#E879F9" />
            <stop offset="1" stopColor="#9333EA" />
          </linearGradient>
        </defs>
        <path d="M6 6L10 3L14 6L16 10L10 17L4 10L6 6Z" fill="url(#ti-rw)" />
        <path d="M6 6L10 9L14 6" stroke="#F5D0FE" strokeWidth="0.8" />
        <path d="M10 9L10 17" stroke="#F5D0FE" strokeWidth="0.8" />
      </svg>
    );
  }

  if (lower.includes('free') || lower.includes('lifetime')) {
    return (
      <svg width="15" height="15" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="bmcc-tag-illust">
        <defs>
          <linearGradient id="ti-fr" x1="3" y1="3" x2="17" y2="17" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FDE047" />
            <stop offset="1" stopColor="#D97706" />
          </linearGradient>
        </defs>
        <circle cx="10" cy="10" r="7.5" fill="url(#ti-fr)" />
        <path d="M10 5.5L11.3 8.3L14.3 8.6L12 10.7L12.7 13.6L10 12.1L7.3 13.6L8 10.7L5.7 8.6L8.7 8.3L10 5.5Z" fill="#78350F" />
      </svg>
    );
  }

  if (lower.includes('shop') || lower.includes('online')) {
    return (
      <svg width="15" height="15" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="bmcc-tag-illust">
        <defs>
          <linearGradient id="ti-sh" x1="4" y1="4" x2="16" y2="18" gradientUnits="userSpaceOnUse">
            <stop stopColor="#2DD4BF" />
            <stop offset="1" stopColor="#0F766E" />
          </linearGradient>
        </defs>
        <rect x="4.5" y="6.5" width="11" height="10" rx="2" fill="url(#ti-sh)" />
        <path d="M7.5 7.5V5.5C7.5 4.12 8.62 3 10 3C11.38 3 12.5 4.12 12.5 5.5V7.5" stroke="#CCFBF1" strokeWidth="1.3" strokeLinecap="round" />
        <circle cx="10" cy="11.5" r="1.2" fill="#FFFFFF" />
      </svg>
    );
  }

  if (lower.includes('lounge')) {
    return (
      <svg width="15" height="15" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="bmcc-tag-illust">
        <defs>
          <linearGradient id="ti-lg" x1="3" y1="3" x2="17" y2="17" gradientUnits="userSpaceOnUse">
            <stop stopColor="#818CF8" />
            <stop offset="1" stopColor="#4338CA" />
          </linearGradient>
        </defs>
        <rect x="4.5" y="6" width="11" height="9" rx="2" fill="url(#ti-lg)" />
        <rect x="3" y="9" width="3" height="6" rx="1" fill="#3730A3" />
        <rect x="14" y="9" width="3" height="6" rx="1" fill="#3730A3" />
        <circle cx="10" cy="5" r="1.3" fill="#FDE047" />
        <line x1="6" y1="15" x2="5" y2="18" stroke="#64748B" strokeWidth="1.3" strokeLinecap="round" />
        <line x1="14" y1="15" x2="15" y2="18" stroke="#64748B" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    );
  }

  if (lower.includes('rupay') || lower.includes('upi')) {
    return (
      <svg width="15" height="15" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="bmcc-tag-illust">
        <defs>
          <linearGradient id="ti-rp" x1="5" y1="2" x2="15" y2="18" gradientUnits="userSpaceOnUse">
            <stop stopColor="#22D3EE" />
            <stop offset="1" stopColor="#0891B2" />
          </linearGradient>
        </defs>
        <path d="M11 2L4 11H10L8 18L16 9H10L11 2Z" fill="url(#ti-rp)" />
        <path d="M11 2L7 11H10L8 18L10 10H8L11 2Z" fill="#CFFAFE" opacity="0.6" />
      </svg>
    );
  }

  if (lower.includes('fuel')) {
    return (
      <svg width="15" height="15" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="bmcc-tag-illust">
        <defs>
          <linearGradient id="ti-fl" x1="4" y1="3" x2="16" y2="17" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FB923C" />
            <stop offset="1" stopColor="#C2410C" />
          </linearGradient>
        </defs>
        <path d="M10 2.5C10 2.5 5 8 5 12C5 14.8 7.2 17 10 17C12.8 17 15 14.8 15 12C15 8 10 2.5 10 2.5Z" fill="url(#ti-fl)" />
        <ellipse cx="8.5" cy="11.5" rx="1.3" ry="2.6" fill="#FED7AA" opacity="0.8" transform="rotate(-20 8.5 11.5)" />
      </svg>
    );
  }

  if (lower.includes('premium') || lower.includes('metal')) {
    return (
      <svg width="15" height="15" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="bmcc-tag-illust">
        <defs>
          <linearGradient id="ti-pr" x1="3" y1="3" x2="17" y2="17" gradientUnits="userSpaceOnUse">
            <stop stopColor="#475569" />
            <stop offset="1" stopColor="#0F172A" />
          </linearGradient>
        </defs>
        <rect x="3" y="5.5" width="14" height="9.5" rx="2" fill="url(#ti-pr)" />
        <rect x="5" y="8" width="3.5" height="3" rx="0.5" fill="#FDE047" />
        <circle cx="13" cy="9.5" r="1.5" fill="#94A3B8" />
      </svg>
    );
  }

  // Default 3D smart card illustration
  return (
    <svg width="15" height="15" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="bmcc-tag-illust">
      <defs>
        <linearGradient id="ti-df" x1="3" y1="3" x2="17" y2="17" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3B82F6" />
          <stop offset="1" stopColor="#1D4ED8" />
        </linearGradient>
      </defs>
      <rect x="3" y="5.5" width="14" height="9.5" rx="2" fill="url(#ti-df)" />
      <rect x="5" y="8" width="3.5" height="3" rx="0.5" fill="#FEF08A" />
    </svg>
  );
}

function getTagClass(tagName = '') {
  const lower = tagName.toLowerCase();
  if (lower.includes('travel') || lower.includes('flight') || lower.includes('miles')) return 'tag-blue';
  if (lower.includes('cashback') || lower.includes('valueback')) return 'tag-green';
  if (lower.includes('reward') || lower.includes('points')) return 'tag-purple';
  if (lower.includes('free') || lower.includes('lifetime')) return 'tag-amber';
  if (lower.includes('shop') || lower.includes('online')) return 'tag-teal';
  if (lower.includes('lounge')) return 'tag-indigo';
  if (lower.includes('rupay') || lower.includes('upi')) return 'tag-cyan';
  if (lower.includes('fuel')) return 'tag-orange';
  if (lower.includes('premium') || lower.includes('metal')) return 'tag-slate';
  return 'tag-default';
}

export default function PopularCardCarousel({ cards = [] }) {
  const { categories = [], cardNetworks = [] } = useData();
  const { isCompared, isFull, toggleCompare } = useCompare();
  const { user } = useAuth();
  
  const [currentPage, setCurrentPage] = useState(0);
  const cardsPerPage = 3;
  const totalPages = Math.ceil(cards.length / cardsPerPage);

  const nextPage = () => {
    setCurrentPage(prev => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage(prev => (prev - 1 + totalPages) % totalPages);
  };

  const currentCards = useMemo(() => {
    const start = currentPage * cardsPerPage;
    return cards.slice(start, start + cardsPerPage);
  }, [cards, currentPage]);

  if (!cards.length) return null;

  return (
    <div className="bmcc-popular-carousel-wrapper">
      <div className="bmcc-popular-grid">
        {currentCards.map(card => {
          const detailUrl = card.detailRoute || card.route || `/credit-card/${card.id}`;
          const compared = isCompared(card.id);
          const compareDisabled = isFull && !compared;
          const networkName = cardNetworks.find(n => n.id === card.network)?.name || '';

          // Curate up to 3 tags
          const cardTags = categories
            .filter(category => (card.categories || []).includes(category.id))
            .slice(0, 3)
            .map(c => c.name);

          if (cardTags.length < 2 && networkName) {
            cardTags.push(networkName);
          }

          if (card.joiningFee === 0 || card.joiningFee === '0' || card.joiningFee === 'Free') {
            if (!cardTags.some(t => t.toLowerCase().includes('free'))) {
              cardTags.unshift('Lifetime Free');
            }
          }

          const finalTags = cardTags.slice(0, 3);
          const viewCard = () => logActivity(user, 'card_viewed', { card: card.name, bank: card.bankName });
          const changeCompare = () => {
            logActivity(user, compared ? 'compare_removed' : 'compare_added', { card: card.name });
            toggleCompare(card.id);
          };

          return (
            <article key={card.id} className="bmcc-pop-card">
              {/* Perfectly Structured Card Top */}
              <div className="bmcc-pop-card-top">
                <Link to={detailUrl} className="bmcc-pop-artwork-link" onClick={viewCard} aria-label={`View ${card.name}`}>
                  <CardArtwork card={card} className="bmcc-pop-artwork" width="112" height="72" />
                </Link>

                <div className="bmcc-pop-title-wrap">
                  <span className="bmcc-pop-bank">{card.bankName}</span>
                  <Link to={detailUrl} className="bmcc-pop-name" onClick={viewCard} title={card.name}>
                    {card.name}
                  </Link>
                  <span className="bmcc-pop-fee-badge">
                    Joining Fee: <strong>{formatFee(card.joiningFee)}</strong>
                  </span>
                </div>
              </div>

              {/* Tag Chips with 3D Illustrative Service Graphics */}
              <div className="bmcc-pop-tags">
                {finalTags.map((tag, idx) => (
                  <span key={idx} className={`bmcc-pop-tag ${getTagClass(tag)}`}>
                    <TagIllustration tagName={tag} />
                    <span className="bmcc-pop-tag-text">{tag}</span>
                  </span>
                ))}
              </div>

              {/* Bulleted Benefits - Equal Heights */}
              <div className="bmcc-pop-benefits">
                {(card.benefits || []).slice(0, 2).map((benefit, index) => (
                  <div key={index} className="bmcc-pop-benefit-item">
                    <span className="bmcc-pop-bullet" aria-hidden="true">•</span>
                    <p className="bmcc-pop-benefit-text">{benefit.text}</p>
                  </div>
                ))}
              </div>

              {/* Equal-Height Locked Action Buttons */}
              <div className="bmcc-pop-actions">
                <Link to={detailUrl} className="bmcc-pop-btn-secondary" onClick={viewCard}>
                  Read More
                </Link>
                <Link
                  to="/credit-card-eligibility"
                  className="bmcc-pop-btn-primary"
                  onClick={() => logActivity(user, 'eligibility_click', { card: card.name, bank: card.bankName })}
                >
                  Check Eligibility <span aria-hidden="true">›</span>
                </Link>
              </div>

              {/* Baseline Locked Footer */}
              <div className="bmcc-pop-footer">
                <label className="bmcc-pop-compare-label">
                  <input
                    type="checkbox"
                    checked={compared}
                    disabled={compareDisabled}
                    onChange={changeCompare}
                    className="bmcc-pop-checkbox"
                  />
                  <span>Compare</span>
                </label>

                <Link to={detailUrl} className="bmcc-pop-tc-link">
                  *Terms &amp; Conditions
                </Link>
              </div>
            </article>
          );
        })}
      </div>

      {/* Carousel Navigation Bar (Matching Reference Image) */}
      {totalPages > 1 && (
        <div className="bmcc-pop-carousel-nav" role="region" aria-label="Popular cards navigation">
          <button
            type="button"
            className="bmcc-pop-nav-btn prev"
            onClick={prevPage}
            aria-label="Previous cards"
            title="Previous cards"
          >
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="bmcc-pop-dots">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                type="button"
                className={`bmcc-pop-dot ${index === currentPage ? 'active' : ''}`}
                onClick={() => setCurrentPage(index)}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={index === currentPage ? 'true' : 'false'}
              />
            ))}
          </div>

          <button
            type="button"
            className="bmcc-pop-nav-btn next"
            onClick={nextPage}
            aria-label="Next cards"
            title="Next cards"
          >
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}
