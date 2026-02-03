import './Navbar.scss';
import LogoColor from '../../../assets/LogoColor.png';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { NavLink } from 'react-router-dom';
import { LightMode } from '@mui/icons-material';
import { useTheme } from '../../context/ThemeContext';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import CTAButton from '../cta-button/CTAButton';

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="topBar">
      <NavLink to="/" className="brand">
        <img src={LogoColor} width="130" alt="Bamboo Anna logo" />
        <div className="brand-text">
          <span className="brand-name">Bamboo Anna</span>
          <span className="brand-tagline">Artisan-made bamboo essentials</span>
        </div>
      </NavLink>

      <button
        className="hamburger-menu"
        onClick={toggleMenu}
        aria-expanded={isMenuOpen}
        aria-label="Toggle navigation"
      >
        {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
      </button>

      <div className={`nav-wrapper ${isMenuOpen ? 'nav-wrapper--open' : ''}`}>
        <nav className="navbar">
          <ul className="navbar-ul" onClick={() => setIsMenuOpen(false)}>
            <li className="option">
              <NavLink
                className={(e) => (e.isActive ? 'activeAnchor' : 'anchor')}
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="option">
              <NavLink
                className={(e) => (e.isActive ? 'activeAnchor' : 'anchor')}
                to="/products"
              >
                Products
              </NavLink>
            </li>
            <li className="option">
              <NavLink
                className={(e) => (e.isActive ? 'activeAnchor' : 'anchor')}
                to="/whyBamboo"
              >
                Why Bamboo?
              </NavLink>
            </li>
            <li className="option">
              <NavLink
                className={(e) => (e.isActive ? 'activeAnchor' : 'anchor')}
                to="/companySynopsis"
              >
                Company Synopsis
              </NavLink>
            </li>
            <li className="option">
              <NavLink
                className={(e) => (e.isActive ? 'activeAnchor' : 'anchor')}
                to="/photoGallery"
              >
                Photo Gallery
              </NavLink>
            </li>
            <li className="option">
              <NavLink
                className={(e) => (e.isActive ? 'activeAnchor' : 'anchor')}
                to="/aboutUs"
              >
                About Us
              </NavLink>
            </li>
            <li className="option">
              <NavLink
                className={(e) => (e.isActive ? 'activeAnchor' : 'anchor')}
                to="/contactUs"
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="nav-actions">
          <CTAButton
            text="Wholesale Enquiry"
            variant="outline"
            size="small"
            to="/contactUs"
            className="nav-cta"
          />
          <button className="themeToggleButton" onClick={toggleTheme}>
            {isDarkMode ? <DarkModeIcon /> : <LightMode />}
            <span className="mode_name">
              {isDarkMode ? 'Dark mode' : 'Light mode'}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export { Navbar };
