// Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.

function isPrime(num) {
  if (typeof num !== "number")
    return console.log("No has introducido un número");

  if (Math.sign(num) !== 1) return console.log('Los números primos no pueden ser negativos y el cero tampoco es válido')

  let primo = false

  for (let i = 2; i < num; i++) {
    if (num % i === 0) return console.log(`El número ${num} no es primo`);
    
    primo = true
    
  }

  if(primo) console.log(`El número ${num} es primo`)
}

isPrime(7);
isPrime(6);
isPrime(13)
isPrime(28)
isPrime(-89)
isPrime()
isPrime('hello')
isPrime(0)
