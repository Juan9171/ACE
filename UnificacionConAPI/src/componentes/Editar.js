import React from 'react';
import '../Styles/Estilos.css';
import { useForm } from 'react-hook-form'

const Editar = (props) => {

    const { register, errors, handleSubmit, setValue } = useForm({
        defaultValues:props.currentUser
    });

    setValue("idProducto_FK", props.currentUser.idProducto_FK)
    setValue("valor_total", props.currentUser.valor_total)
    setValue("identificador", props.currentUser.identificador)
    setValue("cantidad", props.currentUser.cantidad)
    setValue("precio", props.currentUser.precio)
    setValue("fecha", props.currentUser.fecha)
    setValue("docu_cliente", props.currentUser.docu_cliente)
    setValue("nom_cliente", props.currentUser.nom_cliente)
    setValue("vendedor", props.currentUser.vendedor)
    setValue("estado", props.currentUser.estado)


    const onSubmit = (data,e) => {
        data.idVenta=props.currentUser.idVenta
        fetch("http://localhost:3010/venta",
        {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                idProducto_FK: data.idProducto_FK,
                idVenta: data.idVenta,
                valor_total: data.valor_total,
                identificador: data.identificador,
                cantidad: data.cantidad,
                precio: data.precio,
                fecha: data.fecha,
                docu_cliente: data.docu_cliente,
                nom_cliente: data.nom_cliente,
                vendedor: data.vendedor,
                estado: data.estado
            })                 
        }
    ).
        then((res) => res.json()).
        then(e.target.reset());
        props.updateUser(data.idVenta, data)
        window.location.reload(true);
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
                        EDITAR
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Editar;