/* 
NOTA: para convertir una cadena de caracteres en un numero
utilizaremos la función Number de JS la cual es una función 
que es un objeto primitivo envolvente que permite 
representar y manipular valores numéricos cómo 37 o -9.25. 
El constructor Number contiene constantes y métodos para 
trabajar con números. Valores de otro tipo pueden ser 
convertidos a números usando la función Number().
 */

let miNumero = "18x";

let edad = Number(miNumero);


if (edad >= 18) {
    console.log("Ya puede votar");
} else {
    console.log("Es muy joven para votar");
}

// Con un operador ternario quedaría de esta manera

let votacion = (edad >= 18) ? "Ya puede votar" : "Es muy joven para votar";
console.log(votacion);

/*
NOTA: En este ejercicio podemos denotar como saber si una variable
es un numero o una cadena de caracteres de manera eficiente.

Si en el string colocamos un numero y una letra nos devolverá
NaN (Not a Number) ya que la cadena de caracteres deja de ser 
number por ejemplo: 
*/

let otroNumero = "18k";
console.log(Number(otroNumero));

if (isNaN(otroNumero)) {
    console.log("no es un numero");
}else{
    if (otroNumero >= 18) {
        console.log("Ya puede votar");
    } else {
        console.log("Es muy joven para votar");
    }
}
