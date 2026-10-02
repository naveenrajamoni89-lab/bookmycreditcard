import { useState } from 'react';
import { Link } from 'react-router-dom';
import { basicsContent } from '../data/learnContent';
import '../styles/learn-editorial.css';

export default function CreditCardBasics() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="learn-page bmcc-basics-page">
      {/* Hero Header - Clean & Left Aligned */}
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

            <span className="learn-hero-kicker">Foundational Financial Education</span>
            <h1 className="learn-title">How Credit Cards Actually Work in India</h1>
            <p className="learn-lead">
              {basicsContent.intro}
            </p>
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

          <div className="learn-steps-grid">
            <div className="learn-step-item">
              <span className="learn-step-num">STAGE 01</span>
              <h3 className="learn-step-header">Billing Cycle (Day 1 – 30)</h3>
              <p className="learn-step-text">
                Your 30-day window where all transactions, swipes, online checkouts, and bill payments accumulate against your approved credit limit.
              </p>
              <div className="learn-step-meta">Spends Accumulate</div>
            </div>

            <div className="learn-step-item">
              <span className="learn-step-num">STAGE 02</span>
              <h3 className="learn-step-header">Statement Date (Day 30)</h3>
              <p className="learn-step-text">
                The bank closes your account books for the month. Your statement is generated showing Total Due, Minimum Due, and payment due date.
              </p>
              <div className="learn-step-meta">Bill Generated</div>
            </div>

            <div className="learn-step-item">
              <span className="learn-step-num">STAGE 03</span>
              <h3 className="learn-step-header">Grace Period (Days 31 – 50)</h3>
              <p className="learn-step-text">
                An interest-free window of 20 to 25 days where no finance charges accrue as long as you clear the full statement balance.
              </p>
              <div className="learn-step-meta">Zero-Interest Buffer</div>
            </div>

            <div className="learn-step-item">
              <span className="learn-step-num">STAGE 04</span>
              <h3 className="learn-step-header">Due Date (Day 50)</h3>
              <p className="learn-step-text">
                The final day to pay your bill. Paying in full incurs 0% interest and boosts your CIBIL score; paying minimum due triggers heavy APR.
              </p>
              <div className="learn-step-meta">Payment Clearance</div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: 20 to 50 Days Grace Period Timeline */}
      <section className="learn-section bg-subtle">
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
                <span style={{ color: '#475569' }}>Day 30 (Statement Generates)</span>
                <span style={{ color: '#10110f' }}>Day 50 (Payment Due Date)</span>
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
              {basicsContent.gracePeriodWalkthrough.map((step, idx) => (
                <div key={idx} className="learn-clean-card">
                  <span className="learn-card-label">{step.step}</span>
                  <h3 className="learn-clean-card-title">{step.title}</h3>
                  <p className="learn-clean-card-body">{step.desc}</p>
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
              Clear definitions of bank statements, fees, and terminology.
            </p>
          </div>

          <div className="learn-card-grid">
            {basicsContent.keyTerms.map((item, idx) => (
              <div key={idx} className="learn-clean-card">
                <span className="learn-card-label">Key Term 0{idx + 1}</span>
                <h3 className="learn-clean-card-title">{item.term}</h3>
                <p className="learn-clean-card-body">{item.desc}</p>
                <div className="learn-clean-card-footer">
                  <span style={{ color: '#10110f', fontWeight: '700' }}>Official MITC Metric</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: 6 Golden Rules of Responsible Credit Usage */}
      <section className="learn-section bg-subtle">
        <div className="bmcc-container">
          <div className="learn-section-head">
            <span className="learn-section-kicker">FINANCIAL DISCIPLINE</span>
            <h2 className="learn-section-title">6 Golden Rules to Never Pay Interest</h2>
            <p className="learn-section-desc">
              Follow these simple guardrails to reap rewards, lounge access, and cashbacks without finance charges.
            </p>
          </div>

          <div className="learn-card-grid">
            {basicsContent.goldenRules.map((rule, idx) => (
              <div key={idx} className="learn-clean-card">
                <span className="learn-card-label">Golden Rule 0{idx + 1}</span>
                <h3 className="learn-clean-card-title">{rule.rule}</h3>
                <p className="learn-clean-card-body">{rule.desc}</p>
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

      {/* Section 5: Robust FAQ Accordion */}
      <section className="learn-section">
        <div className="bmcc-container">
          <div className="learn-section-head">
            <span className="learn-section-kicker">QUESTIONS ANSWERED</span>
            <h2 className="learn-section-title">Frequently Asked Questions</h2>
            <p className="learn-section-desc">
              Straightforward answers to common credit card basics questions.
            </p>
          </div>

          <div className="pb-faq-list" style={{ maxWidth: '880px', margin: '0 auto' }}>
            {basicsContent.faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className={`pb-faq-item ${isOpen ? 'open' : ''}`}>
                  <button
                    type="button"
                    className="pb-faq-question"
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
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="pb-faq-chevron"
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </button>
                  <div className="pb-faq-answer" hidden={!isOpen}>
                    <p>{faq.a}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
