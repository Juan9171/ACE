import React, { useState, useEffect } from 'react'
import '../Styles/EstilosInicio.css';
import ProductoTabla from './ProductoListado';
import Formularioregistro from './Registrarproductos';
import { v4 as uuidv4 } from 'uuid';
import EditProduct from './Editproduct';
import BarradeBusqueda from './Barradebusqueda';
import TablaBusquedadeProducto from './TablaBusquedaProducto';
import Barradenavegacion from './ListaPrincipal';


var Producto = function (id, valor, estado, descripcion) {
  this.idProducto = id;
  this.valor = valor;
  this.estado = estado;
  this.descripcion = descripcion;
}


const Listaryregistrar = () => {


  const [users, setUsers] = useState([]);
  const [estadoListado, setEstadoListado] = useState(true);
  console.log(users)

  const obtenerProductos = () => {
    fetch("http://localhost:3010/producto", { method: "get" })
      .then((res) => res.json())
      .then((json) => {
        var usersData = [];
        json.map((item) => {
          usersData.push(new Producto(
            item.idProducto,
            item.valor,
            item.estado,
            item.descripcion
          ));
        });
        setUsers(usersData);
        setEstadoListado(false);
      });
  }
  // if (estadoListado) {
  //   obtenerProductos();
  // }

  //Agregar Usuario
  const addUser = (user, e) => {
    user.idProducto = -1;
    fetch("http://localhost:3010/producto",
      {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          idProducto: user.idProducto,
          valor: user.valor,
          estado: user.estado,
          descripcion: user.descripcion
        })
      }
    ).
      then((res) => res.json()).
      then(e.target.reset());
    obtenerProductos();
    window.location.reload(true);

    setUsers([
      ...users,
      user
    ])
  }
  //eliminar producto
  const deleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id))
  }
  //Editar producto
  const [editing, setEditing] = useState(false);

  const [currentUser, setCurrentUser] = useState(
    {
      idProducto: null, valor: '', estado: '', descripcion: ''
    }
  )
  const editRow = (user) => {
    setEditing(true)
    setCurrentUser({
      idProducto: user.idProducto, valor: user.valor, estado: user.estado, descripcion: user.descripcion
    })
  }

  const updateProduct = (id, updatedProduct) => {
    setEditing(false)
    setUsers(users.map(user => (user.idProducto === id ? updatedProduct : user)))

  }

  const [ventaBuscada, setVentaBuscada] = useState([])
  const [mostrarBusqueda, setMostrarBusqueda] = useState(false)
  const searchUser = (id) => {
    var a = users.filter(user => user.idProducto == id)
    var b = users.filter(user => user.descripcion == id)

    if (a.length > 0) {
      setVentaBuscada(a)      
    }else if (b.length > 0) {
      setVentaBuscada(b)
    }else{
      setVentaBuscada({})
    }
    setMostrarBusqueda(true)
  }
  const recargarTabla = () => {
    setMostrarBusqueda(false)
  }

  useEffect(() => {
    obtenerProductos();
  }, []);

  return (
    <React.Fragment>
    <Barradenavegacion />
    <div className="bodyGeneral">
      
      <div className="container ">

        <div className="flex-row ">
          <div className="flex-large ">
            {
              editing ? (
                <div>
                  <EditProduct currentUser={currentUser} updateProduct={updateProduct} />

                </div>
              ) : (
                <div>
                  <Formularioregistro addUser={addUser} />
                </div>
              )
            }

          </div>
          {
            mostrarBusqueda ? (
              <div>
                <TablaBusquedadeProducto ventaBuscada={ventaBuscada} deleteUser={deleteUser} editRow={editRow} recargarTabla={recargarTabla} />
                <div className="botonVolverAtrasBusqueda">
                  <button onClick={() => setMostrarBusqueda(false)}>
                    Volver a tabla principal
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex-large">

                <ProductoTabla users={users} deleteUser={deleteUser} editRow={editRow} />
              </div>
            )
          }
        </div>
      </div>
      <BarradeBusqueda searchUser={searchUser} />
    </div>
    </React.Fragment>
  )
}
export default Listaryregistrar