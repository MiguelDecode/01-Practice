let a = 10;

if (a >= 10) { // undefined, null , una asignación
  console.log("A es mayor o igual a 10");
} else {
console.log('A es menor a 10')
}

console.log("Fin del programa");

const today = new Date();

console.log(today)

let day = today.getDay()

console.log(day)

if(day === 0) {
  console.log('Sunday')
} else if ( day === 1) {
  console.log('Monday')
} else if ( day === 2) {
  console.log('Tuesday')
} else if (day === 3) {
  console.log('Wednesday')
} else if (day === 4) {
  console.log('Thursday')
} else if (day === 5) {
  console.log('Friday')
} else {
  console.log('Saturday')
}

day = 3;

const days = {
  0: 'Sunday',
  1: 'Monday',
  2: 'Tuesday',
  3: 'Wednesday',
  4: 'Thursday',
  5: 'Friday',
  6: 'Saturday'
}

console.log(days[day])

const dias = ['Domingo','Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado' ]
console.log(dias[day])