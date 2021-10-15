import React, { useState } from 'react';
import estilos from '../Styles/EstilosInicio.css';
import Iconvisualizar from '../Assets/Iconos/visualizar50px.png'
import Busqueda from './Barradebusqueda';
import BarraBusqueda from './Barradebusqueda';
//import { TableBody } from '@material-ui/core';
const TablaBusquedadeProducto = (props) => {
    return(
        <React.Fragment>
    
     
    {/* ICONO QUE ACOMPAÑA EL TITULO */}
    <div className='contButtonVisualizar bodyGeneral'><img src={Iconvisualizar} /></div>
    {/* TITULO PRINCIPAL */}
    <h1 className='h1m bodyGeneral'>LISTADO DE PRODUCTOS</h1>
  
     {/* BOTON DE BUSQUEDA */}
     
    {/* TABLA   */}    
    <table className="table" >
        <thead>
            <tr class="tr">
            <th class="th">Identificador unico de venta</th>
            <th class="th">Valor Unitario</th>
            <th class="th">Estado</th>
            <th class="th">Descripcion</th>
            <th class="th">Acciones</th>
            </tr>
        </thead>
        <tbody>
            {
                props.ventaBuscada.length > 0 ? 
                props.ventaBuscada.map(ventaB=>(  
                <tr class="tr" key={ventaB.id}>
                <td class="td">{ventaB.idProducto}</td>
                <td class="td">{ventaB.valor}</td>
                <td class="td">{ventaB.estado}</td>
                <td class="td">{ventaB.descripcion}</td>
                <td class="td">
                    <button onClick={()=>{props.editRow(ventaB)}}>
                        Actualizar</button>
                    <button onClick={()=>{props.deleteUser(ventaB.id)}}>         
                        Eliminar</button>
                </td>
    
            </tr>)):(
                <tr>
                <td colSpan={5}>No se encontraron productos</td>
              </tr>
            
            )}
       
      
      </tbody>         
       
    </table>
   
    
    
    </React.Fragment>
    )    

}

export default TablaBusquedadeProducto;