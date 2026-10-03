import LearnLayout from '../components/LearnLayout';
import { basicsContent } from '../data/learnContent';

const sections = [['overview', 'How cards work'], ['terms', 'Terms to know'], ['billing', 'The billing cycle'], ['habits', 'Responsible use'], ['questions', 'Common questions']];

export default function CreditCardBasics() {
  return (
    <LearnLayout title="Credit card basics." description="Understand your statement, your payment dates and the cost of borrowing." sections={sections}>
      <section id="overview" className="learn-section">
        <h2>How credit cards work</h2>
        <p className="learn-lead">{basicsContent.intro.replaceAll('\u2014', ', ')}</p>
      </section>
      <section id="terms" className="learn-section">
        <h2>The terms on your statement</h2>
        <dl className="learn-glossary">
          {basicsContent.keyTerms.map(item => <div key={item.term}><dt>{item.term}</dt><dd>{item.desc}</dd></div>)}
        </dl>
      </section>
      <section id="billing" className="learn-section">
        <h2>Follow a billing cycle</h2>
        <p>An illustrative 50-day cycle. Your statement and issuer terms determine your actual dates and interest-free period.</p>
        <ol className="learn-timeline">
          {basicsContent.gracePeriodWalkthrough.map(step => <li key={step.step}><span>{step.step}</span><div><h3>{step.title}</h3><p>{step.desc}</p></div></li>)}
        </ol>
      </section>
      <section id="habits" className="learn-section">
        <h2>Build good card habits</h2>
        <div className="learn-reference-list">
          {basicsContent.goldenRules.map(rule => <div key={rule.rule}><h3>{rule.rule.replace(/^\d+\.\s*/, '')}</h3><p>{rule.desc}</p></div>)}
        </div>
      </section>
      <section id="questions" className="learn-section">
        <h2>Common questions</h2>
        <div className="learn-faqs">
          {basicsContent.faqs.map(faq => <details key={faq.q}><summary>{faq.q}</summary><p>{faq.a.replaceAll('\u2014', ', ')}</p></details>)}
        </div>
      </section>
    </LearnLayout>
  );
}
