/* function multiplier(factor) {
  console.log(factor)
  return number => number * factor;
}

let twice = multiplier(2);

console.log(twice(5)); */


/* function power(base, exponent) {
  if (exponent == 0) {
    return 1;
  } else {
    return base * power(base, exponent - 1);
  }
} */

function power(base, exponent) { 
  if (exponent == 0) {
    return 1;
  } else {
    return base * power(base, 2) { // 2 * 4 = 8  Devuelve 8
      if(exponent == 0) {
        return 1;
      } else {
        return base * power(base, 1) { // 2 * 2 = 4  Devuelve 4
          if(exponent == 0) {
            return 1;
          } else {
            return base * power(base, 0) { // 2 * 1 = 2  Devuelve 2
              if (exponent == 0) {
                return 1; // Devuelve uno
              } else {
                return base * power(base, exponent)
              }
            }
          }
        }
      }
    };
  }
}

console.log(power(2, 3));