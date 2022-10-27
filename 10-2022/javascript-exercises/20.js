// Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).

function calculateAge(date) {
  if (!(date instanceof Date))
    return console.log("No has introducido un tipo de fecha válida");

  /* const x = new Date() - date;

  console.log(x / 1000 / 60 / 60 / 24 / 365) */

  let dateActual = Date.now();
  console.log(dateActual)

  let dateBorn = date.getTime();
  console.log(dateBorn)

  let age = dateActual - dateBorn;

  let years = age / 1000 / 60 / 60 / 24 / 365;

  console.log(`Han pasado ${Math.round(years)} años`);
}

calculateAge(new Date(1984, 4, 23));
calculateAge("fecha");
calculateAge("");
calculateAge(true);
