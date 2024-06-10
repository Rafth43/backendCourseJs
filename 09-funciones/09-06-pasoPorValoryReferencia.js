/*
Hay dos formas comunes de pasar parámetros a funciones en programación: por valor, 
que implica que si se pasa una variable sus cambios sólo son conocidos dentro de la 
función, o por variable, que implica que si se pasa una variable ésta puede ser modi-
ficada por la función y sus cambios ser conocidos fuera de la función.

Por ejemplo:
*/

//Paso por valor
let x = 10;

function cambiarValor(a) {
    a = 20;
}
cambiarValor(x);
console.log(x);

//Paso por referencia
const persona = {
    nombre: "Pedro",
    apellido: "Perez"
}

function cambiarValorObjeto(p1) { 
    p1.nombre = 'Ramon';
    p1.apellido= 'Chicuaco';
}

cambiarValorObjeto(persona);

console.log(persona); 