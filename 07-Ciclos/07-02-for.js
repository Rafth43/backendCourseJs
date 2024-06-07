/*
NOTA: La declaración for...of crea un bucle que se repite sobre objetos iterables 
(incluidos Array , Map , Set , objetos arguments y así sucesivamente), invocando 
un bucle de iteración personalizado con declaraciones que se ejecutarán para el 
valor de cada distinta propiedad, es decir, que permite repetir una instrucción o 
una instrucción compuesta un número especificado de veces.

Un for se compone de una variable que la podemos inicializar en el numero que queramos

Un indice el cual incrementara o disminuirá dependiendo de la instruction

Una condición para que el for tenga un final

por ejemplo:
*/

//For sin asignación 
for (let i = 0; i < 3; i++) {
    console.log(i);
}

//For con asignación de condicionales
for (let contador = 0; contador <= 10; contador++) {
    if (contador % 2 == 0) {
        console.log(contador +" Es par");
    }else{
        console.log(contador + " Es impar");
    }
}

/*
NOTA: En los ciclos de for también se puede utilizar BREAK para detener la iteración
del mismo y asi hacer que itere hasta que se cumpla una condición o hasta que se
requiera.
*/

for (let iteraciones = 0; iteraciones <= 10; iteraciones++) {
    if (iteraciones % 2 == 0) {
        console.log(iteraciones +" Es par");
        break;
    }else{
        console.log(iteraciones + " Es impar");
    }
}

/*
Se puede denotar que el for o la condición se detuvo en 0 ya que itero solo una vez
antes de llegar a break y da como resultado el primer resultado de la comparación.
*/

/*
NOTA: La sentencia CONTINUE puede incluir una etiqueta opcional que permite al progra-
ma saltar a la siguiente iteración del bucle etiquetado en vez del bucle actual. En 
este caso, la sentencia CONTINUE necesita estar anidada dentro de esta sentencia etiquetada.
*/

for (let iteracion = 0; iteracion <= 10; iteracion++) {
    if (iteracion % 2 !== 0) {
        console.log(iteracion +" Es par");
        continue;
    }
    console.log(iteracion);
}