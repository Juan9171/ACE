import React from 'react';
import '../Styles/Estilos.css';
import { useForm } from 'react-hook-form'

const Editar = (props) => {

    const { register, errors, handleSubmit, setValue } = useForm({
        defaultValues:props.currentUser
    });

    setValue("valor", props.currentUser.valor)
    setValue("identificadorTotal", props.currentUser.identificadorTotal)
    setValue("cantidad", props.currentUser.cantidad)
    setValue("precioUnitario", props.currentUser.precioUnitario)
    setValue("fechaDeVenta", props.currentUser.fechaDeVenta)
    setValue("documentoDeID", props.currentUser.documentoDeID)
    setValue("nombreCliente", props.currentUser.nombreCliente)
    setValue("NombreVendedor", props.currentUser.NombreVendedor)
    setValue("estadoDeLaVenta", props.currentUser.estadoDeLaVenta)


    const onSubmit = (data,e) => {
        data.id=props.currentUser.id
        props.updateUser(props.currentUser.id, data)
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
                                    <input type="number" placeholder="Ingresar datos" {...register("valor" ,{
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
                                    <input type="number" placeholder="Ingresar datos" {...register("identificadorTotal" ,{
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
                                    PRECIO UNITARIO
                                </th>

                                <th>
                                    <input type="number" placeholder="Ingresar datos" {...register("precioUnitario" ,{
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
                                    <input type="date" placeholder="Ingresar datos" {...register("fechaDeVenta" ,{
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
                                    <input type="text" placeholder="Ingresar datos" {...register("documentoDeID" ,{
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
                                    <input type="text" placeholder="Ingresar datos" {...register("nombreCliente" ,{
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
                                    <input type="text" placeholder="Ingresar datos" {...register("NombreVendedor" ,{
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
                                    <select className="selectorDeEstado" {...register("estadoDeLaVenta")}>
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