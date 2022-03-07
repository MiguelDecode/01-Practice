//Objetos Literales
let nombre = "Arya";
let edad = 7;

const gato = {
  nombre: nombre,
  edad: edad,
  miau: function () {
    console.log("Miau miau miau miau");
  },
};

console.log(gato);
gato.miau()


const cat = {
  nombre,
  edad,
  raza: 'Común Europeo',
  miau () {
    console.log("Miau miau miau miau en inglés europeo");
  },
}

console.log(cat)
cat.miau()