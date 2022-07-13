/* Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5. */

const deleteKey = (text = "", key) => {
  if (text === "") return console.log("No ingresaste un texto para trabajar");
  if (key === "") return console.log("No ingresaste un valor a eliminar");

  console.log(text.replace(new RegExp(key, "ig"), "")); //Utilizamos i para que no distinga mayúsculas de minúsculas y g para que no se detenga con la primera coincidencia
};

deleteKey("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz");
deleteKey("", "abc");
deleteKey("abc, abc, abc, nsh", "");
