import './HeroSection.scss';
import combBrush from '../../../assets/comb/P1040066-min.jpg';
import brush from '../../../assets/dentalCare/P1030943-min.jpg';
import razor from '../../../assets/razor/P1030998-min.jpg';
import bambooFarmer from '../../../assets/bambooFarmer.jpg';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Link } from 'react-router-dom';
import CTAButton from '../../common/cta-button/CTAButton';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero__inner section__inner">
        <div className="hero__content" data-reveal>
          <span className="eyebrow">Crafted with local artisans</span>
          <h1>Everyday bamboo essentials, shaped by hands in Rajasthan.</h1>
          <p>
            Bamboo Anna partners with local makers to craft durable, plastic-free
            products for homes, hotels, and conscious businesses. Each piece
            blends natural materials with thoughtful design and fair wages.
          </p>
          <div className="hero__actions">
            <CTAButton
              text="Explore the collection"
              variant="primary"
              size="large"
              to="/products"
            />
            <CTAButton
              text="Meet the artisans"
              variant="outline"
              size="large"
              to="/aboutUs"
            />
          </div>
          <div className="hero__stats">
            <div className="hero__stat">
              <strong>65+</strong>
              <span>Artisans supported</span>
            </div>
            <div className="hero__stat">
              <strong>30+</strong>
              <span>B2B partners</span>
            </div>
            <div className="hero__stat">
              <strong>100%</strong>
              <span>Biodegradable materials</span>
            </div>
          </div>
        </div>

        <div className="hero__media" data-reveal>
          <Link
            to="/pdp?product=softBristleToothbrush"
            className="hero__tile hero__tile--tall"
          >
            <LazyLoadImage
              src={brush}
              alt="Bamboo toothbrush"
              className="hero__image"
              effect="blur"
            />
            <span className="hero__tile-label">Bamboo toothbrush</span>
          </Link>
          <Link to="/pdp?product=comb" className="hero__tile">
            <LazyLoadImage
              src={combBrush}
              alt="Neem comb"
              className="hero__image"
              effect="blur"
            />
            <span className="hero__tile-label">Neem comb</span>
          </Link>
          <Link to="/pdp?product=razor" className="hero__tile">
            <LazyLoadImage
              src={razor}
              alt="Bamboo razor"
              className="hero__image"
              effect="blur"
            />
            <span className="hero__tile-label">Shaving razor</span>
          </Link>
          <Link to="/photoGallery" className="hero__tile hero__tile--wide">
            <LazyLoadImage
              src={bambooFarmer}
              alt="Local bamboo artisans"
              className="hero__image"
              effect="blur"
            />
            <span className="hero__tile-label">Local artisan network</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
