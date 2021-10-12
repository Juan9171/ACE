import React from 'react';
import '../Styles/Estilos.css';
import { useForm } from 'react-hook-form'

const EditarRol = (props) => {

    const { register, errors, handleSubmit, setValue } = useForm({
        defaultValues: props.currentUsuario
    });

    setValue("nombre", props.currentUsuario.nombre)
    setValue("rol", props.currentUsuario.rol)
    setValue("estado", props.currentUsuario.estado)


    const onSubmit = (data, e) => {
        data.id=props.currentUsuario.id
        props.updateUsuario(props.currentUsuario.id, data)
        e.target.reset()
    }

    return (
        <div>
            <div className="editarRol">
                EDITAR
                <form onSubmit={handleSubmit(onSubmit)}>
                    <table>
                        <tr>
                            <td>
                    <input type="text" {...register("nombre", {
                        required: { value: true, message: "Campo requerido" }
                    })}
                    />
                    <div>
                        {errors?.nombre?.message}
                    </div>
                    </td>
                    
                    <td>
                    <select className="selectorDeEstado" {...register("rol")}>
                        <option value="Vendedor">Vendedor</option>
                        <option value="Administrador">Administrador</option>
                        <option value="Cliente">Cliente</option>
                    </select>
                    <div>
                        {errors?.rol?.message}
                    </div>
                    </td>
                    <td>
                    <select className="selectorDeEstado" {...register("estado")}>
                        <option value="Pendiente">Pendiente</option>
                        <option value="Autorizado">Autorizado</option>
                        <option value="No autorizado">No autorizado</option>
                    </select>
                    <div>
                        {errors?.estado?.message}
                    </div>
                    </td>
                    <td>
                    <button className="botonRol">
                        ACTUALIZAR
                    </button>
                    </td>
                    </tr>
                    </table>
                </form>
            </div>
        </div>
    )
}

export default EditarRol;