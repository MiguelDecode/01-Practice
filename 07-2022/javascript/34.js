const toNumber = (n) => Number(n);
const multiplicar = (n) => n * 2;
const print = (n) => console.log(n);

const thenFn = (n) => {
  let number = toNumber(n);
  number = multiplicar(number);
  print(number);
};

const catchAndPrint = (error) => console.log(error);

const request = (url, then, catchFn) => {
  const req = new XMLHttpRequest();
  req.open("GET", url);

  req.onload = () => {
    if (req.status === 200) {
      then(req.responseText);
    } else {
      catchFn(new Error("Error al cargar"));
    }
  };

  req.onerror = () => {
    catchFn(new Error("Error de red"));
  };

  req.send();
};

request("./numero.txt", thenFn, catchAndPrint);
