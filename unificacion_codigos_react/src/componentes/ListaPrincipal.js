import React from 'react';
import '../Styles/Estilos.css';
import IconLogin from '../Assets/Iconos/user50px.png'
const Barradenavegacion = () => {
    return (

    <React.Fragment>
       
     <div className="cont1">
        <div className="barraMenu2">
            <div className="dropdown">
                  <button className="dropbtn" >Administrador de ventas</button>
                  <div className="dropdown-content">
                    <a href="/">Registro</a>
                    <a href="/">Historial de ventas</a>
                  </div>
            </div>
            <div className ="dropdown">
                  <button className ="dropbtn">Administrador de productos</button>
                  <div className="dropdown-content">
                    <a>Registro</a>
                    <a>Historial de productos</a>
                  </div>
            </div>
            
            <button className="buttonmy button3_1">
              <a href="/gestorUsuario">
              Gestion de usuarios/roles
              </a>
              </button>
             
            <button className="btnMenuLogin" title="LOGIN">
            <img src= {IconLogin}/>
            </button>
          
        </div>
        
      </div>
      
           
    </React.Fragment>

    )

}



export default Barradenavegacion;