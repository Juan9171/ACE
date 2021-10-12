import React from 'react';
import '../Styles/Estilos.css';

const TablaVentas =(props)=>{


    return(
        <div className="contenedorEstado">
        <table className="tablaEstado">
            <thead>
                <tr>
                    <td>
                        ID
                    </td>

                    <td>
                        VALOR
                    </td>

                    <td>
                        IDENTIFICADOR TOTAL
                    </td>

                    <td>
                        CANTIDAD
                    </td>

                    <td>
                        PRECIO UNITARIO
                    </td>

                    <td>
                        FECHA DE VENTA
                    </td>

                    <td>
                        DOCUMENTO DE IDENTIFICACION
                    </td>

                    <td>
                        NOMBRE DEL CLIENTE
                    </td>

                    <td>
                        NOMBRE DEL VENDEDOR
                    </td>

                    <td>
                        ESTADO DE LA VENTA
                    </td>

                    <td>
                        ACCION
                    </td>

                </tr>
            </thead>
            <tbody>
                {
                props.users.length>0?
                props.users.map(user=>(
                    <tr key={user.id}>
                    <td>
                        {user.id}
                    </td>

                    <td>
                        {user.valor}
                    </td>

                    <td>
                        {user.identificadorTotal}
                    </td>

                    <td>
                        {user.cantidad}
                    </td>

                    <td>
                        {user.precioUnitario}
                    </td>

                    <td>
                        {user.fechaDeVenta}
                    </td>

                    <td>
                        {user.documentoDeID}
                    </td>

                    <td>
                        {user.nombreCliente}
                    </td>

                    <td>
                        {user.NombreVendedor}
                    </td>

                    <td>
                        {user.estadoDeLaVenta}
                    </td>

                    <td>
                        <button 
                        onClick={()=>{props.editRow(user)}}>
                            ACTUALIZAR
                        </button>
                        <button
                            onClick={()=>{props.deleteUser(user.id)}}
                        >
                            ELIMINAR
                        </button>
                    </td>
                </tr>
                )):(
                    <tr>
                        <td colSpan={3}>No hay ventas</td>
                    </tr>
                )}
            </tbody>
        </table>
</div>
    )
}

export default TablaVentas;