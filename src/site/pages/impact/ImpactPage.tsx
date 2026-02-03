import './ImpactPage.scss';
import ImpactCounters from '../../components/ImpactCounters';
import bambooSustainability from '../../../assets/bambooSustainability.webp';
import ecoFriendly from '../../../assets/HotelAmenities.webp';
import beforeAfter from '../../../assets/how-strong-is-bamboo.webp';
import Seo from '../../seo/Seo';

const ImpactPage = () => {
  return (
    <div className="impact-page">
      <Seo
        title="Bamboo Impact"
        description="See how bamboo essentials reduce plastic waste and support artisan livelihoods through measurable impact."
        keywords={[
          'bamboo impact',
          'plastic free',
          'sustainable materials',
          'artisan livelihoods',
          'eco friendly products',
        ]}
        canonicalPath="/impact"
        image="/LogoColor.png"
      />
      <section className="page-hero">
        <div className="page-hero__inner" data-reveal>
          <span className="chip">Impact</span>
          <h1>Real impact, measurable change.</h1>
          <p>
            Bamboo replaces high-waste plastic items while supporting artisan
            livelihoods and healthier ecosystems.
          </p>
        </div>
      </section>

      <section className="impact-score section">
        <div className="section__inner">
          <div className="section__header" data-reveal>
            <h2>Our impact scoreboard</h2>
            <p>Growing with every partner and every order.</p>
          </div>
          <ImpactCounters />
        </div>
      </section>

      <section className="impact-facts section">
        <div className="section__inner impact-facts__inner">
          <div className="impact-facts__image" data-reveal>
            <img src={bambooSustainability} alt="Bamboo sustainability" loading="lazy" />
          </div>
          <div className="impact-facts__content" data-reveal>
            <span className="chip">Bamboo science</span>
            <h2>Why bamboo outperforms plastic.</h2>
            <ul>
              <li>Grows to maturity in 3-5 years.</li>
              <li>Regenerates without replanting.</li>
              <li>Biodegradable and low-waste.</li>
              <li>Requires minimal chemical processing.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="impact-tiles section">
        <div className="section__inner impact-tiles__grid">
          <div className="impact-tile" data-reveal>
            <img src={ecoFriendly} alt="Hotel bamboo amenities" loading="lazy" />
            <h3>Cleaner hospitality</h3>
            <p>Hotels switch to bamboo amenities and cut single-use waste.</p>
          </div>
          <div className="impact-tile" data-reveal>
            <img src={beforeAfter} alt="Bamboo durability" loading="lazy" />
            <h3>Lower landfill pressure</h3>
            <p>Bamboo alternatives break down naturally over time.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ImpactPage;
