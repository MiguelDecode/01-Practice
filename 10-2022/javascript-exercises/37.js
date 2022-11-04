/* Crea una clase Libro
La clase libro tendrá título, autor, año y género.
Crea un método que devuelva toda la información del libro
Pide 3 libros y guárdalos en un array
Los libros se introducirán al arrancar el programa pidiendo los datos con prompt.
Validar que los campos no se introduzcan vacíos
Validar que el año sea un número y que tenga 4 dígitos
Validar que el género sea: aventuras, terror o fantasía
Crea una función que muestre todos los libros
Crea una función que muestre los autores ordenados alfabéticamente
Crea una función que pida un género y muestre la información de los libros que pertenezcan a ese género usando un el método que devuelve la información */

let books = [];

class Book {
  constructor(title, author, year, genre) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.genre = genre;
  }

  bookInfo() {
    return `${this.title} es un libro de ${this.genre} escrito por ${this.author} escrito en el año ${this.year}`;
  }

  getAuthor() {
    return this.author;
  }

  getGender() {
    return this.genre;
  }
}

while (books.length < 3) {
  let title = prompt("Escribe el título del libro");
  let author = prompt("Escribe el autor del libro");
  let year = prompt("Escribe le año del libro");
  let genre = prompt("Escribe el género del libro").toLowerCase();

  if (
    typeof title === "string" &&
    typeof author === "string" &&
    !isNaN(year) &&
    year.length === 4 &&
    (genre === "adventure" || genre === "terror" || genre === "fantasy")
  ) {
    books.push(new Book(title, author, year, genre));
  }
}

const showBooks = () => {
  console.log(books);
};

showBooks();

const showAuthors = () => {
  let authors = [];
  for (const book of books) {
    authors.push(book.getAuthor());
  }
  console.log(authors.sort());
};

showAuthors();

const showGenre = () => {
  let genre = prompt("Introduce el género a buscar");

  for (const book of books) {
    if (book.getGender() === genre) {
      console.log(book.bookInfo());
    }
  }
};

showGenre();
