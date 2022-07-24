function cuadradoPromise(value) {
  if (typeof value !== "number")
    return Promise.reject(`Error, el valor ${value} ingresado no es un número`);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        value: value,
        result: value * value,
      });
    }, 0 | (Math.random() * 1000));
  });
}

async function funcionAsincronaDeclarada() {
  try {
    console.log("Inicio de Async Function");

    let obj = await cuadradoPromise(0);
    console.log(`Async Function: ${obj.value} al cuadrado es ${obj.result}`);

    obj = await cuadradoPromise(1);
    console.log(`Async Function: ${obj.value} al cuadrado es ${obj.result}`);

    obj = await cuadradoPromise(2);
    console.log(`Async Function: ${obj.value} al cuadrado es ${obj.result}`);

    obj = await cuadradoPromise(3);
    console.log(`Async Function: ${obj.value} al cuadrado es ${obj.result}`);

    obj = await cuadradoPromise(4);
    console.log(`Async Function: ${obj.value} al cuadrado es ${obj.result}`);

    obj = await cuadradoPromise(5);
    console.log(`Async Function: ${obj.value} al cuadrado es ${obj.result}`);

    console.log("Fin de Async Function");
  } catch (error) {
    console.error(error);
  }
}

funcionAsincronaDeclarada();

const funcionAsincronaExpresada = async () => {
  try {
    console.log("Inicio de Async Function Expresada");

    let obj = await cuadradoPromise(0);
    console.log(`Async Function: ${obj.value} al cuadrado es ${obj.result}`);

    obj = await cuadradoPromise(1);
    console.log(`Async Function: ${obj.value} al cuadrado es ${obj.result}`);

    obj = await cuadradoPromise(2);
    console.log(`Async Function: ${obj.value} al cuadrado es ${obj.result}`);

    obj = await cuadradoPromise(3);
    console.log(`Async Function: ${obj.value} al cuadrado es ${obj.result}`);

    obj = await cuadradoPromise(4);
    console.log(`Async Function: ${obj.value} al cuadrado es ${obj.result}`);

    obj = await cuadradoPromise(5);
    console.log(`Async Function: ${obj.value} al cuadrado es ${obj.result}`);

    console.log("Fin de Async Function Expresada");
  } catch (error) {
    console.error(error);
  }
};

funcionAsincronaExpresada();
