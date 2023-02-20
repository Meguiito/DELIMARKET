import React, { Fragment } from "react";
import "./footer.css";

function App() {
    return(

<div class="container-fluido">
<footer class="py-3 my-4">
    <ul class="nav justify-content-center border-bottom pb-3 mb-3">
        <li class="nav-item"><a href="/" class="nav-link px-2 text-white">Inicio</a></li>
        <li class="nav-item"><a href="/Imagenes" class="nav-link px-2 text-white">Ingresar Facturas</a></li>
        <li class="nav-item"><a href="/about" class="nav-link px-2 text-white">Instrucciones de uso</a></li>
    </ul>
    <p class="text-center text-white">© Delimarket 2023, Todos los derechos reservados.</p>
</footer>
</div>
    )
}
export default App;