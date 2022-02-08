// Ordena tres numeros de mayor a menor

let a
let b
let c

// Testing Area
a = 1
b = 2
c = 2

if (a == b) {
    if (b == c) {console.log('a=b=c')}
    else if (a > c) {console.log('a=b>c')}
    else {console.log('c>a=b')}
} else if (b == c) {
    if (a > b){console.log('a>b=c')}
    else {console.log('b=c>a')}
} else if (c == a) {
    if (b > a) {console.log('b>a=c')}
    else {console.log('a=c>b')}
} else if (a > b && a > c) {
    if (a > c && b > c) {console.log('a>b>c')}
    else {console.log('a>c>b')}
} else if (b > a && b > c){
    if (b > c && a > c) {console.log('b>a>c')}
    else {console.log('b>c>a')}
} else if (c > a && c > b) {
    if (c > b && a > b) {console.log('c>a>b')}
    else {console.log('c>b>a')}
}
