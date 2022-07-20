/* Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800. */

const calculateTotal = (price = undefined, discount = 0) => {
  if (price === undefined) return console.log('No has introducido un valor de precio');
  if (typeof price !== 'number') return console.log('No has introducido un número como valor de precio');
  if (typeof discount !== 'number') return console.log('No has ingresado un descuento del tipo número');
  if (Math.sign(price) === -1) return console.log('No puedes ingresar un número negativo como precio');
  if (Math.sign(discount) === -1) return console.log('No puedes ingresar un número negativo como descuento');

  return console.log(price - (price * (discount / 100)));
}

calculateTotal(100, 20);
calculateTotal(100)
calculateTotal(100,30)
calculateTotal(100, 25) 