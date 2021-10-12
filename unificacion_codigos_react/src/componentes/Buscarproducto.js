import '../Styles/EstilosInicio.css';
import React, {Fragment, useState } from "react";
import Iconbusqueda from '../Assets/Iconos/busqueda50px.png'
import IconVisualizar from '../Assets/Iconos/visualizar50px.png'
import IconActualizar from '../Assets/Iconos/actualizar50px.png'
import IconEliminar from '../Assets/Iconos/eliminar50px.png'

const Busqueda = (props) => {
  
    return (

    <React.Fragment>
     
    <div class="contButtonBusqueda"><img src={Iconbusqueda}/></div>
    <hr class="hrBusqueda" />
        <h1 class="h1m">PRODUCTO</h1>

    <div class="divContenedorButtonVisualizar">
       
    <button class="btnV visualizar" title="Visualizar historial de productos">
        <img src={IconVisualizar}/>
    </button>
        
    </div>

    <div class="divContenedorButtonActualizar">
        
        <button class="btnV visualizar" title="Actualizar informacion del producto">
                <img src={IconActualizar} />
        </button>
        
    </div>
    <div class="divContenedorButtonEliminar">
       
        <button class="btnV visualizar" title="Eliminar producto">
             <img src={IconEliminar} />
        </button>
        
    </div>
     
  
    </React.Fragment>

    )

}



export default Busqueda;
