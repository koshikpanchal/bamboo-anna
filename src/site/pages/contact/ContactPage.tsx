import { useState } from 'react';
import emailjs from 'emailjs-com';
import './ContactPage.scss';
import Seo from '../../seo/Seo';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    productService: '',
    name: '',
    email: '',
    address: '',
    phone: '',
    enquiryDetails: '',
  });
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const mapAddress = encodeURIComponent(
    'Plot 58/59, Industrial Area, 1st Floor King Bakers Building, Dahod Road, Banswara, Rajasthan 327001'
  );

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
    setStatus('idle');

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
        setStatus('success');
        setFormData({
          productService: '',
          name: '',
          email: '',
          address: '',
          phone: '',
          enquiryDetails: '',
        });
      })
      .catch(() => {
        setStatus('error');
      });
  };

  return (
    <div className="contact-page">
      <Seo
        title="Contact Bamboo Anna"
        description="Share your requirements for bamboo essentials, custom branding, or bulk orders. Contact the Bamboo Anna team in Rajasthan."
        keywords={[
          'contact bamboo anna',
          'bamboo essentials enquiry',
          'custom branding',
          'bulk orders',
          'bamboo supplier',
          'Rajasthan',
        ]}
        canonicalPath="/contact"
        image="/LogoColor.png"
      />
      <section className="page-hero">
        <div className="page-hero__inner" data-reveal>
          <span className="chip">Contact</span>
          <h1>Tell us what you want to build.</h1>
          <p>
            Share your requirements for bamboo essentials, custom branding, or
            bulk orders. We respond within 48 hours.
          </p>
        </div>
      </section>

      <section className="contact-panel section">
        <div className="section__inner contact-panel__inner">
          <div className="contact-info" data-reveal>
            <h2>Direct contact</h2>
            <p>+91-8000618916, +91-7014779733</p>
            <p>support@bambooannaa.com</p>
            <p>Plot 58/59, industrial area, 1st floor King Bakers building, Dahod road Banswara, Rajasthan</p>

            <div className="contact-info__card">
              <h3>Business hours</h3>
              <p>Monday - Saturday, 10:00 AM - 6:00 PM</p>
              <p>Sunday: By appointment only</p>
            </div>

            <iframe
              className="contact-map"
              src={`https://www.google.com/maps?q=${mapAddress}&output=embed`}
              loading="lazy"
              title="Bamboo Anna location"
            ></iframe>
          </div>

          <div className="contact-form" data-reveal>
            <h2>Send us your enquiry</h2>
            <form onSubmit={handleSubmit}>
              <div className="formGroup">
                <label htmlFor="productService">Product or service</label>
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
                <label htmlFor="name">Your name</label>
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
                <label htmlFor="email">Email</label>
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
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                />
              </div>
              <div className="formGroup">
                <label htmlFor="phone">Phone</label>
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
                <label htmlFor="enquiryDetails">Enquiry details</label>
                <textarea
                  id="enquiryDetails"
                  name="enquiryDetails"
                  value={formData.enquiryDetails}
                  onChange={handleChange}
                  required
                  rows={4}
                ></textarea>
              </div>
              <button type="submit" className="btn btn--primary">
                Submit enquiry
              </button>
              {status === 'success' && (
                <p className="form-status success">
                  Thank you. We will reach out shortly.
                </p>
              )}
              {status === 'error' && (
                <p className="form-status error">
                  Something went wrong. Please try again.
                </p>
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
