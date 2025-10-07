import React from "react";
import {
  FaInstagram,
  FaWhatsapp,
  FaTelegramPlane,
  FaTiktok,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 mt-10">
      <div className="max-w-6xl mx-auto text-center px-4">
        <h5 className="text-xl md:text-2xl font-bold mb-3">Contactez-nous</h5>
        <p className="mb-6 text-gray-300">
          Téléphone : <strong>+221 77 345 79 34</strong>
        </p>

        <h6 className="text-lg font-semibold mb-4">
          Suivez-nous sur les réseaux sociaux
        </h6>
        <div className="flex justify-center gap-4 mb-6">
          <a
            href="#"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-[#E1306C] hover:scale-110 transition-transform"
          >
            <FaInstagram size={20} />
          </a>
          <a
            href="#"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-[#25D366] hover:scale-110 transition-transform"
          >
            <FaWhatsapp size={20} />
          </a>
          <a
            href="#"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-[#0088cc] hover:scale-110 transition-transform"
          >
            <FaTelegramPlane size={20} />
          </a>
          <a
            href="#"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-black hover:scale-110 transition-transform"
          >
            <FaTiktok size={20} />
          </a>
        </div>

        <hr className="border-gray-700 opacity-50 mb-4" />
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Xam Sa Dinée. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
