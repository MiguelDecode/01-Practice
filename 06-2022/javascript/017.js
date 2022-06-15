// Todas las clases deben tener una función constructora. Se tiene que llamar constructor y se ejecuta cada vez que creemos un objeto. Se debe comenzar el nombre de las clases con mayúscula.

class Persona {
  constructor(nombre, apellido, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;

    this.datos = `Me llamo ${this.nombre} ${this.apellido} y tengo ${this.edad} años`;
  }

  saludar() {
    return `Hola me llamo ${this.nombre} y tengo ${this.edad} años`;
  }
}

const manolo = new Persona("Manolo", "García", 52);
console.log(manolo);

console.log(manolo.saludar());