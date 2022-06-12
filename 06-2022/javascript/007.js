// Escribe un programa que pida un número entero mayor que 1 y que escriba si el número es primo o no.

const paridad = (number) => {
  if(number=== 1)console.log('El numero 1 no es válido');
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      console.log("El número no es primo");
      break;
    } else {
      console.log("El número si es primo");
      break;
    }
  }
};

paridad(6);
paridad(5)
paridad(7);
paridad(53);
paridad(97);
paridad(8); 
