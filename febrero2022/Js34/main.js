//2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".


function miFuncion(texto, corte) {
    if (typeof texto === 'string' && typeof corte === 'number') {
        let array = Array.from(texto);
        console.log(array.slice(0, corte));
      } else {
          console.log('Introduce una cadena de texto valida')
      }
    }

miFuncion('Hola Mundo', 10);
