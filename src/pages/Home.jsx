import LandingHero from '../components/landing/LandingHero';
import CardFinder from '../components/landing/CardFinder';
import { useEffect, useRef } from 'react';
import '../styles/home-editorial.css';

export default function Home() {
  const pageRef = useRef(null);
  useEffect(() => {
    const page = pageRef.current;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
      });
    }, { threshold: 0.12 });
    page.classList.add('bmcc-motion-ready');
    page.querySelectorAll('[data-reveal]').forEach(element => observer.observe(element));
    return () => { observer.disconnect(); page.classList.remove('bmcc-motion-ready'); };
  }, []);
  return (
    <div className="landing-page-root bmcc-editorial bmcc-home" ref={pageRef}>
      <LandingHero />
      <div className="bmcc-finder-section" data-reveal><div className="bmcc-finder-intro"><span className="bmcc-section-label">LET’S NARROW IT DOWN</span><h2>Less guesswork.<br />More good choices.</h2><p>Tell us what matters to you.<br />Find a few cards worth a closer look.</p></div><CardFinder /></div>
    </div>
  );
}
