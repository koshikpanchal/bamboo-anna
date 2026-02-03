import './Introduction.scss';
import officeImage from '../../../assets/Homepage-image.jpg';
import { Link } from 'react-router-dom';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import CTAButton from '../../common/cta-button/CTAButton';

const IntroductionSection = () => {
  return (
    <section className="introductionSection section">
      <div className="section__inner introductionSection__inner">
        <div className="introText" data-reveal>
          <span className="eyebrow">Our story</span>
          <h2>Rooted in Banswara, built with artisan partners.</h2>
          <p>
            Bamboo Anna was founded in 2022 to replace short-lived plastic
            products with sustainable bamboo alternatives. We believe in design
            that respects nature while creating steady livelihoods for local
            makers.
          </p>
          <p>
            We collaborate with bamboo farmers and craftspeople across Rajasthan
            to deliver durable essentials for homes, hotels, dental care, and
            gifting programs. Every order supports a growing artisan network.
          </p>
          <div className="introHighlights">
            <div className="introCard">
              <h3>Artisan-first</h3>
              <p>
                We co-design with local makers and ensure fair wages and steady
                production cycles.
              </p>
            </div>
            <div className="introCard">
              <h3>Plastic-free focus</h3>
              <p>
                Bamboo replaces high-waste items like toothbrushes, razors, and
                amenities.
              </p>
            </div>
            <div className="introCard">
              <h3>Custom-ready</h3>
              <p>
                We personalize for hospitality, dental clinics, and corporate
                gifting.
              </p>
            </div>
          </div>
          <div className="introActions">
            <CTAButton text="Read our story" variant="secondary" size="medium" to="/aboutUs" />
            <Link to="/companySynopsis" className="introLink">
              See company profile
            </Link>
          </div>
        </div>

        <div className="introImage" data-reveal>
          <PhotoProvider>
            <PhotoView src={officeImage}>
              <img src={officeImage} alt="Our founders" />
            </PhotoView>
          </PhotoProvider>
          <div className="introImageBadge">
            <span>Since 2018</span>
            <p>Crafting bamboo essentials in Rajasthan</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroductionSection;
