// Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.

function repeatStr(str, repeat) {
  if (typeof str !== "string" || str === "")
    return console.log("No has introducido una cadena de texto valida");

  if (typeof repeat !== "number")
    return console.log("No has introducido un número válido");

  if (Math.sign(repeat) !== 1)
    return console.log(
      "El número introducido es negativo o cero y eso no es válido"
    );

  str += " ";
  let result = "";

  while (repeat > 0) {
    result += str;
    repeat--;
  }

  /*  for(let i = 0; i < repeat; i++) {
    result += str;
 } */

  console.log(result);
}

repeatStr("Hola Mundo", 3);
repeatStr(3, 3);
repeatStr("hello world", "cut");
repeatStr("", 8);
repeatStr("hello world");
repeatStr("Hola Mundo", -3);
