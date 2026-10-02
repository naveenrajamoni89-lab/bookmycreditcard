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
      {/* Hero Quick Trust Strip */}
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

            <span className="learn-badge">
              <span className="learn-badge-dot" />
              PRACTICAL APPLICATION PLAYBOOKS
            </span>
            <h1 className="learn-title">Actionable Credit Card Guides & How-Tos</h1>
            <p className="learn-lead">
              Clear, step-by-step procedures to help you navigate limit increases, dispute fraudulent charges, maximize reward redemptions, and protect your credit score.
            </p>
            <div className="learn-trust-strip">
              <span className="learn-trust-pill">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                Step-by-Step Checklists
              </span>
              <span className="learn-trust-pill">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                Under 5 Min Reads
              </span>
              <span className="learn-trust-pill">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                RBI Banking Ombudsman Aligned
              </span>
              <span className="learn-trust-pill">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                Zero Fluff Guidance
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Interactive Playbook Reader */}
      <section className="learn-section">
        <div className="bmcc-container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(280px, 340px) minmax(0, 1fr)',
            gap: '32px',
            alignItems: 'start',
          }}>
            {/* Guide Navigation Sidebar */}
            <aside style={{
              background: '#ffffff',
              border: '1px solid #e2e8f0',
              borderRadius: '16px',
              padding: '16px',
              boxShadow: '0 2px 8px rgba(15, 23, 42, 0.03)',
              position: 'sticky',
              top: '90px',
            }}>
              <div style={{ padding: '8px 12px 14px', borderBottom: '1px solid #f1f5f9', marginBottom: '8px' }}>
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
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        gap: '4px',
                        padding: '12px 14px',
                        borderRadius: '10px',
                        border: 'none',
                        background: isActive ? '#eff6ff' : 'transparent',
                        color: isActive ? '#2447bb' : '#1e293b',
                        textAlign: 'left',
                        cursor: 'pointer',
                        transition: 'all 0.15s ease',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                        <span style={{ fontSize: '10.5px', fontWeight: '800', letterSpacing: '0.04em', textTransform: 'uppercase', color: isActive ? '#2447bb' : '#94a3b8' }}>
                          0{idx + 1} · {guide.category}
                        </span>
                        <span style={{ fontSize: '11px', color: '#94a3b8' }}>{guide.time}</span>
                      </div>
                      <span style={{ fontSize: '13.5px', fontWeight: isActive ? '700' : '600', lineHeight: '1.35', color: isActive ? '#2447bb' : '#0f172a' }}>
                        {guide.title}
                      </span>
                    </button>
                  );
                })}
              </nav>
            </aside>

            {/* Active Guide Article */}
            <article style={{
              background: '#ffffff',
              border: '1px solid #e2e8f0',
              borderRadius: '20px',
              padding: 'clamp(28px, 4vw, 44px)',
              boxShadow: '0 4px 16px rgba(15, 23, 42, 0.04)',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
                <span className="pb-learn-item-pill pill-blue">
                  {current.category}
                </span>
                <span style={{ color: '#64748b', fontSize: '13px' }}>
                  Reading time: {current.time}
                </span>
              </div>

              <h2 style={{ fontSize: 'clamp(24px, 3vw, 34px)', fontWeight: '800', letterSpacing: '-0.03em', color: '#10110f', margin: '0 0 16px', lineHeight: '1.2' }}>
                {current.title}
              </h2>

              <p style={{ fontSize: '16px', lineHeight: '1.65', color: '#475569', margin: '0 0 28px', paddingBottom: '20px', borderBottom: '1px solid #f1f5f9' }}>
                {current.summary}
              </p>

              <h3 style={{ fontSize: '18px', fontWeight: '800', letterSpacing: '-0.02em', color: '#0f172a', margin: '0 0 18px' }}>
                Step-by-Step Procedure
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {current.steps.map((step, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      gap: '16px',
                      alignItems: 'flex-start',
                      background: '#f8fafc',
                      border: '1px solid #edf2f7',
                      borderRadius: '12px',
                      padding: '18px 20px',
                      transition: 'all 0.15s ease',
                    }}
                  >
                    <span style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      minWidth: '28px',
                      height: '28px',
                      borderRadius: '8px',
                      background: '#2447bb',
                      color: '#ffffff',
                      fontSize: '12px',
                      fontWeight: '800',
                      flexShrink: 0,
                    }}>
                      {idx + 1}
                    </span>
                    <p style={{ margin: 0, fontSize: '14.5px', lineHeight: '1.6', color: '#334155' }}>
                      {step}
                    </p>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: '36px', paddingTop: '24px', borderTop: '1px solid #f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '14px' }}>
                <Link
                  to="/credit-card-eligibility"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    color: '#2447bb',
                    fontWeight: '700',
                    fontSize: '14px',
                    textDecoration: 'none',
                  }}
                >
                  Check Your Approval Odds Free
                  <span aria-hidden="true">→</span>
                </Link>

                <Link
                  to="/compare-credit-cards"
                  style={{
                    background: '#2447bb',
                    color: '#ffffff',
                    padding: '10px 22px',
                    borderRadius: '999px',
                    fontSize: '13.5px',
                    fontWeight: '700',
                    textDecoration: 'none',
                    boxShadow: '0 2px 8px rgba(36, 71, 187, 0.25)',
                  }}
                >
                  Compare Top Cards Now
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Section 2: Crisis Assistance / Emergency Playbooks */}
      <section className="learn-section" style={{ background: '#f8fafc' }}>
        <div className="bmcc-container">
          <div className="learn-section-head">
            <span className="learn-section-kicker">CRISIS ASSISTANCE</span>
            <h2 className="learn-section-title">Emergency Quick-Response Playbooks</h2>
            <p className="learn-section-desc">
              Immediate security and dispute measures when time is critical.
            </p>
          </div>

          <div className="learn-bento-grid">
            <div className="learn-card" style={{ borderColor: '#fecaca', background: '#ffffff' }}>
              <div className="learn-card-icon-box learn-icon-rose">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
              </div>
              <h3 className="learn-card-title">Card Lost or Stolen?</h3>
              <p className="learn-card-body">
                Immediately freeze the card via your bank mobile app in under 15 seconds. Then report to customer care and obtain a police complaint reference for zero liability protection.
              </p>
              <div className="learn-card-footer" style={{ color: '#e11d48' }}>
                <span>RBI 3-Day Zero Liability Window</span>
              </div>
            </div>

            <div className="learn-card" style={{ borderColor: '#fed7aa', background: '#ffffff' }}>
              <div className="learn-card-icon-box learn-icon-amber">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
              </div>
              <h3 className="learn-card-title">Unauthorized Transaction Dispute</h3>
              <p className="learn-card-body">
                Notify your bank within 72 hours of receiving the unauthorized SMS alert. Under RBI mandates, reporting within 3 business days grants you full zero-liability indemnity.
              </p>
              <div className="learn-card-footer" style={{ color: '#d97706' }}>
                <span>Immediate Chargeback Initiation</span>
              </div>
            </div>

            <div className="learn-card" style={{ borderColor: '#bbf7d0', background: '#ffffff' }}>
              <div className="learn-card-icon-box learn-icon-green">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              </div>
              <h3 className="learn-card-title">Safe Card Cancellation</h3>
              <p className="learn-card-body">
                Ensure zero outstanding balance, redeem all accumulated reward points first, and request an official No Objection Certificate (NOC) and account closure confirmation letter.
              </p>
              <div className="learn-card-footer" style={{ color: '#059669' }}>
                <span>Zero Score Impact Protocol</span>
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
