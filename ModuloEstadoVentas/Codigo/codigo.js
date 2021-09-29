var matriz = [];

function verificarRepetido(id) {
    var posicion = matriz.length;
    for (var i = 0; i < matriz.length; i++) {
        if (id == matriz[i][0]) {
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

function InsertarFila() {
    var tbl = document.getElementById("tabladeHistorial");
    var newRow = tbl.insertRow(-1);
    var newCell = newRow.insertCell(-1);
    var newText = document.createTextNode('Nueva fila superior');
    newCell.appendChild(newText);

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
    var fecha = date.toString
    var doci = document.getElementById("DOCIDENTIFI");
    var DOCIDE = eval(doci.value);
    var nomC1 = document.getElementById("NOMBRECLIENTE");
    var nomC = eval(nomC1.value);
    var nomV1 = document.getElementById("NOMVENDE");
    var nomV = eval(nomV1.value);

    
    estadoNombre=obtenerEstado();

    var vect = [ID, valtot, idf, cant, priceU, fecha, DOCIDE, nomC, nomV, estadoNombre];
    var ind = verificarRepetido(vect[0]);
    if (ind == matriz.length) {
        matriz.push(vect)
    } else {
        matriz[ind] = vect;
    }
    InsertarFila();
}
