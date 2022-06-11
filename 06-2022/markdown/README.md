# Aprendiendo _Markdown_

Esto es un párrafo

Lorem ipsum dolor sit amet consecteur adipiscing elit. Labore pariatur rerum, illum nulla aliquid nam.

Aplicando la _cursiva_

Aplicando la **negrita**

Aplicando **_ambas_**

# Encabezado 1

## Encabezado 2

### Encabezado 3

#### Encabezado 4

##### Encabezado 5

###### Encabezado 6

## Otro encabezado de ejemplo

Para un enlace el nombre va entre corchetes y el enlace entre paréntesis.

[Youtube](https://youtube.com/jonmircha)

[Aprendiendo _Markdown_](#aprendiendo-markdown)

[Otro encabezado](#otro-encabezado-de-ejemplo)

Esto es una imagen. Si queremos que se vea en el documento se debe colocar una admiración al principio del elemento.

![This is Javascript](https://jonmircha.com/img/blog/this-is-javascript.jpg)

## Separador

Tres guiones medios forman una división

Esto es un texto

---

Esto es otro texto

## Listas

### Listas con números

1. Primavera
1. Verano
1. Otoño
1. Invierno

### Listas con iconos

- Primavera
- Verano
- Otoño
- Invierno

* Primavera
* Verano
* Otoño
* Invierno

### Sublistas

- Primavera
  - Abril
  - Mayo
    - Cumpleaños de Jon Mircha
  - Junio
- Verano
  - Julio
  - Agosto
  - Septiembre
    - Mes patrio
- Otoño
- Invierno

## Citas

Se utiliza el símbolo > para comenzar una cita. 

> "Viaje antes que destino"

> "Todo lo que escuchamos es una opinión, no un hecho.
>
> Todo lo que vemos es una perspectiva, no la verdad."
>
> Marco Aurelio.

## Tablas

| Nombre  | Edad | Correo              |
| ------- | ---- | ------------------- |
| Jon     | 38   | jonmircha@gmail.com |
| Kenai   | 9    | kenai@jonmircha.com |
| Juanito | 34   | juanito@lol.com     |

## Ejemplos de código

### Pequeño fragmento de código

Vamos a mostrar un pequeño trozo de código para ver como se colocaría en mitad de un texto. Se usan acentos inversos para rodear el código a señalar.

Lorem ipsum dolor sit amet consecteur adipiscing elit. Labore `let` pariatur rerum, illum nulla aliquid nam.

### Fragmento de código

En el caso de un bloque completo de código se utilizan tres acentos inversos y se puede especificar el idioma detrás de los tres primeros acentos inversos.

```js
const sumar = (a, b) => {
  return a + b;
};
```

<form>
  <label for='q'>Buscar:</label>
  <input type='search' name='q' id='q'>
</form>

## Comentarios

<!-- Esto es un comentario -->

No se muestra en la previsualización.

## Caracteres escapados

Se utiliza un \ para que se muestre el simbólo que de no ser señalado de esta forma se mostraría. Pero también anularía su funcionamiento.

\*\*negrita\*\* y \_cursiva\_

