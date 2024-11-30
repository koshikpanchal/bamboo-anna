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
        <h2>Welcome to Bamboo Anna store</h2>
        <p>
          Bamboo Anna Enterprises, situated in Banswara, Rajasthan, is a
          pioneering venture established in 2018 by Mr. Sawan Vaishnav (Founder)
          & Mr. Anil Chauhan (CEO). As a forward-thinking Manufacturer and
          Supplier, the company has made a significant mark in the industry by
          offering a diverse range of eco-friendly products designed to promote
          sustainability and responsible consumer choices.At the heart of Bamboo
          Anna Enterprises' product line is a commitment to environmental
          consciousness.
        </p>
        <Link to="/aboutUs" className="readMoreButton">
          Read More
        </Link>
      </div>
    </section>
  );
};

export default IntroductionSection;
