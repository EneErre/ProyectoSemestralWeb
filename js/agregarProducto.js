$(function(){
        
    let stringUrl = $("#imagenProducto").change(function(event){
        var x = URL.createObjectURL(event.target.files[0]);
        console.log(x);
        $("#mostrarImagen").attr("src",x);
        array = [x, 0]
        return JSON.stringify(array);
        
    })    

    console.log(stringUrl);
});


function verificarDatos(urlImagen){
    let nombre = document.getElementById("txtNombre").value;
    let descripcion = document.getElementById("txtDescripcion").value;
    let precio = document.getElementById("precioProduc").value;
    let tipo = document.getElementById("tipoProducto").value;
    let stock = document.getElementById("stockProduc").value;

    let nombreValido = false;
    let descripcionValido = false;
    let precioValido = false;    
    let stockValido = false;

 if (nombre.length <= 3) {
        document.getElementById("txtNombre").classList.add("is-invalid");
        document.getElementById("errorNombre").style.display = "block"
        
    }else{
        document.getElementById("errorNombre").style.display = "none";
        document.getElementById("txtNombre").classList.remove("is-invalid");
        document.getElementById("txtNombre").classList.add("is-valid");
        nombreValido = true;
    }

    if(descripcion.length < 10){
        document.getElementById("txtDescripcion").classList.add("is-invalid");
        document.getElementById("errorDescripcion").style.display="block";
    }else{
        document.getElementById("errorDescripcion").style.display="none";
        document.getElementById("txtDescripcion").classList.remove("is-invalid");
        document.getElementById("txtDescripcion").classList.add("is-valid");
        descripcionValido = true;
    }

    if(precio < 1000){
        document.getElementById("precioProduc").classList.add("is-invalid");
        document.getElementById("errorPrecio").style.display= "block";
    }else{
        document.getElementById("errorPrecio").style.display="none";
        document.getElementById("precioProduc").classList.remove("is-invalid");
        document.getElementById("precioProduc").classList.add("is-valid");
        precioValido = true;    
    }
    if(stock < 1){
        document.getElementById("stockProduc").classList.add("is-invalid");
        document.getElementById("errorStock").style.display= "block";
    }else{
        document.getElementById("errorStock").style.display="none";
        document.getElementById("stockProduc").classList.remove("is-invalid");
        document.getElementById("stockProduc").classList.add("is-valid");
        stockValido = true;
    }
    
    

    if(nombreValido && descripcionValido && precioValido && stockValido){
        let imagen = urlImagen;


        let jsonProductos = localStorage.getItem("storageProductos");
        let arrayProductos = JSON.parse(jsonProductos);
    
        
        let ultimoElemento = arrayProductos.slice(-1);    
        let codigo =  ultimoElemento[0].codigo;
        codigo = codigo + 1;
        console.log(codigo);
        const obj = {
            codigo: codigo,
            tipo: tipo,
            nombre: nombre,
            descripcion: descripcion,
            precio: precio,
            stock: stock,
            img: imagen
            
        } 
    
        arrayProductos.push(obj);
        console.log(arrayProductos);
        let stringProductos = JSON.stringify(arrayProductos);
    
        localStorage.setItem("storageProductos", stringProductos)
    }

//No tocar COMIENZO    
 
    //No tocar FIN 
}