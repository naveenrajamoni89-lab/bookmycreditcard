import { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/ui/PageHeader';
import { guidesHubContent } from '../data/learnContent';
import '../styles/home-editorial.css';

export default function CreditCardGuides() {
  const [activeGuide, setActiveGuide] = useState(guidesHubContent.guides[0].id);

  const current = guidesHubContent.guides.find(g => g.id === activeGuide) || guidesHubContent.guides[0];

  return (
    <div className="landing-page-root bmcc-editorial bmcc-guides-page">
      <PageHeader
        title={guidesHubContent.title}
        description={guidesHubContent.tagline}
        breadcrumb="Credit Card Guides"
      />

      <section className="pb-page-section" style={{ background: '#f8fafc', padding: '50px 0 70px' }}>
        <div className="bmcc-container">
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span className="bmcc-section-label">ACTIONABLE PLAYBOOKS</span>
            <h2 className="bmcc-section-title" style={{ fontSize: '32px' }}>
              Master Your Credit Card Step by Step
            </h2>
            <p className="bmcc-section-sub">
              Clear, practical tutorials to help you activate, pay, optimize, and protect your credit cards.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(280px, 340px) minmax(0, 1fr)',
            gap: '30px',
            alignItems: 'start',
          }}>
            {/* Guide Navigation Sidebar */}
            <aside style={{
              background: '#ffffff',
              border: '1px solid #e2e8f0',
              borderRadius: '12px',
              padding: '16px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.03)',
            }}>
              <h3 style={{ fontSize: '13px', fontWeight: '800', letterSpacing: '0.06em', color: '#64748b', textTransform: 'uppercase', marginBottom: '12px', paddingLeft: '8px' }}>
                All Practical Guides ({guidesHubContent.guides.length})
              </h3>
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
                        borderRadius: '8px',
                        border: 'none',
                        background: isActive ? '#f0f4ff' : 'transparent',
                        color: isActive ? '#2447bb' : '#1e293b',
                        textAlign: 'left',
                        cursor: 'pointer',
                        transition: 'all 0.15s ease',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                        <span style={{ fontSize: '11px', fontWeight: '700', color: isActive ? '#2447bb' : '#94a3b8' }}>
                          0{idx + 1} · {guide.category}
                        </span>
                        <span style={{ fontSize: '11px', color: '#94a3b8' }}>{guide.time}</span>
                      </div>
                      <span style={{ fontSize: '14px', fontWeight: isActive ? '700' : '600', lineHeight: '1.4' }}>
                        {guide.title}
                      </span>
                    </button>
                  );
                })}
              </nav>
            </aside>

            {/* Active Guide Content Display */}
            <article style={{
              background: '#ffffff',
              border: '1px solid #e2e8f0',
              borderRadius: '16px',
              padding: '36px',
              boxShadow: '0 4px 16px rgba(0,0,0,0.04)',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                <span style={{ background: '#e0e7ff', color: '#2447bb', fontSize: '12px', fontWeight: '700', padding: '3px 10px', borderRadius: '16px' }}>
                  {current.category}
                </span>
                <span style={{ color: '#64748b', fontSize: '13px' }}>
                  Estimated read: {current.time}
                </span>
              </div>

              <h2 style={{ fontSize: '28px', fontWeight: '800', color: '#0f172a', marginBottom: '16px', lineHeight: '1.25' }}>
                {current.title}
              </h2>

              <p style={{ fontSize: '16px', lineHeight: '1.7', color: '#475569', marginBottom: '28px', paddingBottom: '20px', borderBottom: '1px solid #e2e8f0' }}>
                {current.summary}
              </p>

              <h3 style={{ fontSize: '19px', fontWeight: '700', color: '#0f172a', marginBottom: '16px' }}>
                Step-by-Step Instructions
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {current.steps.map((step, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      gap: '14px',
                      alignItems: 'flex-start',
                      background: '#f8fafc',
                      border: '1px solid #edf2f7',
                      borderRadius: '10px',
                      padding: '16px 18px',
                    }}
                  >
                    <span style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      minWidth: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      background: '#2447bb',
                      color: '#ffffff',
                      fontSize: '13px',
                      fontWeight: '700',
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

              <div style={{ marginTop: '36px', paddingTop: '24px', borderTop: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '14px' }}>
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
                  Check Your Credit Card Eligibility
                  <span aria-hidden="true">→</span>
                </Link>

                <Link
                  to="/compare-credit-cards"
                  style={{
                    background: '#2447bb',
                    color: '#ffffff',
                    padding: '9px 18px',
                    borderRadius: '7px',
                    fontSize: '13.5px',
                    fontWeight: '700',
                    textDecoration: 'none',
                  }}
                >
                  Compare Cards Now
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}
