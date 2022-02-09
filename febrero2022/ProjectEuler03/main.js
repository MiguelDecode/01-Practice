// Un numero palindromico se lee igual en ambos sentidos El palindromo mas grabde hecho del producto de dos numeros de 2 digitos es 9009 = 91 * 99
// Encuentra el palindromo mas grande hecho del producto de dos numeros de 3 digitos


for (let a = 99; a < 100; a--) {
    console.log(a)
    for (let b = 99; b < 100; b--) {
        console.log(b)
        let palindromo = a * b;
        let palindromoString = palindromo.toString();
        let palindromoReverse = palindromo.toString().split("").reverse().join("");
        if (palindromoString === palindromoReverse) {
            console.log(palindromo)
        }
    }
}