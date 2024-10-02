import { useSearchParams } from 'react-router-dom';
import { useState } from 'react';
import './ProductDetailPage.scss';
import SuggestedProducts from './suggestedProducts/SuggestedProducts';
import Header from '../common/header/Header';
import Footer from '../common/footer/Footer';
import { productDetails, productDetailsType } from './productData';
import emailjs from 'emailjs-com';
import ProductDetailPageHelmet from './ProductDetailPageHelmet';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';

const ProductDetailPage = () => {
  const [searchParams] = useSearchParams();
  const product = searchParams.get('product');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  const [formData, setFormData] = useState({
    productService: '',
    name: '',
    email: '',
    address: '',
    phone: '',
    enquiryDetails: '',
  });

  const productData: productDetailsType | null =
    product && productDetails[product] ? productDetails[product] : null;

  const handlePrevImage = () => {
    if (!loading) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? productData!.images.length - 1 : prevIndex - 1
      );
      setLoading(true);
    }
  };

  const handleNextImage = () => {
    if (!loading) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === productData!.images.length - 1 ? 0 : prevIndex + 1
      );
      setLoading(true);
    }
  };

  const handleImageLoad = () => {
    setLoading(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const SERVICE_ID = 'service_hsdygcv';
    const TEMPLATE_ID = 'template_4j6evhm';
    const USER_ID = 'jAyaoCWoTkUntJywb';

    const templateParams = {
      to_name: 'Bamboo Anna',
      from_name: formData.name,
      message: formData.enquiryDetails,
      product: productData?.name,
      phone: formData.phone,
    };

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID)
      .then(() => {
        alert('Inquiry send successfully');
        setFormData({
          productService: '',
          name: '',
          email: '',
          address: '',
          phone: '',
          enquiryDetails: '',
        });
      })
      .catch((error) => {
        console.error('Failed to send enquiry:', error);
        alert('Failed to send enquiry. Please try again.');
      });
  };

  return (
    <>
      <ProductDetailPageHelmet productData={productData} />
      <Header />
      <div className="productDetailPage">
        {productData ? (
          <>
            <div className="productDetailContainer">
              <div className="productImage">
                <div className="carousel">
                  {productData.images.length !== 1 && !loading && (
                    <button
                      className="prev"
                      onClick={handlePrevImage}
                      disabled={loading}
                    >
                      &#10094;
                    </button>
                  )}
                  <div className="imageContainer">
                    {loading && (
                      <div className="spinner">
                        <HourglassBottomIcon />
                      </div>
                    )}
                    <img
                      src={productData.images[currentImageIndex]}
                      alt={productData.name}
                      onLoad={handleImageLoad} // Trigger image load
                      style={{ display: loading ? 'none' : 'block' }} // Hide image while loading
                    />
                  </div>
                  {productData.images.length !== 1 && !loading && (
                    <button
                      className="next"
                      onClick={handleNextImage}
                      disabled={loading}
                    >
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
              <div className="formGroup">
                <label htmlFor="name">Your Name:</label>
                <input
                  type="text"
                  id="from_name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="formGroup">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="formGroup">
                <label htmlFor="address">Address:</label>
                <input
                  type="address"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                />
              </div>
              <div className="formGroup">
                <label htmlFor="phone">Phone/Mobile:</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="formGroup">
                <label htmlFor="enquiryDetails">Enquiry Details:</label>
                <input
                  id="enquiryDetails"
                  name="enquiryDetails"
                  value={formData.enquiryDetails}
                  onChange={handleChange}
                  required
                ></input>
              </div>
              <button type="submit">Submit Enquiry</button>
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
