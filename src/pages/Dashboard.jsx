import { getUsuarios, getVehiculos, getReservas } from "../services/storage";

export default function Dashboard() {
  return (
    <div className="container">
      <h2>Dashboard</h2>

      <div className="dashboard">
        <div className="card">
          👤 Usuarios<br />
          {getUsuarios().length}
        </div>

        <div className="card">
          🚗 Vehículos<br />
          {getVehiculos().length}
        </div>

        <div className="card">
          📅 Reservas<br />
          {getReservas().length}
        </div>
      </div>
    </div>
  );
}