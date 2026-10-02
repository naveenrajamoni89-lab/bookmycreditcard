import { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/ui/PageHeader';
import { basicsContent } from '../data/learnContent';
import '../styles/home-editorial.css';

export default function CreditCardBasics() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="landing-page-root bmcc-editorial bmcc-basics-page">
      <PageHeader
        title={basicsContent.title}
        description={basicsContent.tagline}
        breadcrumb="Credit Card Basics"
      />

      {/* Overview Intro */}
      <section className="pb-page-section" style={{ background: '#ffffff', paddingTop: '40px', paddingBottom: '30px' }}>
        <div className="bmcc-container">
          <div style={{ maxWidth: '840px', margin: '0 auto', textAlign: 'center' }}>
            <span className="bmcc-section-label">FOUNDATIONAL FINANCIAL LITERACY</span>
            <h2 className="bmcc-section-title" style={{ fontSize: '32px', marginBottom: '16px' }}>
              How Credit Cards Actually Work
            </h2>
            <p style={{ fontSize: '16px', lineHeight: '1.7', color: '#475569' }}>
              {basicsContent.intro}
            </p>
          </div>
        </div>
      </section>

      {/* Key Terminologies Grid */}
      <section className="pb-page-section" style={{ background: '#f8fafc', padding: '50px 0' }}>
        <div className="bmcc-container">
          <div style={{ textAlign: 'center', marginBottom: '36px' }}>
            <span className="bmcc-section-label">ESSENTIAL VOCABULARY</span>
            <h2 className="bmcc-section-title" style={{ fontSize: '28px' }}>
              7 Key Terms Every Cardholder Must Know
            </h2>
            <p className="bmcc-section-sub">
              Never get confused by bank statements, fine print, or customer care terminology again.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '20px',
          }}>
            {basicsContent.keyTerms.map((item, idx) => (
              <div
                key={idx}
                style={{
                  background: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '12px',
                  padding: '24px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '26px',
                    height: '26px',
                    borderRadius: '50%',
                    background: '#e0e7ff',
                    color: '#2447bb',
                    fontSize: '12px',
                    fontWeight: '700',
                  }}>
                    {idx + 1}
                  </span>
                  <h3 style={{ fontSize: '17px', fontWeight: '700', color: '#0f172a', margin: 0 }}>
                    {item.term}
                  </h3>
                </div>
                <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#64748b', margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The 20 - 50 Days Interest-Free Grace Period Visualizer */}
      <section className="pb-page-section" style={{ background: '#ffffff', padding: '50px 0' }}>
        <div className="bmcc-container">
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span className="bmcc-section-label">INTEREST-FREE CYCLE EXPLAINED</span>
            <h2 className="bmcc-section-title" style={{ fontSize: '28px' }}>
              The 20 to 50-Day Interest-Free Timeline
            </h2>
            <p className="bmcc-section-sub">
              How timing your swipes right after your statement date maximizes free credit.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '20px',
            position: 'relative',
          }}>
            {basicsContent.gracePeriodWalkthrough.map((step, idx) => (
              <div
                key={idx}
                style={{
                  background: '#f8fafc',
                  border: '1.5px solid #e2e8f0',
                  borderRadius: '12px',
                  padding: '24px',
                  position: 'relative',
                }}
              >
                <span style={{
                  display: 'inline-block',
                  background: '#2447bb',
                  color: '#ffffff',
                  fontSize: '11px',
                  fontWeight: '700',
                  padding: '3px 9px',
                  borderRadius: '20px',
                  marginBottom: '12px',
                }}>
                  {step.step}
                </span>
                <h3 style={{ fontSize: '17px', fontWeight: '700', color: '#0f172a', marginBottom: '8px' }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: '13.5px', lineHeight: '1.55', color: '#64748b', margin: 0 }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6 Golden Rules of Smart Credit Card Usage */}
      <section className="pb-page-section" style={{ background: '#0f172a', color: '#ffffff', padding: '60px 0' }}>
        <div className="bmcc-container">
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span style={{ color: '#38bdf8', fontSize: '12px', fontWeight: '700', letterSpacing: '0.1em' }}>
              BEST PRACTICES
            </span>
            <h2 style={{ fontSize: '30px', fontWeight: '800', color: '#ffffff', marginTop: '6px' }}>
              6 Golden Rules of Responsible Credit Card Usage
            </h2>
            <p style={{ color: '#94a3b8', fontSize: '15px' }}>
              Follow these simple principles to enjoy rewards without ever paying finance charges.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '24px',
          }}>
            {basicsContent.goldenRules.map((rule, idx) => (
              <div
                key={idx}
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '12px',
                  padding: '24px',
                }}
              >
                <h3 style={{ fontSize: '17px', fontWeight: '700', color: '#38bdf8', marginBottom: '8px' }}>
                  {rule.rule}
                </h3>
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
                borderRadius: '8px',
                fontWeight: '700',
                fontSize: '14px',
                textDecoration: 'none',
              }}
            >
              Browse Credit Cards
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="pb-page-section" style={{ background: '#ffffff', padding: '60px 0' }}>
        <div className="bmcc-container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <span className="bmcc-section-label">GOT QUESTIONS?</span>
            <h2 className="bmcc-section-title" style={{ fontSize: '28px' }}>
              Frequently Asked Questions
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {basicsContent.faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  style={{
                    border: '1px solid #e2e8f0',
                    borderRadius: '10px',
                    overflow: 'hidden',
                  }}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    style={{
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '18px 20px',
                      background: isOpen ? '#f8fafc' : '#ffffff',
                      border: 'none',
                      textAlign: 'left',
                      cursor: 'pointer',
                      fontSize: '15.5px',
                      fontWeight: '700',
                      color: '#0f172a',
                    }}
                  >
                    <span>{faq.q}</span>
                    <span style={{ fontSize: '18px', color: '#64748b', marginLeft: '12px' }}>
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>
                  {isOpen && (
                    <div style={{ padding: '0 20px 18px', background: '#f8fafc', color: '#475569', fontSize: '14.5px', lineHeight: '1.65' }}>
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
