/*
Una función de callback es una función que se pasa a otra función como un argumento, 
que luego se invoca dentro de la función externa para completar algún tipo de rutina 
o acción.

Por ejemplo:
*/

let persona1 = {
    nombre: 'Pedro',
    apellido: 'Perez',
    nombreCompleto: function () { 
        return this.nombre + ' ' + this.apellido;
    }
}

let persona2 = {
    nombre: 'Pietro',
    apellido: 'Perecinho',
    nombreCompleto: function () { 
        return this.nombre + ' ' + this.apellido;
    }
}


console.log(persona1.nombreCompleto.call(persona2));

console.log(persona1);
