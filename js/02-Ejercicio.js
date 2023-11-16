let cuenta = {
  titular: "Alex",
  saldo: 0,
  ingresar: function(cantidad) {
    this.saldo += cantidad;
  },
  extraer: function(cantidad) {
    if (cantidad > this.saldo) {
      document.write("No hay suficiente saldo en la cuenta."+"</br>");
    } else {
      this.saldo -= cantidad;
    }
  },
  informar: function() {
    document.write("Titular: " + this.titular +"</br>");
    document.write("Saldo: " + this.saldo +"</br>");
  }
};

cuenta.informar();
cuenta.ingresar(100);
cuenta.informar();
cuenta.extraer(50);
cuenta.informar();
