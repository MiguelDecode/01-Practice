let frase = 'Hoy vamos a practicar alguno de los metodos mas conocidos de strings'

console.log(frase.length)

let fraseUp = frase.toUpperCase()
console.log(fraseUp)
console.log(frase.toUpperCase())

let fraseLow = frase.toLowerCase()
console.log(fraseLow)
console.log(frase.toLowerCase())

console.log(frase.indexOf('g')) // Devuelve el indice de la primera coincidencia que encuentre luego se detiene. Si no encuentra ninguna coincidencia devuelve -1.

console.log(frase.replace('conocidos', 'utilizados'))// Busca la primera coincidencia y la reemplaza por el nuevo contenido. No reemplaza coincidencias posteriores.

console.log(frase.substring(10)) // Desde el indice indicado hasta el final de la frase
console.log(frase.substring(10, 55)) 

console.log(frase.slice(-20)) // Muestra los ultimos caracteres de la frase
console.log(frase.slice(0, -15)) // Muestra desde el indice indicado y la longuitud especificada

console.log(frase.trim()) // Retira los espacios al inicio y al final de la frase

console.log(frase.startsWith('H')) // Comprueba si la frase comienza por el caracter especificado

console.log(frase.endsWith('s')) // Comprueba si la frase termina por el caracter especificado

console.log(frase.includes('z')) // Busca si existe alguna coincidencia del caracter especificado
console.log(frase.includes('v'))

console.log(frase.repeat(3)) //Repite la variable el numero de veces especificadas