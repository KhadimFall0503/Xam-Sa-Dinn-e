import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css"; // <-- c’est ici que Tailwind est appliqué

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
