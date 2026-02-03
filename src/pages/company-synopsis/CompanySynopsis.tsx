import { LazyLoadImage } from 'react-lazy-load-image-component';
import Footer from '../common/footer/Footer';
import Header from '../common/header/Header';
import 'react-lazy-load-image-component/src/effects/blur.css';
import doctorProduct from '../../assets/doctorProduct.webp';
import brush from '../../assets/dentalCare/P1030940-min.jpg';
import HotelAmenities from '../../assets/HotelAmenities.webp';
import corporateGifting from '../../assets/corporateGifting.webp';
import './CompanySynopsis.scss';
import CompanySynopsisHelmet from './CompanySynopsisHelmet';

const CompanySynopsis = () => {
  const redirectLink =
    'https://catalog.weblink.in/dynamic-files/ei/other-files/12880115/company-overview-1.pdf';

  return (
    <>
      <CompanySynopsisHelmet />
      <Header />
      <div className="company-synopsis-page">
        <section className="page-hero">
          <div className="page-hero__inner" data-reveal>
            <span className="eyebrow">Company synopsis</span>
            <h1 className="page-hero__title">Bamboo solutions for every sector</h1>
            <p className="page-hero__subtitle">
              We design custom bamboo products for online sellers, dental
              clinics, hospitality brands, and corporate gifting programs.
            </p>
          </div>
        </section>

        <section className="split-section">
          <div className="split-section__inner">
            <div className="split-section__media" data-reveal>
              <LazyLoadImage src={brush} alt="Online sellers" effect="blur" />
            </div>
            <div className="split-section__content" data-reveal>
              <h2>Online sellers</h2>
              <p>
                We partner with ecommerce brands to create customizable bamboo
                goods with premium packaging and reliable delivery.
              </p>
            </div>
          </div>
        </section>

        <section className="split-section split-section--reverse">
          <div className="split-section__inner">
            <div className="split-section__media" data-reveal>
              <LazyLoadImage src={doctorProduct} alt="Dentist" effect="blur" />
            </div>
            <div className="split-section__content" data-reveal>
              <h2>Dentist</h2>
              <p>
                Bamboo dental kits and accessories provide a sustainable upgrade
                for clinics looking to improve patient care.
              </p>
            </div>
          </div>
        </section>

        <section className="split-section">
          <div className="split-section__inner">
            <div className="split-section__media" data-reveal>
              <LazyLoadImage src={HotelAmenities} alt="Hotel amenities" effect="blur" />
            </div>
            <div className="split-section__content" data-reveal>
              <h2>Hotel amenities</h2>
              <p>
                Replace single-use plastics with bamboo essentials that elevate
                guest experiences while meeting sustainability goals.
              </p>
            </div>
          </div>
        </section>

        <section className="split-section split-section--reverse">
          <div className="split-section__inner">
            <div className="split-section__media" data-reveal>
              <LazyLoadImage src={corporateGifting} alt="Corporate gifting" effect="blur" />
            </div>
            <div className="split-section__content" data-reveal>
              <h2>Corporate gifting</h2>
              <p>
                Offer elegant bamboo gifts that align with corporate values and
                leave a lasting impression.
              </p>
            </div>
          </div>
        </section>

        <section className="company-synopsis__cta section">
          <div className="section__inner" data-reveal>
            <h2>Still want to learn more?</h2>
            <p>
              Download the detailed company overview for product catalogs,
              manufacturing capacity, and collaboration options.
            </p>
            <a
              className="company-synopsis__button"
              href={redirectLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              View company profile
            </a>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default CompanySynopsis;
