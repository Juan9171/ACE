import { Switch, Route, BrowserRouter} from "react-router-dom";
import Gestor from '../vistas/Gestor'
import Listaryregistrar from '../componentes/Listaryregistrar'
import InicioVentana from '../componentes/Inicio2';
import InicioVentas from "../vistas/inicioVentas";
import Formulario from "./Formulario";





const Rutas = () => {
    return (

        <BrowserRouter>
        <Switch>

            <Route exact path='/' component={Formulario} />
            {/* Modulo gestor de ventas y roles */}
            <Route exact path='/iniciomoduloventas' component={InicioVentas} />
            <Route exact path='/gestorUsuario' component={Gestor} />
            <Route exact path='/listaryregistrar'component={Listaryregistrar}/>
            
            
            <Route exact path='/inicio' component={InicioVentana}>
            </Route>
        </Switch>

    </BrowserRouter>
    )
}

export default Rutas;