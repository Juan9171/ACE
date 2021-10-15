import { Switch, Route } from "react-router";
import Gestor from '../vistas/Gestor'
import Listaryregistrar from '../componentes/Listaryregistrar'
import InicioVentana from '../componentes/Inicio2';
import InicioVentas from "../vistas/inicioVentas";





const Rutas = () => {
    return (
        <Switch>
            {/* Modulo gestor de ventas y roles */}
            <Route exact path='/iniciomoduloventas' component={InicioVentas} />
            <Route exact path='/gestorUsuario' component={Gestor} />
            <Route exact path='/listaryregistrar'>
            {/* //Modulo gestor de productos     */}
                <Listaryregistrar />
            </Route>
            
            <Route exact path='/'>
                <InicioVentana />
            </Route>
        </Switch>
    )
}

export default Rutas;