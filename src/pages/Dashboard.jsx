import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="container">
      <h2>Dashboard</h2>

      <div className="dashboard">
        <Link to="/usuarios">
          <button>Registrar Usuarios</button>
        </Link>

        <Link to="/vehiculos">
          <button>Registrar Vehículos</button>
        </Link>

        <Link to="/reservas">
          <button>Hacer Reservas</button>
        </Link>
      </div>
    </div>
  );
}