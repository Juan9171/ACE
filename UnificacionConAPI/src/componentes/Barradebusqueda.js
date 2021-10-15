import { useForm } from "react-hook-form";
import React from 'react';
import '../Styles/Estilos.css';

const BarradeBusqueda = (props) => {
    const { register, errors, handleSubmit } = useForm({
    });
    

    const onSubmit = (data,e) => {
        props.searchUser(data.busqueda)
        e.target.reset()
    }
    

    return (
        <div className="divBotondebusqueda">        
     
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />


            <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="Search.." name="search" required {...register("busqueda", {
                        required: { value: true, message: "Campo requerido" }
                    })}/>
            <button type="submit"><i className="fa fa-search"></i></button>
            </form>
        </div>
    )
}

export default BarradeBusqueda;