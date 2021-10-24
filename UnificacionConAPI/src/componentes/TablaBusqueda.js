import React from 'react';
import '../Styles/Estilos.css';

const TablaBusqueda =(props)=>{


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
                    props.ventaBuscada.length>0?
                props.ventaBuscada.map(ventaB=>(
                    <tr className="tr" key={ventaB.idVenta}>
                    <td className="td">
                        {ventaB.idVenta}
                    </td>

                    <td className="td">
                        {ventaB.idProducto_FK}
                    </td>

                    <td className="td">
                        {ventaB.valor_total}
                    </td>

                    <td className="td">
                        {ventaB.identificador}
                    </td>

                    <td className="td">
                        {ventaB.cantidad}
                    </td>

                    <td className="td">
                        {ventaB.precio}
                    </td>

                    <td className="td">
                        {ventaB.fecha}
                    </td>

                    <td className="td">
                        {ventaB.docu_cliente}
                    </td>

                    <td className="td">
                        {ventaB.nom_cliente}
                    </td>

                    <td className="td">
                        {ventaB.vendedor}
                    </td>

                    <td className="td">
                        {ventaB.estado}
                    </td>

                    <td className="td">
                        <button 
                        onClick={()=>{props.editRow(ventaB)}}>
                            ACTUALIZAR
                        </button>
                        <button
                            onClick={()=>{props.deleteUser(ventaB.idVenta)}}
                        >
                            ELIMINAR
                        </button>
                    </td>
                </tr>
                )):(
                    <tr className="tr">
                        <td colSpan={3}>No se encontro la venta con el id especificado</td>
                    </tr>
                )
                }
            </tbody>
        </table>
</div>
    )
}

export default TablaBusqueda;