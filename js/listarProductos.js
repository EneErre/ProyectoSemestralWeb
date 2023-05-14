$(function(){
    $("#containerEditarProducto").hide();
    let storageJson = localStorage.getItem("storageProductos");
    let arrayStorage = JSON.parse(storageJson);

    for (const i of arrayStorage) {
        let codigo = i.codigo;
        let nombre = i.nombre;
        let descripcion = i.descripcion;
        let categoria = i.tipo;
        let precio = i.precio;
        let stock = i.stock;
        
        $("#bodyTable").append($(`<tr>
                <th scope="row">${codigo}</th>
                    <td>${nombre}</td>
                    <td>${categoria}</td>
                    <td>${precio}</td>
                    <td>${stock}</td>
                    
                    <td><button onclick="editarProducto(${codigo})" class="btn btn-primary">Editar</button></td>
            </tr>`))
        
    }


    
})


$("#btnBuscar").on("click",function(){
    //console.log("keyUp");
    let valor = $("#txtBuscar").val().toLowerCase();
    $("table tbody tr").filter(function(){
        $(this).toggle($(this).text().toLowerCase().indexOf(valor) > -1);
    })
})

function editarProducto(codigo){
    let storageJson = localStorage.getItem("storageProductos");
    let arrayStorage = JSON.parse(storageJson);
    console.log(codigo);
    let index = arrayStorage.findIndex(object => {
        return object.codigo === codigo;
    })

    $("#codigo").val(arrayStorage[index].codigo);
    $("#txtNombre").val(arrayStorage[index].nombre);
    $("#txtDescripcion").val(arrayStorage[index].descripcion);
    $("#precioProduc").val(arrayStorage[index].precio);
    $("#stockProduc").val(arrayStorage[index].stock);
    $("#tipoProducto select").val(arrayStorage[index].tipo);

    $("#containerEditarProducto").show();
};


$("#btnCancelar").on("click",function(){
    $("#containerEditarProducto").hide();
});


$("#formularoEditarProducto").validate({
    rules:{
        txtNombre: {
            required:true,  
            minlength: 4
        },
        txtDescripcion:{
            required:true,
            minlength: 10
        },
        precioProduc:{
            required: true,
            min: 1000
        },
        stockProduc:{
            required: true,
            min: 10
        }
    },
    messages:{
        txtNombre:{
            required: "Se debe rellenar este espacio",
            minlength: "EL minimo de caracteres del nombre es 4"
        },
        txtDescripcion:{
            required: "Se debe rellenar este espacio",
            minlength: "EL minimo de caracteres de la descricion es 10"
        },
        precioProduc:{
            required: "Se debe rellenar este espacio",
            min: "El precio minimo de un producto es 1000"
        },
        stockProduc:{
            required: "Se debe rellenar este espacio",
            min: "El minimo de stock para registrar es de 10"
        }

    }
}) 

$("#btnEditarProducto").on("click",function(){
    if ($("#formularoEditarProducto").valid() ==  false){
        return;
    }else{
        let storageJson = localStorage.getItem("storageProductos");
        let arrayProductos = JSON.parse(storageJson);
        let codigo = parseInt($("#codigo").val());
        let nombre = $("#txtNombre").val();
        let descripcion = $("#txtDescripcion").val();
        let precio = $("#precioProduc").val();
        let stock = $("#stockProduc").val();
        let categoria = $("#tipoProducto select").val();

        
        let index = arrayProductos.findIndex(object => {
            return object.codigo === codigo;
        })

        const obj = {
            codigo: codigo,
            tipo: categoria,
            nombre: nombre,
            descripcion: descripcion,
            precio: precio,
            stock: stock,
        };

        
        arrayProductos[index] = obj;

        console.log(arrayProductos);
        let stringArray = JSON.stringify(arrayProductos);
        localStorage.setItem("storageProductos",stringArray);
    }
    
    
    


    
});