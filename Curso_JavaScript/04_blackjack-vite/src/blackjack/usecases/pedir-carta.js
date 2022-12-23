/**
 * Una función que devuelve una carta del array deck
 * @param {Array<String>} deck Un array de cartas en formato string
 * @returns Una de las cartas dentro del array
 */
export const pedirCarta = (deck) => {
  if (deck.length === 0 || !deck) {
    throw "No hay cartas en el deck";
  }
  const carta = deck.pop();
  return carta;
};
