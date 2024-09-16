import { LazyLoadImage } from "react-lazy-load-image-component";
import Footer from "../common/footer/Footer";
import Header from "../common/header/Header";
import "react-lazy-load-image-component/src/effects/blur.css";
import doctorProduct from "../../assets/doctorProduct.webp";
import onlineSell from "../../assets/P1030940-min.jpg";
import HotelAmenities from "../../assets/HotelAmenities.webp";
import corporateGifting from "../../assets/corporateGifting.webp";
import "./CompanySynopsis.scss";

const CompanySynopsis = () => {
  const redirectLink =
    "https://catalog.weblink.in/dynamic-files/ei/other-files/12880115/company-overview-1.pdf";

  return (
    <>
      <Header />
      <div className="company-synopsis-container">
        <section className="intro-section">
          <h1>Company Synopsis</h1>
          <p>Our Journey in Transforming Bamboo into Innovative Solutions</p>
          <p>
            We can create customized products for your company/organisation logo
          </p>
        </section>

        <section className="mission-section">
          <div className="mission-image-container">
            <LazyLoadImage src={onlineSell} alt="Our Mission" effect="blur" />
          </div>
          <div className="mission-content">
            <h2>Online Sellers</h2>
            <p>
              At Bamboo Anna Enterprises, we have successfully partnered with a
              variety of online sellers to provide customized bamboo products.
              Our eco-friendly items are tailored to meet the specific needs of
              eCommerce platforms, offering unique customization options that
              enhance the product appeal and cater to diverse customer
              preferences.
            </p>
          </div>
        </section>

        <section className="values-section">
          <div className="values-content">
            <h2>Dentist</h2>
            <p>
              We have a proven track record of working with dental care
              providers to supply bamboo-based products that align with their
              practice's needs. Our custom solutions include a range of
              eco-friendly dental items designed to offer a sustainable
              alternative while meeting the specific requirements of dental
              professionals.
            </p>
          </div>
          <div className="values-image-container">
            <LazyLoadImage src={doctorProduct} alt="Our Values" effect="blur" />
          </div>
        </section>

        <section className="mission-section">
          <div className="mission-image-container">
            <LazyLoadImage
              src={HotelAmenities}
              alt="Our Mission"
              effect="blur"
            />
          </div>
          <div className="mission-content">
            <h2>Hotel Amenities</h2>
            <p>
              Our bamboo products are a popular choice for hotels seeking to
              enhance their sustainability efforts. We provide customized bamboo
              amenities that add a touch of eco-friendly luxury to guest
              experiences, including a range of products designed to meet the
              high standards of the hospitality industry.
            </p>
          </div>
        </section>

        <section className="values-section">
          <div className="values-content">
            <h2>Corporate Giftings</h2>
            <p>
              Bamboo Anna Enterprises offers bespoke bamboo gift solutions for
              corporate clients. Our custom-designed gifts serve as elegant,
              eco-conscious tokens of appreciation that align with corporate
              sustainability goals and leave a lasting impression on recipients.
            </p>
          </div>
          <div className="values-image-container">
            <LazyLoadImage
              src={corporateGifting}
              alt="Our Values"
              effect="blur"
            />
          </div>
        </section>
      </div>
      <section className="learnMoreSection">
        <h2>Still wants to learn more</h2>
        <a className="clickMeButton" href={redirectLink} target="_blank">
          Click me
        </a>
      </section>
      <Footer />
    </>
  );
};

export default CompanySynopsis;
