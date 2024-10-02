import { useState } from 'react';
import emailjs from 'emailjs-com';
import Footer from '../common/footer/Footer';
import Header from '../common/header/Header';
import './ContactUs.scss';
import Popup from '../common/pop-up/Popup';
import { useNavigate } from 'react-router-dom';
import ContactUsHelmet from './ContactUsHelmet';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    productService: '',
    name: '',
    email: '',
    address: '',
    phone: '',
    enquiryDetails: '',
  });

  const [isPopupOpen, setPopupOpen] = useState(false);

  const navigate = useNavigate();

  const handleConfirm = () => {
    setPopupOpen(false);
    navigate('/products');
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
      product: formData.productService,
      phone: formData.phone,
    };

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID)
      .then(() => {
        setPopupOpen(true);
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
    <div>
      <ContactUsHelmet />
      <Header />
      <div className="contactUsPage">
        <div className="contactInfo">
          <section className="intro-section">
            <h1>Contact Us</h1>
          </section>
          <p>
            <strong>Name:</strong> Bamboo Anna Enterprises
          </p>
          <p>
            <strong>Address:</strong> Near Dainik Bhaskar office Industrial area
            Banswara Rajasthan 37001
          </p>
          <p>
            <strong>Call Us:</strong> +91-8000618916, +91-9887392445
          </p>
          <p>
            <strong>Email:</strong>support@bambooanna.com, bambooannaa@gmail.com
          </p>
          <p>
            <strong>Website:</strong> www.bambooanna.com
          </p>
          <div className="socialLinks">
            <a href="https://www.bambooanna.com/">Facebook</a>
            <a href="https://www.instagram.com/bamboo.anna/">Instagram</a>
            <a href="https://www.linkedin.com/in/bamboo-anna-69b279318/">
              LinkedIn
            </a>
          </div>
        </div>

        <div className="enquiryForm">
          <h2>Send Us Your Enquiry</h2>
          <form onSubmit={handleSubmit}>
            <div className="formGroup">
              <label htmlFor="productService">
                Product/Service Looking For:
              </label>
              <input
                type="text"
                id="productService"
                name="productService"
                value={formData.productService}
                onChange={handleChange}
                required
              />
            </div>
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
        </div>
      </div>
      <Popup
        message="Thanks for choosing Bamboo Anna, we'll connect to you soon! Do you want to browser our more products"
        onClose={() => setPopupOpen(false)}
        onConfirm={handleConfirm}
        isOpen={isPopupOpen}
      />
      <Footer />
    </div>
  );
};

export default ContactUs;
