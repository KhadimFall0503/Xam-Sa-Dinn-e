import React, { useEffect, useState } from "react";
import axios from "axios";

function Rubrique() {
  const [rubriques, setRubriques] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/rubriques/")
      .then((res) => setRubriques(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="py-20 mt-5 bg-gray-50 border-2 border-gray-300 rounded-lg mx-4">
      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
        Découvrez nos Rubriques
      </h2>
      <div className="max-w-6xl mx-auto px-4 grid gap-10 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
        {rubriques.map((rub) => (
          <div
            key={rub.id}
            className="bg-white shadow-md overflow-hidden flex flex-col hover:shadow-xl transition-shadow transform hover:scale-105"
          >
            {/* Image */}
            <div className="relative">
              <img
                src={rub.image_url}
                alt={rub.title}
                className="w-full h-64 md:h-72 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 hover:bg-opacity-30 transition"></div>
            </div>

            {/* Espace entre l'image et le bouton */}
            <div className="flex flex-col">
              <a
                href={`/rubrique/${rub.id}`}
                className="bg-[#2C2F4A] text-white text-center py-3 font-medium hover:bg-gray-700 transition text-lg"
              >
                {rub.title}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Rubrique;
