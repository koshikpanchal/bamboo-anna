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

  // Realistic plastic saving rate: ~0.5-2 kg per second (varies randomly)
  const getPlasticSavedSinceLastVisit = () => {
    const stored = sessionStorage.getItem('plasticSavedData');
    const now = Date.now();
    
    if (stored) {
      const { lastValue, lastTimestamp } = JSON.parse(stored);
      const timePassed = (now - lastTimestamp) / 1000; // seconds
      
      // Calculate realistic increment based on time passed
      // Average rate: 1 kg per second, but with randomness
      const baseRate = 1; // kg per second
      const randomFactor = 0.7 + Math.random() * 0.6; // 0.7 to 1.3
      const increment = Math.floor(timePassed * baseRate * randomFactor);
      
      return {
        startValue: lastValue,
        currentValue: lastValue + increment,
        timestamp: now
      };
    } else {
      // First time visitor - start from a small base number (10k-15k range)
      const baseValue = 10000 + Math.floor(Math.random() * 5000);
      return {
        startValue: baseValue,
        currentValue: baseValue,
        timestamp: now
      };
    }
  };

  const incrementCount = () => {
    if (countingRef.current) return;
    countingRef.current = true;

    const { startValue, currentValue, timestamp } = getPlasticSavedSinceLastVisit();
    
    setCount(startValue);
    
    let displayValue = startValue;
    const targetValue = currentValue;
    const startTime = Date.now();
    
    // Animation duration based on how much to increment (but max 4 seconds)
    const difference = targetValue - startValue;
    const baseDuration = Math.min(3000 + (difference / 100) * 100, 4000);

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / baseDuration, 1);

      if (progress < 1 && displayValue < targetValue) {
        // Smooth easing
        const easeProgress = 1 - Math.pow(1 - progress, 3);
        
        // Calculate next value
        const calculatedValue = Math.floor(startValue + (targetValue - startValue) * easeProgress);
        
        // Random increment size (1-5 kg jumps for realism)
        const incrementSize = Math.floor(1 + Math.random() * 4);
        displayValue = Math.min(displayValue + incrementSize, calculatedValue, targetValue);
        
        setCount(displayValue);

        // Random delay between increments (50-200ms)
        const delay = Math.floor(50 + Math.random() * 150);
        
        // Occasionally pause (10% chance, 100-400ms)
        const shouldPause = Math.random() < 0.1;
        const pauseDuration = shouldPause ? Math.floor(100 + Math.random() * 300) : 0;
        
        animationFrameRef.current = window.setTimeout(animate, delay + pauseDuration);
      } else {
        // Reached target - save to localStorage
        setCount(targetValue);
        sessionStorage.setItem('plasticSavedData', JSON.stringify({
          lastValue: targetValue,
          lastTimestamp: timestamp
        }));
        
        // Continue incrementing slowly in real-time
        startRealtimeIncrement(targetValue);
      }
    };

    animate();
  };

  const startRealtimeIncrement = (baseValue: number) => {
    let currentVal = baseValue;
    
    const realtimeUpdate = () => {
      // Only increment if section is in view
      if (isInViewRef.current) {
        // Always increment when in view (100% chance)
        const increment = Math.floor(1 + Math.random() * 3); // 1-3 kg
        currentVal += increment;
        setCount(currentVal);
        
        // Update sessionStorage
        sessionStorage.setItem('plasticSavedData', JSON.stringify({
          lastValue: currentVal,
          lastTimestamp: Date.now()
        }));
      }
      
      // Random interval between updates (1-4 seconds when in view)
      const nextInterval = isInViewRef.current 
        ? Math.floor(1000 + Math.random() * 3000)
        : Math.floor(5000 + Math.random() * 5000); // Slower when not in view
      
      animationFrameRef.current = window.setTimeout(realtimeUpdate, nextInterval);
    };

    // Start real-time updates after initial animation
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
    <section className="amountSavedSection" ref={sectionRef}>
      {/* @ts-expect-error - LazyLoadImage type compatibility issue with React 18 */}
      <LazyLoadImage
        src={transitionImage}
        alt="Plastic Saved Background"
        className="transition-image"
      />
      <div className="overlay-content">
        <h2>Amount Of Plastic Saved</h2>
        <p className="count">{count.toLocaleString()} kg</p>
      </div>
    </section>
  );
};

export default PlasticSaved;