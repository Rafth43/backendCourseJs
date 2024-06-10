let persona = {
    nombre:'Ramon',
    apellido:'Valdes',
    correo:'Rvaldes@gmail.com',
}
//Para agregar un valor al objet
persona.telefono = '123456789';

/*
NOTA: posemos modificar los vares de un elemento de un objeto 
agregando el mismo nombre de variable y colocando un nuevo 
mensaje.

Debemos tener cuidado ya que si agregamos un nombre incorrecto
u otro nombre lo que hará es una adición y no una adecuación.

Por ejemplo: 
*/

persona.telefono = '1598753'

//Para borrar un valor al object

/*
NOTA: Para eliminar un valor al objeto debemos utilizar la fun-
cionalidad de DELETE y luego le indicamos que se va a borrar.
*/

delete persona.telefono;
console.log(persona)