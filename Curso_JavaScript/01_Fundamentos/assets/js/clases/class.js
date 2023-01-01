class Person {
  static _count = 0; // Static Property
  static get count() {
    return Person._count + " instances";
  }

  static message() {
    console.log(this.name);
    console.log("Hello everyone, I'm a static method");
  }

  name = "";
  alias = "";
  sentence = "";
  food = "";

  constructor(
    name = "Unknown",
    alias = "Without alias",
    sentence = "No sentence"
  ) {
    this.name = name;
    this.alias = alias;
    this.sentence = sentence;

    Person._count++;
  }

  set setFavouriteFood(food) {
    this.food = food.toUpperCase();
  }

  get getFavouriteFood() {
    return `The favourite food of ${this.name} is ${this.food}`;
  }

  whoami() {
    console.log(`I'm ${this.name} and my identity is ${this.alias}`);
  }

  mySentence() {
    this.whoami();
    console.log(`${this.alias} say: ${this.sentence}`);
  }
}

const spiderman = new Person(
  "Peter Parker",
  "SpiderMan",
  "I'm your friendly neighbourd Spiderman"
);
console.log(spiderman);

const ironman = new Person("Tony Stark", "Ironman", "I'm Ironman");

spiderman.whoami();
ironman.whoami();

spiderman.mySentence();
ironman.mySentence();

spiderman.setFavouriteFood = "Cupcakes";
// spiderman.nemesis = 'Green Goblin'
console.log(spiderman);
console.log(spiderman.getFavouriteFood);

// Person._count = 2;

console.log("Static Count", Person._count);

console.log(Person.count);

Person.message()

Person.outsideProperty = 'Hello World'
console.log(Person.outsideProperty)