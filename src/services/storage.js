export const getUsuarios = () =>
  JSON.parse(localStorage.getItem("usuarios")) || [];

export const getVehiculos = () =>
  JSON.parse(localStorage.getItem("vehiculos")) || [];

export const getReservas = () =>
  JSON.parse(localStorage.getItem("reservas")) || [];

export const saveUsuarios = (data) =>
  localStorage.setItem("usuarios", JSON.stringify(data));

export const saveVehiculos = (data) =>
  localStorage.setItem("vehiculos", JSON.stringify(data));

export const saveReservas = (data) =>
  localStorage.setItem("reservas", JSON.stringify(data));