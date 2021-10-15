import React from 'react';
import '../Styles/Estilos.css';
import { useForm } from 'react-hook-form'

const Registro = (props) => {

    const { register, errors, handleSubmit } = useForm();

    const onSubmit = (data,e) => {
        //console.log(data)
        props.addUser(data,e)
        e.target.reset()
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="contenedorEditor1">
                    <table>
                        <tbody>
                            <tr>
                                <th>
                                    VALOR TOTAL
                                </th>

                                <th>
                                    <input type="number" placeholder="Ingresar datos" {...register("valor_total" ,{
                                            required: { value: true, message: "Campo requerido" }
                                        })
                                    } />
                                    <div>
                                        {errors?.valor?.message}
                                    </div>
                                </th>
                            </tr>
                            <tr>
                                <th>
                                    IDENTIFICADOR
                                </th>

                                <th>
                                    <input type="number" placeholder="Ingresar datos" {...register("identificador" ,{
                                            required: { value: true, message: "Campo requerido" }
                                        })
                                    } />
                                    <div>
                                        {errors?.identifTotal?.message}
                                    </div>
                                </th>
                            </tr>
                            <tr>
                                <th>
                                    CANTIDAD
                                </th>

                                <th>
                                    <input type="number" placeholder="Ingresar datos" {...register("cantidad" ,{
                                            required: { value: true, message: "Campo requerido" }
                                        })
                                    } />
                                    <div>
                                        {errors?.cantidad?.message}
                                    </div>
                                </th>
                            </tr>
                            <tr>
                                <th>
                                    PRODUCTO
                                </th>

                                <th>
                                    <select className="selectorDeProducto" {...register("idProducto_FK")}>
                                        {props.productos.map(producto=>(
                                        <option key={producto.idProducto} value={producto.idProducto}>{producto.descripcion}</option>
                                        ))
                                        }
                                    </select>
                                    <div>
                                        {errors?.estadoDeLaVenta?.message}
                                    </div>
                                </th>
                            </tr>

                            <tr>
                                <th>
                                    PRECIO UNITARIO
                                </th>

                                <th>
                                    <input type="number" placeholder="Ingresar datos" {...register("precio" ,{
                                            required: { value: true, message: "Campo requerido" }
                                        })
                                    } />
                                    <div>
                                        {errors?.precioUnitario?.message}
                                    </div>
                                </th>
                            </tr>
                            <tr>
                                <th>
                                    FECHA DE VENTA
                                </th>

                                <th>
                                    <input type="text" placeholder="Ingresar datos" {...register("fecha" ,{
                                            required: { value: true, message: "Campo requerido" }
                                        })
                                    } />
                                    <div>
                                        {errors?.fecha?.message}
                                    </div>
                                </th>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="contenedorEditor2">
                    <table>
                        <tbody>
                            <tr>
                                <th>
                                    DOCUMENTO DE IDENTIFICACION
                                </th>

                                <th>
                                    <input type="text" placeholder="Ingresar datos" {...register("docu_cliente" ,{
                                            required: { value: true, message: "Campo requerido" }
                                        })
                                    } />
                                    <div>
                                        {errors?.docIdentificacion?.message}
                                    </div>
                                </th>
                            </tr>
                            <tr>
                                <th>
                                    NOMBRE DEL CLIENTE
                                </th>

                                <th>
                                    <input type="text" placeholder="Ingresar datos" {...register("nom_cliente" ,{
                                            required: { value: true, message: "Campo requerido" }
                                        })
                                    } />
                                    <div>
                                        {errors?.nombreCliente?.message}
                                    </div>
                                </th>
                            </tr>
                            <tr>
                                <th>
                                    VENDEDOR ENCARGADO
                                </th>

                                <th>
                                    <input type="text" placeholder="Ingresar datos" {...register("vendedor" ,{
                                            required: { value: true, message: "Campo requerido" }
                                        })
                                    } />
                                    <div>
                                        {errors?.nombreVendedor?.message}
                                    </div>
                                </th>
                            </tr>
                            <tr>
                                <th>
                                    ESTADO DE VENTA
                                </th>

                                <th>
                                    <select className="selectorDeEstado" {...register("estado")}>
                                        <option value="En proceso">En proceso</option>
                                        <option value="Entregada">Entregada</option>
                                        <option value="Cancelada">Cancelada</option>
                                    </select>
                                    <div>
                                        {errors?.estadoDeLaVenta?.message}
                                    </div>
                                </th>
                            </tr>
                        </tbody>
                    </table>
                    <button className="botonActualizar" component="a" href={"/"}>
                        Agregar
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Registro;