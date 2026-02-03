import { useEffect, useRef } from 'react';
import { Outlet } from 'react-router-dom';
import SiteHeader from './SiteHeader';
import SiteFooter from './SiteFooter';
import FloatingWhatsAppButton from '../../pages/common/whats-app-button/FloatingWhatsAppButton';
import './SiteLayout.scss';

const SiteLayout = () => {
  const shellRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const root = shellRef.current;
    if (!root || typeof window === 'undefined') return;

    const prefersReducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    let rafId = 0;
    let current = 0;
    let currentInvert = 0;
    let target = 0;
    let targetInvert = 0;

    const setTargets = () => {
      const y = window.scrollY || 0;
      target = y * 0.1;
      targetInvert = y * -0.07;
    };

    const step = () => {
      const delta = target - current;
      const deltaInvert = targetInvert - currentInvert;
      current += delta * 0.12;
      currentInvert += deltaInvert * 0.12;

      root.style.setProperty('--bamboo-offset', `${current.toFixed(2)}px`);
      root.style.setProperty('--bamboo-offset-invert', `${currentInvert.toFixed(2)}px`);

      if (Math.abs(delta) > 0.1 || Math.abs(deltaInvert) > 0.1) {
        rafId = requestAnimationFrame(step);
      } else {
        rafId = 0;
      }
    };

    const onScroll = () => {
      setTargets();
      if (!rafId) rafId = requestAnimationFrame(step);
    };

    setTargets();
    step();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="site-shell" ref={shellRef}>
      <div className="bamboo-parallax bamboo-parallax--left bamboo-parallax--back" aria-hidden="true" />
      <div className="bamboo-parallax bamboo-parallax--left bamboo-parallax--front" aria-hidden="true" />
      <div className="bamboo-parallax bamboo-parallax--right bamboo-parallax--back" aria-hidden="true" />
      <div className="bamboo-parallax bamboo-parallax--right bamboo-parallax--front" aria-hidden="true" />
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
