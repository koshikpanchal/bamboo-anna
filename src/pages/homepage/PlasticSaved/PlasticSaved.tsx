import { useEffect, useState, useRef } from 'react';
import './PlasticSaved.scss';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import transitionImage from '../../../assets/transition.jpg';

const PlasticSaved = () => {
  const [count, setCount] = useState(0);
  const sectionRef = useRef(null);
  const countingRef = useRef(false);
  const animationFrameRef = useRef<number | null>(null);
  const isInViewRef = useRef(false);

  const getPlasticSavedSinceLastVisit = () => {
    const stored = sessionStorage.getItem('plasticSavedData');
    const now = Date.now();

    if (stored) {
      const { lastValue, lastTimestamp } = JSON.parse(stored);
      const timePassed = (now - lastTimestamp) / 1000;

      const baseRate = 1;
      const randomFactor = 0.7 + Math.random() * 0.6;
      const increment = Math.floor(timePassed * baseRate * randomFactor);

      return {
        startValue: lastValue,
        currentValue: lastValue + increment,
        timestamp: now,
      };
    }

    const baseValue = 10000 + Math.floor(Math.random() * 5000);
    return {
      startValue: baseValue,
      currentValue: baseValue,
      timestamp: now,
    };
  };

  const incrementCount = () => {
    if (countingRef.current) return;
    countingRef.current = true;

    const { startValue, currentValue, timestamp } =
      getPlasticSavedSinceLastVisit();

    setCount(startValue);

    let displayValue = startValue;
    const targetValue = currentValue;
    const startTime = Date.now();

    const difference = targetValue - startValue;
    const baseDuration = Math.min(3000 + (difference / 100) * 100, 4000);

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / baseDuration, 1);

      if (progress < 1 && displayValue < targetValue) {
        const easeProgress = 1 - Math.pow(1 - progress, 3);
        const calculatedValue = Math.floor(
          startValue + (targetValue - startValue) * easeProgress
        );
        const incrementSize = Math.floor(1 + Math.random() * 4);
        displayValue = Math.min(
          displayValue + incrementSize,
          calculatedValue,
          targetValue
        );

        setCount(displayValue);

        const delay = Math.floor(50 + Math.random() * 150);
        const shouldPause = Math.random() < 0.1;
        const pauseDuration = shouldPause ? Math.floor(100 + Math.random() * 300) : 0;

        animationFrameRef.current = window.setTimeout(
          animate,
          delay + pauseDuration
        );
      } else {
        setCount(targetValue);
        sessionStorage.setItem(
          'plasticSavedData',
          JSON.stringify({
            lastValue: targetValue,
            lastTimestamp: timestamp,
          })
        );

        startRealtimeIncrement(targetValue);
      }
    };

    animate();
  };

  const startRealtimeIncrement = (baseValue: number) => {
    let currentVal = baseValue;

    const realtimeUpdate = () => {
      if (isInViewRef.current) {
        const increment = Math.floor(1 + Math.random() * 3);
        currentVal += increment;
        setCount(currentVal);

        sessionStorage.setItem(
          'plasticSavedData',
          JSON.stringify({
            lastValue: currentVal,
            lastTimestamp: Date.now(),
          })
        );
      }

      const nextInterval = isInViewRef.current
        ? Math.floor(1000 + Math.random() * 3000)
        : Math.floor(5000 + Math.random() * 5000);

      animationFrameRef.current = window.setTimeout(realtimeUpdate, nextInterval);
    };

    const initialDelay = Math.floor(2000 + Math.random() * 2000);
    animationFrameRef.current = window.setTimeout(realtimeUpdate, initialDelay);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const isIntersecting = entries[0].isIntersecting;
        isInViewRef.current = isIntersecting;

        if (isIntersecting && !countingRef.current) {
          incrementCount();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      if (animationFrameRef.current) {
        clearTimeout(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <section className="amountSavedSection" ref={sectionRef} data-reveal>
      <LazyLoadImage
        src={transitionImage}
        alt="Plastic Saved Background"
        className="transition-image"
      />
      <div className="overlay-content">
        <span className="eyebrow">Impact meter</span>
        <h2>Plastic avoided through bamboo adoption</h2>
        <p className="count">{count.toLocaleString()} kg</p>
        <p className="subtext">
          Updated in real time based on ongoing production and partnerships.
        </p>
        <div className="impact-grid">
          <div className="impact-card">
            <h3>Local livelihoods</h3>
            <p>Steady orders support artisan families year-round.</p>
          </div>
          <div className="impact-card">
            <h3>Cleaner hospitality</h3>
            <p>Hotels switch to bamboo amenities and eliminate single-use waste.</p>
          </div>
          <div className="impact-card">
            <h3>Low-impact materials</h3>
            <p>Fast-growing bamboo reduces pressure on forests.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlasticSaved;
