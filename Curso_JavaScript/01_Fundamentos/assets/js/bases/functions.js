function saludar(name) {
  console.log(arguments);
  console.log(`Hola Mundo, ${name}`);

  return 9;

  console.log('Texto después de un return') // Nunca será ejecutado.
}

const saludar2 = function () {
  console.log("Hola mundo");
};

saludar("Juan"); // 9
saludar();
saludar("Pepe");
saludar("Marta");
saludar2();
saludar("Miguel", 40, true, "Costa Rica");

const saludarArrow = (name) => {
  console.log(`Hello ${name}`);
};

saludarArrow("Daniel");
saludarArrow("Adrián");
saludarArrow("Merche");

const retorno = saludar('Miguel')
console.log(retorno)

function sumar(a,b) {
  a = a + 1;
  return a + b
}

const sumar2 = (a,b) => a + b

function getRandom() {
  return Math.random()
}

const randomNumber = () => Math.random()

console.log(sumar(2,3))
console.log(sumar2(3,5))
console.log(getRandom())
console.log(randomNumber())
