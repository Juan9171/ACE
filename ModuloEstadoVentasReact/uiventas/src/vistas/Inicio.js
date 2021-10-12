import React, { useState } from 'react';
import Registro from '../componentes/Registro';
import '../Styles/Estilos.css';
import{v4 as uuidv4} from 'uuid';
import TablaVentas from '../componentes/TablaVentas';
import Editar from '../componentes/Editar';
import BarraBusqueda from '../componentes/BarraBusqueda';
import TablaBusqueda from '../componentes/TablaBusqueda';

const Inicio = () => {
    const usersData = [
        { id: uuidv4(), valor: 20000, identificadorTotal: 123, cantidad: 5, precioUnitario: 500,fechaDeVenta:'15-05-2021', documentoDeID: 123456, nombreCliente:'Juan', NombreVendedor:'Carlos', estadoDeLaVenta: 'En proceso'},
        { id: uuidv4(), valor: 25000, identificadorTotal: 124, cantidad: 7, precioUnitario: 200,fechaDeVenta:'25-05-2021', documentoDeID: 224451, nombreCliente:'Myriam', NombreVendedor:'Rafael', estadoDeLaVenta: 'Entregada'},
        { id: uuidv4(), valor: 30000, identificadorTotal: 125, cantidad: 10, precioUnitario: 1500,fechaDeVenta:'10-06-2021', documentoDeID: 758752, nombreCliente:'Cristhian', NombreVendedor:'Carlos', estadoDeLaVenta: 'En proceso'}
        
      ]
      const[users,setUsers] = useState(usersData); 

      const addUser = (user) =>{
          user.id = uuidv4()
          setUsers([
              ...users,
              user
          ])
      }





      const[ventaBuscada, setVentaBuscada]=useState({})
      const[mostrarBusqueda, setMostrarBusqueda]=useState(false)
      const searchUser =(id) =>{
        setVentaBuscada(users.filter(user => user.identificadorTotal == id))
        if (ventaBuscada.length>0){
            setMostrarBusqueda(true)
        }        
      }
      const recargarTabla = ()=>{
        setMostrarBusqueda(false)
      }





      const deleteUser = (id) =>{
        setUsers(users.filter(user => user.id !== id))
      }

      const [editing, setEditing] = useState(false);

      const [currentUser, setCurrentUser] =useState({
        id: null, valor: null, identificadorTotal: null, cantidad: null, precioUnitario: null,fechaDeVenta:'', documentoDeID: null, nombreCliente:'', NombreVendedor:'', estadoDeLaVenta: ''
      })

      const editRow = (user) =>{

            setEditing(true)
            setCurrentUser({
            id: user.id, valor: user.valor, identificadorTotal: user.identificadorTotal, cantidad: user.cantidad, precioUnitario: user.precioUnitario,fechaDeVenta:user.fechaDeVenta, documentoDeID: user.documentoDeID, nombreCliente:user.nombreCliente, NombreVendedor:user.NombreVendedor, estadoDeLaVenta: user.estadoDeLaVenta
          })
      }


      const updateUser =(id, updatedUser)=>{
        setEditing(false);
        setUsers(users.map(user=>(user.id==id ? updatedUser: user)))
      }

    return (
        <div>

            {
                editing ? (
                    <div>
                    <div className="BarraTitulo">EDITAR DATOS</div>
                    <Editar currentUser={currentUser}  updateUser={updateUser}/>
                    </div>
                ) :(
                    <div>
                    <div className="BarraTitulo">REGISTRAR DATOS</div>
                    <Registro addUser={addUser}/>
                    </div>
                )
            }

            <BarraBusqueda searchUser={searchUser}/>


            <div className="BarraTitulo2">
                <img src={require("./Imagenes/1762581.png").default} width="50px" height="50px" />
                HISTORIAL DE ESTADO DE VENTA
            </div>

            {
                mostrarBusqueda ? (
                    <div>
                        <TablaBusqueda ventaBuscada={ventaBuscada} deleteUser={deleteUser} editRow={editRow} recargarTabla={recargarTabla}/>
                        <button onClick={()=>setMostrarBusqueda(false)}>
                            Volver a tabla principal
                        </button>
                    </div>
                ):(
                    <div>
                        <TablaVentas users={users} deleteUser={deleteUser} editRow={editRow}/> 
                    </div>
                )
        }          
        </div >
    );
}

export default Inicio;