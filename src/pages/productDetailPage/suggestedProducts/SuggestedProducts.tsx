import { Link } from "react-router-dom";
import "./SuggestedProducts.scss";

const suggestedProducts = [
  {
    name: "Bamboo Toothbrush",
    path: "/pdp?product=bambooToothbrush",
    img: "/assets/bambooToothbrush.jpg",
  },
  {
    name: "Bamboo Razor",
    path: "/pdp?product=bambooRazor",
    img: "/assets/bambooRazor.jpg",
  },
  {
    name: "Bamboo Comb",
    path: "/pdp?product=bambooComb",
    img: "/assets/bambooComb.jpg",
  },
  {
    name: "Bamboo Straw",
    path: "/pdp?product=bambooStraw",
    img: "/assets/bambooStraw.jpg",
  },
];

const SuggestedProducts = () => {
  return (
    <div className="suggestedProducts">
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
    </div>
  );
};

export default SuggestedProducts;
