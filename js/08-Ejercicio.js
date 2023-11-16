class Persona {
  constructor(nombre, edad, profesion) {
    this.nombre = nombre;
    this.edad = edad;
    this.profesion = profesion;
  }

  saludar() {
    document.write(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años. Soy ${this.profesion}. `+ `</br>`);
    console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años. Soy ${this.profesion}. `+ `</br>`);
  }

  despedirse() {
   document.write(`Adiós, hasta pronto. `+ `</br>`);
    console.log(`Adiós, hasta pronto. `);
  }
}

const persona1 = new Persona("Adrian", 35, "programador");
const persona2 = new Persona("Carla", 31, "abogada");

persona1.saludar();
persona1.despedirse();

persona2.saludar();
persona2.despedirse();
