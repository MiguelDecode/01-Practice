class Person {
  
static forObject({nombre, apellido, pais}) {
  return new Person(nombre, apellido, pais)
}

  constructor(name, surname, country) {
    this.name = name;
    this.surname = surname;
    this.country = country;
  }

  getInfo() {
    console.log(`Info: ${this.name}, ${this.surname}, ${this.country}`);
  }
}

const fher = {
  nombre: "Fernando",
  apellido: "Herrera",
  pais: "Costa Rica",
};

const nombre = "Melissa",
  apellido = "Flores",
  pais = "Honduras";

const person1 = new Person(nombre, apellido, pais);
const person2 = Person.forObject(fher) 

person1.getInfo();
person2.getInfo();