const factorial = (number) => {
  let result = 1;
  while (number > 0) {
    result = result * number;
    number--;
    console.log(result);
  }

  console.log(result);
};

factorial(10);