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

$("#agregarProducto").on("click",function(){
    let tipo = $("#tipoProducto").val();
    let nombre = $("#txtNombre").val();
    let descripcion = $("#txtDescripcion").val();
    let precio = $("#precioProduc").val();
    


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

})
