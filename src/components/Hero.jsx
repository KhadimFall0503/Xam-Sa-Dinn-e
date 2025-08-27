import React from "react";
import "../styles/Hero.css";
import fondImage from "../assets/fond.JPG";

function Hero() {
  return (
    <div
      className="hero-section d-flex flex-column justify-content-center align-items-center text-center text-white"
      style={{ backgroundImage: `url(${fondImage})` }}
    >
      <div className="hero-overlay"></div>
      <h1 className="hero-title display-3 fw-bold fst-italic mb-3 animate-fade-in">
        "Samay binde ñooy sama karaama"
      </h1>
      <p className="hero-subtitle fs-5 animate-fade-in delay-1s">
        Découvrez la sagesse et la spiritualité à travers nos contenus.
      </p>
    </div>
  );
}

export default Hero;
