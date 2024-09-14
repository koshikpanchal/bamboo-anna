import bambooToothbrush from "../../../assets/TB 3-min.jpg";
import bambooToothbrushH from "../../../assets/TB 2-min.jpg";
import NeemComb from "../../../assets/Neem Comb 4-min.jpg";
import NeemCombH from "../../../assets/Neem Comb 3-min.jpg";
import DentalKit from "../../../assets/dentalKit.jpg";
import DentalKitH from "../../../assets/bamboo-tongue-cleaner-.jpeg";
import BeardComb from "../../../assets/H&B Combs.jpg";
import BeardCombH from "../../../assets/H&B Comb.jpg";
import Straw from "../../../assets/STRAWS-min.jpg";
import StrawH from "../../../assets/coconut-leaf-straw.jpeg";
import NeemCombBrush from "../../../assets/Brush 2.jpg";
import NeemCombBrushH from "../../../assets/Neem Comb-min.jpg";

import "./ProductSection.scss";

type typeProduct = {
  id: number;
  name: string;
  img: string;
  hoverImg: string;
};

const products: typeProduct[] = [
  {
    id: 1,
    name: "Bamboo Toothbrush",
    img: bambooToothbrush,
    hoverImg: bambooToothbrushH,
  },
  {
    id: 2,
    name: "Neem Comb",
    img: NeemComb,
    hoverImg: NeemCombH,
  },
  {
    id: 3,
    name: "Tongue cleaner",
    img: DentalKit,
    hoverImg: DentalKitH,
  },
  {
    id: 4,
    name: "Neem Beared Comb",
    img: BeardComb,
    hoverImg: BeardCombH,
  },
  {
    id: 5,
    name: "Straw",
    img: Straw,
    hoverImg: StrawH,
  },
  {
    id: 6,
    name: "Neem Comb brush",
    img: NeemCombBrush,
    hoverImg: NeemCombBrushH,
  },
];

const ProductSection = () => {
  return (
    <section className="productSection">
      <div className="productGrid">
        {products.map((product) => (
          <div key={product.id} className="productCard">
            <img
              src={product.img}
              alt={product.name}
              className="productImage"
            />
            <img
              src={product.hoverImg}
              alt={`${product.name} hover`}
              className="productHoverImage"
            />
            <div className="productName">{product.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductSection;
