// Escriba un programa que pida un número entero mayor que cero y calcule su factorial. El factorial es el resultado de multiplicar ese número por sus anteriores hasta la unidad.

const factorial = number => {
  if(number === 0) return console.log('El número 0 no es válido');
  if(typeof number !== 'number') return console.log('No has introducido un tipo válido de dato debe ser un número');
  let resultado = 1;
  for (let i = 1; i <= number; i++) {
    resultado *= i;
  }
  console.log(`El factorial de ${number} es ${resultado}`);
}

factorial(0)
factorial(3)
factorial(5)
factorial(13)