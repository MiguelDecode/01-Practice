class Singleton {
  static instance;

  name = "";

  constructor(name = "") {
    // const a = undefined;
    // console.log(a);
    // console.log(!a);
    // console.log(!!a);

    if (Singleton.instance) {
      return Singleton.instance;
    }

    Singleton.instance = this;
    this.name = name;
  }
}

const instance1 = new Singleton("Ironman");
const instance2 = new Singleton("Spiderman");
const instance3 = new Singleton('BlackPanther')

console.log(`Name in istance1 is: ${instance1.name}`);
console.log(`Name in istance1 is: ${instance2.name}`);
console.log(`Name in istance1 is: ${instance3.name}`);
