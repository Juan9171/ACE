import './App.css';

import Barradenavegacion from './componentes/ListaPrincipal';
import Rutas from './componentes/Rutas';

import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Barradenavegacion />
      <Rutas />
    </BrowserRouter>
  );
}

export default App;
