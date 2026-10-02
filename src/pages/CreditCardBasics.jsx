import { useState } from 'react';
import { Link } from 'react-router-dom';
import { basicsContent } from '../data/learnContent';
import '../styles/learn-editorial.css';

export default function CreditCardBasics() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="learn-page bmcc-basics-page">
      {/* Hero with Clean Inline Breadcrumb */}
      <section className="learn-hero">
        <div className="bmcc-container">
          <div className="learn-hero-inner">
            <div className="learn-breadcrumb">
              <Link to="/">Home</Link>
              <span className="learn-breadcrumb-sep">/</span>
              <Link to="/explore">Learn</Link>
              <span className="learn-breadcrumb-sep">/</span>
              <span className="learn-breadcrumb-current">Credit Card Basics</span>
            </div>

            <span className="learn-badge">
              <span className="learn-badge-dot" />
              FOUNDATIONAL FINANCIAL EDUCATION
            </span>
            <h1 className="learn-title">How Credit Cards Actually Work in India</h1>
            <p className="learn-lead">
              {basicsContent.intro}
            </p>
            <div className="learn-trust-strip">
              <span className="learn-trust-pill">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
                RBI Fair Practice Compliant
              </span>
              <span className="learn-trust-pill">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                Up to 50 Days Free Credit
              </span>
              <span className="learn-trust-pill">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                0% Interest If Paid In Full
              </span>
              <span className="learn-trust-pill">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/></svg>
                Updated for 2026 Terms
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: The 4-Stage Credit Card Lifecycle */}
      <section className="learn-section">
        <div className="bmcc-container">
          <div className="learn-section-head">
            <span className="learn-section-kicker">MONTHLY BILLING CYCLE</span>
            <h2 className="learn-section-title">The 4-Stage Card Lifecycle Flow</h2>
            <p className="learn-section-desc">
              Understand the precise sequence between transaction day, statement generation, and payment due date.
            </p>
          </div>

          <div className="learn-flow-grid">
            <div className="learn-step-card">
              <span className="learn-step-badge">1</span>
              <h3 className="learn-step-title">Billing Cycle (Day 1 – 30)</h3>
              <p className="learn-step-desc">
                Your 30-day window where all transactions, swipes, online checkouts, and bill payments accumulate against your approved credit limit.
              </p>
            </div>
            <div className="learn-step-card">
              <span className="learn-step-badge">2</span>
              <h3 className="learn-step-title">Statement Date (Day 30)</h3>
              <p className="learn-step-desc">
                The bank closes your account books for the month. Your statement is generated showing Total Due, Minimum Due, and payment due date.
              </p>
            </div>
            <div className="learn-step-card">
              <span className="learn-step-badge">3</span>
              <h3 className="learn-step-title">Grace Period (Days 31 – 50)</h3>
              <p className="learn-step-desc">
                An interest-free window of 20 to 25 days where no finance charges accrue as long as you clear the full statement balance.
              </p>
            </div>
            <div className="learn-step-card">
              <span className="learn-step-badge">4</span>
              <h3 className="learn-step-title">Due Date (Day 50)</h3>
              <p className="learn-step-desc">
                The final day to pay your bill. Paying in full incurs 0% interest and boosts your CIBIL score; paying minimum due triggers heavy APR.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: 20 to 50 Days Grace Period Timeline */}
      <section className="learn-section">
        <div className="bmcc-container">
          <div className="learn-section-head">
            <span className="learn-section-kicker">SMART SWIPE TIMING</span>
            <h2 className="learn-section-title">How to Maximize Your 50-Day Interest-Free Window</h2>
            <p className="learn-section-desc">
              Purchases made on Day 1 of your cycle enjoy 50 full days of zero-cost credit, while purchases on Day 29 get 21 days.
            </p>
          </div>

          <div className="learn-timeline-card">
            <div className="learn-timeline-track">
              <div className="learn-timeline-bar">
                <div className="learn-bar-segment-active" style={{ width: '60%' }} title="30-Day Billing Cycle" />
                <div className="learn-bar-segment-grace" style={{ width: '40%' }} title="20-Day Grace Window" />
              </div>
              <div className="learn-timeline-labels">
                <span>Day 1 (Statement Opens)</span>
                <span>Day 30 (Statement Generates)</span>
                <span>Day 50 (Payment Due Date)</span>
              </div>
            </div>

            <div className="learn-bento-grid" style={{ marginTop: '28px' }}>
              {basicsContent.gracePeriodWalkthrough.map((step, idx) => (
                <div key={idx} className="learn-card">
                  <div className="learn-card-icon-box learn-icon-blue">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  </div>
                  <h3 className="learn-card-title">{step.title}</h3>
                  <p className="learn-card-body">{step.desc}</p>
                  <div className="learn-card-footer">
                    <span style={{ color: '#2447bb' }}>{step.step}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: 7 Essential Key Terms */}
      <section className="learn-section">
        <div className="bmcc-container">
          <div className="learn-section-head">
            <span className="learn-section-kicker">ESSENTIAL VOCABULARY</span>
            <h2 className="learn-section-title">7 Key Terms Every Cardholder Must Know</h2>
            <p className="learn-section-desc">
              Never get confused by bank statements, customer support lingo, or the fine print again.
            </p>
          </div>

          <div className="learn-bento-grid">
            {basicsContent.keyTerms.map((item, idx) => (
              <div key={idx} className="learn-card">
                <div className="learn-card-icon-box learn-icon-blue">
                  <span style={{ fontSize: '13px', fontWeight: '800' }}>0{idx + 1}</span>
                </div>
                <h3 className="learn-card-title">{item.term}</h3>
                <p className="learn-card-body">{item.desc}</p>
                <div className="learn-card-footer">
                  <span style={{ color: '#059669', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                    Verified Definition
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: 6 Golden Rules of Responsible Credit Usage */}
      <section className="learn-section" style={{ background: '#0f172a', color: '#ffffff' }}>
        <div className="bmcc-container">
          <div className="learn-section-head">
            <span style={{ color: '#38bdf8', fontSize: '11px', fontWeight: '800', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              RESPONSIBLE CARD OWNERSHIP
            </span>
            <h2 style={{ fontSize: 'clamp(26px, 3vw, 36px)', fontWeight: '800', letterSpacing: '-0.03em', color: '#ffffff', margin: '8px 0 12px' }}>
              6 Golden Rules to Never Pay Interest
            </h2>
            <p style={{ color: '#94a3b8', fontSize: '15px', margin: 0 }}>
              Follow these simple guardrails to reap rewards, lounge access, and cashbacks without giving a single rupee back to the bank.
            </p>
          </div>

          <div className="learn-bento-grid">
            {basicsContent.goldenRules.map((rule, idx) => (
              <div
                key={idx}
                style={{
                  background: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '16px',
                  padding: '24px',
                  transition: 'all 0.2s ease',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                  <span style={{
                    width: '26px',
                    height: '26px',
                    borderRadius: '50%',
                    background: 'rgba(56, 189, 248, 0.15)',
                    color: '#38bdf8',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '12px',
                    fontWeight: '800',
                  }}>
                    {idx + 1}
                  </span>
                  <h3 style={{ fontSize: '17px', fontWeight: '700', color: '#ffffff', margin: 0 }}>
                    {rule.rule}
                  </h3>
                </div>
                <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#cbd5e1', margin: 0 }}>
                  {rule.desc}
                </p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link
              to="/explore"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: '#2447bb',
                color: '#ffffff',
                padding: '12px 28px',
                borderRadius: '999px',
                fontWeight: '700',
                fontSize: '14px',
                textDecoration: 'none',
                boxShadow: '0 4px 14px rgba(36, 71, 187, 0.35)',
              }}
            >
              Browse Top Recommended Cards
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Section 5: FAQ Accordion */}
      <section className="learn-section">
        <div className="bmcc-container">
          <div className="learn-section-head">
            <span className="learn-section-kicker">QUESTIONS ANSWERED</span>
            <h2 className="learn-section-title">Frequently Asked Questions</h2>
            <p className="learn-section-desc">
              Straightforward answers to the most common beginner questions.
            </p>
          </div>

          <div className="learn-faq-list">
            {basicsContent.faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="learn-faq-item" data-open={isOpen}>
                  <button
                    type="button"
                    className="learn-faq-btn"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    aria-expanded={isOpen}
                  >
                    <span>{faq.q}</span>
                    <svg className="learn-faq-chevron" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                    </svg>
                  </button>
                  {isOpen && (
                    <div className="learn-faq-body">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
