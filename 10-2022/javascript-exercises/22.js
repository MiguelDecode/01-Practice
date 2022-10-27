// Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.

function validateName(name) {
  if (typeof name !== "string")
    return console.log("No has introducido un nombre válido");

  let regExp = /^[a-zA-ZÑñÁáÉéÍíÓóÚú\s]+$/g.test(name);

  return regExp
    ? console.log("Nombre válido")
    : console.log("Nombre no válido");
}

validateName("Jonathan Mircha");
validateName()
validateName('Miguel 38')
validateName(true)
