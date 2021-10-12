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
                props.ventaBuscada.map(ventaB=>(
                    <tr key={ventaB.id}>
                    <td>
                        {ventaB.id}
                    </td>

                    <td>
                        {ventaB.valor}
                    </td>

                    <td>
                        {ventaB.identificadorTotal}
                    </td>

                    <td>
                        {ventaB.cantidad}
                    </td>

                    <td>
                        {ventaB.precioUnitario}
                    </td>

                    <td>
                        {ventaB.fechaDeVenta}
                    </td>

                    <td>
                        {ventaB.documentoDeID}
                    </td>

                    <td>
                        {ventaB.nombreCliente}
                    </td>

                    <td>
                        {ventaB.NombreVendedor}
                    </td>

                    <td>
                        {ventaB.estadoDeLaVenta}
                    </td>

                    <td>
                        <button 
                        onClick={()=>{
                            props.editRow(ventaB)
                            props.recargarTabla()
                            }}>
                            ACTUALIZAR
                        </button>
                        <button
                            onClick={()=>{
                                props.deleteUser(ventaB.id)
                                props.recargarTabla()
                            }}
                        >
                            ELIMINAR
                        </button>
                    </td>
                </tr>
                ))
                }
            </tbody>
        </table>
</div>
    )
}

export default TablaBusqueda;