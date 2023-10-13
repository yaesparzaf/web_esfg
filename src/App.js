// App.js (o tu archivo principal)
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./componentes/Navbar";
import Inicio from "./componentes/Inicio";
import Biografia from "./componentes/Biografia";
import Terapias from "./componentes/Terapias";
import Comentarios from "./componentes/Comentarios";
import './estilos.css';
import 'bootstrap/dist/css/bootstrap.css';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/"  element={<Inicio/>} />
        <Route path="/biografia" element={<Biografia/>} />
        <Route path="/terapias" element={<Terapias/>} />
      </Routes>
    </Router>
  );
}

export default App;
