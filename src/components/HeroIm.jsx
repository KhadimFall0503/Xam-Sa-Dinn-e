import React from "react";
import image1 from "../assets/assadoul.png";
import "../styles/HeroIm.css";

function HeroIm() {
  return (
    <div className="hero-im-wrapper container pt-4">
      <div className="hero-image d-flex justify-content-lg-start justify-content-center">
        <img src={image1} alt="Hero" className="img-fluid hero-img" />
      </div>
    </div>
  );
}

export default HeroIm;
