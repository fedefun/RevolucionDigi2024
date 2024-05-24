                /* Tarea clase 11*/


/* Ejercicio 1 */

var helado = 1;
var topping = prompt("Ingrese su sabor de topping");
var precio;
let precioFinal;

if ( topping = "oreo") {
    precio = 10;
} else if (topping == "kitkat"){
    precio = 15;
} else if (topping = "kinder"){
    precio = 25;
} else {
    console.log('No tenemos ese topping');
}

precioFinal = helado + precio;

console.log("El helado cuesta $" + precioFinal);




/* Ejercicio 2 */


let pedido = prompt("Elija carne, pescado o verdura del menu.");
var bebida;

switch (pedido) {
    case "carne": 
        bebida = "Vino tinto";
        console.log("Vino tinto")  
        break;
    case "pescado":
        bebida = "Vino blanco";
        console.log("Vino blanco")
        break;
    case "verdura":
        bebida = "Agua";
        console.log("Agua")
        break;
    default:
        console.log("Elija carne, pescado o verdura");
        break;
}

console.log("Usted eligio " + pedido +", se le ofrecera " + bebida); 



/* Ejercicio 3 */
let arrayDeFrutas = ["uva", "manzana", "naranja", "limon", "frutilla"];


console.log("array principal");
for (let index = 0; index < arrayDeFrutas.length; index++) {
    console.log(arrayDeFrutas[index]);
    
}
arrayDeFrutas.push("banana");

console.log("array con elemento nuevo");
for (let index = 0; index < arrayDeFrutas.length; index++) {
    console.log(arrayDeFrutas[index]);    
}






/* Ejercicio 4 */
var numero = 0;

while (numero<11){
        console.log(numero + " es menor que 11")
        numero++
    }



