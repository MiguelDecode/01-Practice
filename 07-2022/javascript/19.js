/* Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero. */

const validateName = (name = '') => {
  if (name === '') return console.log('No has ingresado ningún valor');
  if (typeof name !== 'string') return console.log('No has ingresado un tipo válido, ingresa una cadena de texto');

  name = name.toLocaleLowerCase();
  
  let expReg = /^[a-zñáéíóú\s]+$/g.test(name);


  return(expReg) ? console.log('Nombre válido') : console.log('Nombre no válido');
}


validateName();
validateName(56)
validateName('Jonathan Mircha')
validateName('Miguel Decode')
validateName(true);
validateName('Marcos ,')