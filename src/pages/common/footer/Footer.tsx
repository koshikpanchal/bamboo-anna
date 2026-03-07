import './Footer.scss';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { NavLink } from 'react-router-dom';
import LogoColor from '../../../assets/LogoColor.png';
import CTAButton from '../cta-button/CTAButton';

const Footer = () => {
  return (
    <div className="footerWrapper">
      <footer className="footer">
        <div className="footerTop">
          <div className="footerBrand">
            <img src={LogoColor} alt="Bamboo Anna" />
            <p>
              We craft bamboo essentials with local artisans in Rajasthan,
              building products that are gentle on the planet and generous to the
              communities behind them.
            </p>
            <div className="footerBadges">
              <span className="pill">Local artisan network</span>
              <span className="pill">Plastic-free sourcing</span>
              <span className="pill">Custom brand-ready</span>
            </div>
          </div>
          <div className="footerCTA">
            <h3>Design your bamboo collection</h3>
            <p>
              From hotels to dental clinics, we deliver custom bamboo solutions
              with reliable timelines and thoughtful craftsmanship.
            </p>
            <CTAButton
              text="Start a project"
              variant="primary"
              size="medium"
              to="/contactUs"
            />
          </div>
        </div>

        <div className="footerBlocks">
          <div className="footerBlock">
            <div className="footerBlockContainor">
              <div className="footerBlockHeading">Quick Links</div>
              <ul className="footerBlockBody">
                <li>
                  <NavLink to="/" className="anchor">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/companySynopsis" className="anchor">
                    Company Synopsis
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/aboutUs" className="anchor">
                    About Us
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/photoGallery" className="anchor">
                    Photo Gallery
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contactUs" className="anchor">
                    Contact Us
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/sitemap" className="anchor">
                    Sitemap
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>

          <div className="footerBlock">
            <div className="footerBlockContainor">
              <div className="footerBlockHeading">Products</div>
              <ul className="footerBlockBody">
                <li>
                  <NavLink
                    to="/pdp?product=softBristleToothbrush"
                    className="anchor"
                  >
                    Bamboo Toothbrush
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/pdp?product=comb" className="anchor">
                    Wooden Comb
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/pdp?product=tongueCleaner" className="anchor">
                    Tongue cleaner
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/pdp?product=straw" className="anchor">
                    Straw
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/pdp?product=beardComb" className="anchor">
                    Beard Comb
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/pdp?product=razor" className="anchor">
                    Shaving Razor
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/pdp?product=pen" className="anchor">
                    Plantable Seed Pen & Pencil
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>

          <div className="footerBlock">
            <div className="footerBlockContainor">
              <div className="footerBlockHeading">Connect</div>
              <div className="socialMediaLinks">
                <a
                  href="https://www.youtube.com/@BambooAnna"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="socialLink"
                  aria-label="YouTube"
                >
                  <YouTubeIcon />
                </a>
                <a
                  href="https://www.instagram.com/bamboo.anna"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="socialLink"
                  aria-label="Instagram"
                >
                  <InstagramIcon />
                </a>
                <a
                  href="https://www.linkedin.com/company/bamboo-anna"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="socialLink"
                  aria-label="LinkedIn"
                >
                  <LinkedInIcon />
                </a>
              </div>
              <div className="footerBlockHeading">Talk To Us</div>
              <ul className="footerBlockBody">
                <li>
                  <PhoneIcon />{' '}
                  <span className="talkToUsLI">
                    +91-8000618916, +91-7014779733
                  </span>
                </li>
                <li>
                  <EmailIcon />{' '}
                  <span className="talkToUsLI">support@bambooannaa.com</span>
                </li>
                <li>
                  <LocationOnIcon />{' '}
                  <span className="talkToUsLI">
                    Plot 58/59, industrial area, 1st floor King Bakers building, Dahod road Banswara, Rajasthan
                  </span>
                </li>
              </ul>

              <div className="mapContainer">
                <iframe
                  className="mapIframe"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.1051262121267!2d74.44992621501598!3d23.546111484689246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967c7f6eb4b87e7%3A0xc26c73b1b849d0ff!2sBanswara%2C%20Rajasthan%20327001%2C%20India!5e0!3m2!1sen!2sus!4v1630927849010!5m2!1sen!2sus"
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
        <div className="footerCopyright">
          Copyright {new Date().getFullYear()} Bamboo Anna. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
