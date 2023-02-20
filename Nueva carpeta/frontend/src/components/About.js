import React, { Fragment } from "react";

function App() {
  return(
  <Fragment>
    <center>
    <div className="row">
      <h3>Instrucciones para ingresar facturas</h3>
      <p>
        Para ingresar Facturas se deben llenar los campos con la informacion solicitada
        se deben llenar los campos con la siguiente informacion:
        <br></br>
        <br></br>
        <h5>Nro Factura:</h5>El numero que viene denominado en la factura
        <br></br>
        <h5>Nombre Empresa:</h5>El nombre de la empresa de la factura emitida
        <br></br>
        <h5>Monto:</h5>El monto TOTAL que viene en la factura
        <br></br>
        <h5>Sucursal:</h5>La sucursal a la que corresponde la Factura
        <br></br>
        <h5>Contacto:</h5>Número de contacto de la empresa a la que corresponde la factura
        <br></br>
        <h5>Ingresada:</h5>Solo se debe especificar si la factura esta ingresada en el sistema o no
        <br></br>
        <h5>Recibio el total de la factura:</h5>Es un comentario para saber si la factura se recibio en su totalidad o si se rechazaron algunos productos

        <br></br>
        <br></br>



      </p>
      <p>
      <h3>Instrucciones para ingresar imagenes</h3>
      <h5>Paso 1:</h5><h7>Primero para ingresar imagenes deben ir al menu y ir a la pestaña de imagenes</h7> 
      <br></br>
      <img src="https://res.cloudinary.com/dnzune2ev/image/upload/v1676648715/fot1_drgmtn.png" width="300" height="400"></img>
      <br></br>
      <h5>Paso 2:</h5><h7>Segundo deben presionar elegir archivo y seleccionar la foto para enviar</h7>
      <br></br>
      <img src="https://res.cloudinary.com/dnzune2ev/image/upload/v1676649263/React_App_y_9_p%C3%A1ginas_m%C3%A1s_-_Personal__Microsoft_Edge_17_02_2023_12_52_36_qe4qpw.png" width="550" height="300"></img>
      <br></br>
      <h5>Paso 3:</h5><h7>Tercero ingresan el numero de factura correspondiente para identificarla y presionan el boton Cargar datos y con eso ya se enviara la imagen</h7>
      <br></br>
      <h5>Paso 4:</h5><h7>Cuarto y ultimo para ver las imagenes de facturas ingresadas presionan el boton ver facturas</h7>
      <br></br>
      <img src="https://res.cloudinary.com/dnzune2ev/image/upload/v1676650071/React_App_y_9_p%C3%A1ginas_m%C3%A1s_-_Personal__Microsoft_Edge_17_02_2023_13_05_23_xo45cp.png" width="400" height="300"></img>
      </p>
      <br></br>
      <br></br>
      <p>
        <h5>utilidades:</h5><h7>Para buscar cualquier numero de factura en PC presionar CTRL+F se abrira la pestaña de busqueda y podran filtrar las facturas, en telefonos se deben presionar los 3 puntos como en las imagenes y luego buscar en la pagina, esto sirve en todas las paginas tanto en facturas o en las imagenes</h7>
        <br></br>
        <img src="https://res.cloudinary.com/dnzune2ev/image/upload/v1676659945/Screenshot_20230217-153826_nqxt32.png" width="300" height="400"></img>
        <br></br>
        <img src="https://res.cloudinary.com/dnzune2ev/image/upload/v1676659841/Screenshot_20230217-154434_q0zxqj.png" width="300" height="400"></img>
        <br></br>

      </p>
    </div>
    </center>
  </Fragment>
);
  }
export default App;