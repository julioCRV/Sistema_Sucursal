import React from "react";
import "./Inicio.css";
import { useNavigate } from "react-router-dom";

const Inicio = () => {
  const navigate = useNavigate();
  const handleOpcion = (opcion) => {
    alert(`Seleccionaste: ${opcion}`);
    // Aquí puedes navegar o mostrar la vista correspondiente
  };

  const onBack = () => {
    navigate('/')
  }

  return (
    <div className="inicio-container">
      <h2 className="inicio-title">Panel Principal</h2>
      <div className="opciones-grid">
        <button className="opcion-card" onClick={() => handleOpcion("Compras")}>
          🛒 Compras
        </button>
        <button className="opcion-card" onClick={() => handleOpcion("Inventario")}>
          📦 Inventario
        </button>
        <button className="opcion-card" onClick={() => handleOpcion("Ventas")}>
          💰 Ventas
        </button>
        <button className="opcion-card" onClick={() => handleOpcion("Reportes")}>
          📊 Reportes
        </button>
      </div>

      <button className="atras-button" onClick={onBack}>⬅ Atrás</button>
    </div>
  );
};

export default Inicio;
