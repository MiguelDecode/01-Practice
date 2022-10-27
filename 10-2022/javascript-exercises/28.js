// Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].

function eliminateDuplicates(arr) {
  if (!(arr instanceof Array))
    return console.log("No has pasado un tipo de dato válido para calcular");

  if (arr.length === 0) return console.log("Tu array no contiene valores");

  const result = new Set([...arr]);

  console.log(result);
}

eliminateDuplicates(["x", 10, "x", 2, "10", 10, true, true]);
eliminateDuplicates();
eliminateDuplicates([]);
eliminateDuplicates("Hello world");
eliminateDuplicates(true);
