// const persona = {
//   nombre: 'Juan',
//   apellido: 'García',
//   edad: 27,
// }

class Persona {
  constructor (nombre, apellido, edad) {
    this.nombre = nombre
    this.apellido = apellido
    this.edad = edad

    // Dentro de esta parte del codigo podriamos usar las variables nombre, apellido y edad

    this.datos = `Me llamo ${this.nombre} ${this.apellido} y tengo ${this.edad} años`
  }
  saludar() {
    return `Hola, me llamo ${this.nombre} y tengo ${this.edad} años.`
  }
}

const juan = new Persona ('Juan', 'García', 23);

console.log(juan.nombre);
console.log(juan.apellido);
console.log(juan.edad);
console.log(juan.datos);

const marta = new Persona ('Marta', 'García', 35);

console.log(marta);
console.log(juan.saludar());