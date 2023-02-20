import React from 'react'
import {Link} from 'react-router-dom'
import './navbar.css';

function App() {
  return(
    <nav class="navbar navbar-dark bg-custom">
    <div class="container-fluid">
      <a class="navbar-brand" href="/"><img class="pull-left" alt='Delimarket' src="https://images.jumpseller.com/store/delimarket/store/logo/300DPI.jpg?0" width={170} height={50}/></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" id="custom-toggler">
  <span className="navbar-toggler-icon"></span>
</button>
      <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel"><img alt='Delimarket' src="https://images.jumpseller.com/store/delimarket/store/logo/300DPI.jpg?0" width={170} height={50}/></h5>
          <button type="button" class="btn-close btn-close-dark" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        
        <div class="offcanvas-body">
        <center>
          <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/">Inicio</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/Imagenes">Ingresar Facturas</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/Showimages">Ver facturas</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/about">Instrucciones de uso</a>
            </li>
          </ul>
          </center>
        </div>
      </div>
    </div>
  </nav>

)
};
export default App;