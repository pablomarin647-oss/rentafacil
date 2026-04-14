import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="container mt-5 text-center">
      <h1 className="mb-4">Panel Principal</h1>

      <div className="row">
        <div className="col-md-4">
          <div className="card shadow p-3">
            <h5>Vehículos</h5>
            <Link to="/vehiculos" className="btn btn-dark">
              Ir
            </Link>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow p-3">
            <h5>Usuarios</h5>
            <Link to="/usuarios" className="btn btn-dark">
              Ir
            </Link>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow p-3">
            <h5>Reservas</h5>
            <Link to="/reservas" className="btn btn-dark">
              Ir
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}