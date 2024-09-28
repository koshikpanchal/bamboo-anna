import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './pages/homepage/Homepage';
import AboutUs from './pages/about-us/AboutUs';
import CompanySynopsis from './pages/company-synopsis/CompanySynopsis';
import ContactUs from './pages/contact-us/ContactUs';
import Products from './pages/products/Products';
import WhyBamboo from './pages/WhyBamboo/WhyBamboo';
import { useTheme } from './pages/context/ThemeContext';
import { useEffect } from 'react';
import ProductDetailPage from './pages/productDetailPage/ProductDetailPage';
import ScrollToTop from './pages/routes/ScrollToTop';
import FloatingWhatsAppButton from './pages/common/whats-app-button/FloatingWhatsAppButton';
import { ErrorBoundary } from './pages/common/error-boundary/ErrorBoundary';
import Sitemap from './pages/sitemap/Sitemap';

const App: React.FC = () => {
  const { isDarkMode } = useTheme();

  useEffect(() => {
    document.body.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  return (
    <div className="app">
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/companySynopsis" element={<CompanySynopsis />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/products" element={<Products />} />
          <Route path="/whyBamboo" element={<WhyBamboo />} />
          <Route path="/pdp" element={<ProductDetailPage />} />
          <Route path="*" element={<ErrorBoundary />} />
          <Route path="/sitemap" element={<Sitemap />} />
        </Routes>
      </BrowserRouter>
      <FloatingWhatsAppButton />
    </div>
  );
};

export default App;
