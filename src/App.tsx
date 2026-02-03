import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import ScrollToTop from './pages/routes/ScrollToTop';
import ScrollReveal from './pages/common/scroll-reveal/ScrollReveal';
import SiteLayout from './site/layout/SiteLayout';

const HomePage = lazy(() => import('./site/pages/home/HomePage'));
const StudioPage = lazy(() => import('./site/pages/studio/StudioPage'));
const CollectionsPage = lazy(() => import('./site/pages/collections/CollectionsPage'));
const CataloguePage = lazy(() => import('./site/pages/catalogue/CataloguePage'));
const ImpactPage = lazy(() => import('./site/pages/impact/ImpactPage'));
const CustomPage = lazy(() => import('./site/pages/custom/CustomPage'));
const GalleryPage = lazy(() => import('./site/pages/gallery/GalleryPage'));
const ContactPage = lazy(() => import('./site/pages/contact/ContactPage'));
const NotFoundPage = lazy(() => import('./site/pages/not-found/NotFoundPage'));
const ProductPage = lazy(() => import('./site/pages/product/ProductPage'));
const LegacyPdpRedirect = lazy(() => import('./site/pages/product/LegacyPdpRedirect'));

const App: React.FC = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <ScrollToTop />
        <ScrollReveal />
        <Suspense fallback={<div className="page-loading">Loading bamboo essentials...</div>}>
          <Routes>
            <Route element={<SiteLayout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/studio" element={<StudioPage />} />
              <Route path="/collections" element={<CollectionsPage />} />
              <Route path="/catalogue" element={<CataloguePage />} />
              <Route path="/product/:slug" element={<ProductPage />} />
              <Route path="/impact" element={<ImpactPage />} />
              <Route path="/custom" element={<CustomPage />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/aboutUs" element={<StudioPage />} />
              <Route path="/products" element={<CataloguePage />} />
              <Route path="/whyBamboo" element={<ImpactPage />} />
              <Route path="/companySynopsis" element={<CustomPage />} />
              <Route path="/photoGallery" element={<GalleryPage />} />
              <Route path="/contactUs" element={<ContactPage />} />
              <Route path="/pdp" element={<LegacyPdpRedirect />} />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
};

export default App;
