import { useParams, Link } from 'react-router-dom';
import CardListingSection from '../components/CardListingSection';
import Loader from '../components/ui/Loader';
import LegalPage from './LegalPage';
import CardDetailPage from './CardDetailPage';
import CardArtwork from '../components/CardArtwork';
import BankLogo from '../components/BankLogo';
import { useData } from '../context/DataContext';
import { getCardBySlugOrRoute } from '../data/cardDetails';
import { categoryEditorialData } from '../data/categoryEditorial';
import { bankEditorialData } from '../data/bankEditorial';
import { categoryPages as fallbackCategoryPages } from '../data/content';
import '../styles/category-hub-premium.css';

export default function CategoryPage() {
  const { slug } = useParams();
  const { categoryPages, getCardsByCategory, cards: allCards, loading } = useData();

  if (loading) {
    return (
      <div className="pb-page-section" style={{ minHeight: '60vh', display: 'grid', placeItems: 'center' }}>
        <Loader label="Loading verified credit cards..." />
      </div>
    );
  }

  // 1. Check if this slug belongs to a dedicated individual credit card
  const card = getCardBySlugOrRoute(slug);
  if (card) {
    return <CardDetailPage />;
  }

  // 2. Check if this slug is a Category or Bank page
  let page = categoryPages.find(p => p.slug === slug);

  // Fallback 1: check fallbackCategoryPages from local content.js
  if (!page) {
    page = fallbackCategoryPages.find(p => p.slug === slug);
  }

  // Fallback 2: if slug exists in bankEditorialData but not in categoryPages
  // (e.g. Supabase table is missing the bank row), synthesize a page object.
  if (!page && bankEditorialData[slug]) {
    const bd = bankEditorialData[slug];
    page = {
      slug,
      title: bd.title || bd.bankName || slug,
      bankId: bd.bankId || null,
      isBank: true,
      description: bd.heroDesc || '',
    };
  }

  // Fallback 3: if slug exists in categoryEditorialData
  if (!page && categoryEditorialData[slug]) {
    const ed = categoryEditorialData[slug];
    page = {
      slug,
      title: ed.title || slug,
      categoryId: ed.categoryId || slug.replace('-credit-cards', ''),
      description: ed.subtitle || ed.heroDesc || '',
    };
  }

  if (!page) {
    return <LegalPage slug={slug} />;
  }

  const isBank = Boolean(page.isBank || page.bankId || bankEditorialData[slug]);
  const catEditorial = categoryEditorialData[slug] || Object.values(categoryEditorialData).find(entry => entry.categoryId === page.categoryId);
  const bankEditorial = bankEditorialData[slug] || Object.values(bankEditorialData).find(entry => entry.bankId === page.bankId);

  // Retrieve matching cards
  let filteredCards = [];
  if (isBank) {
    const bankId = page.bankId || bankEditorial?.bankId;
    filteredCards = allCards.filter(c =>
      bankId ? c.bank === bankId : c.bankName?.toLowerCase() === bankEditorial?.bankName?.toLowerCase()
    );
  } else {
    filteredCards = getCardsByCategory(page.categoryId);
    if (filteredCards.length === 0) {
      filteredCards = allCards.filter(c =>
        (c.categories || []).some(cat => cat.includes(page.categoryId) || page.categoryId.includes(cat))
      );
    }
  }

  const editorial = (isBank ? bankEditorial : catEditorial) || {};
  const title = editorial.title || page.title;
  const description = editorial.heroDesc || page.description;
  const featured = filteredCards.slice(0, 3);
  const freeCards = filteredCards.filter(card => Number(card.annualFee) === 0).length;
  const issuerName = bankEditorial?.bankName || featured[0]?.bankName || page.title;
  const topCards = editorial.topCards || [];
  const highlights = editorial.highlights || [];
  const faqs = editorial.faqs || [];

  return (
    <div className="bmcc-hub-page">
      <header className="hub-hero">
        <div className="hub-container">
          <nav className="hub-breadcrumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link><span aria-hidden="true">/</span>
            <Link to="/explore">Credit cards</Link><span aria-hidden="true">/</span>
            <span aria-current="page">{title}</span>
          </nav>
          <div className="hub-hero-layout">
            <div className="hub-hero-copy">
              {isBank && <div className="hub-issuer"><BankLogo id={page.bankId || bankEditorial?.bankId} name={issuerName} size={40} /><span>{issuerName}</span></div>}
              <h1>{title}</h1>
              <p>{editorial.tagline || page.description || 'Explore fees, benefits and eligibility requirements to find a card that fits your spending.'}</p>
              <div className="hub-actions">
                <a className="hub-button" href="#card-catalog">Browse {filteredCards.length} cards</a>
                <Link className="hub-text-link" to="/compare-credit-cards">Compare cards</Link>
              </div>
              <div className="hub-catalogue-note">{filteredCards.length} cards to explore{freeCards > 0 ? ' / ' + freeCards + ' with no annual fee' : ''}<br />Compare fees and benefits before you apply.</div>
            </div>
            {featured.length > 0 && <div className="hub-product-gallery" aria-label="Cards in this collection">
              {featured.map((card, index) => <Link key={card.id} to={card.detailRoute || card.route || '/credit-card/' + card.id} className={'hub-product hub-product-' + index}>
                <CardArtwork card={card} loading="eager" />
                <span>{card.name}</span>
              </Link>)}
            </div>}
          </div>
        </div>
      </header>

      <nav className="hub-section-nav" aria-label="On this page">
        <div className="hub-container">
          <a href="#card-catalog">Browse cards</a>
          {topCards.length > 0 && <a href="#compare-options">Compare options</a>}
          <a href="#about-cards">Benefits &amp; details</a>
          {isBank && bankEditorial?.eligibility && <a href="#fees-eligibility">Fees &amp; eligibility</a>}
          <a href="#how-to-apply">How to apply</a>
          {faqs.length > 0 && <a href="#hub-faq">FAQs</a>}
        </div>
      </nav>

      <section id="card-catalog" className="hub-catalogue">
        <CardListingSection key={slug} cards={filteredCards} title={isBank ? 'Cards from ' + issuerName : 'Explore ' + title.toLowerCase()} />
      </section>

      {topCards.length > 0 && <section id="compare-options" className="hub-section">
        <div className="hub-container">
          <div className="hub-section-heading"><h2>Compare your options</h2><p>Fees, key benefits and spend thresholds, side by side.</p></div>
          <div className="hub-table-scroll" role="region" aria-label="Card comparison" tabIndex={0}>
            <table className="hub-table">
              <thead><tr><th scope="col">Credit card</th><th scope="col">Annual fee</th><th scope="col">Key benefits</th><th scope="col">Fee waiver</th></tr></thead>
              <tbody>{topCards.map(card => <tr key={card.name}>
                <th scope="row"><span>{card.name}</span>{card.bank && <small>{card.bank}</small>}</th>
                <td>{card.annualFee}</td><td>{card.perk}</td><td>{card.waiver || 'Check issuer terms'}</td>
              </tr>)}</tbody>
            </table>
          </div>
          <p className="hub-footnote">Fees may attract applicable taxes. Benefits, exclusions and waiver terms vary by card; confirm the latest terms with the issuer.</p>
        </div>
      </section>}

      <section id="about-cards" className="hub-section hub-section-tint">
        <div className="hub-container hub-reading-layout">
          <div><h2>What to know about {title.toLowerCase()}</h2><p className="hub-about-copy">{description}</p>
            {editorial.stats?.length > 0 && <dl className="hub-reference-facts">{editorial.stats.map(stat => <div key={stat.label}><dt>{stat.label}</dt><dd>{stat.value}</dd></div>)}</dl>}
          </div>
          <div className="hub-benefit-list">{highlights.map(item => <article key={item.title}><h3>{item.title}</h3><p>{item.desc}</p></article>)}
            {editorial.howToChoose?.length > 0 && <div className="hub-choosing"><h3>How to choose</h3><ul>{editorial.howToChoose.map(item => <li key={item}>{item}</li>)}</ul></div>}
          </div>
        </div>
      </section>

      {isBank && (bankEditorial?.feesSchedule || bankEditorial?.eligibility) && <section id="fees-eligibility" className="hub-section">
        <div className="hub-container">
          <div className="hub-section-heading"><h2>Fees &amp; eligibility</h2><p>Review the requirements before you take the next step.</p></div>
          <div className="hub-requirements">
            {bankEditorial.feesSchedule && <div><h3>Standard charges</h3><dl className="hub-terms">{bankEditorial.feesSchedule.map(fee => <div key={fee.feeType}><dt>{fee.feeType}</dt><dd>{fee.details}</dd></div>)}</dl></div>}
            {bankEditorial.eligibility && <div><h3>Basic requirements</h3><dl className="hub-terms">
              <div><dt>Age</dt><dd>{bankEditorial.eligibility.age}</dd></div>
              <div><dt>Salaried income</dt><dd>{bankEditorial.eligibility.salariedIncome}</dd></div>
              <div><dt>Self-employed income</dt><dd>{bankEditorial.eligibility.selfEmployedIncome}</dd></div>
              <div><dt>Credit score</dt><dd>{bankEditorial.eligibility.creditScore}</dd></div>
            </dl><p className="hub-footnote">Typical documents include PAN, identity and address proof, income documents and bank statements. Exact requirements depend on the issuer.</p>
              <Link to="/credit-card-eligibility" className="hub-text-link">Check basic eligibility</Link>
            </div>}
          </div>
        </div>
      </section>}

      <section id="how-to-apply" className="hub-section hub-section-tint">
        <div className="hub-container hub-application">
          <div><h2>From shortlist<br />to application</h2><p>Choose a card after reviewing the details that matter to you.</p><Link className="hub-text-link" to="/credit-card-eligibility">Check eligibility</Link></div>
          <ol>
            <li><h3>Compare the cards</h3><p>Review fees, rewards, exclusions and annual fee waiver requirements.</p></li>
            <li><h3>Check the requirements</h3><p>Look at the issuer&#39;s age, income and credit history criteria.</p></li>
            <li><h3>Apply with the issuer</h3><p>Complete the application and identity verification. Approval and delivery timelines depend on the bank.</p></li>
          </ol>
        </div>
      </section>

      {faqs.length > 0 && <section id="hub-faq" className="hub-section">
        <div className="hub-container hub-faq-layout">
          <div><h2>Frequently asked<br />questions</h2><p>More detail on fees, rewards and how these cards work.</p></div>
          <div>{faqs.map((faq, index) => <details key={slug + '-' + index} className="hub-faq"><summary>{faq.q}</summary><p>{faq.a}</p></details>)}</div>
        </div>
      </section>}
      <section className="hub-bottom-action"><div className="hub-container"><div><h2>Still comparing?</h2><p>Put your shortlisted cards side by side.</p></div><Link className="hub-button" to="/compare-credit-cards">Compare credit cards</Link></div></section>
    </div>
  );
}
