import { Link } from 'react-router-dom';
import CardListingSection from '../components/CardListingSection';
import '../styles/home-editorial.css';

export default function Explore() {
  return (
    <div className="landing-page-root bmcc-editorial bmcc-explore">
      <CardListingSection headingId="catalogue" title="Browse credit cards" />
      <section className="bmcc-final-call">
        <span className="bmcc-section-label">YOUR NEXT CHAPTER STARTS HERE</span>
        <h2>A little clarity.<br />A better card.</h2>
        <Link to="/credit-card-eligibility">Find your fit <span aria-hidden="true">↗</span></Link>
        <span className="bmcc-final-spark" aria-hidden="true">✦</span>
      </section>
    </div>
  );
}
