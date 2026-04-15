const guardar = () => {
  if (!form.nombre || !form.documento || !form.telefono) return;

  let data = [...usuarios];

  if (editId !== null) {
    data = data.map((u) =>
      u.id === editId ? { ...form, id: editId } : u
    );
  } else {
    data.push({ id: Date.now(), ...form });
  }

  saveUsuarios(data);
  setUsuarios(data);
  setForm({ nombre: "", documento: "", telefono: "" });
  setEditId(null);
};