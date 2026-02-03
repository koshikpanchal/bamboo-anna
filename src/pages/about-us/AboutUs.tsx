import './AboutUs.scss';
import teamimage from '../../assets/team_image.jpg';
import products from '../../assets/bamboo-products.jpg';
import organicproducts from '../../assets/organicproducts1.jpg';
import Footer from '../common/footer/Footer';
import Header from '../common/header/Header';
import { Helmet } from 'react-helmet';

const AboutUs = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Bamboo Anna Enterprises</title>
        <meta
          name="description"
          content="Learn about Bamboo Anna Enterprises, our commitment to eco-friendly products, sustainability, and innovation. Meet our founders and explore our wide range of bamboo products."
        />
        <meta
          name="keywords"
          content="Bamboo Anna, eco-friendly products, sustainable bamboo products, bamboo toothbrush, bamboo razors, wooden combs, plantable seed pens, eco-conscious"
        />
        <meta property="og:title" content="About Us | Bamboo Anna Enterprises" />
        <meta
          property="og:description"
          content="Bamboo Anna Enterprises, based in Banswara, Rajasthan, offers a range of eco-friendly bamboo products, including toothbrushes, razors, wooden combs, and more. Learn about our values and dedication to sustainability."
        />
      </Helmet>
      <Header />
      <div className="about-us-page">
        <section className="page-hero">
          <div className="page-hero__inner" data-reveal>
            <span className="eyebrow">Our craft</span>
            <h1 className="page-hero__title">About Bamboo Anna</h1>
            <p className="page-hero__subtitle">
              Rooted in Banswara, Rajasthan, we build bamboo essentials that
              honor local artisans and reduce plastic waste.
            </p>
          </div>
        </section>

        <section className="split-section">
          <div className="split-section__inner">
            <div className="split-section__media" data-reveal>
              <img src={teamimage} alt="Our mission" />
            </div>
            <div className="split-section__content" data-reveal>
              <h2>Our location and founders</h2>
              <p>
                Bamboo Anna Enterprises was established in 2018 by Mr. Sawan
                Vaishnav (Founder) and Mr. Anil Chauhan (CEO). Based in Banswara,
                we are a manufacturer and supplier building a reliable artisan
                network for sustainable bamboo products.
              </p>
            </div>
          </div>
        </section>

        <section className="split-section split-section--reverse">
          <div className="split-section__inner">
            <div className="split-section__media" data-reveal>
              <img src={products} alt="Our products" />
            </div>
            <div className="split-section__content" data-reveal>
              <h2>Our products</h2>
              <p>
                We specialize in bamboo toothbrushes, razors, straws, wooden
                combs, dental kits, and plantable seed pens and pencils. Each
                item replaces plastic-heavy alternatives with an eco-friendly
                upgrade.
              </p>
            </div>
          </div>
        </section>

        <section className="split-section">
          <div className="split-section__inner">
            <div className="split-section__media" data-reveal>
              <img src={organicproducts} alt="Our values" />
            </div>
            <div className="split-section__content" data-reveal>
              <h2>Our values</h2>
              <ul className="values-list">
                <li>Quality: We never compromise on durability or finish.</li>
                <li>Sustainability: We reduce waste and respect natural cycles.</li>
                <li>Innovation: We keep improving materials and processes.</li>
                <li>Customer Focus: Your satisfaction guides every order.</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
