/* Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020). */

const calculateAge = (bornDate = undefined) => {
  if (bornDate === undefined) return console.log("No ingresaste una fecha");
  if (!(bornDate instanceof Date))
    return console.log("No has introducido un tipo válido de dato en la fecha");

  const actualDateMs = new Date().getTime();

  const bornDateMs = bornDate.getTime();

  const yearInMs = 1000 * 60 * 60 * 24 * 365;

  console.log(`${Math.round((actualDateMs - bornDateMs) / yearInMs)} años`);
};

calculateAge(new Date(1986, 3, 11));
