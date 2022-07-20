/* Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero. */

const validateEmail = (email = "") => {
  if (email === "") return console.log("No has ingresado ningún valor");
  if (typeof email !== "string")
    return console.log(
      "No has ingresado un tipo válido, ingresa una cadena de texto"
    );

  let expReg =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g.test(
      email
    );

  return expReg
    ? console.log("Tu correo electrónico es válido")
    : console.log("Tu correo electrónico no es válido");
};

validateEmail("jonmircha@gmail.com");
validateEmail();
validateEmail(35);
validateEmail("maria,gmail.cmo");
