import React, { useState } from 'react';
import EditarRol from '../componentes/EditarRol';
import TablaRoles from '../componentes/TablaRoles';
import '../Styles/Estilos.css';
import{v4 as uuidv4} from 'uuid';


const Gestor = () => {

    const usuariosData = [
        {id: uuidv4(), nombre: "Carlos", rol: "Vendedor", estado: "Autorizado"},
        {id: uuidv4(), nombre: "Rafael", rol: "Vendedor", estado: "Autorizado"}
        
      ]
      const[usuarios,setUsuarios] = useState(usuariosData);

      const [editing, setEditing] = useState(false);

      const [currentUsuario, setCurrentUsuario] =useState({
        nombre: "", rol: "", estado: ""})

      const editRow = (usuario) =>{

            setEditing(true)
            setCurrentUsuario({
                id: usuario.id,nombre: usuario.nombre, rol: usuario.rol, estado: usuario.estado})
      }


      const updateUsuario =(id, updatedUsuario)=>{
        setEditing(false);
        setUsuarios(usuarios.map(usuario=>(usuario.id==id ? updatedUsuario: usuario)))
      }

    return (
        <div>
            <div className="editarRoles">
                <img src={require("./Imagenes/1608401.png").default} width="50px" height="50px" title="Editar y actualizar" />
            </div>

            {
                editing ? (
                    <div>
                    
                    <EditarRol currentUsuario={currentUsuario}  updateUsuario={updateUsuario}/>
                    </div>
                ) :(
                    <div>
                    </div>
                )
            }

            <div className="BarraTitulo">
                <img src={require("./Imagenes/1762581.png").default} width="50px" height="50px" />
                ROLES Y ESTADOS
            </div>


            <TablaRoles usuarios={usuarios} editRow={editRow}/>
        </div>
    );
}

export default Gestor;