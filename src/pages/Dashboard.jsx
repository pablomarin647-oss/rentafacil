import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUsuarios, getVehiculos, getReservas } from "../services/storage";

export default function Dashboard() {
  const navigate = useNavigate();

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
      <h1>📊 Dashboard Renta Fácil</h1>

      {/* BOTONES CLAROS (LO MÁS IMPORTANTE) */}
      <div style={styles.actions}>
        <button style={styles.btn} onClick={() => navigate("/usuarios")}>
          ➕ Registrar Usuario
        </button>

        <button style={styles.btn} onClick={() => navigate("/vehiculos")}>
          🚗 Registrar Vehículo
        </button>

        <button style={styles.btn} onClick={() => navigate("/reservas")}>
          📅 Crear Reserva
        </button>
      </div>

      {/* TARJETAS */}
      <div style={styles.grid}>
        <div style={styles.card}>
          <h2>Usuarios</h2>
          <p>{usuarios.length}</p>
        </div>

        <div style={styles.card}>
          <h2>Vehículos</h2>
          <p>{vehiculos.length}</p>
        </div>

        <div style={styles.card}>
          <h2>Reservas</h2>
          <p>{reservas.length}</p>
        </div>
      </div>

      {/* GUÍA PROFE */}
      <div style={styles.info}>
        <h3>ℹ️ Instrucciones</h3>
        <p>
          Usa los botones superiores para registrar usuarios, vehículos y crear reservas.
        </p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
    fontFamily: "Arial",
    background: "#f5f6f8",
    minHeight: "100vh"
  },

  actions: {
    display: "flex",
    gap: "10px",
    marginBottom: "20px",
    flexWrap: "wrap"
  },

  btn: {
    padding: "10px 15px",
    border: "none",
    borderRadius: "8px",
    background: "#2563eb",
    color: "white",
    cursor: "pointer",
    fontSize: "14px"
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
    gap: "15px"
  },

  card: {
    background: "white",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    textAlign: "center"
  },

  info: {
    marginTop: "20px",
    background: "#fff",
    padding: "15px",
    borderRadius: "10px"
  }
};