import React, { useState } from "react";
import "./InicioPrincipal.css";
import { useNavigate } from "react-router-dom";

const handleSalir = () => {
  if (window.require) {
    const { remote } = window.require("@electron/remote");
    remote.app.quit();
  } else {
    alert("Salir solo funciona dentro de la app de escritorio.");
  }
};

const InicioPrincipal = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [credentials, setCredentials] = useState({ usuario: "", password: "" });
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState(""); // success | error

  const handleLogin = () => {
    setCredentials({ usuario: "", password: "" });
    setMessage("");
    setShowModal(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = () => {
    const { usuario, password } = credentials;

    if (!usuario || !password) {
      setMessage("Por favor completa todos los campos.");
      setMessageType("error");
      return;
    }

    // Credenciales ficticias para validar
    if (usuario === "admin" && password === "1234") {
      setMessage("¡Inicio de sesión exitoso!");
      setMessageType("success");
      setTimeout(() => {
        setShowModal(false);
        navigate('/menu')
      }, 1600); 
    } else {
      setMessage("Usuario o contraseña incorrectos.");
      setMessageType("error");
    }

    // Limpiar mensaje después de 3 segundos
    setTimeout(() => {
      setMessage("");
      setMessageType("");
    }, 3000);
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Sistema de Sucursal - Licorería</h2>

      <div className="login-button-row">
        <button className="login-button" onClick={handleLogin}>Login</button>
        <button className="login-button">Ingresar</button>
        <button className="login-button salir" onClick={handleSalir}>Salir</button>
      </div>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Iniciar Sesión</h3>
            <input
              type="text"
              name="usuario"
              placeholder="Usuario"
              value={credentials.usuario}
              onChange={handleChange}
              className="modal-input"
            />
            <input
              type="password"
              name="password"
              placeholder="Contraseña"
              value={credentials.password}
              onChange={handleChange}
              className="modal-input"
            />

            {message && (
              <div className={`login-message ${messageType}`}>
                {message}
              </div>
            )}
            <div className="modal-buttons">
              <button className="modal-button" onClick={handleSubmit}>Aceptar</button>
              <button className="modal-button cancelar" onClick={() => setShowModal(false)}>Cancelar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InicioPrincipal;
