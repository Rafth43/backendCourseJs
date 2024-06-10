/*
Los parámetros y argumentos son los que utilizamos para referirnos a los valores 
que “pasamos” entre paréntesis en una función.

una función puede tener cero o más parámetros. Así, los parámetros son los nombres 
que aparecen en la definición de una función. Por su parte, los argumentos son los 
valores que le pasamos (y que, por tanto, recibe) una función.

NOTA: Una manera de saber que contiene cada parámetro podemos usar la función de 
arguments que espera como parámetro un arreglo [] y la posición

Por ejemplo
*/
let sumar = function (a, b) {
    console.log(arguments[0]);
    console.log(arguments[1]);
    return a + b
}

resultado = sumar(3,2);
console.log(resultado);

/*
NOTA: También podemos definir los valores de los parámetros antes de utilizarlos
para asi generar de manera mas eficaz lo que queramos hacer dentro de nuestra
función.
*/

let resta = function (a=2, b=1) {
    return a - b
}
//Si ingresamos argumentos se sobre escriben los valores
resultado = resta(/*3,5*/);
console.log(resultado);