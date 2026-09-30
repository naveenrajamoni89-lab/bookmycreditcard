import { Link } from 'react-router-dom';
import { SITE_NAME, LOGO_URL, CONTACT, POWERED_BY } from '../data/branding';

const exploreLinks = [
  { label: 'Featured credit cards', to: '/best-credit-cards' },
  { label: 'Interest rates', to: '/credit-card-interest-rates' },
  { label: 'CIBIL score guide', to: '/cibil-score-for-credit-card' },
];

const legalLinks = [
  { label: 'Terms of Use', to: '/terms-of-use' },
  { label: 'Privacy Policy', to: '/privacy-policy' },
  { label: 'Credit Report Terms', to: '/credit-report-terms' },
  { label: 'Grievance Redressal', to: '/grievance-redressal' },
  { label: 'Disclaimer', to: '/disclaimer' },
];

export default function Footer() {
  return (
    <footer className="pb-footer">
      <div className="container">
        <div className="pb-footer-grid">
          <div className="pb-footer-col">
            <h3 className="pb-footer-heading">Explore</h3>
            <ul className="pb-footer-links">
              {exploreLinks.map(link => (
                <li key={link.to}><Link to={link.to}>{link.label}</Link></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="pb-footer-contact">
          <div className="pb-footer-contact-col pb-footer-brand">
            <img src={LOGO_URL} alt={SITE_NAME} className="pb-footer-logo" onError={e => { e.target.style.display = 'none'; }} />
            <h3 className="pb-footer-heading">Registered Office</h3>
            <address className="pb-footer-address">{CONTACT.address}</address>
          </div>
          <div className="pb-footer-contact-col">
            <h3 className="pb-footer-heading">Contact</h3>
            <p className="pb-footer-phone"><a href={CONTACT.phoneHref}>{CONTACT.phone}</a></p>
            <p className="pb-footer-contact-text">{CONTACT.hours}</p>
          </div>
          <div className="pb-footer-contact-col">
            <h3 className="pb-footer-heading">Email</h3>
            <a href="mailto:care@bookmycreditcard.com">care@bookmycreditcard.com</a>
          </div>
        </div>
        <nav className="pb-footer-legal" aria-label="Legal information">
          {legalLinks.map(link => <Link key={link.to} to={link.to}>{link.label}</Link>)}
        </nav>
      </div>
      <div className="pb-footer-bottom">
        <div className="container pb-footer-bottom-inner">
          <span>© {new Date().getFullYear()} {SITE_NAME}. All Rights Reserved.</span>
          <span>Powered by <a href={POWERED_BY.url} target="_blank" rel="noopener noreferrer">{POWERED_BY.label}</a></span>
        </div>
      </div>
    </footer>
  );
}
