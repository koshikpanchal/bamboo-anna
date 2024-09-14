import "./Products.scss";
import liceComb from "../../assets/bamboo-hair-brush-comb-set-eco-friendly.jpg";
import HBComb from "../../assets/H&B Combs.jpg";
import NeemCombs from "../../assets/Neem Comb 4-min.jpg";
import razor from "../../assets/P1030998-min.jpg";
import brush from "../../assets/P1030940-min.jpg";
import brush1 from "../../assets/P1030899-min.jpg";
import pen from "../../assets/plantable-seed-pen.jpg";
import pencil from "../../assets/plantable-seed-penciljpg.jpg";
import tongueCleaner from "../../assets/dentalKit.jpg";
import straw from "../../assets/P1030954-min.jpg";
import Footer from "../common/footer/Footer";
import Header from "../common/header/Header";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

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
            <div className="product-item">
              <img src={brush} alt="Razor 1" />
              <p>Soft bristle toothbrush</p>
            </div>
            <div className="product-item">
              <img src={brush1} alt="Razor 1" />
              <p>Neem toothbrush</p>
            </div>
            <div className="product-item">
              <img src={tongueCleaner} alt="Razor 1" />
              <p>Tongue cleaner</p>
            </div>
          </div>
        </section>

        {/* Wooden Combs Section */}
        <section className="product-group">
          <h2>Wooden Combs</h2>
          <div className="product-items">
            <div className="product-item">
              <LazyLoadImage
                src={liceComb}
                alt="For long and short hairs"
                effect="blur"
                width="300"
                height="300"
              />
              <p>For long and short hairs</p>
            </div>
            <div className="product-item">
              <LazyLoadImage
                src={HBComb}
                alt="Hair/beard Neem comb"
                effect="blur"
                width="300"
                height="300"
              />
              <p>Hair/beard Neem comb</p>
            </div>
            <div className="product-item">
              <LazyLoadImage
                src={NeemCombs}
                alt="Compact pocket size combs"
                effect="blur"
                width="300"
                height="300"
              />
              <p>Compact pocket size combs</p>
            </div>
          </div>
        </section>

        {/* Straw Section */}
        <section className="product-group">
          <h2>Straw</h2>
          <div className="product-items">
            <div className="product-item">
              <LazyLoadImage
                src={straw}
                alt="Coconut leaf Straw"
                effect="blur"
                width="300"
                height="300"
              />
              <p>Coconut leaf Straw</p>
            </div>
          </div>
        </section>

        {/* Pen & Pencil Section */}
        <section className="product-group">
          <h2>Pen & Pencil</h2>
          <div className="product-items">
            <div className="product-item">
              <LazyLoadImage
                src={pencil}
                alt="Plantable seed Pencil"
                effect="blur"
                width="300"
                height="300"
              />
              <p>Plantable seed Pencil</p>
            </div>
            <div className="product-item">
              <LazyLoadImage
                src={pen}
                alt="Plantable seed Pen"
                effect="blur"
                width="300"
                height="300"
              />
              <p>Plantable seed Pen</p>
            </div>
          </div>
        </section>

        {/* Razors Section */}
        <section className="product-group">
          <h2>Razors</h2>
          <div className="product-items">
            <div className="product-item">
              <LazyLoadImage
                src={razor}
                alt="Skin friendly razors"
                effect="blur"
                width="300"
                height="300"
              />
              <p>Skin friendly razors</p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Products;
