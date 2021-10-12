import React from 'react';
import '../Styles/Estilos.css';

const menuBusqueda = () => {
    return (
        <div>
            <div className="BarraTitulo">
                <img src={require("./Imagenes/3665416.png").default} width="50px" height="50px" />
                VENTA
            </div>

            <div className="contenedorBusqueda">
                <table>
                    <tr>
                        <td>
                            ID
                        </td>
                        <td>
                            DOCUMENTO DE IDENTIFICACION
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <input type="text" placeholder="Ingresar ID" required />
                        </td>
                        <td>
                            <div className="contenedorDeBusqueda1"></div>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            VALOR TOTAL
                        </td>
                        <td>
                            NOMBRE DEL CLIENTE
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="contenedorDeBusqueda1"></div>
                        </td>
                        <td>
                            <div className="contenedorDeBusqueda1"></div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            IDENTIFICADOR
                        </td>
                        <td>
                            VENDEDOR ENCARGADO
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="contenedorDeBusqueda1"></div>
                        </td>
                        <td>
                            <div className="contenedorDeBusqueda1"></div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            CANTIDAD
                        </td>
                        <td>
                            <li>
                                ESTADO DE VENTA
                            </li>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="contenedorDeBusqueda1"></div>
                        </td>
                        <td>
                            <div className="contenedorDeBusqueda1"></div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <li>
                                PRECIO UNITARIO
                            </li>
                        </td>
                        <td>
                            <li>
                                FECHA DE VENTA
                            </li>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="contenedorDeBusqueda1"></div>
                        </td>
                        <td>
                            <div className="contenedorDeBusqueda1"></div>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default menuBusqueda;