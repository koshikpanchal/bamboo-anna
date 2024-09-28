import React from "react";
import "./Popup.scss";

interface PopupProps {
  message: string;
  onClose: () => void;
  onConfirm: () => void;
  isOpen: boolean;
}

const Popup: React.FC<PopupProps> = ({
  message,
  onClose,
  onConfirm,
  isOpen,
}) => {
  if (!isOpen) return null; // Do not render if popup is not open

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h3>{message}</h3>
        <div className="popup-buttons">
          <button className="btn-ok" onClick={onConfirm}>
            OK
          </button>
          <button className="btn-cancel" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
