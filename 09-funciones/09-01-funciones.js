/*
NOTA: una función es un conjunto de instrucciones que realizan una tarea o calcula un 
valor, pero para que un procedimiento califique como función, debe tomar alguna en-
trada y devolver una salida donde hay alguna relación obvia entre la entrada y la 
salida.

Se puede decir que una función es un bloque de código o un conjunto de instrucciones 
que realizan una tarea específica y que puede reutilizarse a voluntad y son fundamenta-
les en JavaScript.

se le pueden asignar valores a las funciones antes y después de ejecutarlas cuando los
valores están antes de la función eso se llama hoisting. 

Por ejemplo:
*/

//Forma antigua de usar funciones
//Hoisting
miFuncion(3,3);


function miFuncion(a,b){
    console.log("Sumar " + (a + b));
}

miFuncion(2,3);

//Forma correcta de utilizar las funciones
function otraFuncion(a,b){
    return a + b;
}

let resultado = otraFuncion(2,5);
console.log(resultado);

//Declaracion de funcion de tipo expresion
let x = function (a,b) { return a + b}
resultado = x(1,2);
console.log(resultado)