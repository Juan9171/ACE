module.exports=(app) =>{
    var venta= require('../controladores/venta.controlador');
        //metodo que obtiene una venta
        app.get("/venta/:id",venta.obtener);
        //metodo que lista las ventas
        app.get("/venta",venta.listar);
        //metodo que actualiza una moneda (INSERT-UPDATE)
        app.post("/venta",venta.actualizar);  


     

}
