import React, { useState } from 'react';
import estilos from '../Styles/EstilosInicio.css';
import Iconvisualizar from '../Assets/Iconos/visualizar50px.png'
import Busqueda from './Barradebusqueda';
import BarraBusqueda from './Barradebusqueda';
//import { TableBody } from '@material-ui/core';
const ProductoTabla = (props) => {
    
    return (
    
    <React.Fragment>
    
     
    {/* ICONO QUE ACOMPAÑA EL TITULO */}
    <div className='contButtonVisualizar bodyGeneral'><img src={Iconvisualizar} /></div>
    {/* TITULO PRINCIPAL */}
    <h1 className='h1m bodyGeneral'>LISTADO DE PRODUCTOS</h1>
  
     {/* BOTON DE BUSQUEDA */}
     
    {/* TABLA   */}    
    <table className="table" >
        <thead>
            <tr>
            <th className="th">Identificador unico de venta</th>
            <th className="th">Valor Unitario</th>
            <th className="th">Estado</th>
            <th className="th">Descripcion</th>
            <th className="th">Acciones</th>
            </tr>
        </thead>
        <tbody>
            {
                props.users.length > 0 ? 
                props.users.map(user=>(  <tr className="tr" key={user.id}>
                <td className="td">{user.idProducto}</td>
                <td className="td">{user.valor}</td>
                <td className="td">{user.estado}</td>
                <td className="td">{user.descripcion}</td>
                <td className="td">
                    <button onClick={()=>{props.editRow(user)}}>
                        Actualizar</button>
                    <button onClick={()=>{props.deleteUser(user.id)}}>         
                        Eliminar</button>
                </td>
    
            </tr>)):(
                <tr>
                <td colSpan={5}>No ahy ningun producto registrado</td>
              </tr>
            )
            }
       
      
      </tbody>         
       
    </table>
   
    
    
    </React.Fragment>

    )

}



export default ProductoTabla;

