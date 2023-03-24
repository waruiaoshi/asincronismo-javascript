// instancio el request
const xmlHttpRequest = require('xmlhttprequest');
//inicio la API en la raíz
const API = 'https://api.escuelajs.co/api/v1/'

function fechtData(urlApi, callback) {
    let xhttp = new XMLHttpRequest();
    xhttp.open(get, urlApi, true);
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
            }
        } else {
            const error = new Error('Error ' + urlApi);
        }
    }
    xhttp.send();
}
