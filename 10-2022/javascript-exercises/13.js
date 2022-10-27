// Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.

function isCapicua(num) {
  if (typeof num !== "number" || num === undefined)
    return console.log("No has introducido un dato válido");

  let numAbs = Math.abs(num)
  let numStr = numAbs.toString();
  let reverseNum = numStr.split("").reverse().join("");
  console.log(numStr === reverseNum);
}

isCapicua(2002);
isCapicua(1004);
isCapicua(374767486468);
isCapicua(213312);
isCapicua("297942738");
isCapicua(-2002);
