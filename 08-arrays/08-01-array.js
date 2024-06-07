/*
NOTA:Los arrays son objetos similares a una lista cuyo prototipo proporciona méto-
dos para efectuar operaciones de recorrido y de mutación. Tanto la longitud como 
el tipo de los elementos de un array son variables.

los array nos permiten organizar nuestros datos de manera ordenada en la memoria de
la computadora.

Por ejemplo:
*/
//Forma antigua de crear un array
let vehiculos = new Array('BMW', 'MERCEDES BENZ', 'VOLVO');

//Forma actual de crear un array
const autos = ['BMW', 'MERCEDES BENZ', 'VOLVO'];
console.log(autos);

/*
===================================================================================
|                                                                                 |
|                           ACCEDIENDO A ARREGLOS                                 |
|                                                                                 |
===================================================================================


NOTA: En el manejo de arreglos podemos observar que si queremos acceder a un elemen-
to del arreglo necesitamos especificar si espacio en el cual se encuentra el mismo
esto se puede hacer escribiendo el nombre de la variable o constante y delante de el
colocar corchetes

Por ejemplo:
*/

//recorrido de elementos 1 a 1
const carros = ['BMW', 'MERCEDES BENZ', 'VOLVO', 'SUBARU'];
console.log(carros[0]);
console.log(carros[1]);
console.log(carros[2]);

//recorrido de todos los elementos
for(let i = 0; i < carros.length; i++){
    console.log(i + ' : ' + carros[i])
}

/*
===================================================================================
|                                                                                 |
|                           MODIFICACIÓN DE ARREGLOS                              |
|                                                                                 |
===================================================================================

NOTA: el lenguaje nos permite modificar los arreglos luego de que ta están definidos
normalmente esto es utilizado para sustraer los elementos innecesaria que posea una
cadena de caracteres.
*/

const car = ['BMW', 'MERCEDES BENZ', 'VOLVO', 'SUBARU']

for(let i = 0; i < car.length; i++){
    console.log(i + ' : ' + car[i])
}

car [1] = 'MERCEDESBENZ'
console.log(car);

/*
===================================================================================
|                                                                                 |
|                      ADICIÓN DE ELEMENTOS EN ARREGLOS                           |
|                                                                                 |
===================================================================================

NOTA : Para ingresar elementos a un arreglo debemos utilizar función propia del len-
guaje para esto existe la función .push.

Por ejemplo:
*/

car.push('AUDI', 'FORD', 'TOYOTA');
console.log(car);

//Otra forma de agregar elementos a un arreglo
car[7] = 'HUMMER';
console.log(car)


/*
NOTA: Debemos tener muy en cuenta la posición donde agregamos elementos ya que el 
lenguaje respeta las posiciones y si no se coloca en la posición siguiente el lengua-
je proporciona los espacios en blanco en las celdas correspondiente.

Por ejemplo:
*/

car[10] = 'FERRARI'
console.log(car)

/*
===================================================================================
|                                                                                 |
|                       CONTEO DE ELEMENTOS EN ARREGLOS                           |
|                                                                                 |
===================================================================================

NOTA: Para contar los elementos a un arreglo debemos utilizar función propia del len-
guaje para esto existe la función .length.

Por ejemplo:
*/

console.log(car.length +' '+ car);

/*
NOTA: Para saber si una variable  constante es un arreglo podemos utilizar una función
propia de de Js la cual es pregunta si la variable es un arreglo y si la misma si es 
devuelve el valor de TRUE.

también se puede utilizar la función de instanceof que es muy parecida a typeof la cual
valida si la variable es arreglo agregando al final array.

Por ejemplo:
*/

//cuando es un arreglo
console.log(Array.isArray(car));

//cuando no es un arreglo
console.log(Array.isArray());

//preguntando con instanceof para saber si es arreglo
console.log(car instanceof Array);

console.log(0 instanceof Array);