import Footer from "../common/footer/Footer";
import Header from "../common/header/Header";
import HeroSection from "../common/hero-section/HeroSection";
import IntroductionSection from "../common/introduction/Introduction";
import PlasticSaved from "../common/PlasticSaved/PlasticSaved";
import ProductSection from "../common/product-section/ProductSection";

const Homepage = () => {
  return (
    <div>
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
