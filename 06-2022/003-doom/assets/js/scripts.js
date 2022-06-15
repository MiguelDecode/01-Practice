/* 
  Eventos de ratón:
    click - cuando pulsamos el botón izquierdo del ratón
    dbclick - cuando pulsamos dos veces seguidas el botón izquierdo del ratón
    mouseenter - cuando entramos en la zona que tiene el evento 
    mouseleave - cuando salimos de la zona que tiene el evento
    mousedown - cuando pulsamos y no soltamos e botón izquierdo del ratón 
    mouseup - cuando soltamos el botón izquierdo del ratón
    mousemove - cuando movemos el ratón

  Eventos de teclado:
    keydown- cuando pulsamos una tecla
    keyup - cuando soltamos una tecla
    keypress - cuando pulsamos una tecla y no la soltamos
*/

const btn = document.getElementById("button");
const box = document.getElementById("box");
const input = document.getElementById("input");

btn.addEventListener("click", () => {
  console.log("click");
});

btn.addEventListener("dblclick", () => {
  console.log("double click");
});

// MUCHO MEJOR APLICAR CLASES QUE ESTILOS EN LÍNEA POR LA ESPECIFICIDAD Y POR BUENAS PRÁCTICAS.

/* box.addEventListener('mouseenter', () => {
  box.style.backgroundColor = 'green'
})

box.addEventListener('mouseleave', () => {
  box.style.backgroundColor = 'red'
}) */

box.addEventListener("mouseenter", () => {
  //box.classList.add("green");
  box.classList.replace("red", "green");
});

box.addEventListener("mouseleave", () => {
  //box.classList.add("red");
  //box.classList.remove('green')
  box.classList.replace("green", "red");
});

/* --------------------------------------------- */

box.addEventListener("mousedown", () => {
  console.log("Has pulsado en la caja");
});

box.addEventListener("mouseup", () => {
  console.log("Has soltado el botón izquierdo");
});

box.addEventListener("mousemove", () => {
  console.log("Estas moviendo el ratón en la caja");
});

input.addEventListener("keydown", () => {
  console.log("Has pulsado una tecla");
});

input.addEventListener("keyup", () => {
  console.log("Has levantado el dedo de la tecla");
});

input.addEventListener("keypress", () => {
  console.log("Estás pulsando una tecla");
});
