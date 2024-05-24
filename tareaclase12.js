function saludo(){
    var nombre = prompt('Por favor, ingrese su nombre');

    if (nombre) {
        alert("Bienvenido, " + nombre);
    } else {
        alert("Por favor, ingrese su nombre");
    }
}

saludo();
    