import './ArtisanSection.scss';
import bambooFarmer from '../../../assets/bambooFarmer.jpg';
import organicProducts from '../../../assets/organicproducts1.jpg';
import { Link } from 'react-router-dom';

const ArtisanSection = () => {
  return (
    <section className="artisan-section section">
      <div className="section__inner artisan-section__inner">
        <div className="artisan-section__media" data-reveal>
          <div className="artisan-section__image artisan-section__image--primary">
            <img src={bambooFarmer} alt="Bamboo artisans at work" />
            <div className="artisan-section__tag">Handmade in Rajasthan</div>
          </div>
          <div className="artisan-section__image artisan-section__image--secondary">
            <img src={organicProducts} alt="Bamboo product craftsmanship" />
          </div>
        </div>
        <div className="artisan-section__content" data-reveal>
          <span className="eyebrow">Artisan journey</span>
          <h2>From bamboo grove to finished essentials.</h2>
          <p>
            Every product begins with responsible sourcing and ends with skilled
            finishing. Our artisan partners handle harvesting, shaping, and
            polishing with techniques passed through generations.
          </p>
          <div className="artisan-section__steps">
            <div className="artisan-step">
              <span>01</span>
              <div>
                <h3>Harvest</h3>
                <p>Quick-growing bamboo is selected and seasoned naturally.</p>
              </div>
            </div>
            <div className="artisan-step">
              <span>02</span>
              <div>
                <h3>Craft</h3>
                <p>Local makers shape, sand, and finish every piece by hand.</p>
              </div>
            </div>
            <div className="artisan-step">
              <span>03</span>
              <div>
                <h3>Deliver</h3>
                <p>We package and ship with minimal, eco-safe materials.</p>
              </div>
            </div>
          </div>
          <Link to="/photoGallery" className="artisan-section__link">
            See the workshop gallery
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ArtisanSection;
