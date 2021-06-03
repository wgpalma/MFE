//si webpack no encuentra products en nuestros node modules se va a
// buscar en el module federation plugin en la seccion remotes
//busca la llave products e importa el archivo que se especifica

//el ProductsIndex es el alias que le pusimos al archivo que queremos importar
import { mount as productMount } from "products/ProductsIndex";
import { mount as cartMount } from "cart/CartShow";

console.log("Container!");

productMount(document.querySelector("#my-products"));
cartMount(document.querySelector("#my-cart"));
