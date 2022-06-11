// Escribe un programa que cree un string que represente una cuadrícula de 8 x 8, usando caracteres de nueva línea para separar las líneas. En cada posición de la cuadrícula hay un espacio o un carácter '#'. Los caracteres deberían formar un tablero de ajedrez.

var size = 8;
var board = "";

for (var i = 0; i < size; i++) {
  for (var j = 0; j < size; j++) {
    if ((i + j) % 2 == 0)
      board += " ";
    else
      board += "#";
  }
  board += "\n";
}

console.log(board);

// Este ejercicio deberá repetirse 