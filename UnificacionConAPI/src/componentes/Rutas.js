import { Switch, Route, BrowserRouter} from "react-router-dom";
import Gestor from '../vistas/Gestor'
import Listaryregistrar from '../componentes/Listaryregistrar'
import InicioVentana from '../componentes/Inicio2';
import InicioVentas from "../vistas/inicioVentas";
import Formulario from "./Formulario";
import Cookies from 'universal-cookie'
import { useEffect, useState } from "react";
import '../Styles/Estilos.css';

const cookies = new Cookies();
const Rutas = () => {


    const isLoggedIn = cookies.get('isLoggedIn');
    const [Logueado,setLogueado]=useState(false)

    const LogIn=()=>{
        if(isLoggedIn=="false"){
            setLogueado(false)
        }else{
            setLogueado(true)
        }
    }
    useEffect(() => {
        LogIn();
      }, []);
    

    return (
        <BrowserRouter>
        
        
        { Logueado ? (
            <Switch>
            <Route exact path='/' component={Formulario} />
            /* Modulo gestor de ventas y roles */
            <Route exact path='/iniciomoduloventas' component={InicioVentas} />
            <Route exact path='/gestorUsuario' component={Gestor} />
            <Route exact path='/listaryregistrar' component={Listaryregistrar}/>
            
            
            <Route exact path='/inicio' component={InicioVentana}>
            </Route>
            </Switch>
            ):(
                <Switch>
                <Route exact path='/' component={Formulario} />
                <h1 className="mensajeLog">NO ESTÁ LOGUEADO</h1>
                </Switch>
            )
        }
        
        
    
    </BrowserRouter>
    )
}

export default Rutas;