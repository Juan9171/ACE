var cuerpoTabla =document.getElementById("ventas-tabla");
var tablaLlena="";

for (var i =0; i <tabla.length; i++){
    tablaLlena+= "<tr><td>"+tabla[i].ID+"</td><td>"+tabla[i].VALORTOTAL+"</td><td>"+tabla[i].IDENTIFICADOR+"</td><td>"+tabla[i].CANTIDAD+"</td><td>"+tabla[i].PRECIOUNITARIO+"</td><td>"+tabla[i].FECHADEVENTA+"</td><td>"+tabla[i].DOCUMENTODEIDENTIFICACION+"</td><td>"+tabla[i].NOMBREDELCLIENTE+"</td><td>"+tabla[i].VENDEDORENCARGADO+"</td><td>"+tabla[i].ESTADODEVENTA+"</td></tr>"
}
//cuerpoTabla.innerHTML = tablaLlena;