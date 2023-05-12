function guardarDatos() {

    var nombre = document.getElementById('txtNombre').value;
    var apellido = document.getElementById('txtApellido').value;
    var nombreCuenta = document.getElementById('txtNombreCuenta').value;
    var rut = document.getElementById('txtRut').value;
    var correo = document.getElementById('txtCorreo').value;
    var contraseña = document.getElementById('txtContraseña').value;

    
 
    console.log('Nombre:', nombre);
    console.log('Apellido:', apellido);
    console.log('Nombre de cuenta:', nombreCuenta);
    console.log('Rut:', rut);
    console.log('Correo:', correo);
    console.log('Contraseña:', contraseña);

    
    validarFormulario()
    alert('Los datos se han guardado correctamente.');

}



function validarFormulario() {

    var nombre = document.getElementById("txtNombre").value;
    var apellido = document.getElementById("txtApellido").value;
    var nombreCuenta = document.getElementById("txtNombreCuenta").value;
    var rut = document.getElementById("txtRut").value;
    var correo = document.getElementById("txtCorreo").value;
    var contraseña = document.getElementById("txtContraseña").value;
    
   
    if (nombre === '' || apellido === '' || nombreCuenta === '' || rut === '' || correo === '' || contraseña === '') {
      alert('Por favor, complete todos los campos obligatorios.');
      return false; 
    }
}