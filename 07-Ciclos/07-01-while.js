/* 
NOTA: El bucle WHILE es otra estructura de control de flujo, concretamente lo 
que hace es repetir un código mientras dure una determinada condición, es decir,
crea un bucle que ejecuta una sentencia especificada, hasta que la condición de 
comprobación se evalúa como falsa.

Se puede decir que el bucle WHILE se utiliza para hacer algo repetidamente, bajo 
unas condiciones específicas, sin saber cuantas veces se repetirá.

Existen dos tipos de WHILE, esta el WHILE y el DO-WHILE

La estructura repetitiva DO-WHILE es aquella en que el cuerpo del bucle se repite 
mientras que se cumple una determinada condición. En esta estructura, la condición 
del ciclo se evalúa al final, por lo que siempre se ejecutarán las instrucciones 
del ciclo por lo menos una vez.

Por ejemplo:
*/
//CICLO WHILE
let contador = 0;

while (contador < 3) {
    console.log(contador);
    contador++;
}

//CICLO DO-WHILE
let numeracion = 0;

do{
    console.log(numeracion);
    numeracion++;
}while (numeracion < 3)
    console.log(numeracion);