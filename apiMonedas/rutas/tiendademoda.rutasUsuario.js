module.exports = (app) => {
    var usuario = require('../controladores/tiendademoda.controladorUsuario');
    
    app.get("/usuario/:id",usuario.obtener);
    
    
    app.get("/usuario",usuario.listar);
    
    app.post("/usuario",usuario.actualizar);
    
    }