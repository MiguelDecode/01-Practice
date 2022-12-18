const fher = {
  name: "Miguel",
  age: 30,
  print() {
    console.log(`Name: ${this.name} - edad: ${this.age}`);
  },
};

const pedro = {
  name: "Pedro",
  age: 40,
  print() {
    console.log(`Name: ${this.name} - edad: ${this.age}`);
  },
};

const melissa = {
  name: "Melissa",
  age: 35,
  print() {
    console.log(`Name: ${this.name} - edad: ${this.age}`);
  },
};

// fher.print();
// For the use of the class Person for create people you must use New

function Person(name, age) {
  console.log("This is the first line");

  this.name = name;
  this.age = age;

  this.print = function () {
    console.log(`Name: ${this.name} - edad: ${this.age}`);
  };
}

const maria = new Person("María", 18);
console.log(maria);
maria.print();

const sandra = new Person("Sandra", 23);
console.log(sandra);
sandra.print();
