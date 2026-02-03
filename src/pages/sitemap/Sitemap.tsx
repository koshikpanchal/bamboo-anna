import { Link } from 'react-router-dom';
import './Sitemap.scss';
import Header from '../common/header/Header';
import Footer from '../common/footer/Footer';

const Sitemap = () => {
  return (
    <>
      <Header />
      <div className="sitemap-page">
        <section className="page-hero">
          <div className="page-hero__inner" data-reveal>
            <span className="eyebrow">Sitemap</span>
            <h1 className="page-hero__title">Explore Bamboo Anna</h1>
            <p className="page-hero__subtitle">
              Quick access to our pages, collections, and company information.
            </p>
          </div>
        </section>
        <section className="sitemap-section" data-reveal>
          <div className="section__inner">
            <ul className="sitemap-list">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/aboutUs">About Us</Link>
              </li>
              <li>
                <Link to="/companySynopsis">Company Synopsis</Link>
              </li>
              <li>
                <Link to="/contactUs">Contact Us</Link>
              </li>
              <li>
                <Link to="/products">Products</Link>
              </li>
              <li>
                <Link to="/whyBamboo">Why Bamboo</Link>
              </li>
              <li>
                <Link to="/photoGallery">Photo Gallery</Link>
              </li>
              <li>
                <Link to="/pdp">Product Detail Page</Link>
              </li>
            </ul>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Sitemap;
