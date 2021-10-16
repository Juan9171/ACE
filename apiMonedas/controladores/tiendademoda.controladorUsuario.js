//Cargar el modelo de las monedas
var Usuario = require('../modelos/tiendademoda.modeloUsuario');

//obtener una moneda metodo web
exports.obtener = (req, res) => {
    Usuario.obtener(req.params.id, (err, data) => {
        //verificar si no hubo error
        if (err) {
            if (err.tipo == "No encontrado") {
                res.status(404).send({ message: `No se encontro usuario con el id ${req.params.id}` });
            }
            else {
                res.status(500).send({ message: `Error obteniendo el usuario con el id ${req.params.id}` });
            }
        }
        else {
            //Se devuelve el registro obtenido
            res.send(data);
        }

    });

}


exports.listar = (req, res) => {
    Usuario.listar((err, data) => {
        //verificar si no hubo error
        if (err) {
            res.status(500).send({ message: `Error obteniendo la lista de usuarios ` });
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
            res.status(404).send({ message: 'El contenido del mensaje debe tener informacion del ususario' });

        }

    Usuario.actualizar(new Usuario(req.body), (err, data) => {
        //verificar si no hubo error
        if (err) {
            if (err.tipo == "No encontrado") {
                res.status(404).send({ message: 'No se actualizo ningun usuario' });
            }
            else {
                res.status(500).send({ message: 'Error actualizando el usuario' });
            }
        }
        else {
            //Se devuelve el registro obtenido
            res.send(data);
        }

    });

}