import { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/ui/PageHeader';
import FAQSection from '../components/FAQSection';
import '../styles/home-editorial.css';

const SCORE_BANDS = [
  { range: '750 – 900', rating: 'Excellent', impact: 'Instant approvals, highest credit limits & lowest interest tier', color: '#10b981', badge: 'High Match' },
  { range: '700 – 749', rating: 'Good', impact: 'Strong approval chances across major travel and cashback cards', color: '#0ea5e9', badge: 'Good Match' },
  { range: '650 – 699', rating: 'Fair', impact: 'Moderate approval odds; entry-level cards or co-branded cards available', color: '#f59e0b', badge: 'Selective' },
  { range: '300 – 649', rating: 'Needs Repair', impact: 'Unsecured cards likely rejected; opt for FD-backed secured cards to rebuild', color: '#ef4444', badge: 'Secured Option' },
];

const FACTORS = [
  { factor: 'Payment History', weight: '35%', desc: 'Your track record of paying credit card bills and loan EMIs on time. Even a single 30-day late payment can decrease your score.' },
  { factor: 'Credit Utilization Ratio', weight: '30%', desc: 'The percentage of your total available credit limit currently used. Always keep this below 30% across all active cards.' },
  { factor: 'Credit History Age', weight: '15%', desc: 'The average age of all your credit accounts. Keeping your oldest credit card active helps maintain a long, healthy credit vintage.' },
  { factor: 'Credit Mix', weight: '10%', desc: 'A balanced portfolio of secured credit (home/auto loans, FD cards) and unsecured credit (credit cards, personal loans).' },
  { factor: 'Recent Inquiries', weight: '10%', desc: 'Multiple direct card or loan applications in a short span trigger "hard inquiries", signaling credit hunger to lenders.' },
];

export default function CibilScore() {
  return (
    <div className="landing-page-root bmcc-editorial bmcc-cibil-page">
      <PageHeader
        title="CIBIL Score for Credit Cards"
        description="Learn how your credit rating impacts card approvals, how soft inquiries work, and proven steps to build a 750+ score."
        breadcrumb="CIBIL Score"
      />

      {/* Intro Overview */}
      <section className="pb-page-section" style={{ background: '#ffffff', padding: '50px 0 40px' }}>
        <div className="bmcc-container">
          <div style={{ maxWidth: '820px', margin: '0 auto', textAlign: 'center' }}>
            <span className="bmcc-section-label">CREDIT HEALTH INSIGHTS</span>
            <h2 className="bmcc-section-title" style={{ fontSize: '30px', marginBottom: '16px' }}>
              Why Your CIBIL Score Is the First Filter in Card Approval
            </h2>
            <p style={{ fontSize: '16px', lineHeight: '1.7', color: '#475569' }}>
              Your CIBIL Score is a three-digit numerical summary (ranging from 300 to 900) calculated by TransUnion CIBIL based on your borrowing and repayment behavior across all Indian banks and NBFCs. When you apply for a credit card, lenders assess your score to estimate repayment risk. A score of 750 or above unlocks the market’s lowest interest rates, highest credit limits, and super-premium cards.
            </p>
          </div>
        </div>
      </section>

      {/* Score Bands Table */}
      <section className="pb-page-section" style={{ background: '#f8fafc', padding: '50px 0' }}>
        <div className="bmcc-container">
          <div style={{ textAlign: 'center', marginBottom: '36px' }}>
            <span className="bmcc-section-label">SCORE BRACKETS</span>
            <h2 className="bmcc-section-title" style={{ fontSize: '28px' }}>
              CIBIL Score Ranges & Card Approval Odds
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '20px',
          }}>
            {SCORE_BANDS.map((band, idx) => (
              <div
                key={idx}
                style={{
                  background: '#ffffff',
                  border: '1.5px solid #e2e8f0',
                  borderRadius: '12px',
                  padding: '24px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.02)',
                  borderTop: `4px solid ${band.color}`,
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                  <span style={{ fontSize: '22px', fontWeight: '800', color: '#0f172a' }}>
                    {band.range}
                  </span>
                  <span style={{
                    fontSize: '11px',
                    fontWeight: '700',
                    color: band.color,
                    background: `${band.color}15`,
                    padding: '3px 8px',
                    borderRadius: '12px',
                  }}>
                    {band.badge}
                  </span>
                </div>
                <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#334155', marginBottom: '8px' }}>
                  {band.rating}
                </h3>
                <p style={{ fontSize: '13.5px', lineHeight: '1.55', color: '#64748b', margin: 0 }}>
                  {band.impact}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5 Factors That Make Up Your Score */}
      <section className="pb-page-section" style={{ background: '#ffffff', padding: '50px 0' }}>
        <div className="bmcc-container">
          <div style={{ textAlign: 'center', marginBottom: '36px' }}>
            <span className="bmcc-section-label">CALCULATION WEIGHTAGE</span>
            <h2 className="bmcc-section-title" style={{ fontSize: '28px' }}>
              The 5 Pillars That Shape Your CIBIL Score
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', maxWidth: '840px', margin: '0 auto' }}>
            {FACTORS.map((f, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '20px',
                  background: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  borderRadius: '10px',
                  padding: '18px 24px',
                }}
              >
                <div style={{ textAlign: 'center', minWidth: '70px', flexShrink: 0 }}>
                  <span style={{ fontSize: '22px', fontWeight: '800', color: '#2447bb', display: 'block' }}>
                    {f.weight}
                  </span>
                  <span style={{ fontSize: '11px', fontWeight: '600', color: '#64748b' }}>Weight</span>
                </div>
                <div>
                  <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#0f172a', marginBottom: '4px' }}>
                    {f.factor}
                  </h3>
                  <p style={{ fontSize: '14px', lineHeight: '1.55', color: '#475569', margin: 0 }}>
                    {f.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Soft Enquiry Notice */}
      <section className="pb-page-section" style={{ background: '#f0fdf4', borderTop: '1px solid #bbf7d0', borderBottom: '1px solid #bbf7d0', padding: '40px 0' }}>
        <div className="bmcc-container" style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '22px', fontWeight: '800', color: '#166534', marginBottom: '10px' }}>
            Checking on BookMyCreditCard Has 0% Impact on Your Score
          </h2>
          <p style={{ fontSize: '15px', lineHeight: '1.6', color: '#15803d', marginBottom: '20px' }}>
            Direct bank applications initiate a "hard inquiry" that can dip your score by 5–10 points. In contrast, checking preliminary eligibility or comparing offers on BookMyCreditCard is a preliminary assessment that leaves your credit report completely untouched.
          </p>
          <Link
            to="/credit-card-eligibility"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: '#16a34a',
              color: '#ffffff',
              padding: '11px 24px',
              borderRadius: '8px',
              fontWeight: '700',
              fontSize: '14px',
              textDecoration: 'none',
            }}
          >
            Check Basic Eligibility (Zero Score Impact)
          </Link>
        </div>
      </section>

      <FAQSection page="cibil-score" title="CIBIL Score & Credit Card FAQs" />
    </div>
  );
}
