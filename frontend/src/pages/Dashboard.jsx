import './Dashboard.css';

export default function Dashboard() {
  return (
    <main className="dashboard">
      <section className="page-header">
        <div className="page-header__inner">
          <span className="section-tag">Analytics</span>
          <h1 className="page-header__title">
            Housing<br /><em>Dashboard</em>
          </h1>
          <div className="page-header__line" />
          <p className="page-header__desc">
            Interactive visualizations powered by Tableau — explore price trends, renovation impact, and geographic patterns.
          </p>
        </div>
      </section>

      <section className="dashboard__content">
        <div className="dashboard__inner">

          {/* Embed Tableau Public iframe or local server here */}
          <div className="tableau-container">
            <iframe
              src="https://public.tableau.com/views/House_Analytics/ComprehensiveHouseDataAnalysis?:showVizHome=no&:embed=true"
              width="100%"
              height="850"
              frameBorder="0"
              allowFullScreen
            />
          </div>

          {/* Quick stat cards */}
          <div className="dashboard__stats">
            {[
              { label: 'Avg Sale Price', value: '$540,296', trend: '+12%', up: true },
              { label: 'Median Bedrooms', value: '3', trend: 'Most common', up: null },
              { label: 'Renovated Homes', value: '~4,800', trend: 'Out of 21,613', up: null },
              { label: 'Waterfront Premium', value: '+35%', trend: 'vs non-waterfront', up: true },
            ].map(({ label, value, trend, up }) => (
              <div key={label} className="stat-card">
                <span className="stat-card__label">{label}</span>
                <span className="stat-card__value">{value}</span>
                <span className={`stat-card__trend ${up === true ? 'up' : up === false ? 'down' : ''}`}>
                  {up === true ? '↑' : up === false ? '↓' : '—'} {trend}
                </span>
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
