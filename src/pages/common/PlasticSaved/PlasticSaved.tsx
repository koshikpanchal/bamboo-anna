import { useEffect, useState, useRef } from "react";
import "./PlasticSaved.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";
import transitionImage from "../../../assets/transition.jpg";

const PlasticSaved = () => {
  const [count, setCount] = useState(10); // Start from 10
  const sectionRef = useRef(null);

  const incrementCount = () => {
    let start = 10;
    const end = Math.floor(100000 + Math.random() * 900000);
    const duration = 2000;

    let stepTime = Math.abs(Math.floor(duration / (end - start)));
    let timer = setInterval(() => {
      if (start < end) {
        start += 1;
        setCount(start);
      } else {
        clearInterval(timer);
      }
    }, stepTime);
  };

  // Intersection Observer to detect when the section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          incrementCount();
        }
      },
      { threshold: 0.5 } // Adjust the threshold as necessary
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className="amountSavedSection" ref={sectionRef}>
      <LazyLoadImage
        src={transitionImage}
        alt="Plastic Saved Background"
        className="transition-image"
      />
      <div className="overlay-content">
        <h2>Amount Of Plastic Saved</h2>
        <p className="count">{count} kg</p>
      </div>
    </section>
  );
};

export default PlasticSaved;
