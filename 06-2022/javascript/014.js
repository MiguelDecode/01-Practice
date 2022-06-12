// Dado un array de letras, solicita un número de DNI y calcula que letra le corresponde. El número no puede ser negativo ni tener más de 8 dígitos. La posición de la letra es el resultado del módulo del número introducido entre 23.

const array = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T']

let dni = 70253012

const calcularLetra = (dni = '') => {
  if(Math.sign(dni) === -1) return console.log('No puedes introducir un valor negativo');
  if(typeof dni !== 'number') return console.log('No has intrucido un tipo de dato válido');
  let longuitud = String(dni).length
  if(longuitud != 8) return console.log('Solo puedes introducir 8 números');


  console.log(dni + array[dni%23]);
}

calcularLetra(dni)

