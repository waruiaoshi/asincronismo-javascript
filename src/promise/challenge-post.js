import fetch from "node-fetch";
const API = "https://api.escuelajs.co/api/v1";


function postData(apiURL, data) {
    const response = fetch(apiURL, {
        method: 'POST',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',

        },
        body: JSON.stringify(data)

    });

    return response;
}

const data = {
    "title": "Nuevo producto elkin",
    "price": 777,
    "description": "un producto de prueba",
    "categoryId": 1,
    "images": ["https://placeimg.com/640/480/any"]
}


postData(`${API}/products/`, data)
    .then(response => response.json())
    .then(data => console.log(data))



    .catch(error => console.error(error));
