/*
    Este JS realiza las funciones de agregar el tiempo y la temperatura en tiempo real al navbar;
*/

$(function(){
    
    //Codigo que obtiene la latitud y longituda
    const success = (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        


        apiClima(latitude,longitude);
    }

    const error = () =>{
        console.log("No se acepto el ver la localizacion");
    } 

    navigator.geolocation.getCurrentPosition(success, error); 

    
    
})


//Llamado a la api que nos da nuestra temperatura
function apiClima(latitude, longitude){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=da4d398af2789ce687e5de34b5bfb64e&units=metric&units=standard/`)
        .then(response => response.json())
        .then(data =>{
            console.log(data);
            let codigoPokemon;
            let storagePokemones = localStorage.getItem("storagePokemones");
            let arrayPokemones = JSON.parse(storagePokemones);
            const temperatura = data.main.temp;
            const ubicacion = data.name
            
            
            $("#navbarTemperatura").append(`C°${temperatura}`);
         
            if ( temperatura < 20){
                $("#txtMensajeTemperatura").append(`Hacen C°${temperatura} en ${ubicacion}. Abrigate o terminaras asi:`)
                codigoPokemon = 875;
            }
            else if (temperatura >=20 && temperatura < 30){
                $("#txtMensajeTemperatura").append(`Hacen C°${temperatura} en ${ubicacion}. Hace un buen clima, sale a disfrutar.`)
                codigoPokemon =272;
            }
            else{
                $("#txtMensajeTemperatura").append(`Hacen C°${temperatura} en ${ubicacion}. ME DERRITOOO`)
                codigoPokemon =126;
            }


            let index = arrayPokemones.findIndex(object => {
                return object.codigo === codigoPokemon;
            })
            
                
                $("#imagenPokemon").attr("src",arrayPokemones[index].sprite)

        })

    

}