/* 
NOTA: Las aplicaciones JavaScript se componen de sentencias con una sintaxis 
propia. Una sentencia puede estar formada por múltiples líneas. Puede haber 
varias sentencias en una sola línea si separamos cada una de las sentencias 
por un punto y coma. No es una palabra clave, sino un grupo de palabras clave.

JavaScript ofrece una variedad de estructuras de control, como estructuras 
block, continue, break, empty, if-else, switch, throw y try catch, que 
permiten controlar el flujo de ejecución en un programa.

Block
    Un bloque de sentencias se utiliza para agrupar cero o mas sentencias. 
    El bloque se delimita por un par de llaves.

break
    Finaliza la sentencia actual loop, switch, o label y transfiere el 
    control del programa a la siguiente sentencia de la sentencia finalizada.

continue
    Finaliza la ejecución de las sentencias dentro de la iteración 
    actual del actual bucle, y continua la ejecución del bucle con la 
    siguiente iteración.

Empty
    Una sentencia vacía se utiliza para proveer una "no sentencia", aunque 
    la sintaxis de JavaScript esperaba una.

if...else
    Ejecuta una sentencia si una condición especificada es true. Si la 
    condición es false, otra sentencia puede ser ejecutada.

switch
    Evalúa una expresión, igualando el valor de la expresión a una 
    clausula case y ejecuta las sentencias asociadas con dicho case.

throw
    Lanza una excepción definida por el usuario.

try...catch
    Marca un bloque de sentencias para ser probadas (try) y especifica 
    una respuesta, en caso de que se lance una excepción.

por ejemplo:
*/
let condicion = true;

if (condicion) {
    console.log("Es verdadero");
} else {
    console.log("Es falso");
}

switch (3>2) {
    case condicion:
        console.log("Es verdadero");
        break;

    default:
        console.log("Es falso");
        break;
}

/*
NOTA: El if else puede utilizarse sin llaves siempre y cuando sea una
sola linea de código por ejemplo:
 */

if (condicion) 
    console.log("Es verdadero");
else 
    console.log("Es falso");
/*
El código funciona sin problemas pero si agregamos mas lineas de 
código da error al compilar dicha acción. Por ejemplo:
*/

if (condicion) 
    console.log("Es verdadero");
    //console.log("fin de codificación");
else 
    console.log("Es falso");
/* 
Ya que el código espera una declaración o una opción no se le puede 
agregar mas de una acción para solucionar eso se utilizan las llaves.
*/

if (condicion) {
    console.log("Es verdadero");
    console.log("fin de codificación");
}
else {
    console.log("Es falso");
}