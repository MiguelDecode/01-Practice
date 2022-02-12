// Crea una clase Libro
// La clase libro tendrá título, autor, año y género.
// Crea un método que devuelva toda la información del libro 
// Pide 3 libros y guárdalos en un Array 
// Los libros se introducirán al arrancar el programa pidiendo los datos con propmpt 
// Validar que los campos no se introduzcan vacios 
// Validar que el año sea un numero y que tenga 4 dígitos
// Validar que el género sea: aventuras, terror o fantasía 
// Crea una función que muestre todos los libros 
// Crea una función que muestre los autores ordenados alfabéticamente
// Crea una función que pida un género y muestre la informacón de los libros que pertenezcan a ese género usando el método que devuelve la información 


class Libro {
  constructor (title, author, year, gender) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.gender = gender;
  }

  getAuthor() {
    return this.author
  }

  getGender() {
    return this.gender
  }

  libroInfo() {
    return `${this.title} del autor ${this.author} y del año ${this.year} es del genero ${this.gender}.`;
  }
}

let libros = [];

while (libros.length < 3) {
  let title = prompt('Introduce el titulo de un libro de tu agrado');
  let author = prompt('Introduce el autor de ese libro');
  let year = prompt('Introduce el año del libro');
  let gender = prompt('Introduce el género del libro').toLowerCase();

  if (title != '' && author != '' && !isNaN(year) && year.length == 4 && (gender == 'aventura' || gender == 'terror' || gender == 'fantasia')) {
    libros.push(new Libro(title, author, year, gender))
  } else {
    console.log('No has introducido todos los datos correctamente')
  }
}

const showAllLibros = () => {
  console.log(libros);
}

showAllLibros();

const showAuthors = () => {
  let authors = [];

  for (const libro of libros) {
    authors.push(libro.getAuthor())
  }
  console.log(authors.sort());
}

const showGender = () => {
  const gender = prompt('Introduce el genero a buscar')

  for (const libro of libros) {
    if (libro.getGender() == gender) {
      console.log(libro.libroInfo())
    }
  }
}

showAuthors();
showGender();