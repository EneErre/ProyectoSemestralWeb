function validarFormulario() {

    var nombre = document.getElementById('txtNombre').value;
    var apellido = document.getElementById('txtApellido').value;
    var nombreCuenta = document.getElementById('txtNombreCuenta').value;
    var rut = document.getElementById('txtRut').value;
    var correo = document.getElementById('txtCorreo').value;
    var contrasenia = document.getElementById('txtContrasenia').value;
    

    let cumpleNombre = false;
    let cumpleApellido = false;
    let cumpleNombreCuenta = false;
    let cumpleRut= false;
    let cumpleCorreo = false;
    let cumpleContrasenia = false;


  
    if (nombre.length == 0) {
        document.getElementById("txtNombre").classList.add("is-invalid");
        document.getElementById("errorNombre").style.display = "block"
        
    }else{
        document.getElementById("errorNombre").style.display = "none";
        document.getElementById("txtNombre").classList.remove("is-invalid");
        document.getElementById("txtNombre").classList.add("is-valid");
        cumpleNombre = true;
    }



    if (apellido.length == 0) {
        document.getElementById("txtApellido").classList.add("is-invalid");
        document.getElementById("errorApellido").style.display = "block"
    }else{
        document.getElementById("errorApellido").style.display = "none";
        document.getElementById("txtApellido").classList.remove("is-invalid");
        document.getElementById("txtApellido").classList.add("is-valid");
        cumpleApellido = true;
    }

    
    if (nombreCuenta.length == 0) {
        document.getElementById("txtNombreCuenta").classList.add("is-invalid");
        document.getElementById("errorNombreCuenta").style.display = "block"
    }else{
        document.getElementById("errorNombreCuenta").style.display = "none";
        document.getElementById("txtNombreCuenta").classList.remove("is-invalid");
        document.getElementById("txtNombreCuenta").classList.add("is-valid");
        cumpleNombreCuenta = true
    }
    
    if (rut.length == 0) {
        document.getElementById("txtRut").classList.add("is-invalid");
        document.getElementById("errorRut").style.display = "block"
    }else{
        document.getElementById("errorRut").style.display = "none";
        document.getElementById("txtRut").classList.remove("is-invalid");
        document.getElementById("txtRut").classList.add("is-valid");
        cumpleRut = true;
    }

    if (correo.length == 0) {
        document.getElementById("txtCorreo").classList.add("is-invalid");
        document.getElementById("errorCorreo").style.display = "block"
    }else{
        document.getElementById("errorCorreo").style.display = "none";
        document.getElementById("txtCorreo").classList.remove("is-invalid");
        document.getElementById("txtCorreo").classList.add("is-valid");
        cumpleCorreo = true;
    }

    if (contrasenia.length < 8) {
        document.getElementById("txtContrasenia").classList.add("is-invalid");
        document.getElementById("errorContrasenia").style.display = "block"
        
    }else{
        document.getElementById("errorContrasenia").style.display = "none";
        document.getElementById("txtContrasenia").classList.remove("is-invalid");
        document.getElementById("txtContrasenia").classList.add("is-valid");
        cumpleContrasenia = true;
    }
 
    console.log('Nombre:', nombre);
    console.log('Apellido:', apellido);
    console.log('Nombre de cuenta:', nombreCuenta);
    console.log('Rut:', rut);
    console.log('Correo:', correo);
    console.log('Contrasen:', contrasenia);
 
    if (cumpleNombre && cumpleApellido && cumpleNombreCuenta
      &&cumpleRut && cumpleCorreo && cumpleContrasenia){
        alert("Cuenta creada");
      }
}






    
   
    