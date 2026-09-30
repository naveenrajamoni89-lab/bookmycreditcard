import { useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { legalPages } from '../data/legalPages';
import NotFound from './NotFound';

const legalNavSlugs = new Set([
  'terms-of-use',
  'privacy-policy',
  'credit-report-terms',
  'grievance-redressal',
  'disclaimer',
]);

export default function LegalPage({ slug: slugProp }) {
  const params = useParams();
  const slug = slugProp || params.slug;
  const [linksOpen, setLinksOpen] = useState(false);
  const page = legalPages.find(p => p.slug === slug);
  if (!page) return <NotFound />;

  return (
    <div className="pb-legal-wrap">
      <div className="container pb-legal-layout">
        <aside className="pb-legal-sidebar">
          <button className="pb-legal-links-toggle" onClick={() => setLinksOpen(o => !o)} aria-expanded={linksOpen}>
            Legal information
          </button>
          <ul className={`pb-legal-links ${linksOpen ? 'open' : ''}`}>
            {legalPages.filter(p => legalNavSlugs.has(p.slug)).map(p => (
              <li key={p.slug}>
                <NavLink to={`/${p.slug}`} className={({ isActive }) => isActive ? 'active' : undefined} onClick={() => setLinksOpen(false)}>
                  {p.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </aside>
        <article className="pb-legal-content">
          <div className="pb-legal-content-header"><h1>{page.title}</h1></div>
          {page.updated && <p className="pb-legal-updated">Last updated: {page.updated}</p>}
          {page.sections.map((section, i) => (
            <section key={i} className="pb-legal-section">
              <h2>{section.heading}</h2>
              {(section.body || []).map((para, pi) => <p key={pi}>{para}</p>)}
              {section.list && <ul>{section.list.map((item, li) => <li key={li}>{item}</li>)}</ul>}
            </section>
          ))}
        </article>
      </div>
    </div>
  );
}
