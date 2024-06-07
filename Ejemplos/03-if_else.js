/*
Escribe un script que por consola muestre que numero es y 
el numero, condicionado a que sea el proporcionado por 
la variable.
*/

let numero = 2;

if (numero == 1) {
    console.log("Numero " + numero);
} else if (numero == 2) {
    console.log("Numero " + numero);
} else{
    console.log("Numero " + numero);
}

/*
Escribe un script que por consola muestre las estaciones del 
año, correspondiente al mes que se indique en la variable
*/

let mes = 7, estacion ;

if (mes == 1 || mes == 2 || mes == 12) {
    estacion = "Invierno"
} else if(mes == 3 || mes == 4 || mes == 5) {
    estacion = "Primavera"
} else if(mes == 6 || mes == 7 || mes == 8) {
    estacion = "Verano"
} else if(mes == 9 || mes == 10 || mes == 11) {
    estacion = "Otoño"
} else{
    estacion = "Valor incorrecto"
}

console.log(estacion);

/* 
Escribir un script que imprima por consola un mensaje que 
dependerá de la hora si:
son las 6am a 11am imprimir - Buenos Dias
son las 12am a 18am imprimir - Buenas Tardes
son las 19am a 24am imprimir - Buenas Noches
son las 0am a 6am imprimir - Durmiendo
*/

let hora = 18;

if (hora => 6 && hora <= 11 ) {
    console.log("Buenos Dias");
} else if (hora >= 12 && hora <= 18) {
    console.log("Buenas tardes");
} else if (hora >= 19 && hora <= 24) {
    console.log("Buenas noches");
} else{
    console.log("Durmiendo");
}
