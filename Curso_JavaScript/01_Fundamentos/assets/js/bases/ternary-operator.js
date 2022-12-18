// Días de semana abrimos a las 11,
// pero los fines de semana abrimos a la 9

// Entra a un sitio web, para consultar si está abierto hoy...

let day = 3; // 0: Domingo, 1: Lunes, ...
const actualHour = 9;

let openHour;
let message; // It's open, It's close, we open at XX

/* if (day === 0 || day === 6) {
  console.log("It's weekend");
  openHour = 9;
} else {
  console.log("It's a day of the week")
  openHour = 11;
}

console.log(`Today we open at ${openHour}`)

if(actualHour >= openHour) {
  message = "It's open";
} else {
  message = `It's close, sorry we open at ${openHour}`
}

console.log(message) */

openHour = ([0,6].includes(day)) ? 9 : 11;

message = (actualHour >= openHour) ? "It's open" : `It's close, sorry we open at ${openHour}`

console.log(message)