import "./HeroSection.scss";
import comb_brush from "../../../assets/comb/P1040066-min.jpg";
import brush from "../../../assets/dentalCare/P1030943-min.jpg";
import tb from "../../../assets/razor/P1030998-min.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="hero-container">
      <div className="hero-image-container">
        <Link
          to="/pdp?product=softBristleToothbrush"
          className="hero-image-wrapper"
        >
          <LazyLoadImage src={brush} alt="Hero 2" className="hero-image" />
          <div className="hero-text">Feel the Nature</div>
          <p className="hero-text-p">
            Brush's frames are made from sustainable harvested Bamboo
          </p>
        </Link>
        <Link to="/pdp?product=comb" className="hero-image-wrapper">
          <LazyLoadImage src={comb_brush} alt="Hero 1" className="hero-image" />``
          <div className="hero-text">Sustainable Source</div>
          <p className="hero-text-p">
            Promote Healty hair growth, used for beard and hair, with convenient
            size
          </p>
        </Link>
        <Link to="/pdp?product=razor" className="hero-image-wrapper">
          <LazyLoadImage src={tb} alt="Hero 3" className="hero-image" />
          <div className="hero-text">Strength & Flexibility</div>
          <p className="hero-text-p">
            Embrace the strength and flexibility of bamboo with worry free
            shaving razors
          </p>
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
