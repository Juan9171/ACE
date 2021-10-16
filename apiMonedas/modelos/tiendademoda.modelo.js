//Cargar la libreria con la conexion a la bd
var sql = require('./bd');

//constructor
var Producto = function (producto) {

    console.log(producto);

    this.idProducto = producto.idProducto;
    this.valor = producto.valor;
    this.estado = producto.estado;
    this.descripcion = producto.descripcion;
}
//Metodo
Producto.obtener = (idproducto, resultado) => {

    sql.query(`Select * from producto where idProducto=${idproducto};`, (err, res) => {
        //Verificar si hubo error ejecutando la consulta
        if (err) {
            console.log("Error consultando el producto:", err);
            resultado(err, null);
            return;
        }
        //La consulta devuelve resultados
        if (res.length) {
            console.log("Producto encontrado", res[0]);
            resultado(null, res[0]);
            return;
        }
        //No se encontraron registros
        resultado({ tipo: "No encontrado" }, null);
    });

}

Producto. listar = (resultado) => {
    sql.query("Select * from producto where idProducto;", (err, res) => {
        //Verificar si hubo error ejecutando la consulta
        if (err) {
            console.log("Error consultando lista de productos:", err);
            resultado(err, null);
            return;
        }
        //La consulta devuelve resultados
        console.log("Listado de Productos encontrados", res);
            resultado(null, res);
    });

}



Producto.actualizar = (producto, resultado) => {

    sql.query('CALL spActualizarProducto(?, ?, ?, ?);', 
    [producto.idProducto, producto.valor, producto.estado, producto.descripcion] ,
    (err, res) => {
        //Verificar si hubo error ejecutando la consulta
        if (err) {
            console.log("Error actualizando producto", err);
            resultado(err, null);
            return;
        }
        //La consulta devuelve resultados
        if (res.affectedRows==0) {

            resultado({ tipo: "No encontrado" }, null);
            return;
        }
        //No se encontraron registros
        console.log("Producto actualizado", producto);
            resultado(null, {producto});


    });

}


module.exports = Producto;