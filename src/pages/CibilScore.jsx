import { Link } from 'react-router-dom';
import FAQSection from '../components/FAQSection';
import '../styles/learn-editorial.css';

const SCORE_BANDS = [
  {
    range: '750 – 900',
    rating: 'Excellent Credit Tier',
    badge: 'Instant Approvals',
    impact: 'Unlocks the lowest interest rates, highest limits, and flagship metal cards like HDFC Infinia and Axis Atlas.',
    recommendation: 'Luxury travel, air miles & premium rewards',
  },
  {
    range: '700 – 749',
    rating: 'Good Credit Tier',
    badge: 'High Approval Odds',
    impact: 'Eligible for top-tier cashback and lifestyle cards including Cashback SBI, HDFC Millennia, and Airtel Axis.',
    recommendation: '5% cashback & retail shopping cards',
  },
  {
    range: '650 – 699',
    rating: 'Fair / Average Tier',
    badge: 'Selective Odds',
    impact: 'Eligible for entry-level co-branded fuel or shopping cards. Lenders may request income proof or set conservative limits.',
    recommendation: 'Lifetime-free or co-branded merchant cards',
  },
  {
    range: '300 – 649',
    rating: 'Needs Credit Repair',
    badge: 'Secured Option',
    impact: 'Direct unsecured applications will likely be rejected. Recommended to build credit history with an FD-backed card.',
    recommendation: 'FD-backed secured credit cards (100% approval)',
  },
];

const FACTORS = [
  {
    factor: 'Repayment & Payment History',
    weight: '35%',
    percent: 35,
    tag: 'Highest Impact',
    desc: 'Your track record of paying credit card statements and loan EMIs on time. Even a single 30-day late payment can decrease your score by 40–70 points.',
  },
  {
    factor: 'Credit Utilization Ratio (CUR)',
    weight: '30%',
    percent: 30,
    tag: 'High Impact',
    desc: 'The proportion of your total approved limit you spend each month. Keep this strictly below 30% across all cards to signal low credit reliance to lenders.',
  },
  {
    factor: 'Credit History Age & Vintage',
    weight: '15%',
    percent: 15,
    tag: 'Medium Impact',
    desc: 'The average age of all your active credit accounts. Retaining your oldest credit card active provides proof of long-term financial discipline.',
  },
  {
    factor: 'Credit Portfolio Mix',
    weight: '10%',
    percent: 10,
    tag: 'Low-Medium Impact',
    desc: 'A healthy balance of secured credit (auto/home loans, FD cards) and unsecured credit (credit cards, personal loans) demonstrates diverse borrowing competency.',
  },
  {
    factor: 'Recent Inquiries & Velocity',
    weight: '10%',
    percent: 10,
    tag: 'Low Impact',
    desc: 'Multiple direct card or personal loan applications in a short span trigger "hard inquiries", indicating credit hunger and temporarily lowering your score.',
  },
];

export default function CibilScore() {
  return (
    <div className="learn-page bmcc-cibil-page">
      {/* Hero Header - Clean & Left Aligned */}
      <section className="learn-hero">
        <div className="bmcc-container">
          <div className="learn-hero-inner">
            <div className="learn-breadcrumb">
              <Link to="/">Home</Link>
              <span className="learn-breadcrumb-sep">/</span>
              <Link to="/explore">Learn</Link>
              <span className="learn-breadcrumb-sep">/</span>
              <span className="learn-breadcrumb-current">CIBIL Score</span>
            </div>

            <span className="learn-hero-kicker">Credit Health Intelligence</span>
            <h1 className="learn-title">Why Your CIBIL Score Controls Card Approvals</h1>
            <p className="learn-lead">
              Your CIBIL Score is a three-digit numerical summary (300 to 900) calculated by TransUnion CIBIL. It serves as the primary risk filter for all Indian banks. A score of 750+ guarantees access to top-tier cards, low APRs, and instant paperless approvals.
            </p>
          </div>
        </div>
      </section>

      {/* Section 1: Score Spectrum & Approval Odds */}
      <section className="learn-section">
        <div className="bmcc-container">
          <div className="learn-section-head">
            <span className="learn-section-kicker">APPROVAL PROBABILITIES</span>
            <h2 className="learn-section-title">CIBIL Score Ranges & Approval Odds</h2>
            <p className="learn-section-desc">
              Understand where you stand and what tier of credit cards you qualify for today.
            </p>
          </div>

          <div className="learn-score-grid">
            {SCORE_BANDS.map((band, idx) => (
              <div key={idx} className="learn-score-card">
                <div className="learn-score-header">
                  <span className="learn-score-range">{band.range}</span>
                  <span className="learn-score-badge">{band.badge}</span>
                </div>
                <div className="learn-score-status">{band.rating}</div>
                <p className="learn-score-desc">{band.impact}</p>
                <div style={{ marginTop: '16px', paddingTop: '12px', borderTop: '1px solid #f1f5f9' }}>
                  <span style={{ fontSize: '11px', fontWeight: '800', color: '#64748b', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>
                    Target Cards:
                  </span>
                  <span style={{ fontSize: '13px', fontWeight: '700', color: '#0f172a' }}>
                    {band.recommendation}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: The 5 Pillars of Score Calculation */}
      <section className="learn-section bg-subtle">
        <div className="bmcc-container">
          <div className="learn-section-head">
            <span className="learn-section-kicker">SCORE ARCHITECTURE</span>
            <h2 className="learn-section-title">The 5 Pillars That Determine Your Score</h2>
            <p className="learn-section-desc">
              How credit bureaus weight your financial activities to calculate your 3-digit score.
            </p>
          </div>

          <div className="learn-factor-list" style={{ maxWidth: '880px', margin: '0 auto' }}>
            {FACTORS.map((f, idx) => (
              <div key={idx} className="learn-factor-row">
                <div className="learn-factor-info">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
                    <h3 className="learn-factor-title">{f.factor}</h3>
                    <span style={{ fontSize: '11px', fontWeight: '700', padding: '2px 8px', borderRadius: '4px', background: '#f1f5f9', color: '#475569' }}>
                      {f.tag}
                    </span>
                  </div>
                  <p className="learn-factor-desc">{f.desc}</p>
                </div>

                <div className="learn-factor-bar-wrap">
                  <div className="learn-factor-bar-header">
                    <span>Weight</span>
                    <span style={{ color: '#2447bb' }}>{f.weight}</span>
                  </div>
                  <div className="learn-factor-bar-track">
                    <div className="learn-factor-bar-fill" style={{ width: `${f.percent * 2.5}%` }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Soft vs Hard Inquiries Comparison (Clean White Cards - No Colors) */}
      <section className="learn-section">
        <div className="bmcc-container">
          <div className="learn-section-head">
            <span className="learn-section-kicker">CREDIT SAFETY</span>
            <h2 className="learn-section-title">Soft Inquiries vs. Hard Inquiries</h2>
            <p className="learn-section-desc">
              Understand why exploring cards on BookMyCreditCard keeps your credit score 100% safe.
            </p>
          </div>

          <div className="learn-card-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
            <div className="learn-clean-card">
              <span className="learn-card-label">Zero Score Impact</span>
              <h3 className="learn-clean-card-title">Soft Inquiry (Informational / Pre-Checks)</h3>
              <p className="learn-clean-card-body">
                Initiated when you check your eligibility on BookMyCreditCard, view pre-approved offers, or monitor your own score. It is purely informational and has <strong>0% impact</strong> on your CIBIL score.
              </p>
              <div className="learn-clean-card-footer">
                <span style={{ color: '#0f172a', fontWeight: '700' }}>Bureau Impact: None</span>
                <span>Safe to check frequently</span>
              </div>
            </div>

            <div className="learn-clean-card">
              <span className="learn-card-label">Minor Temporary Impact</span>
              <h3 className="learn-clean-card-title">Hard Inquiry (Direct Bank Submissions)</h3>
              <p className="learn-clean-card-body">
                Triggered when a bank formally pulls your bureau report after you submit a card application. Each hard inquiry can decrease your score by <strong>5 to 10 points</strong> for a few months.
              </p>
              <div className="learn-clean-card-footer">
                <span style={{ color: '#0f172a', fontWeight: '700' }}>Bureau Impact: -5 to -10 Points</span>
                <span>Space out by 90 days</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Eligibility Check CTA */}
      <section className="learn-section bg-subtle">
        <div className="bmcc-container">
          <div className="learn-eligibility-banner">
            <span className="learn-hero-kicker" style={{ color: '#93c5fd' }}>FREE ELIGIBILITY CHECK</span>
            <h2>Check Your Card Approval Odds in 60 Seconds</h2>
            <p>
              No credit score impact. Find cards that match your exact age, monthly salary, and employment profile with zero risk.
            </p>
            <Link to="/credit-card-eligibility" className="learn-eligibility-btn">
              Check My Approval Odds Free
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Section 5: FAQs */}
      <section className="learn-section">
        <div className="bmcc-container">
          <FAQSection page="cibil-score" title="CIBIL Score & Credit Card FAQs" />
        </div>
      </section>
    </div>
  );
}
