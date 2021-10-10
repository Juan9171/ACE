import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import Inicio from './componentes/Inicio2';
import BarraMenu from './componentes/Navbar';
import Listado from './componentes/ProductoListado';
import Busqueda from './componentes/Buscarproducto';
import RegistrarProducto from './componentes/Registrarproductos'
import Listaryregistrar from './componentes/Listaryregistrar'

function App() {
  return (
   <Router>
  
    <BarraMenu />   
 
    <Switch>
    <Route path='/listaryregistrar'>
        <Listaryregistrar/>
      </Route>
      <Route path='/registro'>
        <RegistrarProducto />
      </Route>
      <Route path='/busqueda'>
        <Busqueda />
      </Route>
      <Route path='/lista'>
        <Listado />
      </Route>
      <Route path='/'>
           <Inicio />
      </Route>
    </Switch>

   </Router>//dinamismo
    
   
  );
}

export default App;
