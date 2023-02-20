import React, { useState, useEffect, useRef } from "react";
import "./facts.css";
const API = process.env.REACT_APP_API;

function App() {
  const [nfac, setNfac] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [monto, setMonto] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [contacto, setContacto] = useState("");
  const [ingreso, setIngreso] = useState("");
  const [totalfac, setTotalfac]=useState("");
  ////////////////////////////////////////////////////
  const [editing, setEditing] = useState(false);
  const [id, setId] = useState("");

  const nameInput = useRef(null);

  let [factras, setFactras] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!editing) {
      const res = await fetch(`${API}/facts`, {
        method: "PUT",
        
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nfac,
          empresa,
          monto,
          ciudad,
          contacto,
          ingreso,
          totalfac,

        }),
      });
     
    } else {
      const res = await fetch(`${API}/facts/${id}`, {
        method: "PUT",
      
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nfac,
          empresa,
          monto,
          ciudad,
          contacto,
          ingreso,
          totalfac,
          
        }),
      });
      const data = await res.json();
      console.log(data);
      setEditing(false);
      setId("");
    }
    await getFactras();

    setNfac("");
    setEmpresa("");
    setMonto("");
    setCiudad("");
    setContacto("");
    setIngreso("");
    setTotalfac("");
    nameInput.current.focus();
  };

  const getFactras = async () => {
    const res = await fetch(`${API}/facts`);
    const data = await res.json();
    setFactras(data);
  };

  const deleteUser = async (id) => {
    const userResponse = window.confirm("Seguro deseas eliminar esta factura?");
    if (userResponse) {
      const res = await fetch(`${API}/facts/${id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      console.log(data);
      await getFactras();
    }
  };

  const editUser = async (id) => {
    const res = await fetch(`${API}/facts/${id}`);
    const data = await res.json();

    setEditing(true);
    setId(id);

    // Reset
    setNfac(data.nfac);
    setEmpresa(data.empresa);
    setMonto(data.monto);
    setCiudad(data.ciudad);
    setContacto(data.contacto);
    setIngreso(data.ingreso);
    setTotalfac(data.totalfac);
    nameInput.current.focus();
  };

  useEffect(() => {
    getFactras();
  }, []);

  return (
    <div className="row">
      <div className="col-md-4">
        <form onSubmit={handleSubmit} className="card card-body">
          <h5>Facturas</h5>
          <div className="form-group2">
            <input
              type="number"
              onChange={(e) => setNfac(e.target.value)}
              value={nfac}
              className="form-control2"
              placeholder="Nº Factura"
              ref={nameInput}
              autoFocus
            />
          </div>
          <div className="form-group2">
            <input
              type="text"
              onChange={(e) => setEmpresa(e.target.value)}
              value={empresa}
              className="form-control"
              placeholder="Nombre empresa"
            />
          </div>
          <div className="form-group2">
            <input
              type="number"
              onChange={(e) => setMonto(e.target.value)}
              value={monto}
              className="form-control"
              placeholder="Monto"
            />
          </div>
          <div className="form-group2">
            <input
              type="text"
              onChange={(e) => setCiudad(e.target.value)}
              value={ciudad}
              className="form-control"
              placeholder="Sucursal"
            />
          </div>
          <div className="form-group2">
            <input
              type="number"
              onChange={(e) => setContacto(e.target.value)}
              value={contacto}
              className="form-control"
              placeholder="Contacto"
            />

            <input
              type="text"
              onChange={(e) => setIngreso(e.target.value)}
              value={ingreso}
              maxLength="2"
              className="form-control"
              placeholder="Ingresada?"
            />
             <input
              type="text"
              onChange={(e) => setTotalfac(e.target.value)}
              value={totalfac}
              className="form-control"
              placeholder="Recibio el total de la factura? *Opcional*"
            />
          </div>
          <button className="custom-btn">
            {editing ? "Editar" : "Ingresar"}
          </button>
        </form>
      </div>
      <div className="col-md-6">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Nº Factura</th>
              <th>Empresa</th>
              <th>Monto</th>
              <th>Sucursal</th>
              <th>Contacto</th>
              <th>Ingresada</th>
              <th>Total Factura</th>
              <th>Boton</th>
            </tr>
          </thead>
          <tbody>
            {factras.map(user => (
              <tr key={user._id}>
                <td>{user.nfac}</td>
                <td>{user.empresa}</td>
                <td>{user.monto}</td>
                <td>{user.ciudad}</td>
                <td>{user.contacto}</td>
                <td>{user.ingreso}</td>
                <td>{user.totalfac}</td>
                <td>
                <button
                  
                    className="btn-pro"
                    onClick={(e) => editUser(user._id)}
                  >
                    Editar
                  </button>
                  <button
                    className="btn-pro2"
                    onClick={(e) => deleteUser(user._id)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default App;