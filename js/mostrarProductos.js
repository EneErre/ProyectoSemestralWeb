$(function(){
    let jsonProductos = localStorage.getItem("storageProductos");
    let arrayProductos = JSON.parse(jsonProductos);

    
    let rowProductos = $("#rowProductos");
    for (const i of arrayProductos) {
        let codigo = i.codigo;
        let imagen = i.img;
        let nombre = i.nombre;
        let precio = i.precio;
        let html = $(`<div class="col mt-3">
            <div class="card" style="width: 18rem;">
            <img src=${imagen} class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${nombre}</h5>
                    <p class="card-text">Precio: ${precio}</p>
                    <button onclick="agregarProducto(${codigo})" type="button" id="btnAgregar" class="btn btn-success">
                    Agregar al carrito
                    </button>   
                </div>
        </div>`);
        rowProductos.append(html);
        
        
    }
});


function agregarProducto(x){
    
    let codigo = x;

    let jsonProductos = localStorage.getItem("storageProductos");
    let arrayProductos = JSON.parse(jsonProductos);

    console.log(arrayProductos);
    let jsonCarrito = localStorage.getItem("storageCarrito");
    let arrayCarrito= JSON.parse(jsonCarrito);

    let imagen;
    let nombre;
    let precio;
    let descripcion;

    let cantidad = 1;
    for (const i of arrayProductos) {
        if(i.codigo == codigo){
        imagen = i.img;
        nombre = i.nombre;
        precio = i.precio;
        descripcion = i.descripcion;
            break;
        }
    }

   if (arrayCarrito.length ==0){
        const obj = {
            codigo: codigo,
            nombre: nombre,
            descripcion: descripcion,
            precio: precio,
            imagen: imagen,
            cantidad: cantidad
        }
        arrayCarrito.push(obj)
    }else{
        let index = arrayCarrito.findIndex(object => {
            return object.codigo === codigo;
        })
        console.log(index);
        if (index == -1){
            for (const i of arrayProductos) {
                if(i.codigo == codigo){
                imagen = i.img;
                nombre = i.nombre;
                precio = i.precio;
                descripcion = i.descripcion;
                break;
                }
            }
            const obj = {
                codigo: codigo,
                nombre: nombre,
                descripcion: descripcion,
                precio: precio,
                imagen: imagen,
                cantidad: cantidad
            }
            arrayCarrito.push(obj)
        }
        else{
            arrayCarrito[index].cantidad += 1;
        }
    }
    
    console.log(imagen);
    console.log(arrayCarrito);
    let insertarJsonCarrito = JSON.stringify(arrayCarrito);
    localStorage.setItem("storageCarrito", insertarJsonCarrito);

};