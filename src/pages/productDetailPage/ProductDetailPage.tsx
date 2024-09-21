import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import "./ProductDetailPage.scss";
import SuggestedProducts from "./suggestedProducts/SuggestedProducts";
import Header from "../common/header/Header";
import Footer from "../common/footer/Footer";
import { productDetails, productDetailsType } from "./productData";
import emailjs from "emailjs-com";

const ProductDetailPage = () => {
  const [searchParams] = useSearchParams();
  const product = searchParams.get("product");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { name, email, message } = formData;

    // Define your EmailJS configuration
    const SERVICE_ID = "YOUR_SERVICE_ID";
    const TEMPLATE_ID = "YOUR_TEMPLATE_ID";
    const USER_ID = "YOUR_USER_ID";

    // Prepare template parameters
    const templateParams = {
      name,
      email,
      message: `Product: ${productData?.name}\n\n${message}`, // Including product name in the message
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID).then(
      () => {
        alert("Your enquiry has been sent successfully!");
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      },
      (error) => {
        console.error("Failed to send enquiry:", error);
        alert("Failed to send enquiry. Please try again later.");
      }
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
            <form className="inquiryForm" onSubmit={handleSubmit}>
              <h3>Inquire about this product</h3>
              <label htmlFor="name">Your Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <label htmlFor="message">Enquiry Details:</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                required
              ></textarea>
              <button type="submit">Send Enquiry</button>
            </form>
          </>
        ) : (
          <div className="noProduct">
            <h2>No product selected</h2>
            <p>Please select a product from our catalog.</p>
          </div>
        )}
        <SuggestedProducts />
      </div>
      <Footer />
    </>
  );
};

export default ProductDetailPage;
