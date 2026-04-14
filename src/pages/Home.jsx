import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="vh-100 d-flex flex-column justify-content-center align-items-center bg-dark text-white">
      
      <h1 className="mb-3">RentaFácil 🚗</h1>
      <p className="mb-4">Alquila vehículos de forma rápida y segura</p>

      <div>
        <Link to="/login" className="btn btn-light m-2">
          Iniciar Sesión
        </Link>

        <Link to="/register" className="btn btn-outline-light m-2">
          Registrarse
        </Link>
      </div>

    </div>
  );
}