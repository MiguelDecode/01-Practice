//sumar(2,4);

const sumar = (a, b) => console.log(a + b);

sumar(2, 3);

const saludar = (nombre) => console.log(`Hola ${nombre}`); //return implicito.

saludar("Miguel");

const restar = (a, b) => a - b; // En este tipo de funciones el return es implícito.

console.log(restar(10, 5));

const numeros = [1, 8, 3, 9, 32, 98, 34];

// numeros.forEach(function(elemento,index) {
//   console.log(`El elemento ${elemento} esta en la posición ${index}.`)
// })

numeros.forEach((elemento, index) =>
  console.log(`El elemento ${elemento} esta en la posición ${index}.`)
);

function cat () {
  console.log(this)
}

cat(); // Referencia al objeto window

const dog = {
  name: 'Turbo',
  ladrar: function () {
    console.log(this)
  }
}

dog.ladrar(); // Referencia al objeto 

const bird = {
  name: 'Piolin',
  cantar() {
    console.log(this) // Manera correcta de uso de metodos en objetos con la cual hacemos referencia al contexto del objeto y no al contexto superior
  }
}

bird.cantar()
