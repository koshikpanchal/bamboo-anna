import "./FloatingWhatsAppButton.scss";

const FloatingWhatsAppButton = () => {
  const phoneNumber = "+91800618916";

  const openWhatsApp = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <button className="floating-whatsapp-button" onClick={openWhatsApp}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/5/5e/WhatsApp_icon.png"
        alt="WhatsApp"
      />
    </button>
  );
};

export default FloatingWhatsAppButton;
