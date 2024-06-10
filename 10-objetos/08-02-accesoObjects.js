/*
Existen varias formas de acceder a un objeto en JavaScript una de las formas
mas comunes de ingresar a las propiedades es con punto (.), es decir, que 
para acceder a las propiedades de los objetos en JavaScript, debemos escribir
el nombre del objeto y el nombre de la propiedad separados por un punto.

y la otra forma es un corchetes ([]) agregando en la parte interior la propiedad
a la que queremos ingresa.

una de las formas de acceder a un arreglo de Js tambien puede ser con un for in
que recorre todo el arreglo y muestra los datos

Por ejemplo
*/

let persona = {
    nombre:'Ramon',
    apellido:'Valdes',
    correo:'Rvaldes@gmail.com',
}
//Forma con punto
console.log(persona.nombre);

//Forma con corchetes
console.log(persona['apellido']);

//Forma con for in
for (const propiedad in persona) {
    //ver que objetos tiene el arreglo
    console.log(propiedad);
    //Ver sus propiedades
    console.log(persona[propiedad]);
}