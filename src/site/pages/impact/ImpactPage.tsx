import { useState } from 'react';
import './ImpactPage.scss';
import ImpactCounters from '../../components/ImpactCounters';
import bambooSustainability from '../../../assets/bambooSustainability.webp';
import ecoFriendly from '../../../assets/otherPhotos/drivePhotos/cleanerHospitality.jpg';
import artisanImpactImage from '../../../assets/otherPhotos/artisan2.jpg';
import beforeImage from '../../../assets/otherPhotos/beforeNew.png';
import afterImage from '../../../assets/otherPhotos/afterNew.png';
import Seo from '../../seo/Seo';

const ImpactPage = () => {
  const [comparison, setComparison] = useState(50);

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

      <section className="impact-compare section">
        <div className="section__inner">
          <div className="section__header" data-reveal>
            <h2>From plastic-choked water to cleaner shorelines</h2>
            <p>
              Drag the slider to compare a polluted water edge with a cleaned-up
              outcome from a similar viewpoint.
            </p>
          </div>

          <div className="impact-compare__shell" data-reveal>
            <div className="impact-compare__labels" aria-hidden>
              <span>Before</span>
              <span>After</span>
            </div>

            <div className="impact-compare__frame">
              <div
                className="impact-compare__image impact-compare__image--before"
                style={{ backgroundImage: `url(${beforeImage})` }}
                aria-hidden
              />
              <div
                className="impact-compare__image impact-compare__image--after"
                style={{
                  backgroundImage: `url(${afterImage})`,
                  clipPath: `inset(0 0 0 ${comparison}%)`,
                }}
                aria-hidden
              />
              <div className="impact-compare__divider" style={{ left: `${comparison}%` }}>
                <span className="impact-compare__knob" aria-hidden>
                  {'\u2194'}
                </span>
              </div>
              <input
                type="range"
                min={0}
                max={100}
                value={comparison}
                onChange={(event) => setComparison(Number(event.target.value))}
                className="impact-compare__range"
                aria-label="Compare polluted and cleaned water images"
              />
            </div>
          </div>
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
          <div className="impact-tile impact-tile--hospitality" data-reveal>
            <img src={ecoFriendly} alt="Hotel bamboo amenities" loading="lazy" />
            <h3>Cleaner hospitality</h3>
            <p>Hotels switch to bamboo amenities and cut single-use waste.</p>
          </div>
          <div className="impact-tile impact-tile--artisans" data-reveal>
            <img src={artisanImpactImage} alt="Rajasthan artisan with bamboo" loading="lazy" />
            <h3>Artisan-led manufacturing</h3>
            <p>
              We manufacture with Rajasthan artisans, creating stable livelihoods
              while delivering brand-ready bamboo products for bulk orders.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ImpactPage;
