const isPalindrome = (number) => {
  let stringNumber = String(number);
  let reverseNumber = stringNumber.split("").reverse().join("");

  if (stringNumber === reverseNumber) {
    return true;
  } else {
    return false;
  }
};

const largestPalindromeProduct = () => {
  let palindromes = [];
  for (let i = 999; i >= 100; i--) {
    for (let j = 999; j >= 100; j--) {
      if (isPalindrome(i * j) && i !== j) {
        palindromes.push(i * j);
      }
    }
  }
  console.log(Math.max(...palindromes))
};

largestPalindromeProduct();

// Resultado esperado: 906609