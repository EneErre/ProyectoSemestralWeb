//
$(document).ready(function(){
    let carritoJson = localStorage.getItem("storageCarrito");
    let carritoArray = JSON.parse(carritoJson);
    console.log(carritoArray);
    if(carritoArray === null){
        storageCarrito = []
        let jsonCarrito = JSON.stringify(storageCarrito);
        localStorage.setItem("storageCarrito",jsonCarrito);
    }
    else 
    {
        localStorage.setItem("storageCarrito", carritoJson);
    }

    let storageProductos = localStorage.getItem("storageProductos");
    let productosArray = JSON.parse(storageProductos);

    if(productosArray === null){
        productos = [
            {
            codigo: 1,
            tipo: "Planta",
            nombre: "Rosa",
            descripcion: "Planta tipo flor: rosa",
            precio: 1000,
            stock: 10,
            img: "img/png/flores/rosas.png"
        },
        {
            codigo: 2,
            tipo: "Planta",
            nombre: "tulipan",
            descripcion: "Planta tipo flor: tulipan",
            precio: 1000,
            stock: 10,
            img: "img/png/flores/tulipan.png"
        },
        {
            codigo: 3,
            tipo: "Planta",
            nombre: "Girasol",
            descripcion: "Planta tipo flor: girasol",
            precio: 1000,
            stock: 10,
            img: "img/png/flores/girasoles.png"
        },
        {
            codigo: 4,
            tipo: "Herramienta",
            nombre: "Conjunto de herramientas",
            descripcion: "Conjunto de herramientas variado para trabajar en el jardin",
            precio: 10000,
            stock: 10,
            img: "img/png/herramientasJardineria/conjuntoHerramientas.png"
        },
        {
            codigo: 5,
            tipo: "Herramienta",
            nombre: "Pala",
            descripcion: "Gran pala para trabajos de jardineria",
            precio: 20000,
            stock: 10,
            img: "img/png/herramientasJardineria/pala.png"
        },
        {
            codigo: 6,
            tipo: "Herramienta",
            nombre: "Rastrillo",
            descripcion: "Rastrillo pequeño para trabajos de jardineria",
            precio: 2000,
            stock: 10,
            img: "img/png/herramientasJardineria/rastrillo.png"
        }
            ];
        
            let jsonProducto = JSON.stringify(productos);
            localStorage.setItem("storageProductos", jsonProducto);
    }else{
        localStorage.setItem("storageProductos",storageProductos);
    }
    
    console.log("Funcionando");
    
    let jsonProductos = localStorage.getItem("storageProductos");
    let arrayProductos = JSON.parse(jsonProductos);

    let cantidad = 1
    let rowProductos = $("#rowProductosDestacados");
    for (const i of arrayProductos) {
        if (cantidad <= 6){
            let codigo = i.codigo;
        let imagen = i.img;
        let nombre = i.nombre;
        let precio = i.precio;
        let stock = i.stock;
        let descripcion = i.descripcion;
        let html = $(`<div class="row mt-3">
            <div class="card" style="width: 18rem;">
            <img src=${imagen} class="card-img-top" alt="${descripcion}}">
                <div class="card-body">
                    <h5 class="card-title">${nombre}</h5>
                    <p class="card-text">Stock disponible: ${stock}</p>                    
                    <p class="card-text">Precio: $${precio}</p>                    
                        <button id="btnAgregar" onclick="agregarProducto(${codigo})" type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            Agregar al carrito
                        </button>

                        
                        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                            <div class="modal-header">
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                Producto agregado al carrito correctamente
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-success" data-bs-dismiss="modal">Cerrar</button>
                            </div>
                            </div>
                        </div>
                        </div>
                </div>
        </div>`);
        rowProductos.append(html);
        }else{
            break;
        }
        
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

}









