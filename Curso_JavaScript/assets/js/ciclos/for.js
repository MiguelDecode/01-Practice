 
const heroes = ['Batman', 'Superman', 'Wonderwoman', 'Aquaman']

console.warn('Traditional For')

for(let i = 0; i < heroes.length; i++) {
  console.log(heroes[i])
}

heroes.forEach(heroe => console.log(heroe))

for(let hero in heroes) {
  console.log(heroes[hero])
}

for(let hero of heroes) {
  console.log(hero)
}
