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
              <img src={liceComb} alt="Wooden Comb 1" />
              <p>For long and short hairs</p>
            </div>
            <div className="product-item">
              <img src={HBComb} alt="Wooden Comb 2" />
              <p>Hair/beared Neem comb</p>
            </div>
            <div className="product-item">
              <img src={NeemCombs} alt="Wooden Comb 2" />
              <p>Compact pocket size combs</p>
            </div>
          </div>
        </section>

        {/* Straw Section */}
        <section className="product-group">
          <h2>Straw</h2>
          <div className="product-items">
            <div className="product-item">
              <img src={straw} alt="Razor 1" />
              <p>coconut leaf Straw</p>
            </div>
          </div>
        </section>

        {/* Razors Section */}
        <section className="product-group">
          <h2>Pen & Pencil</h2>
          <div className="product-items">
            <div className="product-item">
              <img src={pencil} alt="Razor 1" />
              <p>Plantable seed Pencil</p>
            </div>
            <div className="product-item">
              <img src={pen} alt="Razor 1" />
              <p>Plantable seed Pen</p>
            </div>
          </div>
        </section>

        {/* Razors Section */}
        <section className="product-group">
          <h2>Razors</h2>
          <div className="product-items">
            <div className="product-item">
              <img src={razor} alt="Razor 1" />
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
