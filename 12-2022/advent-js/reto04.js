function fitsInOneBox(boxes) {
  let resultado = false;

  // Paso 1: ordenar las cajas de mayor tamaño a menor

  const arr = boxes.sort((a, b) => b.l - a.l);
  console.log(arr);
  // Paso 2: Comprobar si todas las cajas cojen unas dentro de otras sin dejar ninguna suelta

  // l de [0] debe ser mayor que l de [1] y a su vez l de [1] debe ser mayor que l de [2] y a su vez l de [2] debe ser mayor que l de [3]

  for (let i = 0; i < arr.length - 1; i++) {
    console.log(arr[i]);
    if (
      arr[i].l > arr[i + 1].l &&
      arr[i].w > arr[i + 1].w &&
      arr[i].h > arr[i + 1].h
    ) {
      resultado = true;
    } else {
      resultado = false;
      break
    }
  }

  return resultado;
}

const boxes = [
  { l: 1, w: 1, h: 1 },
  { l: 2, w: 2, h: 2 },
  { l: 3, w: 1, h: 3 },
];

console.log(fitsInOneBox(boxes));

// Dato las keys de las cajas son siempre las mismas y el total de medidas será siempre tres.
