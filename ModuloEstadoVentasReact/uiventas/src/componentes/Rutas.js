import { Switch, Route } from "react-router";
import Inicio from '../vistas/Inicio'
import Gestor from '../vistas/Gestor'
import menuBusqueda from '../vistas/menuBusqueda'


const Rutas = () => {
    return (
        <Switch>
            <Route exact path='/' component={Inicio} />
            <Route exact path='/gestorUsuario' component={Gestor} />
            <Route exact path="/menuBusqueda" component={menuBusqueda} />
        </Switch>
    )
}

export default Rutas;