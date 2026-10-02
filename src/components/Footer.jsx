import React from 'react';
import { Link } from 'react-router-dom';
import { SITE_NAME, LOGO_URL, CONTACT, POWERED_BY } from '../data/branding';
import '../styles/footer.css';

// Curated credit card category links
const cardCategories = [
  { label: 'Cashback Credit Cards', to: '/cashback-credit-cards' },
  { label: 'Travel & Air Miles Cards', to: '/travel-credit-cards' },
  { label: 'Lifetime Free Cards', to: '/lifetime-free-credit-cards' },
  { label: 'Airport Lounge Cards', to: '/credit-cards-lounge-access' },
  { label: 'Rewards & Shopping Cards', to: '/rewards-credit-cards' },
  { label: 'Fuel Surcharge Waiver Cards', to: '/fuel-credit-cards' },
  { label: 'RuPay UPI Credit Cards', to: '/rupay-credit-cards' },
];

// High-value tools and credit guides
const toolLinks = [
  { label: 'Card Eligibility Checker', to: '/credit-card-eligibility' },
  { label: 'Compare Credit Cards', to: '/compare-credit-cards' },
  { label: 'Best Credit Cards 2026', to: '/best-credit-cards' },
  { label: 'Card Interest Rates & APR', to: '/credit-card-interest-rates' },
  { label: 'CIBIL Score Impact Guide', to: '/cibil-score-for-credit-card' },
  { label: 'Credit Card FAQs', to: '/#faqs' },
];

// Top partner banking institutions
const partnerBanks = [
  { name: 'HDFC Bank', bankId: 'hdfc' },
  { name: 'ICICI Bank', bankId: 'icici' },
  { name: 'SBI Card', bankId: 'sbi' },
  { name: 'Axis Bank', bankId: 'axis' },
  { name: 'Kotak Mahindra', bankId: 'kotak' },
  { name: 'IDFC FIRST Bank', bankId: 'idfc' },
  { name: 'IndusInd Bank', bankId: 'indusind' },
  { name: 'American Express', bankId: 'amex' },
  { name: 'AU Small Finance', bankId: 'aubank' },
];

// Compact legal navigation links
const legalNavLinks = [
  { label: 'About Us', to: '/about-us' },
  { label: 'Contact Us', to: '/contact-us' },
  { label: 'Privacy Policy', to: '/privacy-policy' },
  { label: 'Terms of Use', to: '/terms-and-conditions' },
  { label: 'Disclaimer', to: '/disclaimer' },
  { label: 'Grievance Redressal', to: '/grievance-redressal' },
  { label: 'Sitemap', to: '/sitemap' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bmcc-footer" aria-label="Site Footer">
      <div className="bmcc-footer-container">
        {/* Main 4-Column Grid */}
        <div className="bmcc-footer-grid">
          {/* Column 1: Brand & Contact Info */}
          <div className="bmcc-footer-col-brand">
            <Link to="/" className="bmcc-footer-logo-link" aria-label="BookMyCreditCard Home">
              <img
                src={LOGO_URL}
                alt={SITE_NAME}
                className="bmcc-footer-logo-img"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </Link>

            <p className="bmcc-footer-brand-desc">
              India&apos;s dedicated credit card comparison marketplace. Compare features, rewards, and eligibility across leading banks to find the right card.
            </p>

            <div className="bmcc-footer-contact-list">
              {/* Address */}
              <div className="bmcc-footer-contact-item">
                <svg
                  className="bmcc-footer-contact-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <address className="bmcc-footer-address-text">
                  Flat No 203, 2nd Floor, Viswa Central, Above Canara Bank, Land Mark: Adjacent lane to VIP Luggage Showroom, Ameerpet, Hyderabad - 500016
                </address>
              </div>

              {/* Email */}
              <div className="bmcc-footer-contact-item">
                <svg
                  className="bmcc-footer-contact-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <div>
                  <a href="mailto:care@bookmycreditcard.com" className="bmcc-footer-contact-link">
                    care@bookmycreditcard.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="bmcc-footer-contact-item">
                <svg
                  className="bmcc-footer-contact-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <div>
                  <a href={CONTACT.phoneHref} className="bmcc-footer-phone-val">
                    +91 9966698892
                  </a>
                  <span className="bmcc-footer-contact-timing"> (Mon–Sat, 9:30 AM–6:30 PM)</span>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="bmcc-footer-socials" aria-label="Social media channels">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bmcc-footer-social-btn"
                aria-label="LinkedIn"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bmcc-footer-social-btn"
                aria-label="X (formerly Twitter)"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bmcc-footer-social-btn"
                aria-label="Instagram"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bmcc-footer-social-btn"
                aria-label="Facebook"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bmcc-footer-social-btn"
                aria-label="YouTube"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Card Categories */}
          <div className="bmcc-footer-col">
            <h3 className="bmcc-footer-heading">Card Categories</h3>
            <ul className="bmcc-footer-links">
              {cardCategories.map((item) => (
                <li key={item.label}>
                  <Link to={item.to}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Tools & Resources */}
          <div className="bmcc-footer-col">
            <h3 className="bmcc-footer-heading">Tools &amp; Resources</h3>
            <ul className="bmcc-footer-links">
              {toolLinks.map((item) => (
                <li key={item.label}>
                  <Link to={item.to}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Partner Banks */}
          <div className="bmcc-footer-col-partners">
            <h3 className="bmcc-footer-heading">Partner Banks</h3>
            <p className="bmcc-footer-partner-desc">
              Compare credit cards issued across India&apos;s leading RBI-regulated institutions:
            </p>
            <div className="bmcc-footer-partner-badges">
              {partnerBanks.map((bank) => (
                <Link
                  key={bank.bankId}
                  to={`/explore?bank=${bank.bankId}`}
                  className="bmcc-footer-bank-pill"
                  title={`View ${bank.name} credit cards`}
                >
                  {bank.name}
                </Link>
              ))}
            </div>
            <Link to="/explore" className="bmcc-footer-explore-more">
              Explore all 200+ cards →
            </Link>
          </div>
        </div>

        {/* Compact Security Advisory Strip */}
        <div className="bmcc-footer-security-strip">
          <svg
            className="bmcc-footer-security-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
          <p className="bmcc-footer-security-text">
            <strong>Security Notice:</strong> BookMyCreditCard will NEVER ask for upfront processing fees, cash deposits, or OTPs for credit card approvals. Report any suspicious contact to{' '}
            <a href="mailto:care@bookmycreditcard.com">care@bookmycreditcard.com</a>.
          </p>
        </div>

        {/* Crisp Regulatory Disclaimer */}
        <p className="bmcc-footer-disclaimer">
          <strong>Disclaimer:</strong> BookMyCreditCard is an independent credit card comparison and discovery portal, not a bank or card issuer. We do not extend credit directly. Card approval, credit limits, interest rates, and fee waivers are determined exclusively by respective issuing banks based on their underwriting policies.
        </p>

        {/* Bottom Bar: Copyright, Legal Links, Powered By */}
        <div className="bmcc-footer-bottom-bar">
          <span className="bmcc-footer-copyright">
            © {currentYear} {SITE_NAME}. All rights reserved.
          </span>

          <nav className="bmcc-footer-legal-nav" aria-label="Legal &amp; Policy Links">
            {legalNavLinks.map((item) => (
              <Link key={item.label} to={item.to}>
                {item.label}
              </Link>
            ))}
          </nav>

          <span className="bmcc-footer-powered-by">
            Powered by{' '}
            <a href={POWERED_BY.url} target="_blank" rel="noopener noreferrer">
              {POWERED_BY.label}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
          </span>
        </div>
      </div>

      {/* Floating WhatsApp Action Button */}
      <a
        href="https://wa.me/919966698892?text=Hi%20BookMyCreditCard%2C%20I%20would%20like%20to%20know%20more%20about%20credit%20card%20options."
        target="_blank"
        rel="noopener noreferrer"
        className="bmcc-whatsapp-fab"
        aria-label="Chat with BookMyCreditCard on WhatsApp"
        title="Chat with us on WhatsApp"
      >
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </footer>
  );
}
