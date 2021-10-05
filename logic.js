 var ini=document.querySelector('#btnGuardarProduc')
 if (ini){
     ini.addEventListener('click',saveFriend)
 }
 

function saveFriend(){
    var sId=document.querySelector('#Idtxt').value,
        sValoruni=document.querySelector('#valorUnitxt').value,
        sEstado=document.querySelector('#txtestado').value,
        sDescrip=document.querySelector('#descriptxt').value;

   añadirProducto(sId,sValoruni,sEstado,sDescrip)  
 
}


function drawTableProduct(){
    var listDataProduc=getProductList();
    tbody =document.querySelector('#producTable tbody')

    tbody.innerHTML='';

    for(var i=0;i<listDataProduc.length;i++){
        var row = tbody.insertRow(i);
        var idCell= row.insertCell(0)
        idCell.innerHTML=listDataProduc[i].id



        tbody.appendChild(row)
    }
}