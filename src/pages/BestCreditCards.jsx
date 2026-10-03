import { Link } from 'react-router-dom';
import LearnLayout from '../components/LearnLayout';
import CreditCardItem from '../components/CreditCardItem';
import CardArtwork from '../components/CardArtwork';
import Loader from '../components/ui/Loader';
import ErrorMessage from '../components/ui/ErrorMessage';
import { useData } from '../context/DataContext';
import { useAsyncData } from '../hooks/useAsyncData';
import { fetchBestCardPicks } from '../services/contentService';

export default function BestCreditCards() {
  const { cards, categories, categoryPages, loading: cardsLoading, error } = useData();
  const { data: picks, loading: picksLoading, error: picksError } = useAsyncData(fetchBestCardPicks);
  const featuredCards = (picks || []).map(pick => cards.find(card => card.id === pick.cardId)).filter(Boolean);
  const loading = cardsLoading || picksLoading;
  return (
    <LearnLayout title="Find your best credit card." description="A useful shortlist starts with how you spend. Look at the rewards, then check the fees and conditions." sections={[["shortlist", "The shortlist"], ["categories", "Browse by benefit"]]} wide>
      <section id="shortlist" className="learn-section">
        <h2>Cards worth a closer look</h2>
        <p>Explore the featured selections below. Compare the benefits with your own spending before deciding.</p>
        {!loading && !error && !picksError && featuredCards.length > 0 && <div className="learn-card-gallery">{featuredCards.slice(0, 3).map(card => <Link key={card.id} to={card.detailRoute || card.route || `/credit-card/${card.id}`}><CardArtwork card={card} width={200} height={126} /><span>{card.bankName}</span><strong>{card.name}</strong></Link>)}</div>}
        {loading ? <Loader label="Loading credit cards..." /> : error || picksError ? <ErrorMessage message={error || picksError} /> : featuredCards.length === 0 ? <div className="learn-note"><p>No featured selections are available right now.</p><Link className="learn-button learn-button-outline" to="/explore">Browse all cards</Link></div> : <div className="pb-card-list">{featuredCards.map(card => <CreditCardItem key={card.id} card={card} />)}</div>}
      </section>
      <section id="categories" className="learn-section"><h2>Start with a benefit you value</h2><div className="learn-category-links">{categories.filter(category => categoryPages.some(page => page.categoryId === category.id)).map(category => <Link key={category.id} to={`/${categoryPages.find(page => page.categoryId === category.id).slug}`}>{category.name}</Link>)}</div></section>
    </LearnLayout>
  );
}
