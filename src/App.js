// App.js (o tu archivo principal)
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Inicio from "./components/Inicio";
import Biografia from "./components/Biografia";
import Terapias from "./components/Terapias";
import './styles/estilos.css';
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
