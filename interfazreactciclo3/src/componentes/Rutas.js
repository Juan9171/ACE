import {Switch, Route} from 'react-router-dom'
import Inicio from '../vistas/inicio'
const Rutas=()=>{
    
        return(
            <switch>
                <Route path='/' component={Inicio}/>
            </switch>
        )
    }
 export default Rutas;