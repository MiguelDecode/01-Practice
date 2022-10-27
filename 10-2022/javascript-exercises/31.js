const power = function(base, exponent) {
  let result = 1;
  for (let i = 0; i < exponent; i++) {
    result = result * base
    console.log(result)
  }
  return result;
}

console.log(power(2,10))