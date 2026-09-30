import { useParams } from 'react-router-dom';
import PageHeader from '../components/ui/PageHeader';
import CardListingSection from '../components/CardListingSection';
import Loader from '../components/ui/Loader';
import LegalPage from './LegalPage';
import CardDetailPage from './CardDetailPage';
import { useData } from '../context/DataContext';
import { getCardBySlugOrRoute } from '../data/cardDetails';

/**
 * Slug-driven dispatcher for all top-level content routes.
 * Checks for dedicated card detail pages (e.g. /paisabazaar-duet) first;
 * then renders "By Category" landing pages (/cashback-credit-cards, ...);
 * otherwise falls through to the legal hub (/terms-of-use, /privacy-policy, ...).
 */
export default function CategoryPage() {
  const { slug } = useParams();
  const { categoryPages, getCardsByCategory, loading } = useData();

  if (loading) {
    return (
      <div className="pb-page-section">
        <Loader label="Loading..." />
      </div>
    );
  }

  // Check if this slug belongs to a credit card
  const card = getCardBySlugOrRoute(slug);
  if (card) {
    return <CardDetailPage />;
  }

  const page = categoryPages.find(p => p.slug === slug);
  if (!page) return <LegalPage slug={slug} />;


  const cards = getCardsByCategory(page.categoryId);

  return (
    <>
      <PageHeader
        title={page.title}
        description={page.description}
        breadcrumb={page.title}
      />

      <CardListingSection
        cards={cards}
        title={`${page.title} in India`}
      />

    </>
  );
}
