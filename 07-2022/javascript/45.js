// Objeto This

console.log(this);

this.name = "Global Context";

function imprimir() {
  console.log(this);
}

// imprimir()
let name = "Arya";
let surname = "Stark";
let age = 7;

const obj = {
  name: "Miguel",
  surname: "Decode",
  age: 36,
  imprimir: function () {
    console.log(this.name, this.surname, this.age);
  },
};

obj.imprimir();

const obj2 = {
  name: "Context object 2",
  imprimir,
};

obj2.imprimir();
