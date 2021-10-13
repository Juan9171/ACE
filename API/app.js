const express=require('express');
const app = express();
const puerto=3010;

app.get('/',(req, res)=>{

    res.send('Servicio de BD tiendademoda en funcionaniento')

});

//carar libreria para 'parseo' de contenido JSON
var bodyParser=require('body-parser');
app.use(bodyParser.json());

require("./rutas/tiendademoda.rutas")(app);


app.listen(puerto, ()=>{
    console.log(`Servicio de BD Tiendademodas escuchando en http://localhost:${puerto}`);
})