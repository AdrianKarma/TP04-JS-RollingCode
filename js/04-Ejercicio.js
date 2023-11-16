class Producto {
  constructor(codigo, nombre, precio) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.precio = precio;
  }

  imprimeDatos() {
    document.write(`Codigo: ${this.codigo}<br>`);
    document.write(`Nombre: ${this.nombre}<br>`);
    document.write(`Precio: ${this.precio}<br><br>`);
  }
}

let productos = [
  new Producto(10001, "Galletas Oreo", 190),
  new Producto(10002, "Papas Tafí", 280),
  new Producto(20001, "Cerveza TBC ", 670)
];

for (let i = 0; i < productos.length; i++) {
  productos[i].imprimeDatos();
}
