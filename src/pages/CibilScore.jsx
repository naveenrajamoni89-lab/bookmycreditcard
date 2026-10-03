import { Link } from 'react-router-dom';
import LearnLayout from '../components/LearnLayout';
import FAQSection from '../components/FAQSection';

const factors = [
  ['Payment history', 'Your record of repaying credit card bills and loan instalments. Late or missed payments can affect your score.'],
  ['Credit utilisation', 'How much of your available credit you use. Keeping balances manageable helps demonstrate responsible borrowing.'],
  ['Age of credit', 'The length of your borrowing history gives lenders more information about your repayment behaviour.'],
  ['Credit enquiries', 'Applications for new credit can generate enquiries on your report. Several applications close together may concern lenders.'],
];

export default function CibilScore() {
  return (
    <LearnLayout title="Understand your CIBIL score." description="Know what lenders see, what influences your score and how to read your credit report." sections={[["overview", "Your score, explained"], ["factors", "What affects it"], ["report", "Review your report"], ["questions", "Common questions"]]}>
      <section id="overview" className="learn-section">
        <h2>A summary of your credit history</h2>
        <p className="learn-lead">Your CIBIL score is a three-digit number between 300 and 900. It reflects the accounts and enquiries recorded in your credit report. A higher score generally improves your chances of credit approval.</p>
        <div className="learn-score-reference"><div><strong>300 to 900</strong><span>CIBIL score range</span></div><p>Your score is one part of a lender's decision. Income, existing obligations and the issuer's criteria also matter.</p></div>
        <p className="learn-source">Source: <a href="https://www.cibil.com/faq/credit-score-and-loan-basics" target="_blank" rel="noreferrer">TransUnion CIBIL</a></p>
      </section>
      <section id="factors" className="learn-section">
        <h2>What shapes your score</h2>
        <div className="learn-reference-list">{factors.map(([title, text]) => <div key={title}><h3>{title}</h3><p>{text}</p></div>)}</div>
        <p className="learn-source">Read more: <a href="https://www.cibil.com/faq-brochure" target="_blank" rel="noreferrer">How CIBIL calculates your score</a></p>
      </section>
      <section id="report" className="learn-section">
        <h2>Look beyond the number</h2>
        <p>Your report contains the detail behind your score. Review the accounts, repayment records and enquiries, and raise a dispute with CIBIL if you find an error.</p>
        <div className="learn-note"><h3>Our eligibility check is a starting point</h3><p>BookMyCreditCard estimates basic eligibility from the information you provide. It does not fetch your CIBIL report or guarantee a bank's approval.</p><Link className="learn-button learn-button-outline" to="/credit-card-eligibility">Check basic eligibility</Link></div>
      </section>
      <div id="questions"><FAQSection page="cibil-score" title="Common questions" /></div>
    </LearnLayout>
  );
}
