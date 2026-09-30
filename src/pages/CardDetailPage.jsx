import { useState, useEffect, useMemo } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { getCardBySlugOrRoute, allCardDetails } from '../data/cardDetails';
import { useCompare } from '../context/CompareContext';
import { useAuth } from '../context/AuthContext';
import { logActivity } from '../services/activityService';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import CardArtwork from '../components/CardArtwork';
import NotFound from './NotFound';

export default function CardDetailPage() {
  const params = useParams();
  const location = useLocation();
  const { isCompared, isFull, toggleCompare } = useCompare();
  const { user } = useAuth();

  const [activeTab, setActiveTab] = useState('benefits');
  const [openFaq, setOpenFaq] = useState(0);

  // Identify card based on current route or params
  const card = useMemo(() => {
    // 1. Try exact pathname
    const byPath = getCardBySlugOrRoute(location.pathname);
    if (byPath) return byPath;

    // 2. Try bankSlug + cardSlug
    if (params.bankSlug && params.cardSlug) {
      const byTwo = getCardBySlugOrRoute(`${params.bankSlug}/${params.cardSlug}`);
      if (byTwo) return byTwo;
    }

    // 3. Try cardSlug alone
    if (params.cardSlug) {
      const byCardSlug = getCardBySlugOrRoute(params.cardSlug);
      if (byCardSlug) return byCardSlug;
    }

    // 4. Try slug parameter
    if (params.slug) {
      const bySlug = getCardBySlugOrRoute(params.slug);
      if (bySlug) return bySlug;
    }

    // Fallback search by matching part of pathname
    const cleanPath = location.pathname.replace(/^\//, '').replace(/\/$/, '');
    return allCardDetails.find(c => {
      const cPath = (c.route || '').replace(/^\//, '').replace(/\/$/, '');
      return cPath.endsWith(cleanPath) || cleanPath.endsWith(cPath);
    }) || null;
  }, [location.pathname, params]);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (card) {
      document.title = `${card.name} - Features, Benefits, Fees & Eligibility | Book My Credit Card`;
      logActivity(user, 'card_detail_view', { card: card.name, bank: card.bankName });
    }
  }, [card, user]);

  useEffect(() => {
    const sections = ['benefits', 'fees', 'review', 'faqs'].map(id => document.getElementById(id)).filter(Boolean);
    const observer = new IntersectionObserver(entries => {
      const firstVisible = entries.filter(entry => entry.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
      if (firstVisible) setActiveTab(firstVisible.target.id);
    }, { rootMargin: '-145px 0px -65% 0px' });
    sections.forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  if (!card) return <NotFound />;

  const compared = isCompared(card.id);
  const compareDisabled = isFull && !compared;
  const featureSections = [
    {
      title: 'Rewards and value-back',
      summary: card.rewardsSummary?.headline,
      facts: [
        ['Earn rate', card.rewardsSummary?.pointsRate],
        ['Redemption', card.rewardsSummary?.redemption],
        ['Accelerated rewards', card.rewardsSummary?.accelerated],
      ],
    },
    {
      title: 'Airport lounge access',
      facts: [
        ['Domestic lounges', card.loungeAccess?.domestic],
        ['International lounges', card.loungeAccess?.international],
        ['Terms', card.loungeAccess?.details],
      ],
    },
    {
      title: 'Everyday privileges',
      facts: [
        ['Dining', card.diningPerks],
        ['Fuel surcharge', card.fuelPerks],
      ],
    },
    {
      title: 'Milestones and fee waiver',
      facts: [
        ...(card.milestones || []).map(value => ['', value]),
        ['Renewal fee waiver', card.feeWaiver],
      ],
    },
  ].filter(section => section.summary || section.facts.some(([, value]) => value));

  // Similar cards from same bank or top category
  const similarCards = allCardDetails
    .filter(c => c.id !== card.id && (c.bank === card.bank || c.categories.some(cat => card.categories.includes(cat))))
    .slice(0, 4);

  const breadcrumbs = [
    { label: 'Home', to: '/' },
    { label: 'Credit Cards', to: '/explore' },
    { label: card.bankName, to: `/?bank=${card.bank}` },
    { label: card.name }
  ];

  const scrollToSection = (id) => {
    setActiveTab(id);
    document.getElementById(id)?.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
  };

  return (
    <div className="cdp-page">
      {/* Top Breadcrumb Bar */}
      <div className="cdp-breadcrumb-wrap">
        <div className="container">
          <Breadcrumbs items={breadcrumbs} />
        </div>
      </div>

      {/* Hero Section */}
      <section className="cdp-hero-section">
        <div className="container cdp-hero-container">
          {/* Card Visual & Compare */}
          <div className="cdp-hero-media">
            <div className="cdp-card-showcase">
              <CardArtwork card={card} className="cdp-card-image" width="400" height="252" loading="eager" />
            </div>

            <label
              className={`cdp-hero-compare ${compared ? 'is-active' : ''} ${compareDisabled ? 'is-disabled' : ''}`}
            >
              <input type="checkbox" checked={compared} disabled={compareDisabled} onChange={() => {
                logActivity(user, compared ? 'compare_removed' : 'compare_added', { card: card.name });
                toggleCompare(card.id);
              }}
              />
              <span>{compared ? 'Added to compare' : 'Add to compare'}</span>
            </label>
          </div>

          {/* Card Info & Primary Actions */}
          <div className="cdp-hero-content">
            <div className="cdp-badge-row">
              <span className="cdp-bank-badge">{card.bankName}</span>
            </div>

            <h1 className="cdp-card-title">{card.name}</h1>

            {/* Tags */}
            <div className="cdp-tags">
              {card.categories.map(cat => (
                <span key={cat} className="cdp-tag">
                  {cat.replace(/-/g, ' ')}
                </span>
              ))}
            </div>

            {/* Key Metrics Grid */}
            <div className="cdp-metrics-grid">
              <div className="cdp-metric-card">
                <span className="cdp-metric-label">Joining fee</span>
                <span className="cdp-metric-value">{formatFeeText(card.joiningFee)}</span>
                {Number(card.joiningFee) > 0 && <span className="cdp-metric-sub">Plus applicable taxes</span>}
              </div>

              <div className="cdp-metric-card">
                <span className="cdp-metric-label">Annual / renewal fee</span>
                <span className="cdp-metric-value">{formatFeeText(card.annualFee)}</span>
                {Number(card.annualFee) > 0 && <span className="cdp-metric-sub">Plus applicable taxes</span>}
              </div>

              {card.feeWaiver && <div className="cdp-metric-card">
                <span className="cdp-metric-label">Annual fee waiver</span>
                <span className="cdp-metric-value-sm">{card.feeWaiver}</span>
              </div>}

              {card.forexMarkup && <div className="cdp-metric-card cdp-metric-forex">
                <span className="cdp-metric-label">Forex markup</span>
                <span className="cdp-metric-value">{card.forexMarkup}</span>
                <span className="cdp-metric-sub">Overseas transactions</span>
              </div>}
            </div>

            {/* Welcome Offer Strip */}
            {card.welcomeBenefit && (
              <div className="cdp-welcome-box">
                <div>
                  <strong>Welcome benefit</strong> {card.welcomeBenefit}
                </div>
              </div>
            )}

            {/* CTAs */}
            <div className="cdp-cta-group">
              <Link
                to="/credit-card-eligibility"
                className="cdp-btn-apply"
                onClick={() => logActivity(user, 'eligibility_click', { card: card.name, bank: card.bankName })}
              >
                Check eligibility
              </Link>
              <span className="cdp-cta-note">Basic age and income check, not an approval decision.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky In-Page Navigation Bar */}
      <section className="cdp-nav-section">
        <div className="container">
          <div className="cdp-tabs-bar">
            <button
              className={`cdp-tab-btn ${activeTab === 'benefits' ? 'active' : ''}`}
              onClick={() => scrollToSection('benefits')}
            >
              Features & Benefits
            </button>
            <button
              className={`cdp-tab-btn ${activeTab === 'fees' ? 'active' : ''}`}
              onClick={() => scrollToSection('fees')}
            >
              Fees & Charges
            </button>
            <button
              className={`cdp-tab-btn ${activeTab === 'review' ? 'active' : ''}`}
              onClick={() => scrollToSection('review')}
            >
              Things to consider
            </button>
            <button
              className={`cdp-tab-btn ${activeTab === 'faqs' ? 'active' : ''}`}
              onClick={() => scrollToSection('faqs')}
            >
              FAQs
            </button>
          </div>
        </div>
      </section>

      {/* Continuous Single Page Content */}
      <section className="cdp-main-content">
        <div className="container cdp-sections-stack">
          <div id="benefits" className="cdp-section-block">
            <h2 className="cdp-section-title">Benefits and conditions</h2>
            <div className="cdp-benefits-grid">
              {featureSections.length ? featureSections.map(section => (
                <section key={section.title} className="cdp-feature-card">
                  <h3>{section.title}</h3>
                  {section.summary && <p className="cdp-feat-lead">{section.summary}</p>}
                  <ul className="cdp-feat-list">
                    {section.facts.filter(([, value]) => value).map(([label, value], index) => (
                      <li key={`${label}-${index}`}>{label && <strong>{label}: </strong>}{value}</li>
                    ))}
                  </ul>
                </section>
              )) : <p>Detailed benefits are not listed for this card. Check the issuer's current terms.</p>}
            </div>
          </div>

          <div id="fees" className="cdp-section-block">
            <h2 className="cdp-section-title">Fees and charges</h2>
            <p className="cdp-table-sub">Review the issuer's latest terms before making a decision.</p>
            <p className="cdp-fee-scroll-hint">Scroll sideways to see conditions and waivers.</p>
            
            <div className="cdp-table-wrap" tabIndex="0" aria-label="Fees and conditions table, scroll horizontally">
              <table className="cdp-table">
                <thead>
                  <tr>
                    <th>Fee Type</th>
                    <th>Charge / Amount</th>
                    <th>Details & Waiver Condition</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Joining Fee</strong></td>
                    <td><strong className="text-primary">{formatFeeText(card.joiningFee)}</strong> + Taxes</td>
                    <td>One-time fee</td>
                  </tr>
                  <tr>
                    <td><strong>Annual / Renewal Fee</strong></td>
                    <td><strong className="text-primary">{formatFeeText(card.annualFee)}</strong> + Taxes</td>
                    <td>{card.feeWaiver || 'Check issuer terms'}</td>
                  </tr>
                  <tr>
                    <td><strong>Finance Charges (APR)</strong></td>
                    <td>{card.interestRate || 'Not listed'}</td>
                    <td>Applicable on revolving credit balance or unpaid bill amount</td>
                  </tr>
                  <tr>
                    <td><strong>Foreign Currency Markup</strong></td>
                    <td>{card.forexMarkup || 'Not listed'}</td>
                    <td>Charged on transactions made in international foreign currencies</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Pros and cons from the card catalogue */}
          <div id="review" className="cdp-section-block">
            <h2 className="cdp-section-title">Things to consider</h2>
            <div className="cdp-verdict-card">
              <div className="cdp-pros-cons-grid">
                <div className="cdp-pros-box">
                  <h3>Benefits</h3>
                  <ul>
                    {(card.pros || []).map((p, i) => (
                      <li key={i}>{p}</li>
                    ))}
                  </ul>
                  {!card.pros?.length && <p>Not listed for this card.</p>}
                </div>

                <div className="cdp-cons-box">
                  <h3>Limitations</h3>
                  <ul>
                    {(card.cons || []).map((c, i) => (
                      <li key={i}>{c}</li>
                    ))}
                  </ul>
                  {!card.cons?.length && <p>Not listed for this card.</p>}
                </div>
              </div>
            </div>
          </div>

          {/* SECTION 5: FAQs */}
          <div id="faqs" className="cdp-section-block">
            <h2 className="cdp-section-title">Questions about {card.name}</h2>
            <div className="cdp-faqs-accordion">
              {card.faqs?.length ? card.faqs.map((faq, idx) => (
                <div key={idx} className={`cdp-faq-item ${openFaq === idx ? 'open' : ''}`}>
                  <button type="button" className="cdp-faq-question" aria-expanded={openFaq === idx} aria-controls={`card-faq-${idx}`} onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}>
                    <span>{faq.q}</span>
                    <span className="cdp-faq-toggle" aria-hidden="true">{openFaq === idx ? '−' : '+'}</span>
                  </button>
                  <div id={`card-faq-${idx}`} className="cdp-faq-answer" hidden={openFaq !== idx}>
                    <p>{faq.a}</p>
                  </div>
                </div>
              )) : <p>Card-specific questions are not listed. Review the issuer's terms for the latest details.</p>}
            </div>
          </div>
        </div>
      </section>


      {/* Similar Cards Recommendation */}
      <section className="cdp-similar-section">
        <div className="container">
          <div className="cdp-similar-header">
            <h2>Similar Credit Cards to Consider</h2>
            <Link to="/explore" className="cdp-view-all">Browse all cards</Link>
          </div>

          <div className="cdp-similar-grid">
            {similarCards.map(sCard => (
              <article key={sCard.id} className="cdp-similar-card">
                <div className="cdp-similar-img-box">
                  <CardArtwork card={sCard} className="cdp-similar-img" width="144" height="91" />
                </div>
                <div className="cdp-similar-body">
                  <span className="cdp-similar-bank">{sCard.bankName}</span>
                  <h3 className="cdp-similar-title">{sCard.name}</h3>
                  <div className="cdp-similar-fee">
                    <span>Annual fee <strong>{formatFeeText(sCard.annualFee)}</strong></span>
                  </div>
                  <Link to={sCard.detailRoute || sCard.route} className="cdp-similar-btn">
                    View details
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Sticky Mobile Bar */}
      <div className="cdp-mobile-sticky-bar">
        <div className="cdp-msb-left">
          <div>
            <div className="cdp-msb-name">{card.name}</div>
            <div className="cdp-msb-fee">Annual fee: {formatFeeText(card.annualFee)}</div>
          </div>
        </div>
        <Link
          to="/credit-card-eligibility"
          className="cdp-msb-apply"
          onClick={() => logActivity(user, 'eligibility_click', { card: card.name, bank: card.bankName })}
        >
          Check eligibility
        </Link>
      </div>
    </div>
  );
}

function formatFeeText(fee) {
  if (fee === 0 || fee === '0' || fee === 'Free' || fee === 'Nil') return '₹0';
  if (fee == null || fee === '') return 'Not listed';
  const amount = Number(fee);
  return Number.isFinite(amount) ? `₹${amount.toLocaleString('en-IN')}` : String(fee);
}
