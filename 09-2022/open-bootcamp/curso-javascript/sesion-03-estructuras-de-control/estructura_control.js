// Bifurcaciones if...else

if (true) {
  console.log("Es verdadero");
}

if (false) {
  console.log("Es verdadero");
} else {
  console.log("No es verdadero");
}

let cash = 50;
let effective = 20;

if (cash > effective) {
  console.log("Puedes sacar dinero");
} else {
  console.log("Saldo insuficiente");
}

// Estructura de control multiple

let nota = 5;

if (nota === 5) {
  console.log("Enhorabuena has obtenido un sobresaliente");
} else if (nota === 4) {
  console.log("Buen trabajo pero podrías haberlo hecho mejor");
} else if (nota === 3) {
  console.log("Buen trabajo pero necesitas mejorar");
} else if (nota === 2) {
  console.log("No has aprobado por poco");
} else if (nata === 1) {
  console.log("No has estudiado lo suficiente");
} else {
  console.log("No has estudiado nada");
}

// Estructura de control con switch

let score = 3;

switch (score) {
  case 5:
    console.log("Enhorabuena has obtenido un sobresaliente");
    break;
  case 4:
    console.log("Buen trabajo pero podrías haberlo hecho mejor");
    break;
  case 3:
    console.log("Buen trabajo pero necesitas mejorar");
    break;
  case 2:
    console.log("No has aprobado por poco");
    break;
  case 1:
    console.log("No has estudiado lo suficiente");
    break;
  case 0:
    console.log("No has estudiado nada");
    break;
  default:
    console.log("Tu nota no es válida");
    break;
}
