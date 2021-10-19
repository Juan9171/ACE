import React from 'react';
import '../Styles/Estilos.css';

const TablaBusqueda =(props)=>{


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
                    props.ventaBuscada.length>0?
                props.ventaBuscada.map(ventaB=>(
                    <tr key={ventaB.idVenta}>
                    <td>
                        {ventaB.idVenta}
                    </td>

                    <td>
                        {ventaB.idProducto_FK}
                    </td>

                    <td>
                        {ventaB.valor_total}
                    </td>

                    <td>
                        {ventaB.identificador}
                    </td>

                    <td>
                        {ventaB.cantidad}
                    </td>

                    <td>
                        {ventaB.precio}
                    </td>

                    <td>
                        {ventaB.fecha}
                    </td>

                    <td>
                        {ventaB.docu_cliente}
                    </td>

                    <td>
                        {ventaB.nom_cliente}
                    </td>

                    <td>
                        {ventaB.vendedor}
                    </td>

                    <td>
                        {ventaB.estado}
                    </td>

                    <td>
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
                    <tr>
                        <td colSpan={3}>No se encontro la venta</td>
                    </tr>
                )
                }
            </tbody>
        </table>
</div>
    )
}

export default TablaBusqueda;