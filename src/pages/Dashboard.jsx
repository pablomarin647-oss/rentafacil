import { useEffect, useState } from "react";
import { getUsuarios, getVehiculos, getReservas } from "../services/storage";

export default function Dashboard() {
  const [usuarios, setUsuarios] = useState([]);
  const [vehiculos, setVehiculos] = useState([]);
  const [reservas, setReservas] = useState([]);

  useEffect(() => {
    setUsuarios(getUsuarios());
    setVehiculos(getVehiculos());
    setReservas(getReservas());
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>📊 Dashboard Renta Fácil</h1>

      <div style={styles.grid}>
        <div style={{ ...styles.card, background: "#2563eb" }}>
          <h2>👤 Usuarios</h2>
          <p style={styles.number}>{usuarios.length}</p>
        </div>

        <div style={{ ...styles.card, background: "#16a34a" }}>
          <h2>🚗 Vehículos</h2>
          <p style={styles.number}>{vehiculos.length}</p>
        </div>

        <div style={{ ...styles.card, background: "#f59e0b" }}>
          <h2>📅 Reservas</h2>
          <p style={styles.number}>{reservas.length}</p>
        </div>
      </div>

      <div style={styles.section}>
        <h2>🔥 Resumen rápido</h2>
        <p>
          Bienvenido al sistema de <b>Renta Fácil</b>. Aquí puedes gestionar
          usuarios, vehículos y reservas de forma rápida y sencilla.
        </p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    background: "#f4f6f8",
    minHeight: "100vh"
  },
  title: {
    marginBottom: "20px"
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "15px"
  },
  card: {
    color: "white",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
  },
  number: {
    fontSize: "32px",
    fontWeight: "bold",
    marginTop: "10px"
  },
  section: {
    marginTop: "30px",
    background: "white",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
  }
};