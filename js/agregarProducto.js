$(function(){
        
    $("#imagenProducto").change(function(event){
        var x = URL.createObjectURL(event.target.files[0]);
        console.log(x);
        $("#mostrarImagen").attr("src",x);
        array = [x, 0]
        let stringUrl = JSON.stringify(array);
        localStorage.setItem("urlImg",stringUrl);
    })    


});


function verificarDatos(){
    let nombre = document.getElementById("txtNombre").value;
    let descripcion = document.getElementById("txtDescripcion").value;
    let precio = document.getElementById("precioProduc").value;
    let tipo = document.getElementById("tipoProducto").value;
    console.log(nombre);
    console.log(descripcion);
    console.log(precio);

 if (nombre.length <= 3) {
        document.getElementById("txtNombre").classList.add("is-invalid");
        document.getElementById("errorNombre").style.display = "block"
        
    }else{
        document.getElementById("errorNombre").style.display = "none";
        document.getElementById("txtNombre").classList.remove("is-invalid");
        document.getElementById("txtNombre").classList.add("is-valid");
    }

    if(descripcion.length < 10){
        document.getElementById("txtDescripcion").classList.add("is-invalid");
        document.getElementById("errorDescripcion").style.display="block";
    }else{
        document.getElementById("errorDescripcion").style.display="none";
        document.getElementById("txtDescripcion").classList.remove("is-invalid");
        document.getElementById("txtDescripcion").classList.add("is-valid");
    }

console.log(typeof precio);

    if(precio < 1000){
        document.getElementById("precioProduc").classList.add("is-invalid");
        document.getElementById("errorPrecio").style.display= "block";
    }else{
        document.getElementById("errorPrecio").style.display="none";
        document.getElementById("precioProduc").classList.remove("is-invalid");
        document.getElementById("precioProduc").classList.add("is-valid");
    }
    
    
    

//No tocar COMIENZO
    let jsonUrl = localStorage.getItem("urlImg");
    let arrayUrl = JSON.parse(jsonUrl);
    
    $("#hola").attr("src",arrayUrl[0]);
    let imagen = arrayUrl[0];


    let jsonProductos = localStorage.getItem("storageProductos");
    let arrayProductos = JSON.parse(jsonProductos);

    
    let ultimoElemento = arrayProductos.slice(-1);    
    let codigo =  ultimoElemento[0].codigo;
    const obj = {
        codigo: codigo,
        tipo: tipo,
        nombre: nombre,
        descripcion: descripcion,
        precio: precio,
        img: imagen
        
    } 

    arrayProductos.push(obj);
    console.log(arrayProductos);
    let stringProductos = JSON.stringify(arrayProductos);

    localStorage.setItem("storageProductos", stringProductos)
    //No tocar FIN 
}