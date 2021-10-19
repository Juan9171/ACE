import React from 'react';
import '../Styles/EstilosInicio.css';
import IconLogin from '../Assets/Iconos/user50px.png'
import { TableBody } from '@material-ui/core';
const Barradenavegacion = () => {
    return (

    <React.Fragment>
       
     <div className="cont1">
        <div className="barraMenu2">
            <div className="dropdown">
                  <button className="dropbtn" >Administrador de ventas</button>
                  <div className="dropdown-content">
                    <a href="/iniciomoduloventas">Registro</a>
                    <a href="/iniciomoduloventas">Historial de ventas</a>
                  </div>
            </div>
            <div className ="dropdown">
                  <button className ="dropbtn">Administrador de productos</button>
                  <div className="dropdown-content">
                    <a href="ventana_registrar_producto.html">Registro</a>
                    <a href="ventanaInicio.html">Historial de productos</a>
                  </div>
            </div>
            
            <button className="buttonmy button3_1">Gestion de usuarios/roles</button>
             
            <button class="btnMenuLogin" title="LOGIN">
            <img src= {IconLogin}/>
            </button>
          
        </div>
        
      </div>
      
           
    </React.Fragment>

    )

}



export default Barradenavegacion;
