import "./Navbar.scss";
import LogoColor from "../../../assets/LogoColor.png";
import SearchIcon from "@mui/icons-material/Search";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="topBar">
      <div className="leftButtons">
        <nav className="navbar">
          <ul className="navbar-ul">
            <li className="option">
              <NavLink
                className={(e) => (e.isActive ? "activeAnchor" : "anchor")}
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="option">
              <NavLink
                className={(e) => (e.isActive ? "activeAnchor" : "anchor")}
                to="/products"
              >
                Products
              </NavLink>
            </li>
            <li className="option">
              <NavLink
                className={(e) => (e.isActive ? "activeAnchor" : "anchor")}
                to="/companySynopsis"
              >
                Company Synopsis
              </NavLink>
            </li>
            <li className="option">
              <NavLink
                className={(e) => (e.isActive ? "activeAnchor" : "anchor")}
                to="/aboutUs"
              >
                About Us
              </NavLink>
            </li>
            <li className="option">
              <NavLink
                className={(e) => (e.isActive ? "activeAnchor" : "anchor")}
                to="/contactUs"
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div className="middleLogo">
        <div className="headerLogo">
          <NavLink to="/">
            <img src={LogoColor} width="140" />
          </NavLink>
        </div>
      </div>
      <div className="rightButtons">
        <div className="headerRrightButton">
          <a className="anchor">
            <SearchIcon />
          </a>
        </div>
        <div className="headerRrightButton">
          <a className="anchor">
            <DarkModeIcon />
          </a>
        </div>
      </div>
    </div>
  );
};

export { Navbar };
