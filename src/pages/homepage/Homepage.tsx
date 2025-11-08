import Footer from '../common/footer/Footer';
import Header from '../common/header/Header';
import HeroSection from './hero-section/HeroSection';
import IntroductionSection from './introduction/Introduction';
import PlasticSaved from './PlasticSaved/PlasticSaved';
import ProductSection from './product-section/ProductSection';
import HomepageHelmet from './HomepageHelmet';
import CTASection from './cta-section/CTASection';

const Homepage = () => {
  return (
    <div>
      <HomepageHelmet />
      <Header />
      <HeroSection />
      <IntroductionSection />
      <ProductSection />
      <PlasticSaved />
      <CTASection 
        title="Let's Create a Sustainable Future Together"
        description="Whether you're a business looking for eco-friendly alternatives or an individual committed to reducing plastic waste, we'd love to hear from you."
        buttonText="Get in Touch Today"
        variant="default"
      />
      {/* <CTASection 
        title="Ready to Make the Switch?"
        description="Join thousands of eco-conscious individuals and businesses who have already made the switch to sustainable bamboo products. Let's work together for a plastic-free future."
        buttonText="Start Your Journey"
        variant="gradient"
      /> */}
      <Footer />
    </div>
  );
};

export default Homepage;
