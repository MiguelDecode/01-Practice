const randomIntFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function lottery(){
  const result = [];
  

  while(result.length < 6) {
    const number = randomIntFromInterval(1,45);
    // Si un valor está incluido repite un bucle del while.
    if(result.includes(number)) continue;
    result.push(number);
  }
  
  return result
}

console.log(lottery());
console.log(lottery());
