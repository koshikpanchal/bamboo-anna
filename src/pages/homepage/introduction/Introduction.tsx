import './Introduction.scss';
import officeImage from '../../../assets/Homepage-image.jpg';
import { Link } from 'react-router-dom';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const IntroductionSection = () => {
  return (
    <section className="introductionSection">
      <div className="introImage">
        <PhotoProvider>
          <PhotoView src={officeImage}>
            <img src={officeImage} alt="Our-Founders" />
          </PhotoView>
        </PhotoProvider>
      </div>
      <div className="introText">
        <h2>Welcome to Bamboo Anna</h2>
        <p>
          पर्यावरण संरक्षण (Environmental Conservation). This is the driving force behind Bamboo Anna, founded in 2022 by CEO & M.D. Mr. Anil Chauhan and Founder Mr. Sawan Vaishnav. Our world faces a critical challenge: the massive consumption of plastics in daily routines. Our mission is to actively protect Mother Nature and provide viable, eco-friendly alternatives to plastic wherever possible. We focus on replacing short-lifespan plastic products—like the conventional toothbrush—that ultimately pollute our land and oceans, disrupting the global ecosystem.
        </p>
        <p>We are committed to helping businesses and consumers transition to sustainable living. We develop and promote high-quality eco-friendly bamboo products designed to replace plastic amenities in your daily routine. We believe in providing better choices and making people aware of sustainable options. We actively partner with startups and organizations worldwide, inviting them to join our growing global movement to champion environmentally conscious products and work towards a plastic-free future.</p>
        <Link to="/aboutUs" className="readMoreButton">
          Read More
        </Link>
      </div>
    </section>
  );
};

export default IntroductionSection;
