// function myFuncion (parametro1, parametro2, parametron) {
//   //Codigo a ejecutar
//   return parametro1 + parametro2
// }

// const myFuncion = (parametro1, parametro2, parmetron) => {
//   //Codigo a ejecutar
//   //return (optional, depends)
// }

//Metodo antiguo para definir las funciones
// function saludar() {
//   console.log('Hola')
// }

// saludar()

//Metodo moderno para definir las funciones
const saludar = () => console.log('Hola');
const saludarUsuario = (usuario) => console.log(`Hola ${usuario}`)

saludar()
saludarUsuario('Miguel')
saludarUsuario('Marta')

const suma = (num1, num2) => { //Si se usan llaves quiere decir que se van a usar mas de una declaración por lo que la función esta a la espera de un return. En el caso de una sola declaración no es necesario poner llaves y el return seria implicito.
  num1 + num2
}

console.log(suma(2, 3));

const suma2 = (num1, num2) => num1 + num2;
console.log(suma2(2, 5));

const suma3 = (num1, num2) => num1 + num2;
let result = suma3(3, 6);
console.log(result);