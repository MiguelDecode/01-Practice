/* Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25]. */

const elevateArrayForBase = (array = undefined, base = undefined) => {
  if(array.length === 0) return console.log('No has introducido ningún array');
  if(array === undefined) return console.log('No has introducido ningún dato');
  if(!(array instanceof Array)) return console.log('El valor que ingresaste no es un arreglo');
  if(base === undefined) return console.log('No has introducido ningún valor para elevar');
  if(typeof base !== 'number') return console.log('No has introducido un tipo válido de dato, introduce un número');

  for (const number of array) {
    if (typeof number !== 'number') {
      return console.log('El arreglo contiene valores que no son un número');
    }
  }

  const newArray = array.map(number => Math.pow(number,base));
  console.log(newArray);
}

elevateArrayForBase([1,4,5], 2);
elevateArrayForBase([1,4,5], 3);
elevateArrayForBase([], 3);
elevateArrayForBase('hello', 'hello');
elevateArrayForBase({}, 4);
elevateArrayForBase([1,3,'hello'], 2);