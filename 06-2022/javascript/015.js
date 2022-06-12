// Solicitar al usuario una palabra y mostrar por consola el número de consonantes, vocales y longuitud de la palabra.


const segmentar = (word) => {
  let vocales = 0;
  let consonantes = 0;

  if(word === '') return console.log('No has introducido ningún valor');

  if(typeof word !== 'string') console.log('No has introducido un tipo de dato válido');

  for (let i = 0; i < word.length; i++) {
    if (word[i] === 'a' || word[i] === 'e' || word[i] === 'o' || word[i] === 'u' || word[i] === 'i') {
      vocales++
    } else {
      consonantes++
    }
  }
  
  console.log(vocales);
  console.log(consonantes);
  console.log(word.length);
}

segmentar('Calculadora')
