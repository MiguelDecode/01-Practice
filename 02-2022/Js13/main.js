// Dado un array que contiene ['azul', 'amarillo', 'rojo', 'verde', 'rosa'] determinar si un color introducido por el usuario a traves de un prompt se encuentra dentro del array o no

const COLORES = ['azul', 'amarillo', 'rojo', 'verde', 'rosa']

let color = prompt('Introduce un color para saber si esta dentro de la lista')

if(COLORES.indexOf(color) !== -1) {
    console.log('Tu color se encuentra en la lista')
} else {
    console.log('Tu color no esta definido')
}