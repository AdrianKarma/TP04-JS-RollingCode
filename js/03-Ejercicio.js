class Rectangulo {
  constructor(alto, ancho) {
    this.alto = alto;
    this.ancho = ancho;
  }


  get area() {
    return this.calcularArea();
  }
  calcularArea() {
    return this.alto * this.ancho;
  }



  get perimetro() {
    return this.calcularPerimetro();
  }
  calcularPerimetro() {
    return 2 * (this.alto + this.ancho);
  }



  mostrarPropiedades() {
    document.write(`Alto: ${this.alto}</br>`);
    document.write(`Ancho: ${this.ancho}</br>`);
  }
  modificarPropiedades(alto, ancho) {
    this.alto = alto;
    this.ancho = ancho;
  }
}





let rectangulo1 = new Rectangulo(25, 55);
document.write("Propiedades del rectángulo 1:</br>");
rectangulo1.mostrarPropiedades();
document.write(`Área: ${rectangulo1.area}</br>`);
document.write(`Perímetro: ${rectangulo1.perimetro}</br>`);

rectangulo1.modificarPropiedades(5, 15);
document.write("Propiedades del rectángulo 1 después de modificarlas:<br>");
rectangulo1.mostrarPropiedades();
document.write(`Área: ${rectangulo1.area}</br>`);
document.write(`Perímetro: ${rectangulo1.perimetro}</br>`);


let rectangulo2 = new Rectangulo(30, 60);
document.write("Propiedades del rectángulo 2:</br>");
rectangulo2.mostrarPropiedades();
document.write(`Área: ${rectangulo2.area}</br>`);
document.write(`Perímetro: ${rectangulo2.perimetro}</br>`);
