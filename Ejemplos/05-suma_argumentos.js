/*
SUMAR TODO LOS ARGUMENTOS DE UNA FUNCIÓN
*/

let resultad = sumarTodo(1, 2, 3, 4, 5, 6, 7, 8);

function sumarTodo() { 
    let suma = 0;
    for (let i = 0; i < arguments.length; i++) {
        suma += arguments[i];
    }
    return suma;
}

console.log(resultad);