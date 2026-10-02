import { useState } from 'react';
import { Link } from 'react-router-dom';
import { basicsContent } from '../data/learnContent';
import '../styles/learn-editorial.css';

export default function CreditCardBasics() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="learn-page bmcc-basics-page">
      {/* Hero Header */}
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

            <span className="learn-badge badge-cyan">FOUNDATIONAL FINANCIAL EDUCATION</span>
            <h1 className="learn-title">How Credit Cards Actually Work in India</h1>
            <p className="learn-lead">
              {basicsContent.intro}
            </p>
            <div className="learn-trust-strip">
              <span className="learn-trust-pill pill-emerald">RBI Fair Practice Compliant</span>
              <span className="learn-trust-pill pill-blue">Up to 50 Days Free Credit</span>
              <span className="learn-trust-pill pill-purple">0% Interest If Paid In Full</span>
              <span className="learn-trust-pill pill-amber">Updated for 2026 Terms</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: The 4-Stage Credit Card Lifecycle */}
      <section className="learn-section">
        <div className="bmcc-container">
          <div className="learn-section-head">
            <span className="learn-section-kicker kicker-emerald">MONTHLY BILLING CYCLE</span>
            <h2 className="learn-section-title">The 4-Stage Card Lifecycle Flow</h2>
            <p className="learn-section-desc">
              Understand the precise sequence between transaction day, statement generation, and payment due date.
            </p>
          </div>

          <div className="learn-steps-grid">
            <div className="learn-step-item step-blue">
              <span className="learn-step-tag tag-blue">STAGE 01</span>
              <h3 className="learn-step-header">Billing Cycle (Day 1 – 30)</h3>
              <p className="learn-step-text">
                Your 30-day window where all transactions, swipes, online checkouts, and bill payments accumulate against your approved credit limit.
              </p>
              <div className="learn-step-meta" style={{ color: '#2447bb' }}>Spends Accumulate</div>
            </div>

            <div className="learn-step-item step-purple">
              <span className="learn-step-tag tag-purple">STAGE 02</span>
              <h3 className="learn-step-header">Statement Date (Day 30)</h3>
              <p className="learn-step-text">
                The bank closes your account books for the month. Your statement is generated showing Total Due, Minimum Due, and payment due date.
              </p>
              <div className="learn-step-meta" style={{ color: '#7c3aed' }}>Bill Generated</div>
            </div>

            <div className="learn-step-item step-emerald">
              <span className="learn-step-tag tag-emerald">STAGE 03</span>
              <h3 className="learn-step-header">Grace Period (Days 31 – 50)</h3>
              <p className="learn-step-text">
                An interest-free window of 20 to 25 days where no finance charges accrue as long as you clear the full statement balance.
              </p>
              <div className="learn-step-meta" style={{ color: '#059669' }}>Zero-Interest Buffer</div>
            </div>

            <div className="learn-step-item step-amber">
              <span className="learn-step-tag tag-amber">STAGE 04</span>
              <h3 className="learn-step-header">Due Date (Day 50)</h3>
              <p className="learn-step-text">
                The final day to pay your bill. Paying in full incurs 0% interest and boosts your CIBIL score; paying minimum due triggers heavy APR.
              </p>
              <div className="learn-step-meta" style={{ color: '#c2410c' }}>Payment Clearance</div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: 20 to 50 Days Grace Period Timeline */}
      <section className="learn-section bg-tint-blue">
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
                <span style={{ color: '#2447bb' }}>Day 1 (Billing Opens)</span>
                <span style={{ color: '#7c3aed' }}>Day 30 (Statement Generates)</span>
                <span style={{ color: '#059669' }}>Day 50 (Payment Due Date)</span>
              </div>
            </div>

            <div className="learn-timeline-legend">
              <span className="learn-legend-item">
                <span className="learn-legend-dot dot-primary" />
                30-Day Billing Cycle Spends (0% Interest)
              </span>
              <span className="learn-legend-item">
                <span className="learn-legend-dot dot-grace" />
                20-Day Grace Window Buffer (0% Interest)
              </span>
            </div>

            <div className="learn-card-grid" style={{ marginTop: '28px' }}>
              {basicsContent.gracePeriodWalkthrough.map((step, idx) => {
                const tags = ['tag-blue', 'tag-purple', 'tag-green'];
                return (
                  <div key={idx} className="learn-clean-card">
                    <span className={`learn-card-pill-tag ${tags[idx % tags.length]}`}>{step.step}</span>
                    <h3 className="learn-clean-card-title">{step.title}</h3>
                    <p className="learn-clean-card-body">{step.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: 7 Essential Key Terms */}
      <section className="learn-section">
        <div className="bmcc-container">
          <div className="learn-section-head">
            <span className="learn-section-kicker kicker-purple">ESSENTIAL VOCABULARY</span>
            <h2 className="learn-section-title">7 Key Terms Every Cardholder Must Know</h2>
            <p className="learn-section-desc">
              Clear definitions of bank statements, fees, and terminology.
            </p>
          </div>

          <div className="learn-card-grid">
            {basicsContent.keyTerms.map((item, idx) => {
              const tags = ['tag-blue', 'tag-green', 'tag-purple', 'tag-amber', 'tag-rose', 'tag-cyan', 'tag-blue'];
              return (
                <div key={idx} className="learn-clean-card">
                  <span className={`learn-card-pill-tag ${tags[idx % tags.length]}`}>Key Term 0{idx + 1}</span>
                  <h3 className="learn-clean-card-title">{item.term}</h3>
                  <p className="learn-clean-card-body">{item.desc}</p>
                  <div className="learn-clean-card-footer">
                    <span style={{ color: '#059669', fontWeight: '700' }}>Official MITC Metric</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 4: 6 Golden Rules of Responsible Credit Usage */}
      <section className="learn-section bg-tint-emerald">
        <div className="bmcc-container">
          <div className="learn-section-head">
            <span className="learn-section-kicker kicker-amber">FINANCIAL DISCIPLINE</span>
            <h2 className="learn-section-title">6 Golden Rules to Never Pay Interest</h2>
            <p className="learn-section-desc">
              Follow these simple guardrails to reap rewards, lounge access, and cashbacks without finance charges.
            </p>
          </div>

          <div className="learn-card-grid">
            {basicsContent.goldenRules.map((rule, idx) => {
              const tags = ['tag-green', 'tag-blue', 'tag-amber', 'tag-purple', 'tag-rose', 'tag-cyan'];
              return (
                <div key={idx} className="learn-clean-card">
                  <span className={`learn-card-pill-tag ${tags[idx % tags.length]}`}>Golden Rule 0{idx + 1}</span>
                  <h3 className="learn-clean-card-title">{rule.rule}</h3>
                  <p className="learn-clean-card-body">{rule.desc}</p>
                </div>
              );
            })}
          </div>

          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link
              to="/explore"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: '#10110f',
                color: '#ffffff',
                padding: '13px 30px',
                borderRadius: '999px',
                fontWeight: '700',
                fontSize: '14px',
                textDecoration: 'none',
                boxShadow: '0 4px 14px rgba(16, 17, 15, 0.2)',
              }}
            >
              Browse Recommended Credit Cards
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Section 5: FAQ Accordion with Fixed Chevron Sizing */}
      <section className="learn-section">
        <div className="bmcc-container">
          <div className="learn-section-head">
            <span className="learn-section-kicker">QUESTIONS ANSWERED</span>
            <h2 className="learn-section-title">Frequently Asked Questions</h2>
            <p className="learn-section-desc">
              Straightforward answers to common credit card basics questions.
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
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="learn-faq-chevron"
                      style={{ width: '18px', height: '18px', minWidth: '18px', maxWidth: '18px', flexShrink: 0 }}
                    >
                      <path d="M6 9l6 6 6-6" />
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
