//Destructuración

let numeros = [1, 2, 3];

//Sin destructuración
let uno = numeros[0];
let dos = numeros[1];
let tres = numeros[2];

console.log(uno, dos, tres);

const [one, two, three] = numeros;
console.log(one, two, three);

const persona = {
  nombre: "Miguel",
  apellido: "Decode",
  edad: 35,
};

let { nombre, apellido, edad } = persona;

console.log(nombre,apellido,edad);

//Para que la destructuración funcione en los objetos la variable a crear debe ser igual a la propiedad del objeto.
