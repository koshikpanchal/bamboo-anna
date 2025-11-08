import { Link, useSearchParams } from 'react-router-dom';
import './SuggestedProducts.scss';
import { useMemo, useEffect, useRef, useState } from 'react';
import { productDetails } from '../productData';

const shuffleArray = (array: any[]) => {
  return array.sort(() => Math.random() - 0.5);
};

const SuggestedProducts = () => {
  const [searchParams] = useSearchParams();
  const currentProduct = searchParams.get('product');
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  const suggestedProducts = useMemo(() => {
    const productsArray = Object.entries(productDetails)
      .filter(([key]) => key !== currentProduct) // Exclude current product
      .map(([key, product]) => ({
        path: `/pdp?product=${key}`,
        img: product.images[0],
        name: product.name,
      }));

    return shuffleArray(productsArray).slice(0, 4);
  }, [currentProduct]);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider || isPaused) return;

    const scrollWidth = slider.scrollWidth;
    const clientWidth = slider.clientWidth;
    let scrollPosition = 0;

    const autoScroll = setInterval(() => {
      scrollPosition += 1;
      
      if (scrollPosition >= scrollWidth - clientWidth) {
        scrollPosition = 0;
      }
      
      slider.scrollTo({
        left: scrollPosition,
        behavior: 'smooth',
      });
    }, 30);

    return () => clearInterval(autoScroll);
  }, [isPaused, suggestedProducts]);

  return (
    <div className="suggestedProducts">
      {suggestedProducts.length !== 0 && (
        <>
          <h3>Related Products</h3>
          <div
            className="suggestedSlider"
            ref={sliderRef}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="sliderTrack">
              {/* Render products twice for seamless loop */}
              {[...suggestedProducts, ...suggestedProducts].map((product, index) => (
                <div className="productCard" key={index}>
                  <Link to={product.path}>
                    <div className="imageWrapper">
                      <img src={product.img} alt={product.name} />
                    </div>
                    <h4>{product.name}</h4>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default SuggestedProducts;