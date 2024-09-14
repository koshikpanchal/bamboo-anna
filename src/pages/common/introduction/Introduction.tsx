import "./Introduction.scss";
import Straw from "../../../assets/STRAWS-min.jpg";
import { Link } from "react-router-dom";

const IntroductionSection = () => {
  return (
    <section className="introductionSection">
      <div className="introImage">
        <img src={Straw} alt="Introduction" />
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
