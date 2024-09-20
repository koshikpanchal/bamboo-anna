import { Link } from "react-router-dom";
import "./SuggestedProducts.scss";
import { useMemo } from "react";
import { productDetails } from "../productData";
const shuffleArray = (array: any[]) => {
  return array.sort(() => Math.random() - 0.5);
};

const SuggestedProducts = () => {
  const suggestedProducts = useMemo(() => {
    const productsArray = Object.entries(productDetails).map(
      ([key, product]) => ({
        path: `/pdp?product=${key}`,
        img: product.images[0],
        name: product.name,
      })
    );

    return shuffleArray(productsArray).slice(0, 4);
  }, []);

  return (
    <div className="suggestedProducts">
      {suggestedProducts.length !== 0 && (
        <>
          <h3>Suggested Products</h3>
          <div className="suggestedGrid">
            {suggestedProducts.map((product, index) => (
              <div className="productCard" key={index}>
                <Link to={product.path}>
                  <img src={product.img} alt={product.name} />
                  <h4>{product.name}</h4>
                </Link>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default SuggestedProducts;
