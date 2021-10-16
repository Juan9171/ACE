//Cargar la libreria con la conexion a la bd
var sql = require('./bd');

//constructor
var Usuario = function (usuario) {

    console.log(usuario);

    this.idUsuario = usuario.idUsuario;
    this.nombres = usuario.nombres;
    this.apellidos = usuario.apellidos;
    this.rolU=usuario.rolU;
    this.estadoU=usuario.estadoU;
}
//Metodo
Usuario.obtener = (idUsuario, resultado) => {

    sql.query(`Select * from Usuarios where idUsuario=${idUsuario};`, (err, res) => {
        //Verificar si hubo error ejecutando la consulta
        if (err) {
            console.log("Error consultando el usuario:", err);
            resultado(err, null);
            return;
        }
        //La consulta devuelve resultados
        if (res.length) {
            console.log("Usuario encontrado", res[0]);
            resultado(null, res[0]);
            return;
        }
        //No se encontraron registros
        resultado({ tipo: "No encontrado" }, null);
    });

}

Usuario. listar = (resultado) => {
    sql.query("Select * from Usuarios where idUsuario;", (err, res) => {
        //Verificar si hubo error ejecutando la consulta
        if (err) {
            console.log("Error consultando lista de usuarios:", err);
            resultado(err, null);
            return;
        }
        //La consulta devuelve resultados
        console.log("Listado de usuarios encontrada", res);
            resultado(null, res);
    });

}



Usuario.actualizar = (usuario, resultado) => {

    sql.query('CALL spActualizarUsuario(?,?,?,?,?);', 
    [usuario.idUsuario, usuario.nombres, usuario.apellidos,usuario.rolU, usuario.estadoU] ,
    (err, res) => {
        //Verificar si hubo error ejecutando la consulta
        if (err) {
            console.log("Error actualizando usuario", err);
            resultado(err, null);
            return;
        }
        //La consulta devuelve resultados
        if (res.affectedRows==0) {

            resultado({ tipo: "No encontrado" }, null);
            return;
        }
        //No se encontraron registros
        console.log("Usuario actualizado", usuario);
            resultado(null, {usuario});


    });

}


module.exports = Usuario;