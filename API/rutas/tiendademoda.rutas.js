module.exports = (app) => {
var producto = require('../controladores/tiendademoda.controlador');

//metod que obtiene una moneda

app.get("/producto/:id",producto.obtener);


app.get("/producto",producto.listar);

app.post("/producto",producto.actualizar);

}
