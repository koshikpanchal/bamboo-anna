import { useState } from 'react';
import emailjs from 'emailjs-com';
import Footer from '../common/footer/Footer';
import Header from '../common/header/Header';
import './ContactUs.scss';
import Popup from '../common/pop-up/Popup';
import { useNavigate } from 'react-router-dom';
import ContactUsHelmet from './ContactUsHelmet';
import ContactExperience from './ContactExperience';

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

    const SERVICE_ID = 'service_abn319c';
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
      <div className="contact-page">
        <section className="page-hero">
          <div className="page-hero__inner" data-reveal>
            <span className="eyebrow">Contact</span>
            <h1 className="page-hero__title">Let us build something together</h1>
            <p className="page-hero__subtitle">
              Share your requirements for bamboo essentials, custom branding, or
              bulk orders. Our team will respond quickly.
            </p>
          </div>
        </section>

        <section className="contact-panel">
          <div className="contact-panel__inner">
            <div className="contact-panel__visual" data-reveal>
              <ContactExperience />
              <div className="contact-panel__details">
                <h3>Talk to us directly</h3>
                <p>+91-8000618916, +91-7014779733</p>
                <p>support@bambooannaa.com</p>
                <p>Plot 58/59, industrial area, 1st floor King Bakers building, Dahod road Banswara, Rajasthan</p>
              </div>
            </div>

            <div className="contact-panel__form" data-reveal>
              <h2>Send us your enquiry</h2>
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
                    type="text"
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
                  <textarea
                    id="enquiryDetails"
                    name="enquiryDetails"
                    value={formData.enquiryDetails}
                    onChange={handleChange}
                    required
                    rows={4}
                  ></textarea>
                </div>
                <button type="submit">Submit Enquiry</button>
              </form>
            </div>
          </div>
        </section>
      </div>
      <Popup
        message="Thanks for choosing Bamboo Anna, we'll connect to you soon! Do you want to browse more products?"
        onClose={() => setPopupOpen(false)}
        onConfirm={handleConfirm}
        isOpen={isPopupOpen}
      />
      <Footer />
    </div>
  );
};

export default ContactUs;
