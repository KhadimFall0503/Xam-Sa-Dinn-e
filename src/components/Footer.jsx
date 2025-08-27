import React from "react";
import {
  FaInstagram,
  FaWhatsapp,
  FaTelegramPlane,
  FaTiktok,
} from "react-icons/fa";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="bg-footer text-center text-white py-4 mt-5">
      <div className="container">
        <p className="mb-2">
          Vous pouvez nous contacter sur ce numéro <strong>773457934</strong>
        </p>
        <p className="mb-3 fw-bold">Liens pour intégrer nos réseaux</p>
        <div className="d-flex justify-content-center gap-3">
          {/* Instagram */}
          <a
            href="#"
            className="btn rounded-circle d-flex align-items-center justify-content-center"
            style={{
              backgroundColor: "#E1306C",
              color: "white",
              width: "40px",
              height: "40px",
            }}
          >
            <FaInstagram size={20} />
          </a>
          {/* WhatsApp */}
          <a
            href="#"
            className="btn rounded-circle d-flex align-items-center justify-content-center"
            style={{
              backgroundColor: "#25D366",
              color: "white",
              width: "40px",
              height: "40px",
            }}
          >
            <FaWhatsapp size={20} />
          </a>
          {/* Telegram */}
          <a
            href="#"
            className="btn rounded-circle d-flex align-items-center justify-content-center"
            style={{
              backgroundColor: "#0088cc",
              color: "white",
              width: "40px",
              height: "40px",
            }}
          >
            <FaTelegramPlane size={20} />
          </a>
          {/* TikTok */}
          <a
            href="#"
            className="btn rounded-circle d-flex align-items-center justify-content-center"
            style={{
              backgroundColor: "black",
              color: "white",
              width: "40px",
              height: "40px",
            }}
          >
            <FaTiktok size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
