//Dado un array que contiene ['azul', 'amarillo', 'rojo', 'verde', 'rosa'] determinar si un color introducido por el usuario a través de un prompt se encuentra dentro del array o no.

let colors = ['azul', 'amarillo', 'rojo', 'verde', 'rosa']

let color = prompt('Introduce un color para saber si esta en nuestra lista').toLowerCase()

for (i of colors) {
    if (color == colors[i]) {
        console.log('Tu color se encuentra en la lista')
    } else {
        console.log('Tu color no se encuentra en la lista')
    }
}

if(colors.indexOf(color) !== -1) {
    console.log('Tu color se encuentra en el array')
} else {
    console.log('Tu color no se encuentra en el array')
}