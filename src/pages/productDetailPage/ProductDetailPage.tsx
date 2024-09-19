import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import "./ProductDetailPage.scss";
import SuggestedProducts from "./suggestedProducts/SuggestedProducts";
import Header from "../common/header/Header";
import Footer from "../common/footer/Footer";
import { productDetails, productDetailsType } from "./productData";

const ProductDetailPage = () => {
  const [searchParams] = useSearchParams();
  const product = searchParams.get("product");
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // For carousel navigation

  const productData: productDetailsType | null =
    product && productDetails[product] ? productDetails[product] : null;

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? productData!.images.length - 1 : prevIndex - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === productData!.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      <Header />
      <div className="productDetailPage">
        {productData ? (
          <>
            <div className="productDetailContainer">
              <div className="productImage">
                <div className="carousel">
                  {productData.images.length !== 1 && (
                    <button className="prev" onClick={handlePrevImage}>
                      &#10094;
                    </button>
                  )}
                  <img
                    src={productData.images[currentImageIndex]}
                    alt={productData.name}
                  />
                  {productData.images.length !== 1 && (
                    <button className="next" onClick={handleNextImage}>
                      &#10095;
                    </button>
                  )}
                </div>
              </div>
              <div className="productDetailsSection">
                <div className="productInfo">
                  <h2>{productData.name}</h2>
                  <p>{productData.description}</p>
                  <div className="keyFeatures">
                    <h3>Key Features:</h3>
                    <ul>
                      {productData.keyFeatures.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <form className="inquiryForm">
              <h3>Inquire about this product</h3>
              <label> Your Name: </label>
              <input type="text" name="name" required />
              <label> Email: </label>
              <input type="email" name="email" required />
              <label> Enquiry Details: </label>
              <textarea name="message" rows={4} required></textarea>
              <button type="submit">Send Enquiry</button>
            </form>
          </>
        ) : undefined}
        <SuggestedProducts />
      </div>
      <Footer />
    </>
  );
};

export default ProductDetailPage;
