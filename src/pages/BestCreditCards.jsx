import { Link } from 'react-router-dom';
import PageHeader from '../components/ui/PageHeader';
import CreditCardItem from '../components/CreditCardItem';
import Loader from '../components/ui/Loader';
import ErrorMessage from '../components/ui/ErrorMessage';
import { useData } from '../context/DataContext';
import { useAsyncData } from '../hooks/useAsyncData';
import { fetchBestCardPicks } from '../services/contentService';
import '../styles/home-editorial.css';

const CATEGORY_CHAMPIONS = [
  { category: 'Best for Flat Cashback', card: 'Cashback SBI Card', perk: '5% flat cashback on all online retail platforms (up to ₹5,000/mo)', link: '/sbi-bank/cashback-sbi-card' },
  { category: 'Best for Luxury & Air Miles', card: 'HDFC Infinia Metal', perk: '3.33% to 33.3% return; unlimited lounge visits worldwide with guests', link: '/hdfc-bank/infinia-credit-card' },
  { category: 'Best for Airline Mile Transfers', card: 'Axis Atlas Credit Card', perk: '1:2 transfer ratio across 18 airline and hotel partners; tiered miles', link: '/axis-bank/atlas-credit-card' },
  { category: 'Best for UPI Scan & Pay', card: 'YES BANK PaisaSave (RuPay)', perk: '1% unlimited cashback on UPI QR transactions; 6% on travel and dining', link: '/yes-bank/paisabazaar-paisasave-credit-card' },
  { category: 'Best Lifetime Free Card', card: 'Federal Bank Scapia', perk: 'Zero forex markup fee; unlimited domestic lounge access on ₹5k spend', link: '/federal-bank/scapia-credit-card' },
  { category: 'Best for Fuel Savings', card: 'IndianOil RBL XTRA', perk: 'Up to 8.5% valueback on fuel fill-ups at IndianOil retail outlets', link: '/rbl-bank/indianoil-rbl-xtra-credit-card' },
  { category: 'Best for Everyday Utilities', card: 'Airtel Axis Bank Card', perk: '25% on Airtel bills, 10% on gas/electricity/broadband, Swiggy & Zomato', link: '/axis-bank/airtel-axis-bank-credit-card' },
];

export default function BestCreditCards() {
  const { cards, loading: cardsLoading, error } = useData();
  const { data: picks, loading: picksLoading } = useAsyncData(fetchBestCardPicks);

  const loading = cardsLoading || picksLoading;

  const featuredCards = (picks || [])
    .map(pick => cards.find(c => c.id === pick.cardId))
    .filter(Boolean);

  return (
    <div className="landing-page-root bmcc-editorial bmcc-best-cards-page">
      <PageHeader
        title="25 Best Credit Cards in India 2026"
        description="Ranked and analyzed across fees, cashback yield, air mile transfer ratios, lounge access quotas, and milestone spend bonuses."
        breadcrumb="Best Credit Cards"
      />

      {/* Category Champions Matrix */}
      <section className="pb-page-section" style={{ background: '#ffffff', padding: '50px 0 40px' }}>
        <div className="bmcc-container">
          <div style={{ textAlign: 'center', marginBottom: '36px' }}>
            <span className="bmcc-section-label">EDITORIAL CURATION</span>
            <h2 className="bmcc-section-title" style={{ fontSize: '30px' }}>
              Category Champions at a Glance
            </h2>
            <p className="bmcc-section-sub">
              If you have a specific spending goal, here are India’s undisputed top performers.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '18px',
          }}>
            {CATEGORY_CHAMPIONS.map((champ, idx) => (
              <div
                key={idx}
                style={{
                  background: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  borderRadius: '12px',
                  padding: '20px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                }}
              >
                <span style={{ fontSize: '12px', fontWeight: '800', color: '#2447bb', letterSpacing: '0.04em' }}>
                  {champ.category}
                </span>
                <Link
                  to={champ.link}
                  style={{ fontSize: '17px', fontWeight: '700', color: '#0f172a', textDecoration: 'none' }}
                >
                  {champ.card}
                </Link>
                <p style={{ fontSize: '13.5px', lineHeight: '1.55', color: '#64748b', margin: 0 }}>
                  {champ.perk}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Cards Catalogue */}
      <section className="pb-page-section" style={{ background: '#f8fafc', padding: '50px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <span className="bmcc-section-label">TOP PICKS REVIEW</span>
            <h2 className="bmcc-section-title" style={{ fontSize: '28px' }}>
              In-Depth Featured Cards Breakdown
            </h2>
          </div>

          {loading ? (
            <Loader label="Loading best credit cards..." />
          ) : error ? (
            <ErrorMessage message={error} />
          ) : (
            <div className="pb-card-list">
              {featuredCards.map(card => (
                <div key={card.id} className="pb-ranked-card">
                  <CreditCardItem card={card} />
                </div>
              ))}
            </div>
          )}

          <div className="pb-page-cta-row" style={{ marginTop: '36px', textAlign: 'center' }}>
            <Link to="/compare-credit-cards" className="pb-check-eligibility">
              Compare These Cards Side by Side
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
