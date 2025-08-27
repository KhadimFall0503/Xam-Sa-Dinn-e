import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HeroIm from "./components/HeroIm";
import About from "./components/About";
import Rubrique from "./components/Rubrique";
import RubriqueDetail from "./components/RubriqueDetail";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <HeroIm />
              <About />
              <Rubrique />
            </>
          }
        />
        <Route path="/rubrique/:id" element={<RubriqueDetail />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
