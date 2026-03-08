import { NavLink } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import LogoColor from '../../assets/LogoColor.png';
import './SiteHeader.scss';
import { useTheme } from '../theme/ThemeProvider';
import { themeOptions, ThemeKey } from '../theme/themes';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about-us' },
  { label: 'Catalogue', to: '/catalogue' },
  { label: 'Impact', to: '/impact' },
  { label: 'Custom', to: '/custom' },
  { label: 'Awards & Gallery', to: '/gallery' },
];

const iconForTheme = (key: ThemeKey) => {
  switch (key) {
    case 'midnight':
      return <DarkModeOutlinedIcon fontSize="small" />;
    case 'ocean':
      return <WbSunnyOutlinedIcon fontSize="small" />;
    default:
      return <WbSunnyOutlinedIcon fontSize="small" />;
  }
};

const SiteHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isThemeOpen, setIsThemeOpen] = useState(false);
  const themeMenuRef = useRef<HTMLDivElement | null>(null);
  const { theme, setTheme } = useTheme();

  const handleClose = () => setIsOpen(false);

  useEffect(() => {
    if (!isThemeOpen) return;

    const handlePointerDown = (event: MouseEvent) => {
      if (!themeMenuRef.current) return;
      if (!themeMenuRef.current.contains(event.target as Node)) {
        setIsThemeOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsThemeOpen(false);
    };

    window.addEventListener('mousedown', handlePointerDown);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('mousedown', handlePointerDown);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isThemeOpen]);

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <NavLink to="/" className="site-brand" onClick={handleClose}>
          <img src={LogoColor} alt="Bamboo Anna" />
        </NavLink>

        <button
          className="site-menu__toggle"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="site-menu__line"></span>
          <span className="site-menu__line"></span>
        </button>

        <nav className={`site-nav ${isOpen ? 'is-open' : ''}`}>
          <div className="site-nav__links" onClick={handleClose}>
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  isActive ? 'site-link is-active' : 'site-link'
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
          <div className="site-nav__cta">
            <div className="theme-picker" ref={themeMenuRef}>
              <button
                type="button"
                className="theme-picker__button"
                onClick={() => setIsThemeOpen((prev) => !prev)}
                aria-expanded={isThemeOpen}
                aria-haspopup="menu"
              >
                {iconForTheme(theme)}
                <span className="theme-picker__label">Theme</span>
              </button>
              <div
                className={`theme-picker__menu ${isThemeOpen ? 'is-open' : ''}`}
                role="menu"
              >
                {themeOptions.map((option) => (
                  <button
                    key={option.key}
                    type="button"
                    className={
                      option.key === theme
                        ? 'theme-picker__item is-active'
                        : 'theme-picker__item'
                    }
                    onClick={() => {
                      setTheme(option.key);
                      setIsThemeOpen(false);
                      handleClose();
                    }}
                    role="menuitem"
                  >
                    <span className="theme-picker__icon">
                      {iconForTheme(option.key)}
                    </span>
                    <span className="theme-picker__text">
                      <span className="theme-picker__name">{option.label}</span>
                      <span className="theme-picker__desc">
                        {option.description}
                      </span>
                    </span>
                    <span className="theme-picker__mark">
                      {option.key === theme ? 'On' : ''}
                    </span>
                  </button>
                ))}
              </div>
            </div>
            <NavLink to="/contact" className="btn btn--primary" onClick={handleClose}>
              Contact Us
            </NavLink>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default SiteHeader;
