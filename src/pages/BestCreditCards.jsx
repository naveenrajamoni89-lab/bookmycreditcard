import { Link } from 'react-router-dom';
import PageHeader from '../components/ui/PageHeader';
import CreditCardItem from '../components/CreditCardItem';
import Loader from '../components/ui/Loader';
import ErrorMessage from '../components/ui/ErrorMessage';
import { useData } from '../context/DataContext';
import { useAsyncData } from '../hooks/useAsyncData';
import { fetchBestCardPicks } from '../services/contentService';

export default function BestCreditCards() {
  const { cards, loading: cardsLoading, error } = useData();
  const { data: picks, loading: picksLoading } = useAsyncData(fetchBestCardPicks);

  const loading = cardsLoading || picksLoading;

  const featuredCards = (picks || [])
    .map(pick => cards.find(c => c.id === pick.cardId))
    .filter(Boolean);

  return (
    <>
      <PageHeader
        title="Featured Credit Cards"
        description="Explore a selection of cards, then compare their fees and benefits with the full catalogue."
        breadcrumb="Featured Credit Cards"
      />

      <section className="pb-page-section">
        <div className="container">
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

          <div className="pb-page-cta-row">
            <Link to="/compare-credit-cards" className="pb-check-eligibility">
              Compare These Cards
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

    </>
  );
}
