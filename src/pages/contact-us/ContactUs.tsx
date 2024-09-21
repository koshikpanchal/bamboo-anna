import { useState } from "react";
import emailjs from "emailjs-com";
import Footer from "../common/footer/Footer";
import Header from "../common/header/Header";
import "./ContactUs.scss";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    productService: "",
    name: "",
    email: "",
    country: "",
    phone: "",
    enquiryDetails: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Replace these with your actual EmailJS credentials
    const SERVICE_ID = "service_hsdygcv";
    const TEMPLATE_ID = "template_4j6evhm";
    const USER_ID = "jAyaoCWoTkUntJywb";

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, formData, USER_ID)
      .then((response) => {
        alert("Enquiry sent successfully!");
        setFormData({
          productService: "",
          name: "",
          email: "",
          country: "",
          phone: "",
          enquiryDetails: "",
        });
      })
      .catch((error) => {
        console.error("Failed to send enquiry:", error);
        alert("Failed to send enquiry. Please try again.");
      });
  };

  return (
    <div>
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
            <strong>Email:</strong> bambooannaa@gmail.com
          </p>
          <p>
            <strong>Website:</strong> www.bambooanna.in
          </p>
          <div className="socialLinks">
            <a href="https://www.bambooanna.in/">Facebook</a>
            <a href="https://www.instagram.com/bamboo.anna/">Instagram</a>
            <a href="https://www.bambooanna.in/">LinkedIn</a>
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
              <label htmlFor="country">Select Country:</label>
              <select
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                required
              >
                <option value="">Select Country</option>
                <option value="India">India</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
                <option value="Australia">Australia</option>
                <option value="Canada">Canada</option>
              </select>
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
                name="messge"
                value={formData.enquiryDetails}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit">Submit Enquiry</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
