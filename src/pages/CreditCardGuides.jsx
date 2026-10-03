import { Link, useSearchParams } from 'react-router-dom';
import LearnLayout from '../components/LearnLayout';
import { guidesHubContent } from '../data/learnContent';

export default function CreditCardGuides() {
  const [params] = useSearchParams();
  const current = guidesHubContent.guides.find(guide => guide.id === params.get('guide')) || guidesHubContent.guides[0];
  return (
    <LearnLayout title="Practical card guides." description="Straightforward instructions for the things you do with your card every day." sections={[]}>
      <div className="learn-guide-browser">
        <nav className="learn-guide-index" aria-label="Choose a practical guide">
          {guidesHubContent.guides.map(guide => (
            <Link key={guide.id} to={`?guide=${guide.id}`} preventScrollReset aria-current={guide.id === current.id ? 'page' : undefined}>
              <strong>{guide.title}</strong><span>{guide.category} / {guide.time}</span>
            </Link>
          ))}
        </nav>
        <article className="learn-guide-article" aria-labelledby="guide-title" key={current.id}>
          <h2 id="guide-title">{current.title}</h2>
          <p className="learn-guide-meta">{current.category} / {current.time}</p>
          <p className="learn-lead">{current.summary}</p>
          <h3>What to do</h3>
          <ol className="learn-instructions">{current.steps.map(step => <li key={step}>{step}</li>)}</ol>
          <div className="learn-guide-actions"><Link className="learn-button learn-button-outline" to="/credit-card-eligibility">Check eligibility</Link></div>
        </article>
      </div>
    </LearnLayout>
  );
}
