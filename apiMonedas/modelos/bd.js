//cargar loibreria para operar con BD MySQL
var mysql = require("mysql");

//Cargar el archivo de configuracion
var configBD = require("../configuracion/bd.config");

//crear la conexion a BD
var conexion = mysql.createConnection(
    {
        host: configBD.SERVIDOR,
        user: configBD.USUARIO,
        password: configBD.CLAVE,
        database: configBD.BASEDATOS
    }
);

//Abrir la conexion a la BD

conexion.connect((error) => {
    if (error) throw error;
    //Mostrar por consola mensaje de conexion
    console.log("Conexion exitosa a la BD de tiendademoda");
}
);

module.exports = conexion;
