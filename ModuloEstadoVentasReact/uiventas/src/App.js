import './App.css';

import ListaPrincipal from './componentes/ListaPrincipal';
import Rutas from './componentes/Rutas';

import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <ListaPrincipal />
      <Rutas />
    </BrowserRouter>
  );
}

export default App;
