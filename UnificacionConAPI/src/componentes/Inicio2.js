import React from 'react';
import '../Styles/EstilosInicio.css';
import IconLogin from '../Assets/Iconos/user50px.png'
import { TableBody } from '@material-ui/core';
import Barradenavegacion from './ListaPrincipal';
const Inicio = () => {
    return (

    <React.Fragment>
         <Barradenavegacion />
         <h1 className="h1ventana  body1">Nombre de la empresa</h1> 
    
    </React.Fragment>

    )

}



export default Inicio;

