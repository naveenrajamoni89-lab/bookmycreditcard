import { useState } from 'react';
import { Link } from 'react-router-dom';
import FAQSection from '../components/FAQSection';
import { guidesHubContent } from '../data/learnContent';
import '../styles/learn-editorial.css';

export default function CreditCardGuides() {
  const [activeGuide, setActiveGuide] = useState(guidesHubContent.guides[0].id);

  const current = guidesHubContent.guides.find(g => g.id === activeGuide) || guidesHubContent.guides[0];

  return (
    <div className="learn-page bmcc-guides-page">
      {/* Hero Header */}
      <section className="learn-hero">
        <div className="bmcc-container">
          <div className="learn-hero-inner">
            <div className="learn-breadcrumb">
              <Link to="/">Home</Link>
              <span className="learn-breadcrumb-sep">/</span>
              <Link to="/explore">Learn</Link>
              <span className="learn-breadcrumb-sep">/</span>
              <span className="learn-breadcrumb-current">Credit Card Guides</span>
            </div>

            <span className="learn-badge badge-cyan">PRACTICAL PLAYBOOKS</span>
            <h1 className="learn-title">Actionable Credit Card Guides & How-Tos</h1>
            <p className="learn-lead">
              Clear, step-by-step procedures to help you navigate limit increases, dispute fraudulent charges, maximize reward redemptions, and protect your credit score.
            </p>
            <div className="learn-trust-strip">
              <span className="learn-trust-pill pill-blue">Step-by-Step Checklists</span>
              <span className="learn-trust-pill pill-purple">Under 5 Min Reads</span>
              <span className="learn-trust-pill pill-emerald">RBI Banking Ombudsman Aligned</span>
              <span className="learn-trust-pill pill-amber">Zero Fluff Guidance</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Interactive Playbook Reader */}
      <section className="learn-section">
        <div className="bmcc-container">
          <div className="learn-reader-layout">
            {/* Guide Navigation Sidebar */}
            <aside className="learn-reader-nav">
              <div style={{ padding: '8px 12px 10px', borderBottom: '1px solid #f1f5f9', marginBottom: '6px' }}>
                <span style={{ fontSize: '11px', fontWeight: '800', letterSpacing: '0.08em', color: '#2447bb', textTransform: 'uppercase', display: 'block', marginBottom: '2px' }}>
                  PLAYBOOK DIRECTORY
                </span>
                <span style={{ fontSize: '12px', color: '#64748b' }}>
                  {guidesHubContent.guides.length} Actionable Walkthroughs
                </span>
              </div>

              <nav style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                {guidesHubContent.guides.map((guide, idx) => {
                  const isActive = guide.id === activeGuide;
                  return (
                    <button
                      key={guide.id}
                      type="button"
                      onClick={() => setActiveGuide(guide.id)}
                      className={`learn-reader-link ${isActive ? 'active' : ''}`}
                    >
                      <span className="learn-reader-link-title">
                        {idx + 1}. {guide.title}
                      </span>
                      <span className="learn-reader-link-time">
                        {guide.category} · {guide.time}
                      </span>
                    </button>
                  );
                })}
              </nav>
            </aside>

            {/* Active Guide Article */}
            <article className="learn-reader-content">
              <div className="learn-reader-header">
                <span className="learn-card-pill-tag tag-blue" style={{ marginBottom: '10px' }}>
                  {current.category} · {current.time}
                </span>
                <h2 className="learn-reader-title">{current.title}</h2>
                <p className="learn-reader-desc">{current.summary}</p>
              </div>

              <h3 style={{ fontSize: '17px', fontWeight: '700', color: '#0f172a', margin: '0 0 16px' }}>
                Step-by-Step Procedure
              </h3>

              <div className="learn-reader-steps">
                {current.steps.map((step, idx) => (
                  <div key={idx} className="learn-reader-step-row">
                    <span className="learn-step-index">0{idx + 1}.</span>
                    <p className="learn-step-detail">{step}</p>
                  </div>
                ))}
              </div>

              <div className="learn-pro-tip-box" style={{ background: '#f8faff', borderLeft: '4px solid #2447bb' }}>
                <strong style={{ color: '#2447bb' }}>Editorial Pro-Tip:</strong> Always request and record a service request or complaint reference number when dealing with bank customer support for audit compliance.
              </div>

              <div style={{ marginTop: '28px', paddingTop: '20px', borderTop: '1px solid #f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '14px' }}>
                <Link
                  to="/credit-card-eligibility"
                  style={{
                    color: '#2447bb',
                    fontWeight: '700',
                    fontSize: '13.5px',
                    textDecoration: 'none',
                  }}
                >
                  Check Your Card Eligibility Free →
                </Link>

                <Link
                  to="/explore"
                  style={{
                    background: '#10110f',
                    color: '#ffffff',
                    padding: '10px 22px',
                    borderRadius: '999px',
                    fontSize: '13px',
                    fontWeight: '700',
                    textDecoration: 'none',
                  }}
                >
                  Explore All Credit Cards
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Section 2: Crisis Assistance / Emergency Playbooks */}
      <section className="learn-section bg-subtle">
        <div className="bmcc-container">
          <div className="learn-section-head">
            <span className="learn-section-kicker kicker-rose">CRISIS ASSISTANCE</span>
            <h2 className="learn-section-title">Emergency Quick-Response Playbooks</h2>
            <p className="learn-section-desc">
              Immediate security and dispute measures when time is critical.
            </p>
          </div>

          <div className="learn-card-grid">
            <div className="learn-clean-card" style={{ borderTop: '4px solid #dc2626' }}>
              <span className="learn-card-pill-tag tag-rose">Urgent Action</span>
              <h3 className="learn-clean-card-title">Card Lost or Stolen?</h3>
              <p className="learn-clean-card-body">
                Immediately block the card via your bank mobile app in under 15 seconds. Then report to customer care and obtain a police complaint reference for zero liability protection.
              </p>
              <div className="learn-clean-card-footer">
                <span style={{ color: '#dc2626', fontWeight: '700' }}>RBI 3-Day Zero Liability Window</span>
              </div>
            </div>

            <div className="learn-clean-card" style={{ borderTop: '4px solid #d97706' }}>
              <span className="learn-card-pill-tag tag-amber">Dispute Protocol</span>
              <h3 className="learn-clean-card-title">Unauthorized Transaction Dispute</h3>
              <p className="learn-clean-card-body">
                Notify your bank within 72 hours of receiving the unauthorized SMS alert. Under RBI mandates, reporting within 3 business days grants you full zero-liability indemnity.
              </p>
              <div className="learn-clean-card-footer">
                <span style={{ color: '#d97706', fontWeight: '700' }}>Immediate Chargeback Initiation</span>
              </div>
            </div>

            <div className="learn-clean-card" style={{ borderTop: '4px solid #059669' }}>
              <span className="learn-card-pill-tag tag-green">Account Closure</span>
              <h3 className="learn-clean-card-title">Safe Card Cancellation</h3>
              <p className="learn-clean-card-body">
                Ensure zero outstanding balance, redeem all accumulated reward points first, and request an official No Objection Certificate (NOC) and account closure confirmation letter.
              </p>
              <div className="learn-clean-card-footer">
                <span style={{ color: '#059669', fontWeight: '700' }}>Zero Score Impact Protocol</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: FAQs */}
      <section className="learn-section">
        <div className="bmcc-container">
          <FAQSection page="home" title="Credit Card Guides & How-To FAQs" />
        </div>
      </section>
    </div>
  );
}
