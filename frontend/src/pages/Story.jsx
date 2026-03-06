import './Story.css';

const STORY_SECTIONS = [
  {
    number: '01',
    title: 'The Problem',
    content: 'Understanding what truly drives housing prices is complex. With thousands of data points across bedrooms, bathrooms, square footage, renovation history, and location — it\'s nearly impossible to manually identify patterns. We needed a visual approach.',
  },
  {
    number: '02',
    title: 'The Data',
    content: 'We worked with a dataset of over 21,000 residential property transactions, capturing 31 distinct attributes per record — from sale price and floor area to waterfront views, zipcode groups, and years since renovation.',
  },
  {
    number: '03',
    title: 'The Analysis',
    content: 'Using Tableau, we broke down the dataset into five key analytical lenses: price distribution, renovation impact, age vs. condition, geographic clustering, and feature correlation — building a complete picture of the market.',
  },
  {
    number: '04',
    title: 'The Findings',
    content: 'Renovation history emerged as a dominant pricing factor. Waterfront properties commanded a 35%+ premium. Homes with an "Excellent" condition rating far outperformed the market average, and geographic clustering revealed stark neighbourhood price divides.',
  },
  {
    number: '05',
    title: 'The Impact',
    content: 'This analysis gives buyers, sellers, and investors a data-driven foundation for pricing strategies, renovation ROI decisions, and neighbourhood targeting — replacing gut instinct with visual evidence.',
  },
];

export default function Story() {
  return (
    <main className="story">
      <section className="page-header">
        <div className="page-header__inner">
          <span className="section-tag">Narrative</span>
          <h1 className="page-header__title">
            The Data<br /><em>Story</em>
          </h1>
          <div className="page-header__line" />
          <p className="page-header__desc">
            A walkthrough of how we turned 21,000 property records into actionable housing market insights.
          </p>
        </div>
      </section>

      <section className="story__timeline">
        <div className="story__inner">
          {STORY_SECTIONS.map(({ number, title, content }, i) => (
            <div key={number} className={`story__item ${i % 2 === 1 ? 'story__item--right' : ''}`}>
              <div className="story__number">{number}</div>
              <div className="story__card">
                <h2 className="story__card-title">{title}</h2>
                <p className="story__card-content">{content}</p>
              </div>
              <div className="story__connector" />
            </div>
          ))}
        </div>

        {/* ── TABLEAU STORYBOARD ── */}
      <section className="story__tableau">
        <div className="story__inner">
        <span className="section-tag">Interactive Storyboard</span>
          <h2 className="story__tableau-title">Explore the Full Story</h2>
        <div className="story__tableau-embed">
        <iframe
          src="https://public.tableau.com/views/House_Analytics/HousingMarketStory?:showVizHome=no&:embed=true"
          width="100%"
          height="850"
          frameBorder="0"
          allowFullScreen
         />
        </div>
        </div>
      </section>
      </section>

      <footer className="footer">
        <p>© {new Date().getFullYear()} HousingTrends · Built with Flask & React</p>
      </footer>
    </main>
  );
}
