import { Helmet } from "react-helmet";
import Footer from "../common/footer/Footer";
import Header from "../common/header/Header";
import HeroSection from "../common/hero-section/HeroSection";
import IntroductionSection from "../common/introduction/Introduction";
import PlasticSaved from "../common/PlasticSaved/PlasticSaved";
import ProductSection from "../common/product-section/ProductSection";
import brush from "../../assets/dentalCare/P1030943-min.jpg";

const Homepage = () => {
  return (
    <div>
      <Helmet>
        <title>Welcome to Bamboo Anna - Eco-friendly Bamboo Products</title>
        <meta
          name="description"
          content="Discover sustainable and eco-friendly bamboo products at Bamboo Anna. We offer a wide range of bamboo-based alternatives for daily use, helping you reduce plastic waste."
        />
        <meta
          name="keywords"
          content="bamboo products, eco-friendly, sustainable, bamboo comb, bamboo toothbrush, bamboo razors"
        />
        <meta
          property="og:title"
          content="Bamboo Anna - Eco-friendly Bamboo Products"
        />
        <meta
          property="og:description"
          content="Explore our selection of eco-friendly bamboo products, designed to help reduce plastic waste and promote sustainability."
        />
        <meta property="og:image" content={brush} />
        <meta property="og:url" content="https://www.bambooanna.com" />
        <link rel="canonical" href="https://www.bambooanna.com" />
      </Helmet>
      <Header />
      <HeroSection />
      <IntroductionSection />
      <ProductSection />
      <PlasticSaved />
      <Footer />
    </div>
  );
};

export default Homepage;
