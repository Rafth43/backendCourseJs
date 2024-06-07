/*
NOTA: Un switch en js es una instrucción de flujo de control que prueba el valor 
de una expresión contra varios casos. La computadora revisará la sentencia switch 
y verificará la igualdad estricta === entre el caso case y la expresión.

donde su estructura esta compuesta por la sentencia SWITCH y por un valor el cual
se le asigna para poder luego comprobar el resultado del mismo, es decir, lo llama-
mos el SWITCH de una forma que lo podamos comprobar.

dentro de las sentencias SWITCH tenemos los CASE y sus respectivos BREAK  y los DEFAULT
donde los CASE nos ayudan a definir o identificar los pasos que verificara la aplica-
cion para obtener los valores, siempre y cuando el valor corresponda al CASE. Dentro
de los CASE también se puede agregar varias lineas de código o ejecutar funciones.

Los BREAK nos ayuda a detener la ejecución en cada caso.

Los DEFAULT es donde entrara la ejecución del código si no coinciden ninguno de los 
CASE existentes. 

Por ejemplo:
*/

let numero = 3;

let numeroTexto = "Valor desconocido";

switch (numero) {
    case 1:
        numeroTexto = "Este es su numero " + numero;
        break;
    case 2:
        numeroTexto ="Este es su numero " + numero
        break;
    case 3:
        numeroTexto ="Este es su numero " + numero
        break;
    case 4:
        numeroTexto ="Este es su numero " + numero
        break;

    default:
        numeroTexto = "Este no es su numero, el numero que ingreso es: " + numero
        break;
}

console.log(numeroTexto);

/* NOTA: Algo a tener en cuenta es que si los BREAK no están bien especificados y 
descritos en la sentencia ocurrirán problemas de ejecución ya que si un break no 
esta bien definido puede hacer que la sentencia SWITCH continue hasta su siguiente 
BREAK y si n posee BREAK los CASE terminara en el DEFAULT 

Por ejemplo:
*/


let letra = 'a';

let texto = "Esta es su letra";

switch (letra) {
    case 'a':
        texto = "Esta es su letra " + letra;

    case 'b':
        texto = "Esta es su letra " + letra;

    case 'c':
        texto = "Esta es su letra " + letra;
        break;
    case 'd':
        texto = "Esta es su letra " + letra;
        break;
    case 'e':
        texto = "Esta es su letra " + letra;
        break;
    default:
        texto = "La letra que ingreso no se encuentra en nuestros registros, su letra es " + (letra);
        break;
}

console.log(texto);

/* 
Con este ejemplo podemos notar que la ejecución del código continúa hasta el caso
C, ya que los casos A y B no tienen BREAK, mientras que el caso C sí lo tiene. Por 
lo tanto, la ejecución del código se detiene en ese punto. Si no hubiera ningún BREAK, 
la ejecución del código continuaría y terminaría en la sección DEFAULT.

Es importante tener en cuenta los BREAK para evitar que se generen bucles o que se 
pierda el control del código cuando se utiliza un SWITCH.
*/