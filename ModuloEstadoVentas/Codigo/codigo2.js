
function InsertarFila() {
    var tbl = document.getElementById("tabladeHistorial");
    var newRow = tbl.insertRow(-1);
    var newCell = newRow.insertCell(-1);
    var newText = document.createTextNode('Nueva fila superior');
    newCell.appendChild(newText);

}