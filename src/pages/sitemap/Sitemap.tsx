import { Link } from 'react-router-dom';
import './Sitemap.scss'; // You can create a stylesheet for styling the sitemap
import { Navbar } from '../common/navbar/Navbar';
import Footer from '../common/footer/Footer';

const Sitemap = () => {
  return (
    <>
      <Navbar />
      <div className="sitemap-container">
        <h1>Sitemap</h1>
        <ul>
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
            <Link to="/pdp">Product Detail Page</Link>
          </li>
          <li>
            <Link to="/error">Error Page</Link>
          </li>
        </ul>
      </div>
      <Footer />
    </>
  );
};

export default Sitemap;
