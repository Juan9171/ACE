var tabla=[]

function añadirProducto(pid,pvalorUni,pestado,pdescrip){
       
        var nuevoProducto={
                 id :pid,
                 valorUnitario:pvalorUni,
                 estado : pestado,
                 descripcion:pdescrip
                };  
         console.log(nuevoProducto)      
         tabla.push(nuevoProducto)        
        }

function getProductList(){
        return tabla        
}


function guardar(){
        var txtLI= document.getElementById("Idtxt")
        //obtener el valor digitado en la caja de texto
        var xMin= eval(txtLI.value);
        window.alert(xMin)
   
}

