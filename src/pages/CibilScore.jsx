import { Link } from 'react-router-dom';
import FAQSection from '../components/FAQSection';
import '../styles/learn-editorial.css';

const SCORE_BANDS = [
  {
    range: '750 – 900',
    rating: 'Excellent Credit Tier',
    band: 'excellent',
    badge: 'Instant Approvals',
    pillClass: 'pill-excellent',
    odds: '95%+ Match',
    impact: 'Unlocks the lowest interest rates, highest limits, and flagship metal cards like HDFC Infinia and Axis Atlas.',
    recommendation: 'Target luxury travel, air miles & premium reward cards',
  },
  {
    range: '700 – 749',
    rating: 'Good Credit Tier',
    band: 'good',
    badge: 'High Approval Odds',
    pillClass: 'pill-good',
    odds: '85% Match',
    impact: 'Eligible for top-tier cashback and lifestyle cards including Cashback SBI, HDFC Millennia, and Airtel Axis.',
    recommendation: 'Target 5% cashback & retail shopping cards',
  },
  {
    range: '650 – 699',
    rating: 'Fair / Average Tier',
    band: 'fair',
    badge: 'Selective Odds',
    pillClass: 'pill-fair',
    odds: '60% Match',
    impact: 'Eligible for entry-level co-branded fuel or shopping cards. Lenders may request income proof or set conservative limits.',
    recommendation: 'Target lifetime-free or co-branded merchant cards',
  },
  {
    range: '300 – 649',
    rating: 'Needs Credit Repair',
    band: 'repair',
    badge: 'Secured Option',
    pillClass: 'pill-repair',
    odds: 'Low Unsecured Odds',
    impact: 'Direct unsecured applications will likely be rejected. Recommended to build credit history with an FD-backed card.',
    recommendation: 'Apply for FD-backed secured cards (100% approval)',
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
      {/* Hero with Clean Inline Breadcrumb */}
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

            <span className="learn-badge">
              <span className="learn-badge-dot" />
              CREDIT HEALTH INTELLIGENCE
            </span>
            <h1 className="learn-title">Why Your CIBIL Score Controls Card Approvals</h1>
            <p className="learn-lead">
              Your CIBIL Score is a three-digit numerical summary (300 to 900) calculated by TransUnion CIBIL. It serves as the primary risk filter for all Indian banks. A score of 750+ guarantees access to top-tier cards, low APRs, and instant paperless approvals.
            </p>
            <div className="learn-trust-strip">
              <span className="learn-trust-pill">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
                TransUnion CIBIL Calibrated
              </span>
              <span className="learn-trust-pill">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                Zero Impact Soft Check
              </span>
              <span className="learn-trust-pill">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                750+ Benchmark Standard
              </span>
              <span className="learn-trust-pill">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/></svg>
                Updated 2026 Guidelines
              </span>
            </div>
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

          <div className="learn-cibil-spectrum">
            {SCORE_BANDS.map((band, idx) => (
              <div key={idx} className="learn-score-card" data-band={band.band}>
                <div className="learn-score-header">
                  <span className="learn-score-range">{band.range}</span>
                  <span className={`learn-score-pill ${band.pillClass}`}>{band.badge}</span>
                </div>
                <h3 style={{ fontSize: '15.5px', fontWeight: '700', color: '#0f172a', margin: '0 0 6px' }}>
                  {band.rating}
                </h3>
                <p style={{ fontSize: '13.5px', lineHeight: '1.55', color: '#475569', margin: '0 0 16px' }}>
                  {band.impact}
                </p>
                <div style={{ marginTop: 'auto', paddingTop: '12px', borderTop: '1px solid #f1f5f9' }}>
                  <span style={{ fontSize: '11px', fontWeight: '800', letterSpacing: '0.04em', color: '#64748b', textTransform: 'uppercase', display: 'block', marginBottom: '2px' }}>
                    Recommended Strategy:
                  </span>
                  <span style={{ fontSize: '12.5px', fontWeight: '600', color: '#2447bb' }}>
                    {band.recommendation}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: The 5 Pillars of Score Calculation */}
      <section className="learn-section">
        <div className="bmcc-container">
          <div className="learn-section-head">
            <span className="learn-section-kicker">SCORE ARCHITECTURE</span>
            <h2 className="learn-section-title">The 5 Pillars That Determine Your Score</h2>
            <p className="learn-section-desc">
              How credit bureaus weight your financial activities to calculate your 3-digit score.
            </p>
          </div>

          <div style={{ maxWidth: '840px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {FACTORS.map((f, idx) => (
              <div
                key={idx}
                style={{
                  background: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '16px',
                  padding: '20px 24px',
                  boxShadow: '0 2px 6px rgba(15, 23, 42, 0.02)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '24px',
                }}
              >
                <div style={{ minWidth: '70px', textAlign: 'center', flexShrink: 0 }}>
                  <span style={{ fontSize: '26px', fontWeight: '800', color: '#2447bb', display: 'block', lineHeight: 1 }}>
                    {f.weight}
                  </span>
                  <span style={{ fontSize: '11px', fontWeight: '700', color: '#64748b', textTransform: 'uppercase' }}>
                    Weight
                  </span>
                </div>

                <div style={{ flexGrow: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
                    <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#0f172a', margin: 0 }}>
                      {f.factor}
                    </h3>
                    <span style={{ fontSize: '11px', fontWeight: '700', padding: '2px 8px', borderRadius: '6px', background: '#f1f5f9', color: '#475569' }}>
                      {f.tag}
                    </span>
                  </div>
                  <p style={{ fontSize: '13.5px', lineHeight: '1.55', color: '#475569', margin: 0 }}>
                    {f.desc}
                  </p>
                  <div style={{ height: '5px', background: '#f1f5f9', borderRadius: '999px', marginTop: '12px', overflow: 'hidden' }}>
                    <div style={{ height: '100%', width: `${f.percent}%`, background: '#2447bb', borderRadius: '999px' }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Soft vs Hard Inquiries Bento Comparison */}
      <section className="learn-section">
        <div className="bmcc-container">
          <div className="learn-section-head">
            <span className="learn-section-kicker">CREDIT SAFETY</span>
            <h2 className="learn-section-title">Soft Inquiries vs. Hard Inquiries</h2>
            <p className="learn-section-desc">
              Understand why exploring cards on BookMyCreditCard keeps your credit score 100% safe.
            </p>
          </div>

          <div className="learn-bento-grid" style={{ gridTemplateColumns: '1fr 1fr' }}>
            <div className="learn-card" style={{ borderColor: '#bbf7d0', background: '#f0fdf4' }}>
              <div className="learn-card-icon-box learn-icon-green">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
              </div>
              <h3 className="learn-card-title" style={{ color: '#166534' }}>
                Soft Inquiry (BookMyCreditCard Checks)
              </h3>
              <p className="learn-card-body" style={{ color: '#15803d' }}>
                Initiated when you check your preliminary eligibility, estimate approval odds, or compare card features. It is purely informational and has <strong>0% impact</strong> on your CIBIL score.
              </p>
              <div className="learn-card-footer" style={{ borderColor: '#dcfce7', color: '#166534' }}>
                <span>Impact: Zero CIBIL Score Dip</span>
                <span>Safe to check often</span>
              </div>
            </div>

            <div className="learn-card" style={{ borderColor: '#fecaca', background: '#fef2f2' }}>
              <div className="learn-card-icon-box learn-icon-rose">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
              </div>
              <h3 className="learn-card-title" style={{ color: '#991b1b' }}>
                Hard Inquiry (Direct Bank Submissions)
              </h3>
              <p className="learn-card-body" style={{ color: '#b91c1c' }}>
                Triggered when a bank formally pulls your bureau report after you submit a final card application. Each hard inquiry can decrease your score by <strong>5 to 10 points</strong>.
              </p>
              <div className="learn-card-footer" style={{ borderColor: '#fee2e2', color: '#991b1b' }}>
                <span>Impact: 5 – 10 Points Temporary Dip</span>
                <span>Limit to 1 per 3 months</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Eligibility Check CTA */}
      <section className="learn-section" style={{ background: '#f8fafc' }}>
        <div className="bmcc-container">
          <div style={{
            background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
            borderRadius: '20px',
            padding: 'clamp(32px, 5vw, 56px)',
            color: '#ffffff',
            textAlign: 'center',
            maxWidth: '920px',
            margin: '0 auto',
            boxShadow: '0 16px 36px -8px rgba(15, 23, 42, 0.25)',
          }}>
            <span style={{ fontSize: '11px', fontWeight: '800', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#38bdf8', display: 'inline-block', marginBottom: '12px' }}>
              FREE ELIGIBILITY CHECK
            </span>
            <h2 style={{ fontSize: 'clamp(24px, 3.2vw, 36px)', fontWeight: '800', letterSpacing: '-0.03em', color: '#ffffff', margin: '0 0 14px' }}>
              Check Your Card Approval Odds in 60 Seconds
            </h2>
            <p style={{ fontSize: '16px', lineHeight: '1.65', color: '#cbd5e1', maxWidth: '62ch', margin: '0 auto 28px' }}>
              No credit score impact. Find cards that match your exact age, monthly salary, and employment profile with zero risk.
            </p>
            <Link
              to="/credit-card-eligibility"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: '#2447bb',
                color: '#ffffff',
                padding: '14px 32px',
                borderRadius: '999px',
                fontWeight: '700',
                fontSize: '15px',
                textDecoration: 'none',
                boxShadow: '0 4px 16px rgba(36, 71, 187, 0.4)',
              }}
            >
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
