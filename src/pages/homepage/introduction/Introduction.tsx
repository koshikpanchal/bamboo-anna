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
          पर्यावरण संरक्षणम्, With this motto our CEO & M.D. Mr. Anil Chauhan
          and Founder Mr. Sawan Vaishnav started their journey with Bamboo Anna
          in 2022. India is a country having largest population across globe and
          so the consumer of plastic materials in different usage of day to day
          life. Our focus is to serve and save mother nature and to aware our
          people to use alternative resources of plastic wherever it is
          possible. As we know human being starts his/her day with many
          different daily usage products mainly made of plastics in which
          toothbrush being commonly used, where toothbrush is having life span
          of 4 to 5 month after which it will end up in land field and oceans
          which hampers global eco system and environment. Our initiative is to
          target and replace mainly plastic toothbrush and other amenities of
          daily routine with eco friendly bamboo made products. With this we
          have been working in Indian market from past three years and have
          covered significant portion of Indian toothbrush market and we believe
          in future to do more better and make people aware to use eco friendly
          products (Bamboo Products) to replace plastic made toothbrush. We have
          associated with many startups and promoted them to grow in same
          journey of Bamboo products.
        </p>
        <Link to="/aboutUs" className="readMoreButton">
          Read More
        </Link>
      </div>
    </section>
  );
};

export default IntroductionSection;
