const box = document.querySelectorAll(".box");
const boxTitle = document.querySelectorAll(".box__title");
const boxtext = document.querySelectorAll(".box__text");

// Cuando haga click quitar la clase activo a todas las cajas y posteriormente añadir la clase activo a la caja que se hizo click.

// Recorrer los títulos de cada caja
boxTitle.forEach((title, i) => {
  // Escuchar el evento click en cada uno de los títulos
  boxTitle[i].addEventListener("click", () => {
    // Recorrer todas las cajas
    box.forEach((box, i) => {
      // Remover la clase active de cada uno de los textos
      boxtext[i].classList.remove("active");
    });
    // Añadir la clase active al texto cuya posición coincida con la del título clickado
    boxtext[i].classList.add("active");
  });
});
