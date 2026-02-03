import Footer from '../common/footer/Footer';
import Header from '../common/header/Header';
import HeroSection from './hero-section/HeroSection';
import IntroductionSection from './introduction/Introduction';
import PlasticSaved from './PlasticSaved/PlasticSaved';
import ProductSection from './product-section/ProductSection';
import HomepageHelmet from './HomepageHelmet';
import CTASection from './cta-section/CTASection';
import ArtisanSection from './artisan-section/ArtisanSection';

const Homepage = () => {
  return (
    <div>
      <HomepageHelmet />
      <Header />
      <HeroSection />
      <IntroductionSection />
      <ArtisanSection />
      <ProductSection />
      <PlasticSaved />
      <CTASection
        title="Let's Create a Sustainable Future Together"
        description="Whether you're a business looking for eco-friendly alternatives or an individual committed to reducing plastic waste, we'd love to hear from you."
        buttonText="Get in Touch Today"
        variant="default"
        eyebrow="Join the bamboo movement"
      />
      <Footer />
    </div>
  );
};

export default Homepage;
