import faker from "faker";

const mount = (el) => {
  const cartText = `<div> you have ${faker.random.number()} items in your cart`;

  el.innerHTML = cartText;
};

export { mount };

if (process.env.NODE_ENV === "development") {
  // process.env.NODE_ENV variable de entorno dada por webpack
  const el = document.querySelector("#cart-dev");
  if (el) {
    mount(el);
  }
}
