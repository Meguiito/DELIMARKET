import React, { useState, useEffect } from "react";
import './form.css';
const API = process.env.REACT_APP_API;


function Imagenes() {
  const [image, setImage] = useState(null);
  const [nfact, setNfact] = useState('');
  const [id, setId] = useState('');

  const handleFileChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleNfactChange = (event) => {
    setNfact(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('image', image);
    formData.append('nfact', nfact);
    formData.append("_id",id);
    const res = fetch(`${API}/Images`, {
      method: 'POST',
      body: formData
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        formData.append('_id', data._id); // Agregamos el _id al formData
      });
      
  };

  useEffect(() => {

  }, []);
  return (
    <div className="form-group">
      <center>
        <form onSubmit={handleSubmit}>
          <input type="file" onChange={handleFileChange}/>
          <input type="text" name="nfact" placeholder="Número de factura" value={nfact} onChange={handleNfactChange} />
          <button type="submit">Cargar Datos</button>
        </form>
        <br></br>
        <button class="pepe"><a class="pepea" href="/Showimages">Ver Facturas</a></button>
      </center>
    </div>
  );
};

export default Imagenes;