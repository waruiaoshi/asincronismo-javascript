// instancio el request
const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
//inicio la API en la raíz
const API = 'https://api.escuelajs.co/api/v1'

function fechtData(urlApi, callback) {
    let xhttp = new XMLHttpRequest();
    xhttp.open('GET', urlApi, true);
    xhttp.onreadystatechange = function (event) {
        /* 
            * 0 -> no inicializado
            * 1 -> no se a llamado sent
            * 2 -> llamado send
            * 3 -> interactuando o descargando la solicitud
            * 4 -> completada
            */

        if (xhttp.readyState === 4) {

            if (xhttp.status === 200) {
                callback(null, JSON.parse(xhttp.responseText));
            } else {
                const error = new Error('Error ' + urlApi);
                return callback(error, null);
            }
        }
    }
    xhttp.send();
}

fechtData(`${API}/products`,
    function (error1, data1) {
        if (error1) return console.error(error1);
        fechtData(`${API}/products/${data1[0].id}`,

            function (error2, data2) {
                if (error2) return console.error(error2);

                fechtData(`${API}/categories/${data2.category?.id}`, function (error3, data3) {
                    if (error3) return console.error(error3);
                    console.log(data1[0]);
                    console.log(data2.title);
                    console.log(data3.name);
                });


            });

    });