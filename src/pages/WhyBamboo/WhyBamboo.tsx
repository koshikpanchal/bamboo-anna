import './WhyBamboo.scss';
import bambooSustainability from '../../assets/bambooSustainability.webp';
import howStrongIsBamboo from '../../assets/how-strong-is-bamboo.webp';
import ecoFriendly from '../../assets/eco-friendly-environment-bamboo-tube-straws.jpg';
import products from '../../assets/bamboo-products.jpg';
import bambooFarmer from '../../assets/bambooFarmer.jpg';
import tb from '../../assets/razor/P1030998-min.jpg';
import Footer from '../common/footer/Footer';
import Header from '../common/header/Header';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import WhyBambooHelmet from './WhyBambooHelmet';
import CTASection from '../homepage/cta-section/CTASection';

const WhyBamboo = () => {
  return (
    <>
      <WhyBambooHelmet />
      <Header />
      <div className="why-bamboo-page">
        <section className="page-hero">
          <div className="page-hero__inner" data-reveal>
            <span className="eyebrow">Why bamboo</span>
            <h1 className="page-hero__title">A material built for tomorrow</h1>
            <p className="page-hero__subtitle">
              Bamboo grows rapidly, regenerates without replanting, and creates
              products that return to the earth without harm.
            </p>
          </div>
        </section>

        <section className="split-section">
          <div className="split-section__inner">
            <div className="split-section__media" data-reveal>
              <LazyLoadImage
                src={bambooSustainability}
                alt="Sustainable bamboo"
                effect="blur"
              />
            </div>
            <div className="split-section__content" data-reveal>
              <h2>Sustainability at its best</h2>
              <p>
                Bamboo matures in 3-5 years, making it a renewable material that
                reduces pressure on forests and supports biodiversity.
              </p>
            </div>
          </div>
        </section>

        <section className="split-section split-section--reverse">
          <div className="split-section__inner">
            <div className="split-section__media" data-reveal>
              <LazyLoadImage src={products} alt="Eco-friendly" effect="blur" />
            </div>
            <div className="split-section__content" data-reveal>
              <h2>Eco-friendly and biodegradable</h2>
              <p>
                Bamboo products break down naturally without leaving harmful
                residues, helping reduce landfill waste.
              </p>
            </div>
          </div>
        </section>

        <section className="split-section">
          <div className="split-section__inner">
            <div className="split-section__media" data-reveal>
              <LazyLoadImage
                src={howStrongIsBamboo}
                alt="Bamboo strength"
                effect="blur"
              />
            </div>
            <div className="split-section__content" data-reveal>
              <h2>Versatility and strength</h2>
              <p>
                Bamboo is resilient, lightweight, and flexible, making it ideal
                for everyday products that need to last.
              </p>
            </div>
          </div>
        </section>

        <section className="split-section split-section--reverse">
          <div className="split-section__inner">
            <div className="split-section__media" data-reveal>
              <LazyLoadImage
                src={ecoFriendly}
                alt="Healthy living"
                effect="blur"
              />
            </div>
            <div className="split-section__content" data-reveal>
              <h2>Healthier living spaces</h2>
              <p>
                Bamboo has natural antibacterial properties and is less likely to
                retain odors or allergens.
              </p>
            </div>
          </div>
        </section>

        <section className="split-section">
          <div className="split-section__inner">
            <div className="split-section__media" data-reveal>
              <LazyLoadImage src={tb} alt="Aesthetic appeal" effect="blur" />
            </div>
            <div className="split-section__content" data-reveal>
              <h2>Aesthetic appeal</h2>
              <p>
                Bamboo adds warmth and elegance to any space, blending modern
                design with natural textures.
              </p>
            </div>
          </div>
        </section>

        <section className="split-section split-section--reverse">
          <div className="split-section__inner">
            <div className="split-section__media" data-reveal>
              <LazyLoadImage
                src={bambooFarmer}
                alt="Supporting communities"
                effect="blur"
              />
            </div>
            <div className="split-section__content" data-reveal>
              <h2>Supporting local communities</h2>
              <p>
                Bamboo sourcing and production create jobs for local farmers and
                artisans, strengthening rural economies.
              </p>
            </div>
          </div>
        </section>

        <CTASection
          title="Sustainable living starts here"
          description="Discover eco-friendly bamboo products that make a difference for the planet and local artisans."
          buttonText="Talk to Our Experts"
          variant="gradient"
          eyebrow="Bamboo benefits"
        />
      </div>
      <Footer />
    </>
  );
};

export default WhyBamboo;
