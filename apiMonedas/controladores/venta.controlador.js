//cargar el modelo de las monedas
var Venta=require('../modelos/ventas.modelo');

//meootodo web para obtner una venta
exports.obtener=(req,res)=>{
    Venta.obtener(req.params.id,(err,data)=>{
        //verificar si no hubo error
        if(err){
            if(err.tipo=="No encontrado"){
                res.status(404).send({message: `No se encontro venta con el id ${req.params.id}`});

            }else{
                res.status(500).send({message: `Error obteniendo la venta con el id ${req.params.id}`});
            }
        }else{
            //se devuelve el registro obtenido
            res.send(data);
        }
    });
}

//Metodo web para la lista de LOS PRODUCTO
exports.listar=(req,res)=>{
    Venta.listar((err,data)=>{
        //verificar si no hubo error
        if(err){
            res.status(500).send({message: 'Error obteniendo la lista de ventas'});
    
        }else{
            //se devuelve el registro obtenido
            res.send(data);
        }
    });
}

exports.actualizar=(req,res)=>{
    //verificar que la solicitud tenga datos
    if(!req.body){
        res.status(400).send({message: 'El contenido del mensaje debe tener informacion de la venta'});
    }
    Venta.actualizar(new Venta(req.body),
    (err,data)=>{
        //verificar si no hubo error
        if(err){
            if(err.tipo=="No encontrado"){
                res.status(404).send({message: 'No se actualizo ninguna venta'});

            }else{
                res.status(500).send({message: 'Error actualizando la venta'});
            }
        }else{
            //se devuelve el registro hecho
            res.send(data);
        }
    });
}
