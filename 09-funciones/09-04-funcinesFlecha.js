/*
NOTA:es una alternativa compacta a una expresión de función tradicional, pero es limitada y 
no se puede utilizar en todas las situaciones. Diferencias y limitaciones: No tiene sus pro-
pios enlaces a this o super y no se debe usar como métodos. No tiene argumentos o palabras 
clave new.

para saber que estamos trabajando con una Arrow function o función de flecha (=>) tenemos que
tener en cuenta que Las Arrow function son de tipo anónimas carecen de nombre, pero pueden ser 
asignadas a una variable. En caso de que la función solamente incluya una sentencia, es posible
obviar las llaves de la función.

Por ejemplo:
*/

const sumarArrowFunction = (a,b) => a + b;
resultado = sumarArrowFunction(2,5);
console.log(resultado);