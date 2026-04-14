import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>

      {/* HERO */}
      <div className="bg-dark text-white text-center py-5">
        <h1 className="display-4">RentaFácil 🚗</h1>
        <p className="lead">
          Alquila vehículos de forma rápida, segura y confiable
        </p>

        <div className="mt-4">
          <Link to="/login" className="btn btn-light m-2">
            Iniciar Sesión
          </Link>

          <Link to="/register" className="btn btn-outline-light m-2">
            Registrarse
          </Link>
        </div>
      </div>

      {/* SECCIÓN SERVICIOS */}
      <div className="container text-center mt-5">
        <h2 className="mb-4">¿Qué puedes hacer?</h2>

        <div className="row">
          <div className="col-md-4">
            <div className="card shadow p-3">
              <h5>🚗 Alquiler de Vehículos</h5>
              <p>Gestiona y alquila vehículos fácilmente</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow p-3">
              <h5>👤 Gestión de Usuarios</h5>
              <p>Administra los usuarios del sistema</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow p-3">
              <h5>📅 Reservas</h5>
              <p>Controla las reservas en tiempo real</p>
            </div>
          </div>
        </div>
      </div>

      {/* SECCIÓN INFO */}
      <div className="bg-light text-center py-5 mt-5">
        <h3>¿Por qué elegir RentaFácil?</h3>
        <p className="mt-3">
          Plataforma sencilla, rápida y diseñada para facilitar el alquiler de vehículos.
        </p>
      </div>

      {/* FOOTER */}
      <div className="bg-dark text-white text-center py-3">
        <p className="mb-0">© 2026 RentaFácil - Todos los derechos reservados</p>
      </div>

    </div>
  );
}