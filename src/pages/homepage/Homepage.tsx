import Footer from '../common/footer/Footer';
import Header from '../common/header/Header';
import HeroSection from './hero-section/HeroSection';
import IntroductionSection from './introduction/Introduction';
import PlasticSaved from './PlasticSaved/PlasticSaved';
import ProductSection from './product-section/ProductSection';
import HomepageHelmet from './HomepageHelmet';

const Homepage = () => {
  return (
    <div>
      <HomepageHelmet />
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
