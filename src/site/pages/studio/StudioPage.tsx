import './StudioPage.scss';
import studioImage from '../../../assets/Homepage-image.jpg';
import { Link } from 'react-router-dom';
import Seo from '../../seo/Seo';

const timeline = [
  { year: '2018', text: 'Bamboo Anna is founded in Banswara, Rajasthan.' },
  { year: '2020', text: 'Expanded to artisan grooming and dental essentials.' },
  { year: '2022', text: 'Partnered with hospitality and gifting brands.' },
  { year: '2024', text: 'Scaled production with community training programs.' },
];

const StudioPage = () => {
  return (
    <div className="studio-page">
      <Seo
        title="Bamboo Anna Studio"
        description="Meet the Bamboo Anna Studio team in Rajasthan, where artisan craft meets modern bamboo design."
        keywords={[
          'bamboo studio',
          'artisan workshop',
          'bamboo manufacturer',
          'Rajasthan artisans',
          'sustainable craft',
        ]}
        canonicalPath="/studio"
        image="/LogoColor.png"
      />
      <section className="page-hero">
        <div className="page-hero__inner" data-reveal>
          <span className="chip">Studio</span>
          <h1>Where bamboo meets thoughtful design.</h1>
          <p>
            We craft sustainable essentials with local artisans, mixing heritage
            techniques with modern aesthetics for conscious brands.
          </p>
        </div>
      </section>

      <section className="studio-story section">
        <div className="section__inner studio-story__inner">
          <div className="studio-story__content" data-reveal>
            <h2>Rooted in Banswara, growing with every partnership.</h2>
            <p>
              Bamboo Anna is a manufacturer and supplier that champions bamboo
              alternatives to plastic. Our studio brings together farmers,
              makers, and brand partners to create products that feel premium
              and responsible.
            </p>
            <p>
              We focus on durability, clean finishes, and custom readiness so
              your customers feel the difference in every touch.
            </p>
            <Link to="/custom" className="btn btn--primary">
              Work with our studio
            </Link>
          </div>
          <div className="studio-story__media" data-reveal>
            <img src={studioImage} alt="Bamboo Anna studio" loading="lazy" />
          </div>
        </div>
      </section>

      <section className="studio-timeline section" data-reveal>
        <div className="section__inner">
          <h2>Our journey</h2>
          <div className="timeline">
            {timeline.map((item) => (
              <div key={item.year} className="timeline__item">
                <span className="timeline__year">{item.year}</span>
                <p className="timeline__copy">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="studio-values section">
        <div className="section__inner">
          <div className="section__header" data-reveal>
            <span className="chip">Values</span>
            <h2>Built on craft, care, and collaboration.</h2>
          </div>
          <div className="studio-values__grid">
            {[
              {
                title: 'Quality first',
                copy: 'Rigorous inspection for every batch and every finish.',
              },
              {
                title: 'Sustainable sourcing',
                copy: 'We choose bamboo for its regenerative growth cycles.',
              },
              {
                title: 'Community uplift',
                copy: 'Jobs and training opportunities stay local.',
              },
            ].map((value) => (
              <div key={value.title} className="studio-values__card" data-reveal>
                <h3>{value.title}</h3>
                <p>{value.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default StudioPage;
