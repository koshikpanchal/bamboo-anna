import "./Footer.scss";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footerWrapper">
      <footer className="footer">
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
                    Comapny Synopsis
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/aboutUs" className="anchor">
                    About Us
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contactUs" className="anchor">
                    Contact Us
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/testimonial" className="anchor">
                    Testimonial
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
                  <NavLink to="/" className="anchor">
                    Bamboo Toothbrush
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/" className="anchor">
                    Wooden Comb
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/" className="anchor">
                    Dental Kit
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/" className="anchor">
                    Wooden Back Scratcher
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/" className="anchor">
                    Straw
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/" className="anchor">
                    Bamboo tongue cleaner
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/" className="anchor">
                    Shaving Razor
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/" className="anchor">
                    Plantable Seed Pen & Pencil
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="footerBlock">
            <div className="footerBlockContainor">
              <div className="footerBlockHeading">Talk To Us</div>
              <ul className="footerBlockBody">
                <li>
                  <PhoneIcon />
                  <span className="talkToUsLI">
                    +91-8000618916, +91-9887392445
                  </span>
                </li>
                <li>
                  <EmailIcon />
                  <span className="talkToUsLI">bambooannaa@gmail.com</span>
                </li>
                <li>
                  <LocationOnIcon />
                  <span className="talkToUsLI">Banswara, Rajasthan</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
