// Proxies

const personLiteral = {
  name: "",
  surname: "",
  age: 0,
};

const handler = {
  set(object, propierties, value) {
    object[propierties] = value;
  },
};

const miguel = new Proxy(personLiteral, handler);

miguel.name = "Miguel";
miguel.surname = "Decode";
miguel.age = 36;

console.log(miguel);
console.log(personLiteral);