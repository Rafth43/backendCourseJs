/* EJEMPLOS DE TIPOS DE DATOS EN JS */

//Tipo de dato String
var string = "Rafael";
console.log(string);

//Tipo de dato number
var number = 123456;
console.log(number);

//Tipo de dato Booleano (true/false)
var boolean = false;
console.log(boolean);


//Tipo de dato function
function funcion(){

}
console.log(funcion);


//Tipo de dato Symbol
var simbolo = Symbol("Simbolo");
console.log(simbolo);

//Tipo de dato clase es una funcion
class Persona {
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido 
    };
}
console.log(Persona);

//Tipo de dato undefine
var x;
console.log(x);

//Tipo de dat null el cual es un tipo object
var y = null
console.log(y);

//Tipo de datos array es un object
var autos = ['BMW','AUDI','FORD']
console.log(autos);

var z = '';
console.log(z);

//Tipo de dato objet
var objeto = {
    nombre: 'Rafael',
    numeroTelefono: '04126153004'
}
console.log(objeto);

/* NOTA: Para preguntar el tipo que tipo de dato es una variable
   se cologa el ayudante typeof por ejemplo */

var boolean = false;
console.log(typeof boolean);

/* Asi se puede ver el tipo de dato que almacena la variable*/