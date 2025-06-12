import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <Link to="/" style={styles.link}>Inicio</Link>
      <Link to="/ventas" style={styles.link}>Ventas</Link>
      <Link to="/compras" style={styles.link}>Compras</Link>
      <Link to="/inventario" style={styles.link}>Inventario</Link>
      <Link to="/reportes" style={styles.link}>Reportes</Link>
    </nav>
  );
};

const styles = {
  nav: {
    backgroundColor: "#333",
    padding: "10px",
    display: "flex",
    justifyContent: "space-around",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "16px",
  }
};

export default Navbar;
