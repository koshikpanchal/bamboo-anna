import { useSearchParams } from "react-router-dom";
import "./ProductDetailPage.scss";
import SuggestedProducts from "./suggestedProducts/SuggestedProducts"; // Assuming you have a suggestions component
import Header from "../common/header/Header";
import Footer from "../common/footer/Footer";

type productDetails = {
  name: string;
  description: string;
  image: string;
};

const ProductDetailPage = () => {
  const [searchParams] = useSearchParams();
  const product = searchParams.get("product"); // Get the product query param (e.g., "bambooToothbrush")

  const productDetails: Record<string, productDetails> = {
    bambooToothbrush: {
      name: "Bamboo Toothbrush",
      description: "Eco-friendly toothbrush made from sustainable bamboo.",
      image: "/assets/bambooToothbrush.jpg",
    },
    bambooRazor: {
      name: "Bamboo Razor",
      description: "Durable bamboo razor for a smooth shave.",
      image: "/assets/bambooRazor.jpg",
    },
    // Add other products similarly...
    
  };

  const productName: productDetails | null =
    product && productDetails[product] ? productDetails[product] : null;

  return (
    <>
      <Header />
      <div className="productDetailPage">
        {productName ? (
          <div className="productDetailContainer">
            <div className="productImage">
              <img
                src={`/assets/${productName.image}.jpg`} // Assuming image is named after the product
                alt={productName.name}
              />
            </div>
            <div className="productInfo">
              <h2>{productName.name}</h2>
              <p>
                Here are the details about {productName.name}. We provide
                customized and eco-friendly bamboo products.
              </p>
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
            </div>
          </div>
        ) : undefined}
        <SuggestedProducts />
      </div>
      <Footer />
    </>
  );
};

export default ProductDetailPage;
