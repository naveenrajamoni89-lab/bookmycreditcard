import { Link } from 'react-router-dom';
import CreditCardItem from '../components/CreditCardItem';
import Loader from '../components/ui/Loader';
import ErrorMessage from '../components/ui/ErrorMessage';
import FAQSection from '../components/FAQSection';
import { useData } from '../context/DataContext';
import { useAsyncData } from '../hooks/useAsyncData';
import { fetchBestCardPicks } from '../services/contentService';
import '../styles/learn-editorial.css';

const CATEGORY_CHAMPIONS = [
  {
    category: 'Best for Flat Cashback',
    card: 'Cashback SBI Card',
    badgeColor: 'blue',
    perk: '5% flat cashback on all online retail checkouts (Amazon, Flipkart, Myntra) up to ₹5,000/mo.',
    link: '/sbi-bank/cashback-sbi-card',
    rating: '9.8 / 10',
  },
  {
    category: 'Best for Luxury & Air Miles',
    card: 'HDFC Infinia Metal Edition',
    badgeColor: 'purple',
    perk: '3.33% to 33.3% return via SmartBuy; unlimited global airport lounge access with guest privileges.',
    link: '/hdfc-bank/infinia-credit-card',
    rating: '9.9 / 10',
  },
  {
    category: 'Best for Airline Mile Transfers',
    card: 'Axis Atlas Credit Card',
    badgeColor: 'indigo',
    perk: '1:2 transfer ratio across 18 airline and hotel loyalty partners; generous tiered milestone bonuses.',
    link: '/axis-bank/atlas-credit-card',
    rating: '9.6 / 10',
  },
  {
    category: 'Best for UPI QR Payments',
    card: 'YES BANK BYOC (RuPay)',
    badgeColor: 'green',
    perk: '1% unlimited cashback on merchant UPI QR transactions with zero extra surcharges.',
    link: '/yes-bank/byoc-credit-card',
    rating: '9.3 / 10',
  },
  {
    category: 'Best Lifetime Free Card',
    card: 'Federal Bank Scapia',
    badgeColor: 'amber',
    perk: 'Zero forex markup on overseas spends; unlimited domestic airport lounges on ₹5,000 monthly spend.',
    link: '/federal-bank/scapia-credit-card',
    rating: '9.5 / 10',
  },
  {
    category: 'Best for Fuel Savings',
    card: 'IndianOil RBL Bank XTRA',
    badgeColor: 'rose',
    perk: 'Up to 8.5% valueback on fuel fill-ups across all IndianOil retail fuel pumps nationwide.',
    link: '/rbl-bank/indianoil-rbl-xtra-credit-card',
    rating: '9.2 / 10',
  },
  {
    category: 'Best for Utilities & Grocery',
    card: 'Airtel Axis Bank Credit Card',
    badgeColor: 'blue',
    perk: '25% cashback on Airtel bills, 10% on utility bill payments (electricity/gas/broadband), Swiggy & Zomato.',
    link: '/axis-bank/airtel-axis-bank-credit-card',
    rating: '9.4 / 10',
  },
];

const METHODOLOGY = [
  {
    title: 'Net Reward Realization',
    desc: 'We calculate true reward value by factoring in redemption caps, reward point expiry dates, and catalog conversion charges.',
  },
  {
    title: 'Airport Lounge Accessibility',
    desc: 'We evaluate spending criteria needed for complimentary domestic & international lounge vouchers across DreamFolks and Priority Pass.',
  },
  {
    title: 'Fee-Waiver Feasibility',
    desc: 'We weigh whether annual spend thresholds required to waive renewal fees align with ordinary household spending patterns.',
  },
  {
    title: 'Fine Print & MITC Clarity',
    desc: 'We penalize cards with hidden forex markups, rent payment surcharges, or excessive reward redemption processing fees.',
  },
];

export default function BestCreditCards() {
  const { cards, loading: cardsLoading, error } = useData();
  const { data: picks, loading: picksLoading } = useAsyncData(fetchBestCardPicks);

  const loading = cardsLoading || picksLoading;

  const featuredCards = (picks || [])
    .map(pick => cards.find(c => c.id === pick.cardId))
    .filter(Boolean);

  return (
    <div className="learn-page bmcc-best-cards-page">
      {/* Hero Quick Trust Strip */}
      <section className="learn-hero">
        <div className="bmcc-container">
          <div className="learn-hero-inner">
            <div className="learn-breadcrumb">
              <Link to="/">Home</Link>
              <span className="learn-breadcrumb-sep">/</span>
              <Link to="/explore">Learn</Link>
              <span className="learn-breadcrumb-sep">/</span>
              <span className="learn-breadcrumb-current">Best Credit Cards</span>
            </div>

            <span className="learn-badge">
              <span className="learn-badge-dot" />
              ANNUAL EDITORIAL RANKINGS
            </span>
            <h1 className="learn-title">25 Best Credit Cards in India for 2026</h1>
            <p className="learn-lead">
              Our research team evaluated over 90 credit cards across 16 major banks in India. Compare category champions across flat cashback, luxury travel, zero forex, and everyday utility savings.
            </p>
            <div className="learn-trust-strip">
              <span className="learn-trust-pill">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                90+ Cards Screened
              </span>
              <span className="learn-trust-pill">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                Updated October 2026
              </span>
              <span className="learn-trust-pill">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                100% Unbiased Evaluation
              </span>
              <span className="learn-trust-pill">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                Real Net Return Calibrated
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: Category Champions Bento Grid */}
      <section className="learn-section">
        <div className="bmcc-container">
          <div className="learn-section-head">
            <span className="learn-section-kicker">EDITORIAL CURATION</span>
            <h2 className="learn-section-title">Category Champions at a Glance</h2>
            <p className="learn-section-desc">
              If you have a specific spending goal, here are India’s undisputed top performers.
            </p>
          </div>

          <div className="learn-bento-grid">
            {CATEGORY_CHAMPIONS.map((champ, idx) => (
              <div key={idx} className="learn-card">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                  <span className={`pb-learn-item-pill pill-${champ.badgeColor}`}>
                    {champ.category}
                  </span>
                  <span style={{ fontSize: '12px', fontWeight: '800', color: '#2447bb' }}>
                    {champ.rating}
                  </span>
                </div>
                <h3 className="learn-card-title">
                  <Link to={champ.link} style={{ color: '#0f172a', textDecoration: 'none' }}>
                    {champ.card}
                  </Link>
                </h3>
                <p className="learn-card-body">{champ.perk}</p>
                <div className="learn-card-footer">
                  <Link
                    to={champ.link}
                    style={{ color: '#2447bb', fontWeight: '700', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px' }}
                  >
                    View Card Review →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Detailed Featured Cards Breakdown */}
      <section className="learn-section">
        <div className="bmcc-container">
          <div className="learn-section-head">
            <span className="learn-section-kicker">TOP PICKS DIRECTORY</span>
            <h2 className="learn-section-title">In-Depth Card Comparison</h2>
            <p className="learn-section-desc">
              Review full fees, key perks, and welcome benefits of each top-rated card.
            </p>
          </div>

          {loading ? (
            <div style={{ padding: '60px 20px', textAlign: 'center' }}>
              <Loader label="Loading best credit cards..." />
            </div>
          ) : error ? (
            <div style={{ padding: '40px 20px' }}>
              <ErrorMessage message={error} />
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '1000px', margin: '0 auto' }}>
              {featuredCards.map(card => (
                <div key={card.id} style={{ background: '#ffffff', borderRadius: '16px', border: '1px solid #e2e8f0', overflow: 'hidden', boxShadow: '0 2px 8px rgba(15,23,42,0.03)' }}>
                  <CreditCardItem card={card} />
                </div>
              ))}
            </div>
          )}

          <div style={{ marginTop: '40px', textAlign: 'center' }}>
            <Link
              to="/compare-credit-cards"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: '#2447bb',
                color: '#ffffff',
                padding: '14px 32px',
                borderRadius: '999px',
                fontWeight: '700',
                fontSize: '14px',
                textDecoration: 'none',
                boxShadow: '0 4px 14px rgba(36, 71, 187, 0.35)',
              }}
            >
              Compare Any 3 Cards Side by Side
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Section 3: Ranking Methodology */}
      <section className="learn-section" style={{ background: '#f8fafc' }}>
        <div className="bmcc-container">
          <div className="learn-section-head">
            <span className="learn-section-kicker">SCORING METHODOLOGY</span>
            <h2 className="learn-section-title">How We Score & Rank Every Card</h2>
            <p className="learn-section-desc">
              Our 4-pillar algorithmic evaluation model prioritizes actual cardholder savings over marketing claims.
            </p>
          </div>

          <div className="learn-bento-grid">
            {METHODOLOGY.map((m, idx) => (
              <div key={idx} className="learn-card">
                <div className="learn-card-icon-box learn-icon-blue">
                  <span style={{ fontSize: '13px', fontWeight: '800' }}>0{idx + 1}</span>
                </div>
                <h3 className="learn-card-title">{m.title}</h3>
                <p className="learn-card-body">{m.desc}</p>
                <div className="learn-card-footer">
                  <span style={{ color: '#059669' }}>25% Score Weight</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: FAQs */}
      <section className="learn-section">
        <div className="bmcc-container">
          <FAQSection page="home" title="Best Credit Cards FAQs" />
        </div>
      </section>
    </div>
  );
}
