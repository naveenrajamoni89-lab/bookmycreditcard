import { Link, NavLink } from 'react-router-dom';
import '../styles/learn-editorial.css';

const topics = [
  ['/credit-card-basics', 'Card basics'],
  ['/cibil-score-for-credit-card', 'CIBIL score'],
  ['/credit-card-interest-rates', 'Interest rates'],
  ['/best-credit-cards', 'Best credit cards'],
  ['/credit-card-guides', 'Practical guides'],
];

export default function LearnLayout({ title, description, sections, children, wide = false }) {
  return (
    <div className={`learn-page${wide ? ' learn-page-wide' : ''}`}>
      <div className="learn-container">
        <nav className="learn-topics" aria-label="Learning topics">
          {topics.map(([to, label]) => <NavLink key={to} to={to}>{label}</NavLink>)}
        </nav>
        <header className="learn-header"><h1>{title}</h1><p>{description}</p></header>
        <div className="learn-layout">
          {sections.length > 0 && <aside className="learn-sidebar">
            <nav aria-label="On this page"><h2>In this guide</h2>{sections.map(([id, label]) => <a key={id} href={`#${id}`}>{label}</a>)}</nav>
            <div className="learn-sidebar-note"><h2>Ready to find a card?</h2><p>Compare fees and benefits in one place.</p><Link className="learn-button learn-button-outline" to="/explore">Explore cards</Link></div>
          </aside>}
          <div className={`learn-content${sections.length === 0 ? ' learn-content-full' : ''}`}>{children}</div>
        </div>
        <footer className="learn-next">
          <div><h2>Put what you have learned to work.</h2><p>Start with your spending habits. Compare the details before you choose.</p></div>
          <Link className="learn-button" to="/compare-credit-cards">Compare credit cards</Link>
        </footer>
      </div>
    </div>
  );
}
