const smile = document.getElementById("smile");
const dropZone = document.getElementById("drop-zone");

// Eventos del objeto arrastrado

/* smile.addEventListener("dragstart", () => {
  console.log("Drag Start");
});

smile.addEventListener("drag", () => {
  console.log("Drag element");
});

smile.addEventListener("dragend", () => {
  console.log("Drag End");
});
 */
// Eventos del contenedor de destino

dropZone.addEventListener("dragenter", () => {
  console.log("Drag enter");
});

dropZone.addEventListener("dragover", (event) => {
  event.preventDefault();
  console.log("Drag over");
});

dropZone.addEventListener("drop", (event) => {
  event.preventDefault();
  console.log("Drop element");
});

dropZone.addEventListener("dragleave", () => {
  console.log("Drop leave");
});
