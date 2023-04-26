import fetch from "node-fetch";
const API = "https://api.escuelajs.co/api/v1";

//declaramos llamdas asyncronas
async function fetchData(urlAPI) {
    const response = await fetch(urlAPI);
    const data = await response.json();

    return data;

}

//llamados a las apis
const anotherFuntion = async (urlAPI) => {

    try {
        const products = await fetchData(`${API}/products`);
        const product = await fetchData(`${API}/products/${products[0].id}`);
        const category = await fetchData(`${API}/categories/${product.category.id}`);
        console.log(products);
        console.log(product.title);
        console.log(category.name);

    } catch (error) {
        console.error(error);
    }
}

anotherFuntion()


