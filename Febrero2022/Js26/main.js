// Escriba un ciclo que haga siete llamadas a console.log para generar el siguiente triangulo:
// # 
// ## 
// ### 
// ####
// #####
// ######
// ####### 

for (let string = '#'; string.length <= 7; string = string + '#') {
    console.log(string)
}