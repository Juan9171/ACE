import React, { useState, useEffect } from 'react';
import EditarRol from '../componentes/EditarRol';
import Barradenavegacion from '../componentes/ListaPrincipal';
import TablaRoles from '../componentes/TablaRoles';
import '../Styles/Estilos.css';



var Usuario = function (id, nombre, apellido, rolU, estadoU) {
    this.idUsuario = id;
    this.nombres = nombre;
    this.apellidos = apellido;
    this.rolU = rolU;
    this.estadoU = estadoU;
}

const Gestor = () => {
    const [usuarios, setUsuarios] = useState([]);
    console.log(usuarios)

    const [editing, setEditing] = useState(false);
    const [estadoListado, setEstadoListado] = useState(true);

    const obtenerUsuarios = () => {
        fetch("http://localhost:3010/usuario", { method: "get" })
            .then((res) => res.json())
            .then((json) => {
                var usuariosData = [];
                json.map((item) => {
                    usuariosData.push(new Usuario(
                        item.idUsuario,
                        item.nombres,
                        item.apellidos,
                        item.rolU,
                        item.estadoU
                    ));
                });
                setUsuarios(usuariosData);
                setEstadoListado(false);
            });
    }
    // if (estadoListado) {
    //     obtenerUsuarios();
    // }
    const [currentUsuario, setCurrentUsuario] = useState({
        nombres: "", apellidos: "", rolU: "", estadoU: ""
    })

    const editRow = (usuario) => {

        setEditing(true)
        setCurrentUsuario({
            idUsuario: usuario.idUsuario, nombres: usuario.nombres, apellidos: usuario.apellidos, rolU: usuario.rolU, estadoU: usuario.estadoU
        })
    }


    const updateUsuario = (id, updatedUsuario) => {
        setEditing(false);
        setUsuarios(usuarios.map(usuario => (usuario.id == id ? updatedUsuario : usuario)))
    }

    useEffect(() => {
        obtenerUsuarios();
      }, []);
    return (
        <React.Fragment>
    <Barradenavegacion />
        <div>
            <div className="editarRoles">
                <img src={require("./Imagenes/1608401.png").default} width="50px" height="50px" title="Editar y actualizar" />
            </div>

            {
                editing ? (
                    <div>

                        <EditarRol currentUsuario={currentUsuario} updateUsuario={updateUsuario} />
                    </div>
                ) : (
                    <div>
                    </div>
                )
            }

            <div className="BarraTitulo">
                <img src={require("./Imagenes/1762581.png").default} width="50px" height="50px" />
                ROLES Y ESTADOS
            </div>


            <TablaRoles usuarios={usuarios} editRow={editRow} />
        </div>
        </React.Fragment>
    );
}

export default Gestor;