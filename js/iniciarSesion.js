$(function(){
    $("#formularioIniciarSesion").validate({
        rules:{
            txtNombre:{
                required: true
            },
            txtContrasenia:{
                required: true,
                minlength: 8
            }
        },
        messages:{
            txtNombre:{
                required: "Por favor ingrese el nombre de su cuenta"
            },
            txtContrasenia:{
                required: "Por favor ingrese su contraseña",
                minlength: "La contraseña ingresada es muy corta"
            }
        },
        submitHandler: function(form){
            alert("Se inicio sesion correctamente");
        }
    });

});




