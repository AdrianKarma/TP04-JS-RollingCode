let auto = {
  color: "gris",
  marca: "VolksWagen",
  modelo: "Gol Trend",
  encendido: false,
  encender: function() {
    this.encendido = true;
    document.write("Auto encendido"+"</br>");
  },
  apagar: function() {
    this.encendido = false;
    document.write("El auto se apagó" +"</br>");
  }
};

auto.encender();
auto.apagar();
