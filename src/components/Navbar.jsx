import React from "react";
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();

  const navigateTo = (ruta) => {
    navigate(ruta); // Puedes pasar la ruta como argumento
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-links bg-body-tertiary">
      <div className="container-fluid">
        <button onClick={() => navigate("/")} className="navbar-brand">
          LOGO
        </button>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <button onClick={() => navigate("/")} className="nav-link">
                INICIO
              </button>
            </li>
            <li className="nav-item">
              <button onClick={() => navigate("/biografia")} className="nav-link">
                BIOGRAFÍA
              </button>
            </li>
            <li className="nav-item">
              <button onClick={() => navigate("/terapias")} className="nav-link">
                TERAPIAS
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
