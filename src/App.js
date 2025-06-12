import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Login from "./pages/InicioPrincipal";

//  M   E   N   U
import Inicio from "./pages/Menu/Inicio";
import Ventas from "./pages/Menu/Ventas";
import Compras from "./pages/Menu/Compras";
import Inventario from "./pages/Menu/Inventario";
import Reportes from "./pages/Menu/Reportes";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/menu" element={<Inicio />} />
        <Route path="/ventas" element={<Ventas />} />
        <Route path="/compras" element={<Compras />} />
        <Route path="/inventario" element={<Inventario />} />
        <Route path="/reportes" element={<Reportes />} />
      </Routes>
    </Router>
  );
}

export default App;
