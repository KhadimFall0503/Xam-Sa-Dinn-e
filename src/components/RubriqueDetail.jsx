import React, { useEffect, useState, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function ContenuCard({ contenu }) {
  const getThumbnail = (videoUrl) => {
    if (!videoUrl) return null;
    const match = videoUrl.match(/(?:v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
    return match
      ? `https://img.youtube.com/vi/${match[1]}/hqdefault.jpg`
      : null;
  };

  const thumbnail = getThumbnail(contenu.video_url);

  return (
    <div className="flex">
      <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col w-full hover:shadow-xl transition">
        {thumbnail ? (
          <img
            src={thumbnail}
            alt={contenu.title}
            className="w-full h-48 object-cover cursor-pointer"
            onClick={() => window.open(contenu.video_url, "_blank")}
          />
        ) : contenu.video_url ? (
          <div className="relative aspect-video">
            <iframe
              src={contenu.video_url}
              title={contenu.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full"
              referrerPolicy="strict-origin-when-cross-origin"
            ></iframe>
          </div>
        ) : null}

        <div className="p-4 flex flex-col">
          <h5 className="text-center font-bold text-lg mb-2">
            {contenu.title}
          </h5>
          <p className="text-gray-600 flex-grow">{contenu.text_content}</p>
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

  const filteredContenus = useMemo(() => {
    if (!rubrique?.contenus) return [];
    return rubrique.contenus.filter(
      (contenu) =>
        contenu.title.toLowerCase().includes(search.toLowerCase()) ||
        (contenu.text_content &&
          contenu.text_content.toLowerCase().includes(search.toLowerCase()))
    );
  }, [rubrique, search]);

  if (loading) return <p className="text-center mt-12">Chargement...</p>;
  if (!rubrique)
    return <p className="text-center mt-12">Rubrique non trouvée.</p>;

  return (
    <div className="max-w-6xl mx-auto px-4 mt-12">
      <button
        className="mb-6 px-4 py-2 border border-gray-800 rounded-full text-gray-800 hover:bg-gray-800 hover:text-white transition"
        onClick={() => navigate(-1)}
      >
        ← Retour
      </button>

      <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
        {rubrique.title}
      </h2>

      <div className="mb-6">
        <input
          type="text"
          className="w-full px-4 py-2 rounded-full shadow-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
          placeholder="Filtrer les contenus..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {filteredContenus.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {filteredContenus.map((contenu) => (
            <ContenuCard key={contenu.id} contenu={contenu} />
          ))}
        </div>
      ) : (
        <p className="text-gray-500 text-center">
          Aucun contenu correspondant.
        </p>
      )}
    </div>
  );
}

export default RubriqueDetail;
