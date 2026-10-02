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
    category: 'Flat Cashback',
    card: 'Cashback SBI Card',
    perk: '5% flat cashback on all online retail checkouts (Amazon, Flipkart, Myntra) up to ₹5,000/mo.',
    link: '/sbi-bank/cashback-sbi-card',
    rating: '9.8 / 10',
  },
  {
    category: 'Luxury & Air Miles',
    card: 'HDFC Infinia Metal Edition',
    perk: '3.33% to 33.3% return via SmartBuy; unlimited global airport lounge access with guest privileges.',
    link: '/hdfc-bank/infinia-credit-card',
    rating: '9.9 / 10',
  },
  {
    category: 'Air Mile Transfers',
    card: 'Axis Atlas Credit Card',
    perk: '1:2 transfer ratio across 18 airline and hotel loyalty partners; generous tiered milestone bonuses.',
    link: '/axis-bank/atlas-credit-card',
    rating: '9.6 / 10',
  },
  {
    category: 'Merchant UPI Payments',
    card: 'YES BANK BYOC (RuPay)',
    perk: '1% unlimited cashback on merchant UPI QR transactions with zero extra surcharges.',
    link: '/yes-bank/byoc-credit-card',
    rating: '9.3 / 10',
  },
  {
    category: 'Lifetime Free & Travel',
    card: 'Federal Bank Scapia',
    perk: 'Zero forex markup on overseas spends; unlimited domestic airport lounges on ₹5,000 monthly spend.',
    link: '/federal-bank/scapia-credit-card',
    rating: '9.5 / 10',
  },
  {
    category: 'Fuel Savings',
    card: 'IndianOil RBL Bank XTRA',
    perk: 'Up to 8.5% valueback on fuel fill-ups across all IndianOil retail fuel pumps nationwide.',
    link: '/rbl-bank/indianoil-rbl-xtra-credit-card',
    rating: '9.2 / 10',
  },
  {
    category: 'Utilities & Grocery',
    card: 'Airtel Axis Bank Credit Card',
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
      {/* Hero Header */}
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

            <span className="learn-badge">ANNUAL EDITORIAL RANKINGS</span>
            <h1 className="learn-title">25 Best Credit Cards in India for 2026</h1>
            <p className="learn-lead">
              Our research team evaluated over 90 credit cards across 16 major banks in India. Compare category champions across flat cashback, luxury travel, zero forex, and everyday utility savings.
            </p>
            <div className="learn-trust-strip">
              <span className="learn-trust-pill">90+ Cards Screened</span>
              <span className="learn-trust-pill">Updated October 2026</span>
              <span className="learn-trust-pill">Unbiased Evaluation</span>
              <span className="learn-trust-pill">Real Net Return Calibrated</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: Category Champions Grid */}
      <section className="learn-section">
        <div className="bmcc-container">
          <div className="learn-section-head">
            <span className="learn-section-kicker">EDITORIAL CURATION</span>
            <h2 className="learn-section-title">Category Champions at a Glance</h2>
            <p className="learn-section-desc">
              If you have a specific spending goal, here are India’s undisputed top performers.
            </p>
          </div>

          <div className="learn-champions-grid">
            {CATEGORY_CHAMPIONS.map((champ, idx) => (
              <div key={idx} className="learn-champion-card">
                <span className="learn-champion-category">{champ.category}</span>
                <h3 className="learn-champion-name">
                  <Link to={champ.link} style={{ color: '#10110f', textDecoration: 'none' }}>
                    {champ.card}
                  </Link>
                </h3>
                <p className="learn-champion-perk">{champ.perk}</p>
                <div className="learn-champion-footer">
                  <span className="learn-champion-rating">{champ.rating}</span>
                  <Link to={champ.link} className="learn-champion-link">
                    View Card Details →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Detailed Featured Cards Breakdown */}
      <section className="learn-section bg-subtle">
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
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '1000px', margin: '0 auto' }}>
              {featuredCards.map(card => (
                <div key={card.id} style={{ background: '#ffffff', borderRadius: '8px', border: '1px solid #e2e8f0', overflow: 'hidden' }}>
                  <CreditCardItem card={card} />
                </div>
              ))}
            </div>
          )}

          <div style={{ marginTop: '36px', textAlign: 'center' }}>
            <Link
              to="/compare-credit-cards"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: '#10110f',
                color: '#ffffff',
                padding: '12px 28px',
                borderRadius: '6px',
                fontWeight: '600',
                fontSize: '14px',
                textDecoration: 'none',
              }}
            >
              Compare Any 3 Cards Side by Side
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Section 3: Ranking Methodology */}
      <section className="learn-section">
        <div className="bmcc-container">
          <div className="learn-section-head">
            <span className="learn-section-kicker">SCORING METHODOLOGY</span>
            <h2 className="learn-section-title">How We Score & Rank Every Card</h2>
            <p className="learn-section-desc">
              Our 4-pillar algorithmic evaluation model prioritizes actual cardholder savings over marketing claims.
            </p>
          </div>

          <div className="learn-card-grid">
            {METHODOLOGY.map((m, idx) => (
              <div key={idx} className="learn-clean-card">
                <span className="learn-card-tag">Pillar 0{idx + 1}</span>
                <h3 className="learn-clean-card-title">{m.title}</h3>
                <p className="learn-clean-card-body">{m.desc}</p>
                <div className="learn-clean-card-footer">
                  <span>25% Evaluation Weight</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: FAQs */}
      <section className="learn-section bg-subtle">
        <div className="bmcc-container">
          <FAQSection page="home" title="Best Credit Cards FAQs" />
        </div>
      </section>
    </div>
  );
}
