//EJERCICIO DE NUMERO PAR E IMPAR UTILIZANDO ( % ) MODULO

let numero = 0;

if (numero % 2 == 0) {
    console.log(numero  + ' ' + "es un numero par");
} else {
    console.log(numero  + ' ' +"es un numero impar");
}

//EJERCICIO DE PREGUNTA SI UNA PERSONA ES MAYOR DE EDAD O NO

let edad = 17

if (edad >= 18) {
    console.log("esta persona es mayor de edad, ya que tiene " + edad +" años");
} else {
    console.log("esta persona es muy joven " + edad +" años");
}

/*
Has hecho una compra y sabes el precio del producto y su iva. Haz un script que te calcule
el precio total que vas a pagar por tu compra.

Te recuerdo que para calcular el total debes sumar al precio el resultado de multiplicar 
precio por el iva y dividir entre 100 
*/
let precio = 200, iva = 21

let precioProducto = precio + (precio * iva / 100);
console.log(precioProducto);