const factorial = (number) => {
  let result = 1;
  while (number > 0) {
    result = result * number;
    number--;
    if(number === 0) {
      console.log(result);
      break
    }
  }
};

factorial(10);