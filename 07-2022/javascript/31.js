const error = (msg) => console.log(msg);

const tarea = (tarea, siguienteTarea, error) => {
  console.log(tarea);
  if (Math.random() < 0.1) error();
  else setTimeout(siguienteTarea, 500);
};

const pensarIdea = () => {
  tarea(
    "Pensar idea",
    () => {
      tarea(
        "Guionizar",
        () => {
          tarea(
            "Grabar",
            () => {
              tarea(
                "Editar",
                () =>
                  tarea(
                    "Publicar",
                    () => console.log("Vídeo publicado"),
                    () => error("Error al publicar")
                  ),
                () => error("Error al editar")
              );
            },
            () => error("Error al grabar")
          );
        },
        () => error("Error al guionizar")
      );
    },
    () => error("Error de pensamiento")
  );
};

pensarIdea();
