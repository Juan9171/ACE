//Cargar el modelo de las monedas
var Producto = require('../modelos/tiendademoda.modelo');

//obtener una moneda metodo web
exports.obtener = (req, res) => {
    Producto.obtener(req.params.id, (err, data) => {
        //verificar si no hubo error
        if (err) {
            if (err.tipo == "No encontrado") {
                res.status(404).send({ message: `No se encontro producto con el id ${req.params.id}` });
            }
            else {
                res.status(500).send({ message: `Error obteniendo el producto con el id ${req.params.id}` });
            }
        }
        else {
            //Se devuelve el registro obtenido
            res.send(data);
        }

    });

}


exports.listar = (req, res) => {
    Producto.listar((err, data) => {
        //verificar si no hubo error
        if (err) {
            res.status(500).send({ message: `Error obteniendo la lista de productos ` });
        }
        else {
            //Se devuelve el registro obtenido
            res.send(data);
        }

    });

}

exports.actualizar = (req, res) => {

    //validar que la solicitud tega datos
        if(!req.body){
            res.status(404).send({ message: 'El contenido del mensaje debe tener informacion del producto' });

        }

    Producto.actualizar(new Producto(req.body), (err, data) => {
        //verificar si no hubo error
        if (err) {
            if (err.tipo == "No encontrado") {
                res.status(404).send({ message: 'No se actualizo ningun producto' });
            }
            else {
                res.status(500).send({ message: 'Error actualizando el producto' });
            }
        }
        else {
            //Se devuelve el registro obtenido
            res.send(data);
        }

    });

}




