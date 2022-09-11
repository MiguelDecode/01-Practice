const pendingTasks = document.getElementById("pending-tasks");
const finishedTasks = document.getElementById("finished-tasks");

pendingTasks.addEventListener("dragstart", (event) => {
  // setData: Establece la información que queremos compartir
  // getData: Establece la información que queremos obtener

  event.dataTransfer.setData("text/plain", event.target.id);
  // event.dataTransfer.getData("text"); Obtiene el elemento que esta siendo compartido
});

pendingTasks.addEventListener("drag", (event) => {
  event.target.classList.add("active");
});

pendingTasks.addEventListener("dragend", (event) => {
  event.target.classList.remove("active");
});

// Evento obligatorio sino no funciona el drop event
finishedTasks.addEventListener("dragover", (event) => {
  event.preventDefault();
});

finishedTasks.addEventListener("drop", (event) => {
  event.preventDefault();
  const element = document.getElementById(event.dataTransfer.getData("text"));

  // removeChild quita el elemento indicado del elemento padre y lo devuelve. Posteriormente lo agregamos como hijo a Tareas terminadas.
  element.classList.remove("active");
  finishedTasks.appendChild(pendingTasks.removeChild(element));
});
