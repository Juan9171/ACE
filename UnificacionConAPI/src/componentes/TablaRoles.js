import React from 'react';
import '../Styles/Estilos.css';

const TablaRoles = (props) => {

    const definirEstado = (idestado) => {
        switch (idestado) {
            case 1:
                return("Autorizado")
            case 2:
                return("No autorizado")
            case 3:
                return("Pendiente")
            default:
                break;
        }
    }
    const definirRol = (idrol) => {
        switch (idrol) {
            case 1:
                return("Cliente")
            case 2:
                return("Vendedor")
            case 3:
                return("Administrador")
            default:
                break;
        }
    }


    return (
        <div>
            <div className="contenedorROL1">
                <table className="tablaEstado">
                    <thead>
                        <tr>
                            <td>
                                ID
                            </td>
                            <td>
                                USUARIOS
                            </td>

                            <td>
                                ROL
                            </td>
                            <td>
                                ESTADO
                            </td>
                            <td>
                                ACCION
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            props.usuarios.length > 0 ?
                                props.usuarios.map(user => (
                                    <tr key={user.idUsuario}>
                                        <td>
                                            {user.idUsuario}
                                        </td>
                                        <td>
                                            {user.nombres} {user.apellidos}
                                        </td>

                                        <td>
                                            {definirRol(user.rolU)}
                                        </td>
                                        <td>
                                            {definirEstado(user.estadoU)}
                                        </td>
                                        <td>
                                            <button onClick={() => { props.editRow(user) }}
                                            >
                                                ACTUALIZAR
                                            </button>
                                        </td>
                                    </tr>
                                )) : (
                                    <tr>
                                        <td colSpan={3}>No hay usuarios</td>
                                    </tr>
                                )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default TablaRoles