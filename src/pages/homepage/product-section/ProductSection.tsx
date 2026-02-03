import bambooToothbrush from '../../../assets/dentalCare/TB 3-min.jpg';
import bambooToothbrushH from '../../../assets/dentalCare/TB 2-min.jpg';
import NeemComb from '../../../assets/comb/Neem Comb 4-min.jpg';
import NeemCombH from '../../../assets/comb/Neem Comb 3-min.jpg';
import DentalKit from '../../../assets/dentalCare/dentalKit.jpg';
import DentalKitH from '../../../assets/dentalCare/bamboo-tongue-cleaner-.jpeg';
import BeardComb from '../../../assets/comb/H&B Combs.jpg';
import BeardCombH from '../../../assets/comb/H&B Comb.jpg';
import Straw from '../../../assets/straw/STRAWS-min.jpg';
import StrawH from '../../../assets/straw/coconut-leaf-straw.jpeg';
import NeemCombBrush from '../../../assets/comb/Brush 2.jpg';
import NeemCombBrushH from '../../../assets/comb/Brush 3.jpg';

import './ProductSection.scss';
import { Link } from 'react-router-dom';
import CTAButton from '../../common/cta-button/CTAButton';

type typeProduct = {
  id: number;
  name: string;
  img: string;
  hoverImg: string;
  link: string;
};

const products: typeProduct[] = [
  {
    id: 1,
    name: 'Bamboo Toothbrush',
    img: bambooToothbrush,
    hoverImg: bambooToothbrushH,
    link: '/pdp?product=softBristleToothbrush',
  },
  {
    id: 2,
    name: 'Neem Comb',
    img: NeemComb,
    hoverImg: NeemCombH,
    link: '/pdp?product=comb',
  },
  {
    id: 3,
    name: 'Tongue cleaner',
    img: DentalKit,
    hoverImg: DentalKitH,
    link: '/pdp?product=tongueCleaner',
  },
  {
    id: 4,
    name: 'Neem Beard Comb',
    img: BeardComb,
    hoverImg: BeardCombH,
    link: '/pdp?product=beardComb',
  },
  {
    id: 5,
    name: 'Straw',
    img: Straw,
    hoverImg: StrawH,
    link: '/pdp?product=straw',
  },
  {
    id: 6,
    name: 'Neem Comb brush',
    img: NeemCombBrush,
    hoverImg: NeemCombBrushH,
    link: '/pdp?product=pocketComb',
  },
];

const ProductSection = () => {
  return (
    <section className="productSection section" data-reveal>
      <div className="section__inner">
        <div className="productSection__header">
          <span className="eyebrow">Signature line</span>
          <h2>Explore bamboo essentials made to last.</h2>
          <p>
            Thoughtful tools for daily rituals, crafted with natural bamboo and
            local expertise.
          </p>
        </div>
        <div className="productGrid">
          {products.map((product) => (
            <Link to={product.link} key={product.id} className="productCard">
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
            </Link>
          ))}
        </div>
        <div className="product-section-actions">
          <Link to="/products" className="viewAllProducts">
            View all Products
          </Link>
          <CTAButton
            text="Need Custom Solutions?"
            variant="outline"
            size="medium"
          />
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
