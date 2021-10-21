
import React, { useState, useEffect } from 'react';
import '../Styles/Estilos.css';
import IconLogin from '../Assets/Iconos/user50px.png'
import Formulario from './Formulario'
import Cookies from 'universal-cookie';

const cookies = new Cookies();

const Barradenavegacion = () => {
  const rol = cookies.get('rol');
  const names = cookies.get('names');

  const obtenerRol = () => {
    if (rol == 1) {
      return ("Vendedor")
    } else {
      return ("Administrador")
    }
  }


  const [mostrarComponentes, setMostrarComponentes] = useState(false);
  const estadoUsuario = () => {
    if (rol == 1) {
      setMostrarComponentes(true)
    } else {
      setMostrarComponentes(false)
    }
  }
  useEffect(() => {
    estadoUsuario();
  }, []);

  return (

    <React.Fragment>
      {
        mostrarComponentes ? (
          <div className="cont1">
            <div className="barraMenu2">
              <div className="dropdown">
                <button className="dropbtn"> <a href="/iniciomoduloventas">Administrador de ventas</a></button>
              </div>

              <button className="btnMenuLogin" title="LOGIN">
                <img src={IconLogin} />
              </button>
              <div>
                <li>{names}</li>
                <li>{obtenerRol()}</li>
              </div>

            </div>

          </div>
        ) : (
          <div className="cont1">
            <div className="barraMenu2">
              <div className="dropdown">
                <button className="dropbtn"> <a href="/iniciomoduloventas">Administrador de ventas</a></button>
              </div>
              <div className="dropdown">
                <button className="dropbtn"><a href="/listaryregistrar">Administrador de productos</a></button>

              </div>

              <button className="buttonmy button3_1">
                <a href="/gestorUsuario">
                  Gestion de usuarios/roles
                </a>
              </button>

              <button className="btnMenuLogin" title="LOGIN">
                <img src={IconLogin} />
              </button>
              <div>
                <li>{names}</li>
                <li>{obtenerRol()}</li>
              </div>
            </div>

          </div>
        )}

    </React.Fragment>

  )

}



export default Barradenavegacion;