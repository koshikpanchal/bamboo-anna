import "./Products.scss";
import liceComb from "../../assets/comb/bamboo-hair-brush-comb-set-eco-friendly.jpg";
import HBComb from "../../assets/comb/H&B Combs.jpg";
import NeemCombs from "../../assets/comb/Neem Comb 4-min.jpg";
import razor from "../../assets/razor/P1030998-min.jpg";
import brush from "../../assets/dentalCare/P1030940-min.jpg";
import brush1 from "../../assets/dentalCare/P1030899-min.jpg";
import pen from "../../assets/penPencil/plantable-seed-pen.jpg";
import pencil from "../../assets/penPencil/plantable-seed-penciljpg.jpg";
import tongueCleaner from "../../assets/dentalCare/dentalKit.jpg";
import straw from "../../assets/straw/P1030954-min.jpg";
import Footer from "../common/footer/Footer";
import Header from "../common/header/Header";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <>
      <Header />
      <div className="products-page-container">
        <h1>Our Bamboo Products</h1>

        {/* Dental Care Section */}
        <section className="product-group">
          <h2>Dental care</h2>
          <div className="product-items">
            <Link
              to="/pdp?product=softBristleToothbrush"
              className="product-item"
            >
              <img src={brush} alt="Razor 1" />
              <p>Soft bristle toothbrush</p>
            </Link>
            <Link to="/pdp?product=neemToothbrush" className="product-item">
              <img src={brush1} alt="Razor 1" />
              <p>Neem toothbrush</p>
            </Link>
            <Link to="/pdp?product=tongueCleaner" className="product-item">
              <img src={tongueCleaner} alt="Razor 1" />
              <p>Tongue cleaner</p>
            </Link>
          </div>
        </section>

        {/* Wooden Combs Section */}
        <section className="product-group">
          <h2>Wooden Combs</h2>
          <div className="product-items">
            <Link to="/pdp?product=comb" className="product-item">
              <LazyLoadImage
                src={liceComb}
                alt="For long and short hairs"
                effect="blur"
                width="300"
                height="300"
              />
              <p>For long and short hairs</p>
            </Link>
            <Link to="/pdp?product=beardComb" className="product-item">
              <LazyLoadImage
                src={HBComb}
                alt="Hair/beard Neem comb"
                effect="blur"
                width="300"
                height="300"
              />
              <p>Hair/beard Neem comb</p>
            </Link>
            <Link to="/pdp?product=pocketComb" className="product-item">
              <LazyLoadImage
                src={NeemCombs}
                alt="Compact pocket size combs"
                effect="blur"
                width="300"
                height="300"
              />
              <p>Compact pocket size neem combs</p>
            </Link>
          </div>
        </section>

        {/* Razors Section */}
        <section className="product-group">
          <h2>Razors</h2>
          <div className="product-items">
            <Link to="/pdp?product=razor" className="product-item">
              <LazyLoadImage
                src={razor}
                alt="Skin friendly razors"
                effect="blur"
                width="300"
                height="300"
              />
              <p>Skin friendly razors</p>
            </Link>
          </div>
        </section>

        {/* Straw Section */}
        <section className="product-group">
          <h2>Straw</h2>
          <div className="product-items">
            <Link to="/pdp?product=straw" className="product-item">
              <LazyLoadImage
                src={straw}
                alt="Coconut leaf Straw"
                effect="blur"
                width="300"
                height="300"
              />
              <p>Coconut leaf Straw</p>
            </Link>
          </div>
        </section>

        {/* Pen & Pencil Section */}
        <section className="product-group">
          <h2>Pen & Pencil</h2>
          <div className="product-items">
            <Link to="/pdp?product=pencil" className="product-item">
              <LazyLoadImage
                src={pencil}
                alt="Plantable seed Pencil"
                effect="blur"
                width="300"
                height="300"
              />
              <p>Plantable seed Pencil</p>
            </Link>
            <Link to="/pdp?product=pen" className="product-item">
              <LazyLoadImage
                src={pen}
                alt="Plantable seed Pen"
                effect="blur"
                width="300"
                height="300"
              />
              <p>Plantable seed Pen</p>
            </Link>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Products;
