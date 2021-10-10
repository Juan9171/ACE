import React, { useState } from 'react';
import estilos from '../Styles/EstilosInicio.css';
import Iconvisualizar from '../Assets/Iconos/visualizar50px.png'

//import { TableBody } from '@material-ui/core';
const ProductoTabla = (props) => {
    const [busqueda,setBusqueda]=useState({
        busqueda:" "
    })  
   
    const handleChange = (event) => {
            console.log(event.target.value)
            setBusqueda({
                ...busqueda,
                [event.target.name] : event.target.value
            })
            
        }    
    return (
    
    <React.Fragment>
    
     
    {/* ICONO QUE ACOMPAÑA EL TITULO */}
    <div className='contButtonVisualizar bodyGeneral'><img src={Iconvisualizar} /></div>
    {/* TITULO PRINCIPAL */}
    <h1 className='h1m bodyGeneral'>LISTADO DE PRODUCTOS</h1>
  
     {/* BOTON DE BUSQUEDA */}
     <div className="divBotondebusqueda">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous"/>
    <form action="" className="form">
        <input type="search" placeholder="Search here ..." title="Buscar" id="btnBuscar" class="input" onChange={handleChange} />
        <i className="fa fa-search"></i>
    </form>
    </div>
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
                props.users.length > 0 ? 
                props.users.map(user=>(  <tr class="tr" key={user.id}>
                <td class="td">{user.id}</td>
                <td class="td">{user.valor}</td>
                <td class="td">{user.estado}</td>
                <td class="td">{user.descripcion}</td>
                <td class="td">
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

