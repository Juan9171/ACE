import React from 'react';
import '../Styles/Estilos.css';
import { useForm } from 'react-hook-form';

const EditarRol = (props) => {

    const { register, errors, handleSubmit, setValue } = useForm({
        defaultValues: props.currentUsuario
    });

    setValue("nombres", props.currentUsuario.nombres)
    setValue("apellidos", props.currentUsuario.apellidos)
    setValue("rolU", props.currentUsuario.rolU)
    setValue("estadoU", props.currentUsuario.estadoU)


    const onSubmit = (data, e) => {
        data.idUsuario=props.currentUsuario.idUsuario

        fetch("http://localhost:3010/usuario",
            {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    idUsuario: data.idUsuario,
                    nombres: data.nombres,
                    apellidos: data.apellidos,
                    rolU: data.rolU,
                    estadoU: data.estadoU
                })                 
            }
        ).
            then((res) => res.json()).
            then(e.target.reset());
            props.updateUsuario(data.idUsuario, data)
            window.location.reload(true);
    }

    return (
        <div>
            <div className="editarRol">
                EDITAR
                <form onSubmit={handleSubmit(onSubmit)}>
                    <table>
                        <tr>
                            <td>
                    <input type="text" {...register("nombres", {
                        required: { value: true, message: "Campo requerido" }
                    })}
                    />
                    <input type="text" {...register("apellidos", {
                        required: { value: true, message: "Campo requerido" }
                    })}
                    />
                    <div>
                        {errors?.nombre?.message}
                    </div>
                    </td>
                    
                    <td>
                    <select className="selectorDeEstado" {...register("rolU")}>
                        <option value="2">Vendedor</option>
                        <option value="3">Administrador</option>
                        <option value="1">Cliente</option>
                    </select>
                    <div>
                        {errors?.rol?.message}
                    </div>
                    </td>
                    <td>
                    <select className="selectorDeEstado" {...register("estadoU")}>
                        <option value="3">Pendiente</option>
                        <option value="1">Autorizado</option>
                        <option value="2">No autorizado</option>
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