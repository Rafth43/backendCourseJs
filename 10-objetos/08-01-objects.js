/*
Un objeto es una colección de propiedades, y una propiedad es una asociación
entre un nombre (o clave) y un valor. El valor de una propiedad puede ser 
una función, en cuyo caso la propiedad es conocida como un método.

Por ejemplo:
*/
//Forma tradicional de crear un objeto
let persona = {
    nombre: 'Raulin',
    apellido: 'saabedra',
    correo: 'Raulisaa@gmail.com',
    edad: 50,
    nombreCompleto: function () {
        //Para acceder a las propiedades de mi objeto usamos el método this.
        return this.nombre +' '+ this.apellido;
    },
}
console.log(persona.nombre, persona.apellido);
console.log(persona.nombreCompleto());

//Forma poco común con new Object();
let persona2 = new Object();
persona2.nombre = 'Ramon'
persona2.altura = 1.25
persona2.direccion = 'Guatire'
persona2.telefono = 41261888888
console.log(persona2.altura);