// Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.

function validateEmail(email) {
  if (typeof email !== "string")
    return console.log(
      "No has introducido un tipo de correo electrónico válido"
    );

  let regExp =
    /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(
      email
    );

  if (!regExp)
    return console.log(
      "Tu correo electrónico no cumple con las normas básicas"
    );

  return console.log("Tu correo electrónico es válido");
}

validateEmail("jonmircha@gmail.com");
validateEmail()
validateEmail('jesusRamirez.com')
validateEmail('alguien@correo.com')

