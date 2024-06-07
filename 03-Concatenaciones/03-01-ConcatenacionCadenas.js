//Forma normal de concatenacion de string

var nombre = 'Rafael';
var apellido = 'Brito';

var nombreCompleto = nombre+ ' ' +apellido;

console.log(nombreCompleto);

//Tambien se puede concatenar asi

var nombreCompleto2 = 'Rafael' + ' ' + 'Brito';
console.log(nombreCompleto2);

/*EJEMPLOS DE CONCATENACIÓN CON NÚMEROS*/

/* NOTA: Para concatenar numbers con string es necesario tener en cuenta 
que JS lee los parámetros de izquierda a derecha por ejemplo si se colo-
ca un numero al inicio del elemento JS interpreta como number */ 
var x = 1 + 2 + ' ' + 'Rafael';
console.log(x);

/* Si se coloca un string JS leerá la variable como string y no generara una
suma si no una concatenación de elementos */
var x = 'Rafael' + ' ' + 2;
console.log(x);


/* Pero si queremos generar una sumatoria sabiendo que ya JS interpreto el ele-
mento como un string encerramos los números entre paréntesis para que se genere
la suma y no una concatenación*/

var x = 'Rafael' + ' ' + (2+1);
console.log(x);
