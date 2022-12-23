import _ from "underscore";

/**
 * Esta función crea un nuevo deck y lo devuelve barajado
 * @param {Array<string>} tiposDeCarta Ejemplo ["C", "D", "H", "S"]
 * @param {Array<string>} tiposespeciales Ejemplo ["A", "J", "Q", "K"]
 * @returns {array} Retorna un nuevo deck barajado
 */

export const crearDeck = (tiposDeCarta, tiposEspeciales) => {
  if (!tiposDeCarta) throw new Error("TiposDeCarta es obligatorio");
  if(tiposDeCarta > 0) throw new Error('TiposDeCarta tiene que ser un arreglo con algún valor')
  if (!tiposEspeciales) throw new Error("TiposEspecioles es obligatorio");
  if(tiposEspeciales> 0) throw new Error('Tipos especiales tiene que ser un arreglo con algún valor')

  let deck = [];

  for (let i = 2; i <= 10; i++) {
    for (let tipo of tiposDeCarta) {
      deck.push(i + tipo);
    }
  }

  for (let tipo of tiposDeCarta) {
    for (let esp of tiposEspeciales) {
      deck.push(esp + tipo);
    }
  }
  // console.log( deck );
  deck = _.shuffle(deck);
  return deck;
};
