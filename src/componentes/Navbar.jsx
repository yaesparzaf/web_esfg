import React from "react";

export default function Navbar() {
  return (
    <body class="p-3 m-0 border-0 bd-example m-0 border-0">
      <nav class="navbar navbar-expand-lg navbar-links bg-body-tertiary">
        <div class="contenedor-links">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  INICIO
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  TERAPIAS
                </a>
              </li>
              <a class="navbar-brand" href="#">
                LOGO
              </a>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  BIOGRAFÍA
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </body>
  );
}
