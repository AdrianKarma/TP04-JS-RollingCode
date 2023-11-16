class Animal {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  emitirSonido() {
    document.write("El animal emite un sonido.");
  }
}

class Perro extends Animal {
  emitirSonido() {
    document.write("El perro ladra.");
  }
}

class Gato extends Animal {
  emitirSonido() {
    document.write("El gato maúlla.");
  }
}

const perro = new Perro("Maddie", 3);
const gato = new Gato("Princesa", 5);

perro.emitirSonido();
gato.emitirSonido();
