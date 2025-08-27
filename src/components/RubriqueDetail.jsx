import React, { useEffect, useState, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/RubriqueDetail.css";

// Composant pour un contenu individuel
function ContenuCard({ contenu }) {
  return (
    <div className="col d-flex">
      <div className="card shadow-sm h-100 w-100">
        {contenu.video_url && (
          <div className="ratio ratio-16x9">
            <iframe
              src={contenu.video_url}
              title={contenu.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            ></iframe>
          </div>
        )}
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{contenu.title}</h5>
          <p className="card-text flex-grow-1">{contenu.text_content}</p>
        </div>
      </div>
    </div>
  );
}

function RubriqueDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [rubrique, setRubrique] = useState(null);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchRubrique = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8000/api/rubriques/${id}/`
        );
        setRubrique(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchRubrique();
  }, [id]);

  // Optimisation : filtrage des contenus uniquement lorsque search ou rubrique change
  const filteredContenus = useMemo(() => {
    if (!rubrique?.contenus) return [];
    return rubrique.contenus.filter(
      (contenu) =>
        contenu.title.toLowerCase().includes(search.toLowerCase()) ||
        (contenu.text_content &&
          contenu.text_content.toLowerCase().includes(search.toLowerCase()))
    );
  }, [rubrique, search]);

  if (loading) return <p className="text-center mt-5">Chargement...</p>;
  if (!rubrique)
    return <p className="text-center mt-5">Rubrique non trouvée.</p>;

  return (
    <div className="container mt-5 pt-5">
      <button className="btn btn-secondary mb-4" onClick={() => navigate(-1)}>
        ← Retour
      </button>

      <h2 className="mb-4 rubrique-title text-center">{rubrique.title}</h2>

      {/* Champ de recherche */}
      <div className="mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="Filtrer les contenus..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {filteredContenus.length > 0 ? (
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {filteredContenus.map((contenu) => (
            <ContenuCard key={contenu.id} contenu={contenu} />
          ))}
        </div>
      ) : (
        <p className="text-muted text-center">Aucun contenu correspondant.</p>
      )}
    </div>
  );
}

export default RubriqueDetail;
