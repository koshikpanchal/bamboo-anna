import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollReveal = () => {
  const location = useLocation();

  useEffect(() => {
    const observed = new WeakSet<HTMLElement>();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    const observeAll = () => {
      const elements = Array.from(
        document.querySelectorAll<HTMLElement>('[data-reveal]')
      );

      elements.forEach((element) => {
        if (observed.has(element)) return;
        observed.add(element);
        observer.observe(element);
      });
    };

    observeAll();
    const raf = requestAnimationFrame(observeAll);
    const timeoutId = window.setTimeout(observeAll, 300);

    const mutationObserver = new MutationObserver(() => {
      observeAll();
    });
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
      cancelAnimationFrame(raf);
      clearTimeout(timeoutId);
    };
  }, [location.pathname, location.search]);

  return null;
};

export default ScrollReveal;
