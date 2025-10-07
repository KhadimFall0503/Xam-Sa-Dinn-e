import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import axios from "axios";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [rubriques, setRubriques] = useState([]);

  const dropdownRef = useRef(null); // ref du dropdown

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/rubriques/")
      .then((res) => setRubriques(res.data))
      .catch((err) => console.error(err));
  }, []);

  // Fermer le dropdown si clic à l'extérieur
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  const renderRubriqueLink = (rub) => (
    <Link
      key={rub.id}
      to={`/rubrique/${rub.id}`}
      className="block px-4 py-2 hover:bg-gray-700 rounded transition"
      onClick={() => {
        setIsDropdownOpen(false);
        setIsOpen(false);
      }}
    >
      {rub.title}
    </Link>
  );

  return (
    <nav className="bg-[#2C2F4A] sticky top-0 w-full z-50 shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 md:px-6 py-4">
        <Link to="/" className="text-white text-2xl font-extrabold">
          XAM SA DINÉE
        </Link>

        {/* Menu desktop */}
        <div className="hidden md:flex space-x-6 text-white font-medium items-center">
          <Link to="/" className="hover:text-gray-300">
            Accueil
          </Link>

          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center hover:text-gray-300 transition"
            >
              Rubriques <ChevronDown size={16} className="ml-1" />
            </button>
            {isDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 bg-[#2C2F4A] shadow-lg rounded-md py-2 w-48">
                {rubriques.length > 0 ? (
                  rubriques.map(renderRubriqueLink)
                ) : (
                  <p className="px-4 py-2 text-gray-400">Aucune rubrique</p>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Burger menu mobile */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menu mobile */}
      {isOpen && (
        <div className="md:hidden bg-[#2C2F4A] text-white px-4 pb-4 space-y-3 container mx-auto transition-all duration-300 ease-in-out">
          <Link
            to="/"
            className="block hover:text-gray-300"
            onClick={() => setIsOpen(false)}
          >
            Accueil
          </Link>

          <div className="space-y-1">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center justify-between w-full hover:text-gray-300"
            >
              Rubriques <ChevronDown size={16} />
            </button>
            {isDropdownOpen && (
              <div className="pl-4">
                {rubriques.length > 0 ? (
                  rubriques.map(renderRubriqueLink)
                ) : (
                  <p className="px-4 py-2 text-gray-400">Aucune rubrique</p>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
