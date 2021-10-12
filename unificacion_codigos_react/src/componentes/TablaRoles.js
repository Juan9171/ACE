import React from 'react';
import '../Styles/Estilos.css';

const TablaRoles = (props) => {
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
                                    <tr>
                                        <td>
                                            {user.id}
                                        </td>
                                        <td>
                                            {user.nombre}
                                        </td>

                                        <td>
                                            {user.rol}
                                        </td>
                                        <td>
                                            {user.estado}
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