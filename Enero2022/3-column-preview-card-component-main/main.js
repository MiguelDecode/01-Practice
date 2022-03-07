// Guardar en estado (columna activa)
let columnaActiva = 1

// Seleccionar las columnas
const columnas = document.querySelectorAll(".columna")

// Escuchar los "clicks" en cada una de ellas
columnas.forEach((columna, indice) => {
    columna.addEventListener("click", function() {
        cambiarColumna(indice)
    })
})

// Cambiar el estado de las columnas
function cambiarColumna(indice) {
    columnas[columnaActiva].classList.remove("activa")
    columnas[indice].classList.add("activa")
    columnaActiva = indice
}