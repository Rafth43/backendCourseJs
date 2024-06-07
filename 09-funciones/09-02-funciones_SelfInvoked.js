/*
NOTA:Una expresión autoinvocada se invoca (inicia) automáticamente, sin ser llamada. 
Las expresiones de función se ejecutarán automáticamente si la expresión va seguida 
de ().

Por ejemploo:
*/

(function (a,b){
    console.log('ejecutando la función'+' '+(a+b))
})(2,5);