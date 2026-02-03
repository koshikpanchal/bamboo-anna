import './CustomPage.scss';
import hotelAmenities from '../../../assets/HotelAmenities.webp';
import doctorProduct from '../../../assets/doctorProduct.webp';
import corporateGifting from '../../../assets/corporateGifting.webp';
import { Link } from 'react-router-dom';
import Seo from '../../seo/Seo';

const segments = [
  {
    title: 'Hospitality',
    copy: 'Guest kits, toothbrush sets, and in-room essentials.',
    image: hotelAmenities,
  },
  {
    title: 'Dental clinics',
    copy: 'Patient-friendly bamboo kits and hygiene packs.',
    image: doctorProduct,
  },
  {
    title: 'Corporate gifting',
    copy: 'Custom bamboo kits designed for brand impact.',
    image: corporateGifting,
  },
];

const CustomPage = () => {
  return (
    <div className="custom-page">
      <Seo
        title="Custom Bamboo Lines for Brands"
        description="Build branded bamboo kits for hospitality, dental clinics, and corporate gifting with flexible MOQs and reliable timelines."
        keywords={[
          'custom bamboo line',
          'branded bamboo kits',
          'hospitality kits',
          'dental clinic kits',
          'corporate gifting',
          'custom packaging',
        ]}
        canonicalPath="/custom"
        image="/LogoColor.png"
      />
      <section className="page-hero">
        <div className="page-hero__inner" data-reveal>
          <span className="chip">Custom</span>
          <h1>Build a branded bamboo line with us.</h1>
          <p>
            We help hospitality brands, clinics, and corporate teams create
            custom bamboo essentials with trusted supply timelines.
          </p>
        </div>
      </section>

      <section className="custom-segments section">
        <div className="section__inner">
          <div className="section__header" data-reveal>
            <h2>Who we serve</h2>
            <p>Flexible MOQs and curated packaging for every segment.</p>
          </div>
          <div className="custom-segments__grid">
            {segments.map((segment) => (
              <div key={segment.title} className="segment-card" data-reveal>
                <img src={segment.image} alt={segment.title} loading="lazy" />
                <div>
                  <h3>{segment.title}</h3>
                  <p>{segment.copy}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="custom-process section" data-reveal>
        <div className="section__inner custom-process__inner">
          <div>
            <span className="chip">Process</span>
            <h2>From brief to delivery in three steps.</h2>
          </div>
          <div className="custom-process__steps">
            <div>
              <strong>01</strong>
              <p>Share your product requirements and branding goals.</p>
            </div>
            <div>
              <strong>02</strong>
              <p>We prototype, confirm packaging, and lock timelines.</p>
            </div>
            <div>
              <strong>03</strong>
              <p>Production, quality checks, and delivery to your team.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="custom-cta section" data-reveal>
        <div className="section__inner custom-cta__inner">
          <div>
            <h2>Ready for a proposal?</h2>
            <p>
              Tell us about quantities, branding, and timelines. We will respond
              within 48 hours.
            </p>
          </div>
          <Link to="/contact" className="btn btn--primary">
            Start a custom order
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CustomPage;
