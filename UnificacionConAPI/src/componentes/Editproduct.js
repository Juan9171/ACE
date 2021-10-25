import { ExpansionPanelSummary } from "@material-ui/core";
import React, {Fragment, useState } from "react";
import { useForm } from "react-hook-form";
import IconRegistrar from '../Assets/Iconos/registrar50px.png'
import '../Styles/EstilosInicio.css';

const EditProduct = (props) =>{
    
    //console.log(props.currentUser)
    const{register,errors,handleSubmit,setValue} =useForm({
        defaultValues: props.currentUser
    });
    setValue('valor',props.currentUser.valor);
    setValue('estado',props.currentUser.estado);    
    setValue('descripcion',props.currentUser.descripcion);

    const onSubmit=(data , e )=>{
        data.idProducto=props.currentUser.idProducto                

        fetch("https://glacial-coast-96641.herokuapp.com/producto",
            {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    idProducto: data.idProducto,
                    valor: data.valor,
                    estado: data.estado,
                    descripcion: data.descripcion
                })                 
            }
        ).
            then((res) => res.json()).
            then(e.target.reset());
            props.updateProduct(data.id, data)
            window.location.reload(true);
    }
    return(
    <Fragment>  
        <div className="iconoVisualizar bodyGeneral"><img src={IconRegistrar} /></div>
        <hr className="hrVentanaRegistrar bodyGeneral"/>
             <h1 className="h12 bodyGeneral">EDITAR PRODUCTO</h1>
        

        <div className="posicionFormulario bodyGeneral" >    
              <form className="row bodyGeneral" onSubmit={handleSubmit(onSubmit)}>
                  {/* <div className="col-md-3"> */}
                  
                  {/* </div> */}
                  {/* <div className="col-md-3"> */}
                  <label className="fontEncabezados">VALOR UNITARIO :</label> 
                      <input 
                           placeholder="Ingrese el valor unitario"  
                          className="form-control"  
                          type="number" 
                          name="valor" 
                          size="1" 
                          {...register('valor',{required:true,message: 'campo requerido'})}    
                      />
                  <div>
                      {errors?.valorunit?.message}
                  </div>
                  {/* </div>
                  <div className="col-md-3"> */}
                  <label class="fontEncabezados">ESTADO:</label>  <br/>
                      <select {...register("estado")} className="form-control" size="1"  > 
                          <option value="disponible">Disponible</option>
                          <option value="no disponible">No disponible </option>
                
                      </select>
                  {/* </div>
                  <div className="col-md-3"> */}
                  <label className="fontEncabezados" >DESCRIPCION:</label><br />
                      <textarea 
                      name="descripcion" 
                      className="form-control"
                      type="text" 
                      size="1"
                      {...register("descripcion")}   />
                  
                {/* </div> */}
                <div className="posicionBtnGuardar bodyGeneral">
                    <button type="submit" class="btnGuardar button3_1" id="btnGuardarProduc">Editar producto</button>
                </div>
                
                               
              </form>
          </div> 
      </Fragment>   
      );
 }       

 export  default EditProduct;