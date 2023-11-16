class Contacto {
  constructor(nombre, telefono) {
    this.nombre = nombre;
    this.telefono = telefono;
  }
}



class Agenda {
  constructor(tamano = 10) {
    this.contactos = [];
    this.tamano = tamano;
  }


  aniadirContacto(contacto) {
    if (this.agendaLlena()) {
      console.log("La agenda está llena. No se puede añadir más contactos.");
       alert("La agenda está llena. No se puede añadir más contactos.");


    } else if (this.existeContacto(contacto)) {

      console.log("Este contacto ya existe en la agenda.");
      alert("Este contacto ya existe en la agenda.");

    } else {
      this.contactos.push(contacto);
      console.log("Contacto añadido correctamente.");
       alert("Contacto añadido correctamente.");
    }

  }

  existeContacto(contacto) {
    return this.contactos.some((c) => c.nombre === contacto.nombre);
  }


  listarContactos() {
    console.log("Lista de contactos:");
    this.contactos.forEach((contacto) => {
      console.log(`${contacto.nombre}: ${contacto.telefono}`);
    }
    );
  }




  buscarContacto(nombre) {
    const contacto = this.contactos.find((c) => c.nombre === nombre);
    if (contacto) {
      console.log(`${contacto.nombre}: ${contacto.telefono}`);
    } else {
      console.log("Contacto no encontrado.");
      alert("Contacto no encontrado.");
    }
  }

  eliminarContacto(contacto) {
    const index = this.contactos.findIndex((c) => c.nombre === contacto.nombre);
    if (index !== -1) {
      this.contactos.splice(index, 1);
      console.log("Contacto eliminado correctamente.");
      alert("Contacto eliminado correctamente.");
    } else {
      console.log("Contacto no encontrado. No se puede eliminar.");
      alert("Contacto no encontrado. No se puede eliminar.");
    }
  }



  agendaLlena() {
    return this.contactos.length >= this.tamano;
  }
  huecosLibres() {
    return this.tamano - this.contactos.length;
  }
}




function mostrarMenu() {
  let agenda = new Agenda();

  while (true) {
    const opcion = prompt(
      // \n
      "Menú:\n1. Añadir contacto\n2. Buscar contacto\n3. Listar contactos\n4. Eliminar contacto\n5. Huecos libres\n6. Salir"
    );

    switch (opcion) {
      case "1":
        const nombre = prompt("Ingrese el nombre del contacto:");
        const telefono = prompt("Ingrese el número de teléfono:");
        const nuevoContacto = new Contacto(nombre, telefono);
        agenda.aniadirContacto(nuevoContacto);
        break;

      case "2":
        const nombreBuscar = prompt("Ingrese el nombre del contacto a buscar:");
        agenda.buscarContacto(nombreBuscar);
        break;

      case "3":
        agenda.listarContactos();
        break;

      case "4":
        const nombreEliminar = prompt("Ingrese el nombre del contacto a eliminar:");
        const contactoEliminar = new Contacto(nombreEliminar, ""); 
        agenda.eliminarContacto(contactoEliminar);
        break;

      case "5":
        console.log(`Huecos libres en la agenda: ${agenda.huecosLibres()}`);
        alert(`Huecos libres en la agenda: ${agenda.huecosLibres()}`);
        break;

      case "6":
        console.log(`Saliendo del programa.`);
        alert(`Saliendo del programa.`);
        return;

      default:
        console.log(`Opción no válida. Inténtalo de nuevo.`);
        alert(`Opción no válida. Inténtalo de nuevo.`);
    }
  }
}


mostrarMenu();
