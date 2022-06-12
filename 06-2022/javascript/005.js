// Escribe un programa que pueda calcular el área de 3 figuras geométricas, triángulo, rectángulo y círculo. En primer lugar pregunta de que figura se quiere calcular el área, depués solicita los datos que necesites para calcularlo.

let figure = prompt(
  "De que figura geométrica deseas calcular el area: triangle, rectangle o circle."
)

switch (figure) {
  case 'triangle':
    {
      let base = prompt("Introduce la base de tu triángulo");
      let height = prompt("Introduce la altura de tu triángulo");
      console.log(`El área de tu triangulo es ${base * (height / 2)}`);
    }
    break;

  case 'rectangle':
    {
      let base = prompt("Introduce la base de tu rectángulo");
      let height = prompt("Introduce la altura de tu rectángulo");
      console.log(`El área de tu rectángulo es ${base * height}`);
    }
    break;

  case 'circle':
    {
      let radio = prompt("Introduce el radio de tu triangulo");
      console.log(`El área de tu círculo es ${Math.PI * Math.pow(radio, 2)}`);
    }
    break;

  default:
    window.alert("No has introducido una opción valida");
    break;
}
