import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const STATS = [
  { value: '21,000+', label: 'Properties Analyzed' },
  { value: '$540K', label: 'Avg. Sale Price' },
  { value: '15+', label: 'Key Features Tracked' },
  { value: '9', label: 'Zipcode Groups' },
];

export default function Home() {
  const heroRef = useRef(null);

  // Parallax on scroll
  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const onScroll = () => {
      const y = window.scrollY;
      el.style.setProperty('--parallax-y', `${y * 0.35}px`);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <main className="home">
      {/* ── HERO ── */}
      <section className="hero" ref={heroRef}>
        <div className="hero__bg" />
        <div className="hero__overlay" />

        <div className="hero__content">
          <p className="hero__eyebrow">
            <span className="eyebrow-dot" />
            Data-Driven Real Estate Insights
          </p>
          <h1 className="hero__title">
            Visualizing Housing<br />
            <span className="hero__title--accent">Sales Trends</span><br />
            & Its Prices.
          </h1>
          <p className="hero__subtitle">
            Uncover patterns in housing markets — from bedroom counts and renovation history
            to floor area and waterfront views.
          </p>
          <div className="hero__cta">
            <Link to="/dashboard" className="btn btn--primary">
              Get Started
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <Link to="/about" className="btn btn--ghost">Learn More</Link>
          </div>
        </div>

        <div className="hero__scroll-hint">
          <span>Scroll</span>
          <div className="scroll-line" />
        </div>
      </section>

      {/* ── STATS STRIP ── */}
      <section className="stats-strip">
        {STATS.map(({ value, label }) => (
          <div key={label} className="stat-item">
            <span className="stat-value">{value}</span>
            <span className="stat-label">{label}</span>
          </div>
        ))}
      </section>

      {/* ── INTRO SECTION ── */}
      <section className="intro">
        <div className="intro__inner">
          <div className="intro__text">
            <span className="section-tag">About the Project</span>
            <h2 className="section-title">
              Understanding What<br />
              <em>Drives House Prices</em>
            </h2>
            <p>
              This project leverages comprehensive housing data to identify the key factors
              behind sale prices and market trends — including renovation history, house age,
              bedrooms, bathrooms, and geographic location.
            </p>
            <p>
              Built with Tableau for visual storytelling and powered by a clean Flask
              backend, the goal is to make complex market data approachable and actionable.
            </p>
            <Link to="/about" className="btn btn--primary" style={{ marginTop: '1.5rem', display: 'inline-flex' }}>
              Read More
            </Link>
          </div>
          <div className="intro__cards">
            {[
              { icon: '📊', title: 'Sales Trends', desc: 'Track total sales by year since renovation across all property types.' },
              { icon: '🏠', title: 'Price Factors', desc: 'Analyse how bedrooms, bathrooms, floors and grade influence pricing.' },
              { icon: '🗺️', title: 'Location Intel', desc: 'Geographic clustering by zipcode groups reveals hidden price patterns.' },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="feature-card">
                <div className="feature-card__icon">{icon}</div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} HousingTrends · Built with Flask & React</p>
      </footer>
    </main>
  );
}
