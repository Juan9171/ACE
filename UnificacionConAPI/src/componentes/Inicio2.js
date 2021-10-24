import React from 'react';
import '../Styles/EstilosInicio.css';
import IconLogin from '../Assets/Iconos/user50px.png'
import { TableBody } from '@material-ui/core';
import Barradenavegacion from './ListaPrincipal';
const Inicio = () => {
    return (

    <React.Fragment>
         <Barradenavegacion />
         <div className="body1">
         <h1 className="h1ventana">ACE S.A.S.</h1>
         </div>
    
    </React.Fragment>

    )

}



export default Inicio;

