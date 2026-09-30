import { useCallback, useState } from 'react';
import { fetchFaqs } from '../services/contentService';
import { useAsyncData } from '../hooks/useAsyncData';
import Loader from './ui/Loader';
import ErrorMessage from './ui/ErrorMessage';

/**
 * Accordion FAQ list. Fetches FAQs for the given `page` key
 * (home, interest-rates, cibil-score, eligibility).
 */
export default function FAQSection({ page = 'home', title }) {
  const [openIdx, setOpenIdx] = useState(null);
  const fetcher = useCallback(() => fetchFaqs(page), [page]);
  const { data: faqs, loading, error } = useAsyncData(fetcher, [page]);

  return (
    <section className="pb-faq-section">
      <div className="container">
        {title && <h2 className="pb-faq-heading">{title}</h2>}
        {loading ? (
          <Loader label="Loading FAQs..." />
        ) : error ? (
          <ErrorMessage message={error} />
        ) : (
          <div className="pb-faq-list">
            {(faqs || []).map((faq, i) => (
              <div key={i} className={`pb-faq-item ${openIdx === i ? 'open' : ''}`}>
                <button
                  type="button"
                  className="pb-faq-question"
                  aria-expanded={openIdx === i}
                  aria-controls={`faq-${page}-${i}`}
                  onClick={() => setOpenIdx(openIdx === i ? null : i)}
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
                    <path d="M6 9l6 6 6-6"/>
                  </svg>
                </button>
                <div id={`faq-${page}-${i}`} className="pb-faq-answer" hidden={openIdx !== i}>
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
