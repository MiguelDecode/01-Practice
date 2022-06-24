/* const API = "https://randomuser.me/api/?results=50";

async function getData() {
  const response = await fetch(API);
  const { results: users } = await response.json();
  showUsers(users);
}

function showUsers(users) {
  users.forEach((user) => {
    const picture = user.picture.medium;
    const img = document.createElement("IMG");
    img.src = picture;
    document.body.appendChild(img)
  });
}

getData();
 */

//  Este tipo de métodos que mutan el array original.
const colores = ['rojo', 'verde', 'azul']
console.log(colores);
colores.unshift('turquesa')
console.log(colores);
colores.shift()
console.log(colores);
colores.push('amarillo')
console.log(colores);
colores.pop()
console.log(colores);

// Método para no mutar el array
const color = 'amarillo';
const colores2 = [color,...colores];
console.log(colores, colores2);

// Operador Spread 
console.log(...colores);

