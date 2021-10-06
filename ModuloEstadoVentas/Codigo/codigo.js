let tabla = [
    {ID: 12345, VALORTOTAL: 12345, IDENTIFICADOR: 12345, CANTIDAD: 1, PRECIOUNITARIO: 12354, FECHADEVENTA:"17/08/2010", DOCUMENTODEIDENTIFICACION: 12345, NOMBREDELCLIENTE: "Juan", VENDEDORENCARGADO: "Pedro", ESTADODEVENTA: "En proceso"}
];

function verificarRepetido(id) {
    var posicion = tabla.length;
    for (var i = 0; i < tabla.length; i++) {
        if (id == tabla[i].ID) {
            posicion = i;
            return posicion;

        }
    }
    return posicion;
}

function obtenerEstado(){   
    var estado = document.getElementById("Estado");
    switch (estado.value) {
        case "1":
            return "En proceso"
        case "2":
            return "Entregada"
        case "3":
            return "Cancelada"
    }
}

function actualizar() {
    var id1 = document.getElementById("numeroID");
    var ID = eval(id1.value);
    var vt = document.getElementById("VALORTOTAL");
    var valtot = eval(vt.value);
    var identi = document.getElementById("IDENTIFICADOR");
    var idf = eval(identi.value);
    var amo = document.getElementById("CANTIDAD");
    var cant = eval(amo.value);
    var pu = document.getElementById("PRECIOUNITARIO");
    var priceU = eval(pu.value);
    var fecha1 = document.getElementById("FECHAVENTA");
    var date = new Date(fecha1)
    var fechax = date.toString
    var doci = document.getElementById("DOCIDENTIFI");
    var DOCIDE = eval(doci.value);
    var nomC1 = document.getElementById("NOMBRECLIENTE");
    var nomC = eval(nomC1.value);
    var nomV1 = document.getElementById("NOMVENDE");
    var nomV = eval(nomV1.value);

    estadoNombre=obtenerEstado();

    var ind = verificarRepetido(ID);
    if (ind == tabla.length) {
        var nuevaVenta ={ID: ID, VALORTOTAL: valtot, IDENTIFICADOR: idf, CANTIDAD: cant, PRECIOUNITARIO: priceU, FECHADEVENTA: fechax, DOCUMENTODEIDENTIFICACION: DOCIDE, NOMBREDELCLIENTE: nomC, VENDEDORENCARGADO: nomV, ESTADODEVENTA: estadoNombre}
        tabla.push(nuevaVenta)
    } else {
        var nuevaVenta ={ID: ID, VALORTOTAL: valtot, IDENTIFICADOR: idf, CANTIDAD: cant, PRECIOUNITARIO: priceU, FECHADEVENTA: fechax, DOCUMENTODEIDENTIFICACION: DOCIDE, NOMBREDELCLIENTE: nomC, VENDEDORENCARGADO: nomV, ESTADODEVENTA: estadoNombre}
        tabla[ind] = nuevaVenta;
    }
}

