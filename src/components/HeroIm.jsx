import React from "react";
import image1 from "../assets/assadoul.png";
import image2 from "../assets/hamza.jpg";

function HeroIm() {
  return (
    <div className="max-w-7xl mx-auto py-6 px-4 ">
      <figure className="hover-gallery max-w-md mx-auto relative">
        <img
          src={image1}
          alt="Hero 1"
          className="w-full h-80 object-cover rounded-xl shadow-lg transition-transform duration-500 hover:scale-105"
        />
        <img
          src={image2}
          alt="Hero 2"
          className="w-full h-80 object-cover rounded-xl shadow-lg transition-transform duration-500 hover:scale-105"
        />
      </figure>
    </div>
  );
}

export default HeroIm;
