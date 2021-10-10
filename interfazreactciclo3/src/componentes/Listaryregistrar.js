import React, { useState } from 'react'
import '../Styles/EstilosInicio.css';
import ProductoTabla from './ProductoListado';
import Formularioregistro from './Registrarproductos';
import{v4 as uuidv4} from 'uuid';
import EditProduct from './Editproduct';
const Listaryregistrar = () => {

    const usersData = [
        { id: uuidv4(), valor: 23232, estado: 'floppydiskette',descripcion:"ropa" },
        { id: uuidv4(), valor: 232323, estado: 'floppydiskette',descripcion:"ropa" },
        { id: uuidv4(), valor: 32322, estado: 'floppydiskette',descripcion:"ropa" },
        
      ]
    //state
    const[users,setUsers] = useState(usersData); 
    //Agregar Usuario
    const addUser=(user)=>{
        user.id=uuidv4();
        setUsers([
            ...users,
            user
        ])
    }
    //eliminar producto
    const deleteUser=(id)=>{
        setUsers(users.filter(user=> user.id !== id))
    }
    //Editar producto
    const[editing,setEditing]=useState(false);

    const [currentUser,setCurrentUser]= useState(
      {
        id:null, valor: '', estado: '', descripcion:''
      }
    )
    const editRow =(user)=>{
      setEditing(true)
      setCurrentUser({
        id:user.id, valor:user.valor, estado:user.estado, descripcion: user.descripcion
      })
    }

    const updateProduct=(id, updateProduct)=>{
      setEditing(false)
      setUsers(users.map(user => (user.id === id ? updateProduct:user)))

    }
    
  return (
   <div className="bodyGeneral">
    <div className="container ">
      
      <div className="flex-row ">
        <div className="flex-large ">
         
          {
            editing ? (
              <div>
                <EditProduct  currentUser={currentUser} updateProduct={updateProduct} />
              
              </div>
            ):(
              <div>
                <Formularioregistro addUser={addUser} />
              </div>
            )
          }
          
        </div>
        <div className="flex-large">
          
          <ProductoTabla users={users} deleteUser={deleteUser}  editRow={editRow}/> 
        </div>
      </div>
    </div>
    </div>
  )
}
export default Listaryregistrar