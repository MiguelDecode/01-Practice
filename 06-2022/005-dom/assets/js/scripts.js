/* 
DOM Crear e insertar elementos

Crear un elemento: document.createElement(element)
Escribir texto en un elemento: element.textContent = texto
Escribir HTML en un elemento: element.innerHTML = código HTML

Añadir un elemento al DOM: parent.appenchild(element)

Fragmentos de código: document.createDocumentFragment()

*/

const days = [
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado",
  "Domingo",
];

const title = document.getElementById("title");
const daysList = document.getElementById("daysList");
const selectDays = document.getElementById("daysSelect");

title.innerHTML = "DOM - <span>Crear e insertar elementos</span>";

const fragment = document.createDocumentFragment();

/* for (const day of days) {
  const itemList = document.createElement("LI");
  itemList.textContent = day;
  fragment.appendChild(itemList);
} */

daysList.appendChild(fragment);

for (const day of days) {
  const selectItem = document.createElement("OPTION");
  selectItem.setAttribute("value", day.toLowerCase());
  selectItem.textContent = day;
  fragment.appendChild(selectItem);
}

selectDays.appendChild(fragment);
