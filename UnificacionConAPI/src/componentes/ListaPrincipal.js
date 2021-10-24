
import React, { useState, useEffect } from 'react';
import '../Styles/Estilos.css';
import IconLogin from '../Assets/Iconos/user50px.png'
import Formulario from './Formulario'
import Cookies from 'universal-cookie';

const cookies = new Cookies();

const Barradenavegacion = () => {
  const rol = cookies.get('rol');
  const names = cookies.get('names');
  const imageUrl = cookies.get('imageUrl');

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
                <button className="dropbtn"> <a className="la" href="/iniciomoduloventas">Administrador de ventas</a></button>
              </div>
              <div className="dropdown">
                <button className="dropbtn"><a className="la" href="/listaryregistrar">Administrador de productos</a></button>

              </div>

              <div className="dropdown">
              <button className="dropbtn">
                <a className="la" href="/gestorUsuario">
                  Gestion de usuarios/roles
                </a>
              </button>
              </div>

              <button className="avatar" title="LOGIN">
                <a className="la" href="/">
                  SALIR
                </a>
              </button>
              <img className="avatar2" src={imageUrl}/>
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