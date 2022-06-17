/* 

Atributos
  element.getAttribute('Attribute')
  element.setAttribute('Attribute', value)

Clases 
  element.classList.add('class','class',...)
  element.classList.remove('class','class',...)
  element.classList.contains('class')
  element.classList.replace('oldClass', 'newClass')
  
  element.classList.toggle('class'[,force])

Atributos Directos
  id
  value

*/

const title = document.getElementById("title");
const name = document.getElementById("name");

console.log(title);
console.log(name);

console.log(name.getAttribute("type"));
console.log(name.getAttribute("id"));

//name.setAttribute("type", "number");
console.log(name.getAttribute("type"));
//name.setAttribute("type", "date");

title.classList.add("main-title", "other-title");
title.classList.remove("main-title");
if (title.classList.contains("other-title")) {
  console.log("Title contiene other-title");
} else {
  console.log("Other-title no se encuentra como clase en el título");
}
title.classList.replace("other-title", "main-title");

console.log(title.id);
console.log(title.textContent);
console.log(title.innerHTML);
console.log(name.value);

console.log(title);
