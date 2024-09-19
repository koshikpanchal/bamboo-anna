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
          {/* Quick Links Section */}
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

          {/* Products Section */}
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

          {/* Talk To Us Section */}
          <div className="footerBlock">
            <div className="footerBlockContainor">
              <div className="footerBlockHeading">Talk To Us</div>
              <ul className="footerBlockBody">
                <li>
                  <PhoneIcon />{" "}
                  <span className="talkToUsLI">
                    +91-8000618916, +91-9887392445
                  </span>
                </li>
                <li>
                  <EmailIcon />{" "}
                  <span className="talkToUsLI">bambooannaa@gmail.com</span>
                </li>
                <li>
                  <LocationOnIcon />{" "}
                  <span className="talkToUsLI">Banswara, Rajasthan</span>
                </li>
              </ul>

              {/* Google Map Section */}
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
      </footer>
    </div>
  );
};

export default Footer;
