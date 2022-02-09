// Escribe un programa que pueda calcular el area de 3 figuras geometricas, triangulo y circulo. En primer lugar pregunta de que figura se quiere calcular el area, despues solicita los datos que necesitas para calcularlo.

let respuesta = prompt("Tienes tres opciones: triangulo, rectangulo y circulo. Escoge una de las tres")

switch (respuesta) {
    case 'triangulo': 
        {
            let b = parseInt(prompt("Introduce la base del triangulo"));
            let h = parseInt(prompt("Introduce la altura del triangulo"))
            console.log(b * h / 2);
            break
        }
    case 'rectangulo':
        {
            let b = parseInt(prompt("Introduce la base del rectangulo"));
            let h = parseInt(prompt("Introduce la altura del rectangulo"))
            console.log(b * h);
            break
        }
    case 'circulo':
        {
            let r = parseInt(prompt("Introduce el radio de tu circunferencia"));
            console.log(3.14 * r**2);
            break
        }
    default :
        console.log("Introduce una figura valida")

}

