function ingresar(){
    var usua = document.getElementById("usuario").value;
    var Cont = document.getElementById("contraseña").value;
    if(usua=="ACE" && Cont =="2021" )
    {
        alert("Usuario y Contraseña Validos");
    }
    else{
        alert("Datos ingresados erroneos , por favo intente de nuevo");
    }
}
function google(){
    alert("Ingreso Valido");
}

function registrar(){
    var name = document.getElementById("Nombre").value;
    var email = document.getElementById("Correo Electronico").value;
    var pass = document.getElementById("Contraseña").value;
    var expresion = /\w+@\w+\.+[a-z]/;
    if(name=="" || email=="" || pass==""){
        alert("Los campos estan vacios");
        return false;
    }
    else if (!expresion.test(email)){
        alert("El correo no es valido");
        return false;
    }

    alert(name+ ", "+ email + ", " + pass );

}