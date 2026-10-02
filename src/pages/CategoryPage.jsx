import { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import CardListingSection from '../components/CardListingSection';
import Loader from '../components/ui/Loader';
import LegalPage from './LegalPage';
import CardDetailPage from './CardDetailPage';
import CategoryIllustration from '../components/CategoryIllustration';
import { WhyIllustration, HowIllustration } from '../components/ServiceIllustrations';
import BankLogo from '../components/BankLogo';
import { useData } from '../context/DataContext';
import { getCardBySlugOrRoute } from '../data/cardDetails';
import { categoryEditorialData } from '../data/categoryEditorial';
import { bankEditorialData } from '../data/bankEditorial';
import '../styles/home-editorial.css';
import '../styles/category-hub-premium.css';

export default function CategoryPage() {
  const { slug } = useParams();
  const { categoryPages, getCardsByCategory, cards: allCards, loading } = useData();
  const [openFaq, setOpenFaq] = useState(null);

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

  // Fallback: if slug exists in bankEditorialData but not in categoryPages
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

  if (!page) {
    return <LegalPage slug={slug} />;
  }

  const isBank = Boolean(page.isBank || bankEditorialData[slug]);
  const catEditorial = categoryEditorialData[slug] || categoryEditorialData['cashback-credit-cards'];
  const bankEditorial = bankEditorialData[slug];

  // Retrieve matching cards
  let filteredCards = [];
  if (isBank) {
    const bankId = page.bankId || bankEditorial?.bankId;
    filteredCards = allCards.filter(c =>
      (bankId && c.bank === bankId) ||
      (c.bankName && page.title && c.bankName.toLowerCase().includes(page.title.toLowerCase().split(' ')[0]))
    );
  } else {
    filteredCards = getCardsByCategory(page.categoryId);
    if (filteredCards.length === 0) {
      filteredCards = allCards.filter(c =>
        (c.categories || []).some(cat => cat.includes(page.categoryId) || page.categoryId.includes(cat))
      );
    }
  }

  const title = bankEditorial?.title || catEditorial?.title || page.title;
  const description = bankEditorial?.heroDesc || catEditorial?.heroDesc || page.description;
  const badge = bankEditorial?.badge || catEditorial?.badge || (isBank ? 'Verified Bank Hub' : 'Curated Category');
  const stats = bankEditorial?.stats || catEditorial?.stats || [];
  const highlights = bankEditorial?.highlights || catEditorial?.highlights || [];
  const topCardsTable = bankEditorial?.topCards || catEditorial?.topCards || [];
  const faqs = bankEditorial?.faqs || catEditorial?.faqs || [];
  const accentTheme = bankEditorial?.accent || catEditorial?.accent || 'blue';

  return (
    <div className={`bmcc-hub-page bmcc-hub-theme-${accentTheme}`}>
      {/* 1. HERO SECTION WITH 3D SERVICE ILLUSTRATION / EMBOSSED CREST */}
      <section className="bmcc-hub-hero">
        <div className="bmcc-hub-hero-wash" />
        <div className="bmcc-container">
          <div className="bmcc-hub-hero-inner">
            <div>
              {/* Breadcrumbs */}
              <nav className="bmcc-hub-breadcrumbs" aria-label="Breadcrumb">
                <Link to="/">Home</Link>
                <span className="bmcc-hub-breadcrumbs-sep">/</span>
                <Link to="/explore">Explore</Link>
                <span className="bmcc-hub-breadcrumbs-sep">/</span>
                <span style={{ color: '#0f172a', fontWeight: 600 }}>{title}</span>
              </nav>

              {/* Eyebrow Badge */}
              <div className="bmcc-hub-hero-eyebrow">
                <span>â˜…</span> {badge}
              </div>

              {/* Title & Tagline */}
              <h1 className="bmcc-hub-hero-title">
                {title}
              </h1>
              <p className="bmcc-hub-hero-desc">
                {description}
              </p>

              {/* Actions & Proof */}
              <div className="bmcc-hub-hero-actions">
                <a href="#card-catalog" className="bmcc-hub-cta-btn">
                  Explore {filteredCards.length > 0 ? `${filteredCards.length}+` : 'All'} Cards â†“
                </a>
                <Link to="/compare-credit-cards" className="bmcc-hub-secondary-btn">
                  Compare Cards
                </Link>
                <Link to="/credit-card-eligibility" className="bmcc-hub-secondary-btn" style={{ background: '#f8fafc' }}>
                  Check Eligibility (0% CIBIL Impact)
                </Link>
              </div>
            </div>

            {/* 3D Visual Stage */}
            <div className="bmcc-hub-hero-visual">
              <div className="bmcc-hub-visual-stage">
                {isBank ? (
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                    <div style={{ width: '90px', height: '90px', display: 'grid', placeItems: 'center' }}>
                      <BankLogo bank={bankEditorial?.bankId || page.bankId} size={72} />
                    </div>
                    <span style={{ fontSize: '13px', fontWeight: '750', color: '#0f172a' }}>
                      {bankEditorial?.bankName || page.title.split(' ')[0]}
                    </span>
                  </div>
                ) : (
                  <CategoryIllustration
                    categoryKey={page.slug || 'cashback-credit-cards'}
                    className="bmcc-hub-3d-graphic"
                  />
                )}
                <div className="bmcc-hub-visual-badge">
                  {isBank ? 'OFFICIAL ISSUER' : 'VERIFIED 2026'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. KEY METRICS STATS BAR */}
      {stats.length > 0 && (
        <section className="bmcc-hub-stats-section">
          <div className="bmcc-container">
            <div className="bmcc-hub-stats-grid">
              {stats.map((stat, idx) => (
                <div key={idx} className="bmcc-hub-stat-card">
                  <span className="bmcc-hub-stat-label">{stat.label}</span>
                  <div className="bmcc-hub-stat-value">{stat.value}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 3. CURATED TOP CARDS COMPARISON MATRIX (EDITOR'S PICKS) */}
      {topCardsTable.length > 0 && (
        <section className="bmcc-hub-section" style={{ background: '#ffffff' }}>
          <div className="bmcc-container">
            <div className="bmcc-hub-section-head">
              <span className="bmcc-section-label">CURATED BENCHMARK</span>
              <h2 className="bmcc-section-title" style={{ fontSize: 'clamp(26px, 2.5vw, 36px)', marginBottom: '8px' }}>
                Top {title} in India (September 2026)
              </h2>
              <p className="bmcc-section-sub">
                Handpicked top performers ranked by reward value-back, joining benefits, and annual fee waiver spends.
              </p>
            </div>

            <div className="bmcc-hub-table-wrapper">
              <div style={{ overflowX: 'auto' }}>
                <table className="bmcc-hub-table">
                  <thead>
                    <tr>
                      <th style={{ minWidth: '220px' }}>Credit Card</th>
                      <th style={{ minWidth: '130px' }}>Joining / Annual Fee</th>
                      <th style={{ minWidth: '260px' }}>Key Highlights & Valueback</th>
                      <th style={{ minWidth: '160px' }}>Spend Waiver</th>
                      <th style={{ minWidth: '150px', textAlign: 'center' }}>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {topCardsTable.map((c, idx) => (
                      <tr key={idx}>
                        <td>
                          <span className="bmcc-hub-table-card-name">{c.name}</span>
                          <span className="bmcc-hub-table-bank-name">
                            {c.bank || bankEditorial?.bankName || 'Verified Partner'} {c.rating ? `â€¢ â˜… ${c.rating}` : ''}
                          </span>
                        </td>
                        <td>
                          <span className="bmcc-hub-badge-fee">{c.annualFee}</span>
                        </td>
                        <td>
                          <div className="bmcc-hub-table-perk">{c.perk}</div>
                        </td>
                        <td>
                          <span className="bmcc-hub-table-waiver">{c.waiver || 'Standard Milestone'}</span>
                        </td>
                        <td style={{ textAlign: 'center' }}>
                          <Link
                            to="/compare-credit-cards"
                            className="pb-check-eligibility"
                            style={{
                              fontSize: '11.5px',
                              padding: '6px 14px',
                              textDecoration: 'none',
                              display: 'inline-block',
                              whiteSpace: 'nowrap',
                            }}
                          >
                            Compare Card
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 4. EDITORIAL HIGHLIGHTS / 4 FEATURE PILLARS */}
      {highlights.length > 0 && (
        <section className="bmcc-hub-section" style={{ background: '#f8fafc' }}>
          <div className="bmcc-container">
            <div className="bmcc-hub-section-head">
              <span className="bmcc-section-label">KEY ADVANTAGES</span>
              <h2 className="bmcc-section-title" style={{ fontSize: 'clamp(26px, 2.5vw, 36px)', marginBottom: '8px' }}>
                Why Choose {title}?
              </h2>
              <p className="bmcc-section-sub">
                Core financial benefits, reward multiplier rules, and fee savings unpacked by our editorial team.
              </p>
            </div>

            <div className="bmcc-hub-highlights-grid">
              {highlights.map((h, idx) => (
                <div key={idx} className="bmcc-hub-highlight-card">
                  <div className="bmcc-hub-highlight-num">0{idx + 1} â€¢ BENEFIT</div>
                  <h3 className="bmcc-hub-highlight-title">{h.title}</h3>
                  <p className="bmcc-hub-highlight-desc">{h.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 5. BANK FEES & ELIGIBILITY SCHEDULE (FOR BANK HUBS) */}
      {isBank && (bankEditorial?.feesSchedule || bankEditorial?.eligibility) && (
        <section className="bmcc-hub-section" style={{ background: '#ffffff' }}>
          <div className="bmcc-container">
            <div className="bmcc-hub-section-head">
              <span className="bmcc-section-label">SCHEDULE OF CHARGES & ELIGIBILITY</span>
              <h2 className="bmcc-section-title" style={{ fontSize: 'clamp(26px, 2.5vw, 36px)', marginBottom: '8px' }}>
                {title} Fees & Minimum Requirements
              </h2>
              <p className="bmcc-section-sub">
                Clear, transparent terms and conditions for informed borrowing.
              </p>
            </div>

            <div className="bmcc-hub-bank-meta-grid">
              {/* Standard Fees */}
              {bankEditorial?.feesSchedule && (
                <div className="bmcc-hub-meta-box">
                  <h3 className="bmcc-hub-meta-title">
                    <span>ðŸ’³</span> Standard Fees & Charges (MITC)
                  </h3>
                  <div>
                    {bankEditorial.feesSchedule.map((fee, idx) => (
                      <div key={idx} className="bmcc-hub-fee-row">
                        <span className="bmcc-hub-fee-name">{fee.feeType}</span>
                        <span className="bmcc-hub-fee-val">{fee.details}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Eligibility Criteria */}
              {bankEditorial?.eligibility && (
                <div className="bmcc-hub-meta-box">
                  <h3 className="bmcc-hub-meta-title">
                    <span>ðŸ“‹</span> Eligibility & Document Checklist
                  </h3>
                  <div>
                    <div className="bmcc-hub-fee-row">
                      <span className="bmcc-hub-fee-name">Eligible Age</span>
                      <span className="bmcc-hub-fee-val">{bankEditorial.eligibility.age}</span>
                    </div>
                    <div className="bmcc-hub-fee-row">
                      <span className="bmcc-hub-fee-name">Salaried Income</span>
                      <span className="bmcc-hub-fee-val">{bankEditorial.eligibility.salariedIncome}</span>
                    </div>
                    <div className="bmcc-hub-fee-row">
                      <span className="bmcc-hub-fee-name">Self-Employed ITR</span>
                      <span className="bmcc-hub-fee-val">{bankEditorial.eligibility.selfEmployedIncome}</span>
                    </div>
                    <div className="bmcc-hub-fee-row">
                      <span className="bmcc-hub-fee-name">Recommended CIBIL</span>
                      <span className="bmcc-hub-fee-val" style={{ color: '#059669', fontWeight: 750 }}>
                        {bankEditorial.eligibility.creditScore}
                      </span>
                    </div>
                  </div>
                  <div style={{ marginTop: '16px', padding: '12px', background: '#f8fafc', borderRadius: '10px', fontSize: '12px', color: '#64748b' }}>
                    <strong>Required KYC:</strong> PAN Card, Aadhaar Card, Recent Salary Slips (or Form 16 / ITR), and 3-month Bank Statement.
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* 6. HOW TO APPLY ONLINE (4-STEPPED WORKFLOW WITH 3D SERVICE ILLUSTRATIONS) */}
      <section className="bmcc-hub-section" style={{ background: '#f8fafc' }}>
        <div className="bmcc-container">
          <div className="bmcc-hub-section-head">
            <span className="bmcc-section-label">APPLICATION WORKFLOW</span>
            <h2 className="bmcc-section-title" style={{ fontSize: 'clamp(26px, 2.5vw, 36px)', marginBottom: '8px' }}>
              How to Apply for {title} Online
            </h2>
            <p className="bmcc-section-sub">
              100% digital onboarding with instant pre-approval and doorstep or virtual video KYC.
            </p>
          </div>

          <div className="bmcc-hub-steps-grid">
            <div className="bmcc-hub-step-card">
              <HowIllustration step="1" className="bmcc-hub-step-visual" />
              <span className="bmcc-hub-step-num">Step 01</span>
              <h3 className="bmcc-hub-step-title">Check Eligibility</h3>
              <p className="bmcc-hub-step-desc">
                Fill in basic employment and contact details in under 60 seconds. Enjoy zero impact on your CIBIL score.
              </p>
            </div>

            <div className="bmcc-hub-step-card">
              <HowIllustration step="2" className="bmcc-hub-step-visual" />
              <span className="bmcc-hub-step-num">Step 02</span>
              <h3 className="bmcc-hub-step-title">Compare & Pick</h3>
              <p className="bmcc-hub-step-desc">
                Review pre-qualified credit cards side by side with annual fee waivers and customized reward multipliers.
              </p>
            </div>

            <div className="bmcc-hub-step-card">
              <HowIllustration step="3" className="bmcc-hub-step-visual" />
              <span className="bmcc-hub-step-num">Step 03</span>
              <h3 className="bmcc-hub-step-title">Instant Digital KYC</h3>
              <p className="bmcc-hub-step-desc">
                Complete Aadhaar OTP verification and a 2-minute video KYC session directly with the partner bank.
              </p>
            </div>

            <div className="bmcc-hub-step-card">
              <HowIllustration step="4" className="bmcc-hub-step-visual" />
              <span className="bmcc-hub-step-num">Step 04</span>
              <h3 className="bmcc-hub-step-title">Card Activation</h3>
              <p className="bmcc-hub-step-desc">
                Receive virtual card details instantly for online shopping; physical metal/plastic card delivers in 3â€“5 days.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. LIVE FILTERABLE CARDS SECTION */}
      <section id="card-catalog" className="bmcc-hub-section" style={{ background: '#ffffff' }}>
        <div className="bmcc-container">
          <div className="bmcc-hub-section-head">
            <span className="bmcc-section-label">LIVE CARDS CATALOGUE</span>
            <h2 className="bmcc-section-title" style={{ fontSize: 'clamp(26px, 2.5vw, 36px)', marginBottom: '8px' }}>
              Browse Available {title}
            </h2>
            <p className="bmcc-section-sub">
              Filter and search through our verified database of card offerings with real-time fee and perk transparency.
            </p>
          </div>

          <CardListingSection
            initialCards={filteredCards}
            categoryTitle={title}
            categoryDesc={`Showing all active ${title.toLowerCase()} verified on BookMyCreditCard.`}
          />
        </div>
      </section>

      {/* 8. INTERACTIVE FAQ ACCORDION */}
      {faqs.length > 0 && (
        <section className="bmcc-hub-section" style={{ background: '#f8fafc' }}>
          <div className="bmcc-container">
            <div className="bmcc-hub-section-head">
              <span className="bmcc-section-label">EXPERT ADVICE</span>
              <h2 className="bmcc-section-title" style={{ fontSize: 'clamp(26px, 2.5vw, 36px)', marginBottom: '8px' }}>
                Frequently Asked Questions
              </h2>
              <p className="bmcc-section-sub">
                Answers to common queries regarding fees, reward redemptions, billing cycles, and eligibility.
              </p>
            </div>

            <div className="bmcc-hub-faq-list">
              {faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div key={idx} className={`bmcc-hub-faq-item ${isOpen ? 'is-open' : ''}`}>
                    <button
                      type="button"
                      className="bmcc-hub-faq-question"
                      aria-expanded={isOpen}
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                    >
                      <span>{faq.q}</span>
                      <svg className="bmcc-hub-faq-chevron" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                      </svg>
                    </button>
                    {isOpen && (
                      <div className="bmcc-hub-faq-answer">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
