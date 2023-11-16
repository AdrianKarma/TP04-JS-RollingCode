class Libro {
  constructor(ISBN, titulo, autor, numPaginas) {
    this.ISBN = ISBN;
    this.titulo = titulo;
    this.autor = autor;
    this.numPaginas = numPaginas;
  }

  get ISBN() {
    return this._ISBN;
  }

  set ISBN(value) {
    this._ISBN = value;
  }

  get titulo() {
    return this._titulo;
  }

  set titulo(value) {
    this._titulo = value;
  }

  get autor() {
    return this._autor;
  }

  set autor(value) {
    this._autor = value;
  }

  get numPaginas() {
    return this._numPaginas;
  }

  set numPaginas(value) {
    this._numPaginas = value;
  }

  mostrarLibro() {
    document.write(`El libro ${this.titulo} con ISBN ${this.ISBN} creado por el autor ${this.autor} tiene ${this.numPaginas} páginas.`);
  }
}

let libro1 = new Libro("9780451524935", "1984", "George Orwell", 336 );
let libro2 = new Libro("9788483468777 ", "Legítima defensa", "John Grisham", 656);

libro1.mostrarLibro();
document.write("<br>");
libro2.mostrarLibro();
document.write("<br>");

if (libro1.numPaginas > libro2.numPaginas) {
  document.write(`El libro ${libro1.titulo} tiene más páginas que el libro ${libro2.titulo}.`);
} else if (libro1.numPaginas < libro2.numPaginas) {
  document.write(`El libro ${libro2.titulo} tiene más páginas que el libro ${libro1.titulo}.`);
} else {
  document.write(`Los dos libros tienen la misma cantidad de páginas.`);
}
