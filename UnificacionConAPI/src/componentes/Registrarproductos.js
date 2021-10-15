import { ExpansionPanelSummary } from "@material-ui/core";
import React, {Fragment, useState } from "react";
import { useForm } from 'react-hook-form';
import IconRegistrar from '../Assets/Iconos/registrar50px.png'
import '../Styles/EstilosInicio.css';

const Formularioregistro = (props) =>{
    
    // const [datos, setDatos] = useState({
    //     id:'',
    //     valorunit:'',
    //     estado:'',
    //     descripcion:''
    // });

    // const handleChange = (event) => {
    //     //console.log(event.target.value)
    //     setDatos({
    //         ...datos,
    //         [event.target.name] : event.target.value
    //     })
        
    // }    

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     console.log(datos.id+' '+datos.valorunit+' '+datos.estado+' '+datos.descripcion);
    // }
    const{register,errors,handleSubmit} =useForm();

    const onSubmit=(data , e )=>{
        props.addUser(data,e);
        //limipiar los campos
        e.target.reset();
    }
    return(
    <Fragment>  
        <div className="iconoVisualizar bodyGeneral"><img src={IconRegistrar} /></div>
        <hr className="hrVentanaRegistrar bodyGeneral"/>
             <h1 className="h12 bodyGeneral">REGISTRO DE PRODUCTO</h1>
        

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
                  <label className="fontEncabezados">ESTADO:</label>  <br/>
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
                    <button type="submit" className="btnGuardar button3_1" id="btnGuardarProduc">Guardar</button>
                </div>
                <div className="posicionBtnCancelar ">
                <button className="btnCancel cancel" type="submit">Cancelar</button>
                </div>
                               
              </form>
          </div> 
      </Fragment>   
      );
 }       

 export  default Formularioregistro;