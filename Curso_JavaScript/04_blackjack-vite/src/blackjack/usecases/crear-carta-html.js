/**
 * Función para dibujar las cartas en el tapete
 * @param {string} carta 
 * @param {HTMLElement} divCartas Elemento donde se dibujaran las cartas
 * @return {HTMLElement} Devuelve una imagen de una carta
 */
export const crearCartaHTML = (carta, divCartas) => {
  if (!carta) throw new Error("La carta es un argumento obligatorio");

  const imgCarta = document.createElement("img");
  imgCarta.src = `assets/cartas/${carta}.png`; //3H, JD
  imgCarta.classList.add("carta");

  return imgCarta
};
