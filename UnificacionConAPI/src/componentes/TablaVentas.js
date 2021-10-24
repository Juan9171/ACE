import React from 'react';
import '../Styles/Estilos.css';

const TablaVentas =(props)=>{


    return(
        <div className="contenedorEstado">
        <table className="tablaEstado">
            <thead>
                <tr className="tr">
                    <td className="td">
                        ID
                    </td>

                    <td className="td">
                        PRODUCTO
                    </td>

                    <td className="td">
                        VALOR
                    </td>

                    <td className="td">
                        IDENTIFICADOR TOTAL
                    </td>

                    <td className="td">
                        CANTIDAD
                    </td>

                    <td className="td">
                        PRECIO UNITARIO
                    </td>

                    <td className="td">
                        FECHA DE VENTA
                    </td>

                    <td className="td">
                        DOCUMENTO DE IDENTIFICACION
                    </td>

                    <td className="td">
                        NOMBRE DEL CLIENTE
                    </td>

                    <td className="td">
                        NOMBRE DEL VENDEDOR
                    </td>

                    <td className="td">
                        ESTADO DE LA VENTA
                    </td>

                    <td className="td">
                        ACCION
                    </td>

                </tr>
            </thead>
            <tbody>
                {
                props.users.length>0?
                props.users.map(user=>(
                    <tr className="tr" key={user.idVenta}>
                    <td className="td">
                        {user.idVenta}
                    </td>

                    <td className="td">
                        {user.idProducto_FK}
                    </td>

                    <td className="td">
                        {user.valor_total}
                    </td>

                    <td className="td">
                        {user.identificador}
                    </td>

                    <td className="td">
                        {user.cantidad}
                    </td>

                    <td className="td">
                        {user.precio}
                    </td>

                    <td className="td">
                        {user.fecha}
                    </td>

                    <td className="td">
                        {user.docu_cliente}
                    </td>

                    <td className="td">
                        {user.nom_cliente}
                    </td>

                    <td className="td">
                        {user.vendedor}
                    </td>

                    <td className="td">
                        {user.estado}
                    </td>

                    <td className="td">
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
                    <tr className="tr">
                        <td colSpan={3}>No hay ventas</td>
                    </tr>
                )}
            </tbody>
        </table>
</div>
    )
}

export default TablaVentas;