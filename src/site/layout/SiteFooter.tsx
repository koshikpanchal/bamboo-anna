import { Link, NavLink, useLocation } from 'react-router-dom';
import './SiteFooter.scss';
import LogoColor from '../../assets/LogoColor.png';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const SiteFooter = () => {
  const { pathname } = useLocation();
  const hideFooterCta = new Set([
    '/',
    '/catalogue',
    '/products',
    '/collections',
    '/custom',
    '/companySynopsis',
    '/contact',
    '/contactUs',
  ]).has(pathname);

  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        {hideFooterCta ? (
          <div className="site-footer__brand site-footer__brand--solo">
            <img src={LogoColor} alt="Bamboo Anna" />
          </div>
        ) : (
          <div className="site-footer__top">
            <div className="site-footer__brand">
              <img src={LogoColor} alt="Bamboo Anna" />
              <p>
                Artisan-made bamboo essentials crafted in Rajasthan for hotels,
                homes, and conscious brands.
              </p>
            </div>
            <div className="site-footer__cta">
              <h3>Ready to build a custom bamboo range?</h3>
              <p>Share your requirements and our team will craft a proposal.</p>
              <Link to="/contact" className="btn btn--primary">
                Send Enquiry
              </Link>
            </div>
          </div>
        )}

        <div className="site-footer__grid">
          <div className="site-footer__col">
            <h4>Explore</h4>
            <NavLink to="/about-us">About</NavLink>
            <NavLink to="/catalogue">Catalogue</NavLink>
            <NavLink to="/impact">Impact</NavLink>
            <NavLink to="/custom">Custom</NavLink>
            <NavLink to="/gallery">Gallery</NavLink>
          </div>
          <div className="site-footer__col">
            <h4>Products</h4>
            <NavLink to="/catalogue">Dental care</NavLink>
            <NavLink to="/catalogue">Hospitality amenities</NavLink>
            <NavLink to="/catalogue">Gifting kits</NavLink>
            <NavLink to="/catalogue">Personal grooming</NavLink>
          </div>
          <div className="site-footer__col">
            <h4>Contact</h4>
            <p>
              <PhoneIcon /> +91-8000618916, +91-7014779733
            </p>
            <p>
              <EmailIcon /> support@bambooannaa.com
            </p>
            <p>
              <LocationOnIcon /> Plot 58/59, industrial area, 1st floor King Bakers building, Dahod road Banswara, Rajasthan
            </p>
          </div>
          <div className="site-footer__col">
            <h4>Follow</h4>
            <div className="site-footer__social">
              <a
                href="https://www.youtube.com/@BambooAnna"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
              >
                <YouTubeIcon />
              </a>
              <a
                href="https://www.instagram.com/bamboo.anna"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://www.linkedin.com/company/bamboo-anna"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <LinkedInIcon />
              </a>
            </div>
          </div>
        </div>

        <div className="site-footer__bottom">
          <span>Copyright {new Date().getFullYear()} Bamboo Anna.</span>
          <span>Crafted with local artisans in Rajasthan.</span>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
