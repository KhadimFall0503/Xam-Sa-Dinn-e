import React, { useEffect, useState } from "react";
import { Search } from "lucide-react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../styles/Navbar.css";

function Navbar() {
  const [rubriques, setRubriques] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/rubriques/")
      .then((res) => setRubriques(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-glass">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">
          XAM SA DIINEE
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Accueil
              </Link>
            </li>

            {/* Dropdown dynamique des rubriques */}
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Rubriques
              </Link>
              <ul className="dropdown-menu">
                {rubriques.map((rub) => (
                  <li key={rub.id}>
                    <Link className="dropdown-item" to={`/rubrique/${rub.id}`}>
                      {rub.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>

            {/* Search */}
            <li className="nav-item ms-3">
              <Link className="nav-link search-icon" to="#search">
                <Search size={22} color="white" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
