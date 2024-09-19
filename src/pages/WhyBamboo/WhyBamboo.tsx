import "./WhyBamboo.scss";
import bambooSustainability from "../../assets/bambooSustainability.webp";
import howStrongIsBamboo from "../../assets/how-strong-is-bamboo.webp";
import ecoFriendly from "../../assets/eco-friendly-environment-bamboo-tube-straws.jpg";
import products from "../../assets/bamboo-products.jpg";
import bambooFarmer from "../../assets/bambooFarmer.jpg";
import tb from "../../assets/razor/P1030998-min.jpg";
import Footer from "../common/footer/Footer";
import Header from "../common/header/Header";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const WhyBamboo = () => {
  return (
    <>
      <Header />
      <div className="why-bamboo-container">
        <section className="intro-section">
          <h1>Why Bamboo</h1>
          <p>
            Bamboo is not just a plant; it's a powerful ally in our fight
            against climate change. Its rapid growth cycle, often reaching full
            maturity in just 3-5 years, makes it an incredibly renewable
            resource.
            <br />
            <br />
            By choosing bamboo, you’re supporting a product that replenishes
            itself quickly, reducing the pressure on forests and helping to
            preserve biodiversity.
          </p>
        </section>

        <section className="mission-section">
          <div className="mission-image-container">
            <LazyLoadImage
              src={bambooSustainability}
              alt="Our Mission"
              effect="blur"
            />
          </div>
          <div className="mission-content">
            <h2>Sustainability at Its Best</h2>
            <p>
              Bamboo is not just a plant; it's a powerful ally in our fight
              against climate change. Its rapid growth cycle—often reaching full
              maturity in just 3-5 years—makes it an incredibly renewable
              resource. By choosing bamboo, you’re supporting a product that
              replenishes itself quickly, reducing the pressure on forests and
              helping to preserve biodiversity.
            </p>
          </div>
        </section>

        <section className="values-section">
          <div className="values-content">
            <h2>Eco-Friendly and Biodegradable</h2>
            <p>
              Unlike traditional materials, bamboo is naturally biodegradable.
              This means that products made from bamboo won't contribute to
              landfill waste when disposed of. Its low impact on the environment
              makes it an ideal choice for those looking to make greener choices
              in their daily lives.
            </p>
          </div>
          <div className="values-image-container">
            <LazyLoadImage src={products} alt="Our Values" effect="blur" />
          </div>
        </section>

        <section className="mission-section">
          <div className="mission-image-container">
            <LazyLoadImage
              src={howStrongIsBamboo}
              alt="Our Values"
              effect="blur"
            />
          </div>
          <div className="mission-content">
            <h2>Versatility and Strength</h2>
            <p>
              Bamboo is not only strong but also incredibly versatile. From
              furniture and flooring to utensils and packaging, bamboo can be
              crafted into a wide array of products. Its natural resilience and
              flexibility ensure durability and quality, making it a practical
              choice for many applications.
            </p>
          </div>
        </section>
        <section className="values-section">
          <div className="values-content">
            <h2>Healthier Living Spaces</h2>
            <p>
              Bamboo has natural antibacterial properties that help to keep your
              living spaces cleaner and healthier. It’s also less likely to
              harbor dust mites and other allergens, contributing to a more
              hygienic environment for you and your loved ones.
            </p>
          </div>
          <div className="values-image-container">
            <LazyLoadImage src={ecoFriendly} alt="Our Values" effect="blur" />
          </div>
        </section>

        <section className="mission-section">
          <div className="mission-image-container">
            <LazyLoadImage src={tb} alt="Our Values" effect="blur" />
          </div>
          <div className="mission-content">
            <h2>Aesthetic Appeal</h2>
            <p>
              With its sleek, modern look and smooth texture, bamboo adds a
              touch of elegance to any setting. Whether you're outfitting your
              home with stylish furniture or choosing eco-friendly packaging,
              bamboo's natural beauty enhances the aesthetic of your products
              and spaces.
            </p>
          </div>
        </section>

        <section className="values-section">
          <div className="values-content">
            <h2>Supporting Local Communities</h2>
            <p>
              Many bamboo products are sourced from small-scale farmers and
              artisans, supporting local economies and fostering fair trade
              practices. By choosing bamboo, you’re helping to create jobs and
              improve livelihoods in communities around the world.
            </p>
          </div>
          <div className="values-image-container">
            <LazyLoadImage src={bambooFarmer} alt="Our Values" effect="blur" />
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default WhyBamboo;
