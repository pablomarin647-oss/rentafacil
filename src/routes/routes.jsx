import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import Usuario from "../pages/Usuarios";
import Vehiculo from "../pages/Vehiculos";
import Reservas from "../pages/Reservas";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/usuarios" element={<Usuario />} />
      <Route path="/vehiculos" element={<Vehiculo />} />
      <Route path="/reservas" element={<Reservas />} />
    </Routes>
  );
}