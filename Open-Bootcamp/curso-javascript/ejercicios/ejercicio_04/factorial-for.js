const factorial = (a) => {
  let result = 1;
  for (let i = 1; i <= a; i++) {
    result *= i;
  }
  console.log(result);
};

factorial(10)