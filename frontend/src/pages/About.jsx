import { Link } from 'react-router-dom';
import './About.css';

const OBJECTIVES = [
  'Address challenges in understanding the factors that influence house prices and sales trends.',
  'Analyse comprehensive housing data including total sales by years since renovation, house age distribution by bedrooms/bathrooms/floors, and the impact of renovations on house age.',
  'Utilize Tableau to visualize and interpret patterns in the housing market to inform strategic decisions, optimize pricing strategies, and enhance overall market competitiveness.',
];

const TEAM = [
  { name: 'Data Analyst', role: 'Housing Market Research', initials: 'DA' },
  { name: 'Visualization', role: 'Tableau Dashboard Design', initials: 'VZ' },
  { name: 'Engineering', role: 'Flask & React Development', initials: 'EN' },
];

export default function About() {
  return (
    <main className="about">
      {/* ── PAGE HEADER ── */}
      <section className="page-header">
        <div className="page-header__inner">
          <span className="section-tag">Who We Are</span>
          <h1 className="page-header__title">
            About the<br /><em>Project</em>
          </h1>
          <div className="page-header__line" />
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <section className="about__main">
        <div className="about__inner">
          <div className="about__image-col">
            <div className="about__image-wrap">
              <img
                src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80"
                alt="Modern apartment building"
                className="about__image"
              />
              <div className="about__image-badge">
                <span className="badge-number">21K+</span>
                <span className="badge-label">Properties<br />Analyzed</span>
              </div>
            </div>
          </div>

          <div className="about__text-col">
            <h2 className="about__heading">
              Visualizing Housing Market Trends: An Analysis of Sale Prices and Features using Tableau
            </h2>

            <ul className="about__objectives">
              {OBJECTIVES.map((obj, i) => (
                <li key={i} className="about__objective">
                  <span className="objective-check">✓</span>
                  <span>{obj}</span>
                </li>
              ))}
            </ul>

            <div className="about__cta">
              <Link to="/dashboard" className="btn btn--primary">
                View Dashboard
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <Link to="/story" className="btn btn--ghost">Read the Story</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── DATA HIGHLIGHTS ── */}
      <section className="data-highlights">
        <div className="data-highlights__inner">
          <div className="dh-header">
            <span className="section-tag">Dataset Overview</span>
            <h2 className="section-title">What We're Working With</h2>
          </div>
          <div className="dh-grid">
            {[
              { icon: '🏡', label: 'Sale Price', desc: 'Range from $75K to $7.7M with a median around $450K' },
              { icon: '🛏', label: 'Bedrooms', desc: '1–11 bedrooms tracked across all property listings' },
              { icon: '🚿', label: 'Bathrooms', desc: '0.5 to 8 bathrooms, capturing all property configurations' },
              { icon: '📐', label: 'Flat Area', desc: 'Interior square footage from 290 to 13,540 sqft' },
              { icon: '🏗', label: 'Renovation', desc: 'Years since last renovation as a key pricing factor' },
              { icon: '🌊', label: 'Waterfront', desc: 'Waterfront view properties command significant premium' },
            ].map(({ icon, label, desc }) => (
              <div key={label} className="dh-card">
                <div className="dh-card__icon">{icon}</div>
                <h3>{label}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>© {new Date().getFullYear()} HousingTrends · Built with Flask & React</p>
      </footer>
    </main>
  );
}
