import React from 'react';
import '../Styles/EstilosInicio.css';
import iconLogin from '../Assets/Iconos/user50px.png'
const Inicio = () => {
    return (

    <React.Fragment>
           
     <div class="cont1">
        <div class="barraMenu2">
            <div class="dropdown">
                  <button class="dropbtn" >Administrador de ventas</button>
                  <div class="dropdown-content">
                    <a href="#">Registro</a>
                    <a href="#">Historial de ventas</a>
                  </div>
            </div>
            <div class="dropdown">
                  <button class="dropbtn">Administrador de productos</button>
                  <div class="dropdown-content">
                    <a href="ventana_registrar_producto.html">Registro</a>
                    <a href="ventanaInicio.html">Historial de productos</a>
                  </div>
            </div>
            
            <button class="button button3">Gestion de usuarios/roles</button>
            
            <button class="btnMenuLogin" title="LOGIN">
            <img url= {iconLogin} />
            </button>
            
        </div>
        
    </div>
           
    </React.Fragment>

    )

}



export default Inicio;

