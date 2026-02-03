import { Outlet } from 'react-router-dom';
import SiteHeader from './SiteHeader';
import SiteFooter from './SiteFooter';
import FloatingWhatsAppButton from '../../pages/common/whats-app-button/FloatingWhatsAppButton';
import './SiteLayout.scss';

const SiteLayout = () => {
  return (
    <div className="site-shell">
      <SiteHeader />
      <main className="site-main">
        <Outlet />
      </main>
      <SiteFooter />
      <FloatingWhatsAppButton />
    </div>
  );
};

export default SiteLayout;
