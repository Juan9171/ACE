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
                        PRODUCTO
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
                    <tr key={user.idVenta}>
                    <td>
                        {user.idVenta}
                    </td>

                    <td>
                        {user.idProducto_FK}
                    </td>

                    <td>
                        {user.valor_total}
                    </td>

                    <td>
                        {user.identificador}
                    </td>

                    <td>
                        {user.cantidad}
                    </td>

                    <td>
                        {user.precio}
                    </td>

                    <td>
                        {user.fecha}
                    </td>

                    <td>
                        {user.docu_cliente}
                    </td>

                    <td>
                        {user.nom_cliente}
                    </td>

                    <td>
                        {user.vendedor}
                    </td>

                    <td>
                        {user.estado}
                    </td>

                    <td>
                        <button 
                        onClick={()=>{props.editRow(user)}}>
                            ACTUALIZAR
                        </button>
                        <button
                            onClick={()=>{props.deleteUser(user.idVenta)}}
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