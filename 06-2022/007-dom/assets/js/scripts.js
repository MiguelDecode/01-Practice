/* 
Insertar y eliminar elementos II

  parent.insertBefore(newElement, referenceElement) - Insertar un elemento antes del elemento de referencia

  SOPORTE TOTAL
  parent.insertAdjacentElement(position, element)
  
  parent.insertAdjacentHTML(position, element)
  parent.insertAdjacentText(position, element)

  positions: 
    beforebegin - Antes de que empiece (hermano anterior)
    afterbegin - Después de que empiece (primer hijo)
    beforeend - Antes de que acabe (último hijo)
    afterend - Después de que acabe (hermano siguiente)

  parent.replaceChild(newChild, oldChild) - Reemplaza un hijo por otro
*/

const list = document.getElementById("list");
const newElement = document.createElement("LI");
newElement.textContent = "Soy el elemento nuevo";

// list.insertBefore(newElement, list.children[1]);
list.insertAdjacentElement('afterbegin', newElement)
