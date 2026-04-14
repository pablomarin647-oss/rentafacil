export default function Dashboard() {
  return (
    <div className="container mt-5 text-center">
      <h1 className="mb-4">Panel Principal</h1>

      <div className="row">
        <div className="col-md-4">
          <div className="card shadow p-3">
            <h5>Vehículos</h5>
            <a href="/vehiculos" className="btn btn-dark">Ir</a>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow p-3">
            <h5>Usuarios</h5>
            <a href="/usuarios" className="btn btn-dark">Ir</a>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow p-3">
            <h5>Reservas</h5>
            <a href="/reservas" className="btn btn-dark">Ir</a>
          </div>
        </div>
      </div>
    </div>
  );
}