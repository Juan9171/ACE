import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import Rutas from './componentes/Rutas';
import Barradenavegacion from './componentes/ListaPrincipal';

function App() {
  return (
   <Router>
  
     
       <Barradenavegacion />
       <Rutas />
    

   </Router>//dinamismo
    
   
  );
}

export default App;
