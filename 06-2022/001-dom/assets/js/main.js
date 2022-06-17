/* document.getElementById('id') - Acceder a un elemento a través de su Id

document.querySelector('selectorCSS') - Accede al primer elemento que coincida con el selector CSS

document.querrySelectorAll('selectorCSS') - Accede a todos los elementos que coincidan con el selector CSS, devuelve un nodeList */

const title = document.getElementById("title");

console.log(title);
console.log(title.textContent);

title.textContent = "DOM - Accediendo a nodos";

const paragraph = document.querySelector(".paragraph");

console.log(paragraph);

const paragraphs = document.querySelectorAll(".paragraph");

console.log(paragraphs);

paragraphs[0].style.color = "red";

//paragraphs.map((el) => (el.style.color = "green")); Un nodelist no es un array

const paragraphsSpread = [...document.querySelectorAll(".paragraph")];

console.log(paragraphsSpread);

paragraphsSpread.map((el) => (el.style.color = "green"));

const paragraphsArray = Array.from(document.querySelectorAll('.paragraph'))

console.log(paragraphsArray);

paragraphsArray.map(el => el.style.color = 'blue')