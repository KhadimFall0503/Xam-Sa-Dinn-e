import React, { useState, useEffect } from "react";
import fond1 from "../assets/fond.JPG";
import fond2 from "../assets/Fall.jpg";
import fond3 from "../assets/hamza.jpg";

function Hero() {
  const slides = [
    {
      image: fond1,
      title: "“Samay binde ñooy sama karaama”",
      subtitle:
        "Découvrez la sagesse et la spiritualité à travers nos contenus.",
    },
    {
      image: fond2,
      title: "“La patience est la clé du succès”",
      subtitle: "Apprenez à trouver l'équilibre dans votre quotidien.",
    },
    {
      image: fond3,
      title: "“Chaque pas compte dans le chemin spirituel”",
      subtitle: "Inspirez-vous et progressez chaque jour.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Changement automatique toutes les 5 secondes
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden">
      {/* Images du carrousel */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100 z-10" : "opacity-50 z-0"
          }`}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Overlay inversé */}
          <div
            className={`absolute inset-0 bg-black transition-opacity duration-1000 ${
              index === currentIndex ? "bg-opacity-50" : "bg-opacity-10"
            }`}
          ></div>
        </div>
      ))}

      {/* Overlay global dégradé sombre */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>

      {/* Contenu principal */}
      <div className="relative z-20 px-6 max-w-3xl transition-opacity duration-1000">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold italic mb-6 drop-shadow-lg animate-fade-in">
          {slides[currentIndex].title}
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-6 drop-shadow-md animate-fade-in delay-200">
          {slides[currentIndex].subtitle}
        </p>
      </div>
    </section>
  );
}

export default Hero;
