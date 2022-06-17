const form = document.getElementById("form");
const input = document.getElementById("input");
const button = document.getElementById("button");
const gallery = document.getElementById("gallery");
const link = document.getElementById("link");

/* input.addEventListener("keyup", () => {
  console.log(input.value);
});

input.addEventListener("keyup", () => {
  console.log(event);
});

input.addEventListener("keyup", (event) => {
  console.log(event);
});

addEventListener("click", () => {
  console.log(event);
});

input.addEventListener("keyup", (event) => {
  console.log(event.key);
});

input.addEventListener("keyup", (event) => {
  console.log(event.target.attributes[0]);
});

button.addEventListener("click", (event) => {
  console.log(event.target);
}); */

/* gallery.addEventListener("click", (event) => {
  event.target.classList.add("red");
});
 */

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("El formulario se ha enviado");
});

link.addEventListener("click", (event) => {
  event.preventDefault();
  button.click();
});

button.addEventListener("click", () => {
  input.value = "Has hecho click";
});
