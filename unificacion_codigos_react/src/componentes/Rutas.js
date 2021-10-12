import { Switch, Route } from "react-router";
import Inicio from '../vistas/inicio'
import Gestor from '../vistas/Gestor'
import menuBusqueda from '../vistas/menuBusqueda'
import Busqueda from '../componentes/Buscarproducto';
import Listaryregistrar from '../componentes/Listaryregistrar'
import InicioVentana from '../componentes/Inicio2';





const Rutas = () => {
    return (
        <Switch>
            {/* Modulo gestor de roles */}
            <Route exact path='/inicio_modulo_roles' component={Inicio} />
            <Route exact path='/gestorUsuario' component={Gestor} />
            <Route exact path="/menuBusqueda" component={menuBusqueda} />
            <Route path='/listaryregistrar'>
            {/* //Modulo gestor de productos     */}
                <Listaryregistrar />
            </Route>
            <Route path='/busqueda'>
                <Busqueda />
            </Route>
            
            <Route path='/'>
                <InicioVentana />
            </Route>
        </Switch>
    )
}

export default Rutas;