// 2. Pide una nota (número). Muestra la calificación según la nota:

// 0-3: Muy deficiente
// 3-5: Insuficiente
// 5-6: Suficiente
// 6-7: Bien
// 7-9: Notable
// 9-10: Sobresaliente

let nota = parseInt(prompt("Introduce tu nota"))

switch (nota) {
    case 0:
    case 1:
    case 2:
        console.log("Resultado muy deficiente")
        break
    case 3:
    case 4:
        console.log("Resultado insuficiente")
        break
    case 5:
    case 6:
        console.log("Resultado suficiente")
        break
    case 7:
    case 8:
        console.log("Resultado bien")
        break
    case 9:
        console.log("Resultade notable")
        break
    case 10:
        console.log("Resultado sobresaliente")
        break
    default:
        console.log("Introduce un numero valido")
}
