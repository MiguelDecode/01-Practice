/* POO
  Clases: Modelo a seguir(Molde)(idea)
  Objetos: Es una instancia de una clase (figura)(Objeto fisico)
    -Atributos: Caracteristica o propiedad del objeto(variables)
    -Metodos: Acciones que un objeto puede realizar(funciones)
*/

const animal = {
  nombre: 'Snoopy',
  tipo: 'perro',
  patas: 4,
  sonar(){
    console.log('Guau guau guau')
  }
}

const animal2 = {
  nombre: 'Lola Bunny',
  tipo: 'conejo',
  sonar() {
    console.log('Yo puedo hablar')
  }
}

console.log(animal)

// Funcion constructora

function Animal (nombre, tipo, genero, patas, clase) {
  this.nombre = nombre;
  this.tipo = tipo;
  this.genero = genero;
  this.patas = patas;
  this.clase = clase;
  this.sonar = function () { // No se recomienda crear metodos en las clases para no duplicar metodos en todos los objetos.
    console.log('Hago sonidos porque estoy vivo')
  }
}


const dog = new Animal('Snoopy','perro','Masculino',4,'Mamifero')

console.log(dog);
console.log(dog.sonar())
