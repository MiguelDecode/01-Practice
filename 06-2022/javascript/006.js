// Solicita un número e imprime todos los números pares o impares desde 1 hasta ese número con el mensaje es par o es impar.

let number = parseInt(prompt('Introduce un número'))

for (let i = 1; i <= number; i++) {
  if(i % 2 === 0) {
    console.log(`El número ${i} es par`)
  } else {
    console.log(`El número ${i} es impar`)
  }
}