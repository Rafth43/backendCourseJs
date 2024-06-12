/*
Los prototipos son un mecanismo mediante el cual los objetos en JavaScript heredan 
características entre sí, utilisando la funcion prototype despues de llamar nuestro
objeto concatenado con punto (.) y luego concatenamos el valor que deseamos agregar.

Por ejemplo:
*/

function Persona(nombre, apellido, correo) { 
    this.nombre     = nombre;
    this.apellido   = apellido;
    this.correo     = correo;
    this.nombreCompleto = function() {
        return this.nombre + ' ' + this.apellido;
    }
}

let hijo = new Persona('Crisol', 'Aurelio', 'Caurelio@gmail.com' );
console.log(hijo);
console.log(hijo.telefono);

Persona.prototype.telefono = '12456359'

let padre = new Persona('Ramon', 'Aurelio', 'Raurelio@gmail.com');
console.log(padre);
console.log(padre.telefono);

let madre = new Persona ('Oriana', 'Rebolledo', 'Orebolledo@gmail.com');
console.log(madre);
console.log(madre.telefono);