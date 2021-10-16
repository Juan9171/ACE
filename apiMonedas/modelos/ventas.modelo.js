//cargar la libreria a la conexion de base de datos
var sql=require('./bd')


//constructor
var Venta=function(venta){
    this.id=venta.idVenta;
    this.idProducto_FK=venta.idProducto_FK;
    this.valor_total=venta.valor_total;
    this.identifcador=venta.identificador;
    this.cantidad=venta.cantidad;
    this.fecha=venta.fecha;
    this.precio=venta.precio
    this.docu_cliente=venta.docu_cliente
    this.nom_cliente=venta.nom_cliente
    this.vendedor=venta.vendedor 
    this.estado=venta.estado  
}

//Metodo que obtiene registro basado en la llave primaria de ventas
Venta.obtener=(idventa,resultado)=>{
    sql.query(`SELECT * FROM  Venta WHERE idVenta=${idventa};`,(err,res)=>{
          if(err){
            //verificar si hubo un error ejecutando la consulta  
              console.log("Error consultando la venta deseada: ",err);
              resultado(err,null);
              return;
          }
          //La consulta devuelve resultados        
          if(res.length){
            console.log("Venta encontrada: ",res[0]);
            resultado(null,res[0])
            return 

          }
          //No se encontraron registros
          resultado({tipo:"No encontrado"},null);
    })
}

Venta.listar=(resultado)=>{
    sql.query('CALL spListarVentas',(err,res)=>{
        if(err){
          //verificar si hubo un error ejecutando la consulta  
            console.log("Error consultando lista de ventas: ",err);
            resultado(err,null);
            return;
        }
              
        //La consulta devuelve
        console.log("Lista de ventas encontradas: ",res[0]);
        resultado(null,res[0]);
  })

}

//Metodo que inserta
Venta.actualizar=(venta,resultado)=>{
    sql.query('CALL spActualizarVenta(?,?,?,?,?,?,?,?,?,?,?)',
    [venta.id, venta.idProducto_FK,venta.valor_total,venta.identifcador,venta.cantidad,venta.fecha,venta.precio,venta.docu_cliente,venta.nom_cliente,venta.vendedor,venta.estado],
    (err,res)=>{
          if(err){
            //verificar si hubo un error ejecutando la consulta  
              console.log("Error actualizando la venta: ",err);
              resultado(err,null);
              return;
          }
          //La consulta no afecto registros      
          if(res.affectedRows==0){
            //No se encontraron registros
            resultado({tipo:"No encontrado"},null);
           
            return ;
  
          }
          console.log("Venta actualizanda: ", venta);
          resultado(null,{ venta })
          
    })
  }
  

module.exports=Venta;