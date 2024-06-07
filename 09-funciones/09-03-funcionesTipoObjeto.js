/*
NOTA: las funciones son objetos. Una buena manera de imaginar funciones es como 
“objetos de acción” invocable. No solo podemos llamarlos, sino también tratarlos 
como objetos: agregar/eliminar propiedades, pasar por referencia, etc.

para saber si una función es un método podemos utilizar la función propia de Js
typeof

por ejemplo:
*/

miFuncion(3,3);

function miFuncion(a,b){
    console.log("Sumar " + (a + b));
}

console.log(typeof(miFuncion));

