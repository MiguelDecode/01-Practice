const numbers = document.getElementById("numbers");
const result = document.getElementById("result");

let a = prompt("Introduce el primer numero");
let b = prompt("Introduce el segundo numero");
let c = prompt("Introduce el tercer numero");

numbers.textContent = `Los numeros introducidos son ${a}, ${b}, ${c}.`
    
// Exercise

if (a >= b  && a >= c) {
    if (b >= c) { 
        result.textContent = `El orden es a>b>c`
    } else {
        result.textContent = `El orden es a>c>b`
    }
} else if (b >= c && b >= a) {
    if (a >=c) {
        result.textContent = `El orden es b>a>c`
    } else {
        result.textContent = `El orden es b>c>a`
    }
} else if (c >= a && c >= b) {
    if (a >= b) {
        result.textContent = `El orden es c>a>b`
    } else {
        result.textContent = `El orden es c>b>a`
    }
}