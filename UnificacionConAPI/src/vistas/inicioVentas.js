import React, { useEffect, useState } from 'react';
import Registro from '../componentes/Registro';
import '../Styles/Estilos.css';
import { v4 as uuidv4 } from 'uuid';
import TablaVentas from '../componentes/TablaVentas';
import Editar from '../componentes/Editar';
import BarraBusqueda from '../componentes/BarraBusqueda';
import TablaBusqueda from '../componentes/TablaBusqueda';

var Venta = function (idVenta, idProducto_FK, valor_total, identificador, cantidad, fecha, precio, docu_cliente, nom_cliente, vendedor, estado) {
  this.idVenta = idVenta;
  this.idProducto_FK = idProducto_FK;
  this.valor_total = valor_total;
  this.identificador = identificador;
  this.cantidad = cantidad;
  this.fecha = fecha;
  this.precio = precio;
  this.docu_cliente = docu_cliente;
  this.nom_cliente = nom_cliente;
  this.vendedor = vendedor;
  this.estado = estado;
}

var Producto = function (id, valor, estado, descripcion) {
  this.idProducto = id;
  this.valor = valor;
  this.estado = estado;
  this.descripcion = descripcion;
}

const InicioVentas = () => {
  const [users, setUsers] = useState([]);
  const [productos, setProductos] = useState([])

  const addUser = (user, e) => {
    user.idVenta = -1;
    fetch("http://localhost:3010/venta",
      {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          idProducto_FK: user.idProducto_FK,
          idVenta: user.idVenta,
          valor_total: user.valor_total,
          identificador: user.identificador,
          cantidad: user.cantidad,
          precio: user.precio,
          fecha: user.fecha,
          docu_cliente: user.docu_cliente,
          nom_cliente: user.nom_cliente,
          vendedor: user.vendedor,
          estado: user.estado
        })
      }
    ).
      then((res) => res.json()).
      then(e.target.reset());
    window.location.reload(true);
    setUsers([
      ...users,
      user
    ])
  }
  const obtenerVentas = () => {
    fetch("http://localhost:3010/venta", { method: "get" })
      .then((res) => res.json())
      .then((json) => {
        var usuariosData = [];
        json.map((item) => {
          usuariosData.push(new Venta(
            item.idVenta,
            item.idProducto_FK,
            item.valor_total,
            item.identificador,
            item.cantidad,
            item.fecha,
            item.precio,
            item.docu_cliente,
            item.nom_cliente,
            item.vendedor,
            item.estado
          ));
        });
        setUsers(usuariosData);
      });
  }
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
        setProductos(usersData);
      });
  }



  const [ventaBuscada, setVentaBuscada] = useState({})
  const [mostrarBusqueda, setMostrarBusqueda] = useState(false)
  const searchUser = (id) => {
    var a = users.filter(user => user.idVenta == id)
    var b = users.filter(user => user.nom_cliente == id)
    var c = users.filter(user => user.docu_cliente == id)

    if (a.length > 0) {
      setVentaBuscada(a)      
    }else if (b.length > 0) {
      setVentaBuscada(b)
    }else if (c.length > 0) {
      setVentaBuscada(c)
    }else{
      setVentaBuscada({})
    }
    setMostrarBusqueda(true)
  }
  const recargarTabla = () => {
    setMostrarBusqueda(false)
  }





  const deleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id))
  }

  const [editing, setEditing] = useState(false);

  const [currentUser, setCurrentUser] = useState({
    idVenta: null, idProducto_FK: null, valor_total: null, identificador: null, cantidad: null, precio: null, fecha: '', docu_cliente: null, nom_cliente: '', vendedor: '', estado: ''
  })


  const editRow = (user) => {

    setEditing(true)
    setCurrentUser({
      idVenta: user.idVenta, idProducto_FK: user.idProducto_FK, valor_total: user.valor_total, identificador: user.identificador, cantidad: user.cantidad, precio: user.precio, fecha: user.fecha, docu_cliente: user.docu_cliente, nom_cliente: user.nom_cliente, vendedor: user.vendedor, estado: user.estado
    })
  }


  const updateUser = (id, updatedUser) => {
    setEditing(false);
    setUsers(users.map(user => (user.id == id ? updatedUser : user)))
  }
  useEffect(() => {
    obtenerVentas();
    obtenerProductos();
  }, []);

  return (
    <div>

      {
        editing ? (
          <div>
            <div className="BarraTitulo">EDITAR DATOS</div>
            <Editar currentUser={currentUser} updateUser={updateUser} productos={productos} />
          </div>
        ) : (
          <div>
            <div className="BarraTitulo">REGISTRAR DATOS</div>
            <Registro addUser={addUser} productos={productos} />
          </div>
        )
      }

      <BarraBusqueda searchUser={searchUser} />


      <div className="BarraTitulo2">
        <img src={require("./Imagenes/1762581.png").default} width="50px" height="50px" />
        HISTORIAL DE ESTADO DE VENTA
      </div>

      {
        mostrarBusqueda ? (
          <div>
            <TablaBusqueda ventaBuscada={ventaBuscada} deleteUser={deleteUser} editRow={editRow} recargarTabla={recargarTabla} />
            <div className="botonVolverAtrasBusquedaVenta">
              <button onClick={() => setMostrarBusqueda(false)}>
                Volver a tabla principal
              </button>
            </div>
          </div>
        ) : (
          <div>
            <TablaVentas users={users} deleteUser={deleteUser} editRow={editRow} />
          </div>
        )
      }
    </div >
  );
}

export default InicioVentas;