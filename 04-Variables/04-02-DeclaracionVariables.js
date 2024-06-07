/*NOTA: Para generar buenas practicas con las variables
se sugiere utilizar CamelCase donde luego de una pala-
bra la siguiente palabra deberá empezar con la primera 
letra mayúscula.

Por ejemplo:
    nombreCompleto
    caminoFeliz
    segundoNombre
*/

let nombreCompleto = 'Roxlene Vera'
console.log(nombreCompleto);

let x, y;
x = 10, y = 20;
console.log(x + y);

let z = x + y;
console.log(z);

/*NOTA: Las variables en JS son sensibles a mayúsculas
y minúsculas estas mismas pueden llamarse igual pero
poseer un carácter en mayúscula que la vuelve diferen-
te del resto de las variables 

por ejemplo:
    nombreCompleto
    NombreCompleto
    nombrecompleto
*/

let nombreCompleto2 = 'Rafael Brito';
let NombreCompleto2 = 'Roxlene Vera';
let nombrecompleto2 = 'Pietra Yosefca';

console.log(nombreCompleto2);
console.log(NombreCompleto2);
console.log(nombrecompleto2);

/* NOTA: No se pueden definir variables en JS con números
ya que el lenguaje no lo entiende no es un error solo que 
no lo entiende.

por ejemplo:
    1nombreCompleto

La forma correcta de utilizar las variables o signos en las
variables se pueden denotar de la siguiente manera

por ejemplo:
    a1nombreCompleto
    _nombreCompleto
    $nombreCompleto
*/

//let 1nombreCompleto = 'error'
//console.log(1nombreCompleto);


let a1nombreCompleto = 'Pedro Perez';
console.log(a1nombreCompleto);

let _nombreCompleto = 'Juan Reyes';
console.log(_nombreCompleto);


let $nombreCompleto = 'Josefa Camargo';
console.log($nombreCompleto);

/* NOTA: En JS existen nombres de variables que son reservadas
que no se pueden utilizar como nombres de variables normales
como abstrac, boolean, break, if, for etc ya que son utilizadas 
por el lenguajes para trabajar en otros aspectos hay que tener 
mucho cuidado con las palabras reservadas. */

//let break = 10
