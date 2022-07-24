const toNumber = (n) => Number(n);
const multiplicar = (n) => {
  console.log("Multiplicar", n);
  if (n > 10) throw new Error("Error");
  return n * 2;
};
const print = (n) => console.log(n);

const catchAndPrint = (error) => console.log(error);

const request = (url) => {
  return new Promise((resolve, reject) => {
    const req = new XMLHttpRequest();
    req.open("GET", url);

    req.onload = () => {
      if (req.status === 200) {
        resolve(req.responseText);
      } else {
        reject(new Error("Error al cargar"));
      }
    };

    req.onerror = () => {
      reject(new Error("Error de red"));
    };

    req.send();
  });
};

request("./numero.txt")
  .then(print)
  .catch(catchAndPrint)
  .finally(() => console.log("Se acabo la petición"));
