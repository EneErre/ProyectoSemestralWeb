function crearCuenta(){
        let rut = document.getElementById("txtRut").value;
        let nombre = document.getElementById("txtNombre").value;
        let apellido = document.getElementById("txtApellido").value;
        let nombreCuenta = document.getElementById("txtNombreCuenta").value;
    

    if (rut.length == 0) {
        document.getElementById("valRut").style.display = "inline";
        document.getElementById("txtRut").classList.add("is-invalid");
    }else{
        document.getElementById("valRut").style.display = "none";
        document.getElementById("txtRut").classList.remove("is-invalid");
        document.getElementById("txtRut").classList.add("is-valid");
    }


    if (nombre.length == 0) {
        document.getElementById("valNombre").style.display = "inline";
        document.getElementById("txtNombre").classList.add("is-invalid");
    }else{
        document.getElementById("valNombre").style.display = "none";
        document.getElementById("txtNombre").classList.remove("is-invalid");
        document.getElementById("txtNombre").classList.add("is-valid");
    }


    if (apellido.length == 0) {
        document.getElementById("valApellido").style.display = "inline";
        document.getElementById("txtApellido").classList.add("is-invalid");
    }else{
        document.getElementById("valApellido").style.display = "none";
        document.getElementById("txtApellido").classList.remove("is-invalid");
        document.getElementById("txtApellido").classList.add("is-valid");
    }

    if (nombreCuenta.length ==0){
        document.getElementById("valNombreCuenta").style.display="inline";
        document.getElementById("txtNombreCuenta").classList.add("is-invalid");
    }else{
        document.getElementById("valNombreCauenta").style.display = "none";
        document.getElementById("txtNombreCuenta").classList.remove("is-invalid");
        document.getElementById("txtNombreCuenta").classList.add("is-valid");
    }
}