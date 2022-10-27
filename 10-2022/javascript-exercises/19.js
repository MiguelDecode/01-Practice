// Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.

function calculateTotal (num, discount) {
  if(typeof num !== 'number') return console.log('El dato introducido no es un número') 

  if(Math.sign(num) !== 1) return console.log("Solo se pueden introducir cantidades positivas")

  if(typeof discount !== 'number') return console.log('El dato de descuento debe ser un número')

  if(discount < 0 || discount > 100) return console.log('Solo se admiten como valor descuentos entre 0 y 100')

  let result = num * (discount / 100)

  console.log(num - result)
}

calculateTotal(1000, 20)
calculateTotal(100, '20')
calculateTotal(100, 110)
calculateTotal(100, -39)
calculateTotal(-300, 20)