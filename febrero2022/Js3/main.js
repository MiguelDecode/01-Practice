// Escribe un programa que pueda calcular el area de 3 figuras geometricas, triangulo, rectangulo y circulo. En primer lugar pregunta de que figura se quiere calcular el area, despues solicita los datos que necesites para calcularlo.

// if (figura == "triangulo") {
//   let b = prompt("Introduce la base del triangulo");
//   let h = prompt("Introduce la altura del triangulo");
//   let area = b * (h / 2);
//   console.log(`El area del triangulo es ${area}`);
// } else if (figura === "rectangulo") {
//   let b = prompt("Introduce la base del rectangulo");
//   let h = prompt("Introduce la altura del rectangulo");
//   let area = b * h;
//   console.log(`El area del rectangulo es ${area}`);
// } else if (figura === "circulo") {
//   let r = prompt("Introduce el radio del circulo");
//   let area = 3.14 * (r ** 2);
//   console.log(`El area del circulo es ${area}`);
// }

let figura = prompt(
  "Tienes tres opciones: triangulo, rectangulo y circulo. De cual quieres calcular el area?"
);

switch (figura) {
  case "triangulo": {
    let b = prompt("Introduce la base del triangulo");
    let h = prompt("Introduce la altura del triangulo");
    console.log(`El area del triangulo es ${(b * h) / 2}`);
    break;
  }
  case "rectangulo": {
    let b = prompt("Introduce la base del rectangulo");
    let h = prompt("Introduce la altura del rectangulo");
    console.log(`El area del rectangulo es ${b * h}`);
    break;
  }
  case "circulo": {
    let r = prompt("Introduce el radio del circulo");
    console.log(`El area del circulo es ${3.14 * r ** 2}`);
    break;
  }
  default:
    console.log("La figura geometrica no es valida");
}
