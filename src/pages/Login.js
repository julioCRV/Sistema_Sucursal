import React from "react";

// Cerrar la app si está dentro de Electron
const handleSalir = () => {
  if (window.require) {
    const { remote } = window.require("electron");
    remote.app.quit();
  } else {
    alert("Salir solo funciona dentro de la app de escritorio.");
  }
};

const Login = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Sistema de Sucursal - Licorería</h2>
      <div style={styles.buttonRow}>
        <button style={styles.button}>Login</button>
        <button style={styles.button}>Ingresar</button>
        <button style={{ ...styles.button, backgroundColor: "#8B0000" }} onClick={handleSalir}>
          Salir
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2c2c2c",
    color: "#fff",
  },
  title: {
    fontSize: "24px",
    marginBottom: "30px",
    color: "#D4AF37", // dorado
  },
  buttonRow: {
    display: "flex",
    gap: "20px",
  },
  button: {
    padding: "12px 24px",
    fontSize: "16px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    backgroundColor: "#6A0DAD", // violeta oscuro (tipo vino)
    color: "white",
    transition: "all 0.3s ease",
  },
};

export default Login;
