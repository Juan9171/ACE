import React from 'react';
import '../Styles/Estilos.css';
import { useForm } from 'react-hook-form'

const BarraBusqueda = (props) => {
    const { register, errors, handleSubmit } = useForm({
    });
    

    const onSubmit = (data,e) => {
        props.searchUser(data.busqueda)
        e.target.reset()
    }

    return (
        <div>
            <div className="buscar">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input className="inputBuscar" type="number" placeholder="Buscar por ID" required {...register("busqueda", {
                        required: { value: true, message: "Campo requerido" }
                    })
                    } />
                    <div>
                        {errors?.identifTotal?.message}
                    </div>
                    <button className="btn" component="a" href={"/menuBusqueda"}>
                        <img src={require("../vistas/Imagenes/3665416.png").default} width="30px" height="30px" />
                    </button>
                </form>
            </div>
        </div>
    )
}

export default BarraBusqueda;