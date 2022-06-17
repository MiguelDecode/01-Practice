const btn = document.getElementById("btn");

/* Objeto window - Es el objeto global, de él descienden todos los objetos. Si no se especifica el objeto padre se entiende que se hace referencia al objeto global window.
  - alert()
  - prompt()
  - confirm() */

/* addEventListener("click", (event) => {
  console.log(event);
});

addEventListener("load", (event) => {
  console.log(event);
});

addEventListener("scroll", (event) => {
  console.log(event);
});

let name = prompt("Escriba su nombre");
console.log(name);

if(confirm('Acepta?')) {
  console.log('El usuario acepto');
} else {
  console.log('El usuario no acepto');
}
 */

/* Objeto console - Es el objeto que contiene la consola del navegador
  - console.log()
  - console.dir()
  - console.error()
  - console.table() */

/* const person = {
  name: "Miguel",
  age: "36",
  email: "migueldecode@gmail.com",
};

console.log(person);
console.dir(person);
console.error("error");
console.table(person);
 */

/* Objeto location - Es el objeto que contiene la barra de direcciones
  - location.href
  - location.protocol
  - location.host
  - location.pathname
  - location.hash
  - location.reload() */

/* console.log(location.href);
console.log(location.protocol);
console.log(location.host);
console.log(location.pathname);
console.log(location.hash);
console.log(location.reload());  */

/* Objeto history - Usado para moverse en el historial de la sesión inicida
  - back()
  - forward()
  - go(n | -n)

  length */

/* 
Objeto date - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
*/

const date = new Date();

/* console.log(date);
console.dir(date);
console.log(date.getDate());
console.log(date.getDay());
console.log(date.getMonth()); */

/* 
Timers
  Timeout:
    setTimeout(() => {code}, delay-in-miliseconds) - Hace que se ejecute la función despues del delay. Si lo referernciamos mediante una variable/constante podemos pararlo con clearTimeout(reference)

  Interval:
    setInterval(() => {code}, delay-in-miliseconds) - Hace que se ejecute la función cada intervalo/delay de milisegundos especificados. Si lo referenciamos mediante una variable/constante podemos pararlo con clearInterval(reference)
*/

/* btn.addEventListener("click", () => {
  const timeout = setTimeout(() => saludar(), 3000);
}); */

// clearTimeout(timeout)

const saludar = () => {
  console.log("Hola señor tiempo");
};

const interval = setInterval(saludar, 3000)




