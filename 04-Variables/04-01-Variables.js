/*Sintaxis básica de utilización de variables*/

/*NOTA: Existen varias formas de llamar variables en JS
Existen las variables:

variables sin asignación = Son aquellas variables que no
necesitan let var o const para ejecutarse ya que JS las 
toma como variables  como un espacio en memoria siempre
y cuando se le asigne un nombre a la misma (No es una bu
ena practica).

var = Esta sintaxis se puede utilizar para declarar vari-
ables locales y globales, dependiendo del contexto de 
ejecución.

let = Te permite declarar variables limitando su alcance
(scope) al bloque, declaración, o expresión donde se está
usando.

const = son variables de sólo lectura (no confundir con 
inmutables), esto quiere decir que, cuando asignamos una 
variable, el nombre de esta va estar asignada a un punte-
ro en memoria, el cual no puede ser sobrescrito o reasig-
nado.*/

//Variables

// variables sin asignación

nombre = 'Roxlene';
console.log(nombre);

// variable let cambiante de valor

var nombre2 = 'Rafael';
console.log(nombre2);

// variable let cambiante de valor

let nombre3 = 'Rafael';
console.log(nombre3);

//constante o const no cambia su valor

const nombre4 = 'Rafael';
console.log(nombre4);

