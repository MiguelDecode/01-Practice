// Programa una función que obtenga un numero aleatorio entre 501 y 600.

function randomNumber(max, min) {
  if (typeof max !== "number" || typeof min !== "number")
    return console.log("No has introducido valores válidos para calcular");

  if (max === undefined || min === undefined)
    return console.log("No has introducido ningún valor");

  console.log(Math.round(Math.random() * (max - min) + min));
}

randomNumber(501, 600);
randomNumber(100, 150);
randomNumber("39", 89);
randomNumber(-399, 399);
randomNumber(-10, 10);
randomNumber(29, "cuarenta");
randomNumber();
