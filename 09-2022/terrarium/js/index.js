const $terrarium = document.getElementById("terrarium");
const $plants = document.querySelectorAll(".plant");

/* $plants.forEach((plant) => {
  plant.addEventListener("mousedown", () => {
    plant.addEventListener("mousemove", update);
  });

  window.addEventListener("mouseup", () => {
    plant.removeEventListener("mousemove", update);
  });

  function update(event) {
    console.log(event);
    plant.style.setProperty("position", "absolute");
    plant.style.setProperty("transform", "translate(-50%, -50%)");
    plant.style.setProperty("left", `${event.x}px`);
    plant.style.setProperty("top", `${event.y}px`);
  }
}); */


// Eventos del objeto básicos: "dragstart", "drag" and "dragend"

$plants.forEach((el) =>
  el.addEventListener("dragstart", (event) => {
    // dataTransfer es un objeto que contiene toda la información del objeto arrastrado
    // setData: establece la información que queremos compartir
    // getData: establece la información que queremos obtener

    event.dataTransfer.setData("text/plain", event.target.id);

  })
);

/* $plants.forEach((el) =>
  el.addEventListener("dragend", (event) =>
    console.log("La planta ha dejado de moverse")
  )
);

$plants.forEach((el) =>
  el.addEventListener("drag", (event) =>
    console.log("La planta se encuentra en movimiento")
  )
); */

// Eventos del contenedor básicos: "dragenter", "dragleave", "drop" and "dragover"

/* $terrarium.addEventListener("dragenter", (event) => {
  console.log("Una planta a entrado al terrario");
});

$terrarium.addEventListener("dragleave", (event) => {
  console.log("Una planta ha salido del terrario");
}); */

$terrarium.addEventListener("dragover", (event) => {
  // Necesario para que el evento drop funcione
  event.preventDefault();
  // console.log("Una planta se mueve dentro del terrario");
});

$terrarium.addEventListener("drop", (event) => {
  event.preventDefault();
  const movedPlant = document.getElementById(
    event.dataTransfer.getData("text")
  );

  movedPlant.style.setProperty("position", "absolute");
  movedPlant.style.setProperty("transform", "translate(-50%, -50%)");
  movedPlant.style.setProperty("left", `${event.x}px`);
  movedPlant.style.setProperty("top", `${event.y}px`);

  // console.log("Una planta ha sido sembrada en el terrario");
});



