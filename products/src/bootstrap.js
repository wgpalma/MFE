import faker from "faker";

// let products = "";

// for (let i = 0; i < 5; i++) {
//   const name = faker.commerce.productName();
//   products += `<div>${name}</div>`;
// }

// document.querySelector("#dev-products").innerHTML = products;
//=> cuando utilizar la linea de arriba para pintar algo
// Context/Situation #1
// We are running this file in development in isolation
// We are using out local index.html file
// which DEFENITELY has an element with an id of 'dev-products'
//we want to inmmediatley render out app into that element

// Context/Situation #2
//We are running this file in development or production
//thorugh the CONTAINER app
// No guarantee that an element with an id of "dev-products" exists
// we do not want try to immeidately render the app

const mount = (el) => {
  let products = "";

  for (let i = 0; i < 5; i++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`;
  }
  console.log(products);
  el.innerHTML = products;
};

if (process.env.NODE_ENV === "development") {
  // process.env.NODE_ENV variable de entorno dada por webpack
  const el = document.querySelector("#dev-products");
  if (el) {
    mount(el);
  }
}
export { mount };
