class Persona {
  constructor(nombre, edad, DNI, sexo, peso, altura, anioNacimiento) {
    this.nombre = nombre;
    this.edad = edad;
    this.DNI = DNI;
    this.sexo = sexo;
    this.peso = peso;
    this.altura = altura;
    this.anioNacimiento = anioNacimiento;
  }

  mostrarGeneracion() {
    let generacion = "";
    let rasgoCaracteristico = "";

    if (this.anioNacimiento >= 1997 && this.anioNacimiento <= 2012) {
      generacion = "Generación Z";
      rasgoCaracteristico = "Irreverencia";
    } else if (this.anioNacimiento >= 1981 && this.anioNacimiento <= 1996) {
      generacion = "Generación Y";
      rasgoCaracteristico = "Frustración";
    } else if (this.anioNacimiento >= 1965 && this.anioNacimiento <= 1980) {
      generacion = "Generación X";
      rasgoCaracteristico = "Obsesión por el éxito";
    } else if (this.anioNacimiento >= 1946 && this.anioNacimiento <= 1964) {
      generacion = "Generación Baby Boom";
      rasgoCaracteristico = "Ambición";
    } else if (this.anioNacimiento >= 1928 && this.anioNacimiento <= 1945) {
      generacion = "Generación Silenciosa";
      rasgoCaracteristico = "Austeridad";
    }

    document.write(`${this.nombre} pertenece a la ${generacion} y su rasgo característico es la ${rasgoCaracteristico}.`);
  }

  esMayorDeEdad() {
    if (this.edad >= 18) {
      document.write(`${this.nombre} es mayor de edad.`);
    } else {
      document.write(`${this.nombre} no es mayor de edad.`);
    }
  }

  mostrarDatos() {
    document.write(`Nombre: ${this.nombre}<br>`);
    document.write(`Edad: ${this.edad}<br>`);
    document.write(`DNI: ${this.DNI}<br>`);
    document.write(`Sexo: ${this.sexo}<br>`);
    document.write(`Peso: ${this.peso}<br>`);
    document.write(`Altura: ${this.altura}<br>`);
    document.write(`Año de nacimiento: ${this.anioNacimiento}<br>`);
  }

  generaDNI() {
  this.DNI = Math.floor(Math.random() * 60000000) + 44000000;
  }
}

let persona1 = new Persona("Adrian", 35, 33090492, "H", 85, 1.77, 1988);
persona1.mostrarGeneracion();
document.write("<br>");
persona1.esMayorDeEdad();
document.write("<br>");
persona1.mostrarDatos();
document.write("<br>");
persona1.generaDNI();
document.write(`Nuevo DNI de ${persona1.nombre}: ${persona1.DNI}`);
