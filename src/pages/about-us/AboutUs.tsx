import "./AboutUs.scss";
import teamimage from "../../assets/team_image.jpg";
import products from "../../assets/bamboo-products.jpg";
import organicproducts from "../../assets/organicproducts1.jpg";
import Footer from "../common/footer/Footer";
import Header from "../common/header/Header";

const AboutUs = () => {
  return (
    <>
      <Header />
      <div className="about-us-container">
        <section className="intro-section">
          <h1>About Us</h1>
          <p>
            Welcome to Bamboo Anna Enterprises! We are dedicated to providing
            the best Bamboo products with a commitment to quality,
            sustainability, and innovation.
          </p>
        </section>

        <section className="mission-section">
          <div className="mission-image-container">
            <img src={teamimage} alt="Our Mission" />
          </div>
          <div className="mission-content">
            <h2>Our Location and Founder</h2>
            <p>
              Bamboo Anna Enterprises, situated in Banswara, Rajasthan, is a
              pioneering venture established in 2018 by Mr. Sawan Vaishnav
              (Founder) & Mr. Anil Chauhan (CEO). As a forward-thinking
              Manufacturer and Supplier, the company has made a significant mark
              in the industry by offering a diverse range of eco-friendly
              products designed to promote sustainability and responsible
              consumer choices.
            </p>
          </div>
        </section>

        <section className="values-section">
          <div className="values-content">
            <h2>Our Products</h2>
            <p>
              At the heart of Bamboo Anna Enterprises' product line is a
              commitment to environmental consciousness. The company specializes
              in the production of Bamboo Toothbrush, Shaving Razors, Straws,
              Wooden Combs, Dental Kits, and Plantable Seed Pens and Pencils.
              These offerings reflect the company's dedication to providing
              alternatives that are both functional and environmentally
              responsible.
            </p>
          </div>
          <div className="values-image-container">
            <img src={products} alt="Our Values" />
          </div>
        </section>

        <section className="mission-section">
          <div className="mission-image-container">
            <img src={organicproducts} alt="Our Values" />
          </div>
          <div className="mission-content">
            <h2>Our Values</h2>
            <p>
              <li>
                Quality: We never compromise on the quality of our products.
              </li>
              <li>
                Sustainability: We are committed to reducing our environmental
                footprint.
              </li>
              <li>
                Innovation: We constantly seek new ways to improve our products
                and services.
              </li>
              <li>Customer Focus: Your satisfaction is our top priority.</li>
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
