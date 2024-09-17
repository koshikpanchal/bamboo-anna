import "./Navbar.scss";
import LogoColor from "../../../assets/LogoColor.png";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { NavLink } from "react-router-dom";
import { LightMode } from "@mui/icons-material";
import { useTheme } from "../../context/ThemeContext";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="topBar">
      {/* Logo on the left */}
      <div className="leftLogo">
        <NavLink to="/">
          <img src={LogoColor} width="140" alt="Logo" />
        </NavLink>
      </div>
      {/* Hamburger Menu */}
      <button className="hamburger-menu" onClick={toggleMenu}>
        {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
      </button>

      {/* Navbar in the middle */}
      <nav className={`navbar${isMenuOpen ? "open" : ""}`}>
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
              to="/whyBamboo"
            >
              Why Bamboo?
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
      {/* logo in middle for mobile */}
      <div className="middleLogo">
        <NavLink to="/">
          <img src={LogoColor} width="140" alt="Logo" />
        </NavLink>
      </div>

      {/* Right button */}
      <div className="rightButtons">
        <button className="themeToggleButton" onClick={toggleTheme}>
          {isDarkMode ? <DarkModeIcon /> : <LightMode />}
        </button>
      </div>
    </div>
  );
};

export { Navbar };
