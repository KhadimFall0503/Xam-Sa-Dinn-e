import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/Rubrique.css";

function Rubrique() {
  const [rubriques, setRubriques] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/rubriques/")
      .then((res) => setRubriques(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="rubrique-section pt-5 mb-5">
      <h2 className="text-center display-5 fw-semibold mb-5">
        Découvrez nos Rubriques
      </h2>
      <div className="container">
        <div className="row g-4 justify-content-center">
          {rubriques.map((rub) => (
            <div
              className="col-10 col-sm-6 col-md-4 col-lg-3 d-flex"
              key={rub.id}
            >
              <div className="rubrique-card shadow-sm d-flex flex-column">
                <div className="rubrique-img-wrapper position-relative">
                  <img
                    src={rub.image_url}
                    alt={rub.title}
                    className="rubrique-img"
                  />
                  <div className="rubrique-overlay"></div>
                </div>
                <div className="card-body mt-auto">
                  <a
                    href={`/rubrique/${rub.id}`}
                    className="btn btn-dark w-100"
                  >
                    {rub.title}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Rubrique;
