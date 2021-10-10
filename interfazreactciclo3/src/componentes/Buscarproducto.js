import '../Styles/EstilosInicio.css';
import React, {Fragment, useState } from "react";
import Iconbusqueda from '../Assets/Iconos/busqueda50px.png'
import Iconvisualizar from '../Assets/Iconos/visualizar50px.png'
import Iconactualizar from '../Assets/Iconos/actualizar50px.png'
import Iconeliminar from '../Assets/Iconos/eliminar50px.png'
const Busqueda = () => {
 
  
    return (

    <React.Fragment>
        <div className="contButtonBusqueda"><img src={Iconbusqueda}/></div>
        <hr className="hrBusqueda" />
            <h1 className="h1m">PRODUCTO</h1>
    
       
        <div className="divContenedorButtonVisualizar">
        <button className="btnV visualizar" title="Visualizar historial de productos">
            <img src={Iconvisualizar}/>
        </button>
            
        </div>
       
        <div className="divContenedorButtonActualizar">
            <button className="btnV visualizar" title="Actualizar informacion del producto">
                    <img src={Iconactualizar} />
            </button>
        </div>
 
        <div className="divContenedorButtonEliminar">
            <button className="btnV visualizar" title="Eliminar producto">
                <img src={Iconeliminar}/>
            </button>
        </div>
     
  
    </React.Fragment>

    )

}



export default Busqueda;
