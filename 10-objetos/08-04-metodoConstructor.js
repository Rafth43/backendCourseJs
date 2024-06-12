/*
Un método constructor es una función especial que crea una instancia de la clase. 
Normalmente, los métodos constructores aceptan argumentos de entrada para asignar 
los datos almacenados en las propiedades y devolver un objeto inicializado.

Por ejemplo:
*/


function Persona(nombre, apellido, correo) { 
    this.nombre     = nombre;
    this.apellido   = apellido;
    this.correo     = correo;
    //Tambien podemos agregar metodos a nuestro constructor
    this.nombreCompleto = function() {
        return this.nombre + ' ' + this.apellido;
    }
}

/*
NOTA: Podemos reutilizar los objetos construidos ingresandolos en variables diferentes
para que podamos utilizar sus valores.
*/


let padre = new Persona('Roberto', 'Azuage', 'Aazuage@gmail.com');
console.log(padre);
console.log(padre.nombreCompleto());

let madre = new Persona('Juana', 'Quintanilla', 'Jquintanilla@gmail.com');
console.log(madre);
console.log(madre.nombreCompleto());

/*
NOTA: 
*/

/*
NOTA: Si necesitamos agregar a nuestro constructor parámetros adicionales podemos hacerlo 
de la forma común llamando a la variable y concatenándole con un punto (.) el valor nuevo
o el valor a actualizar.

Por ejemplo:
*/

padre.nombre = 'Aurelio';
padre.telefono = 4125648522;
console.log(padre);



