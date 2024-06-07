let mes =11;

let estacion = "Estación desconocido";

switch (mes) {
    case 1: case 2: case 12:
        if (mes == 1) {
            estacion = "En el mes de "+ mes + " Es invierno"
        }else if(mes == 2){
            estacion = "En el mes de "+ mes + " Es invierno"
        }else if (mes == 12) {
            estacion = "En el mes de "+ mes + " Es invierno"
        }
        break;
    case 3: case 4: case 5:
        if (mes == 3) {
            estacion = "En el mes de "+ mes + " Es Primavera"
        }else if(mes == 4){
            estacion = "En el mes de "+ mes + " Es Primavera"
        }else if(mes == 5){
            estacion = "En el mes de "+ mes + " Es Primavera"
        }
        break;
    case 6: case 7: case 8:
        if (mes == 6) {
            estacion = "En el mes de "+ mes + " Es Verano"
        }else if(mes == 7){
            estacion = "En el mes de "+ mes + " Es Verano"
        }else if(mes == 8){
            estacion = "En el mes de "+ mes + " Es Verano"
        }
        break;
    case 9: case 10: case 11:
        if (mes == 9) {
            estacion = "En el mes de "+ mes + " Es Otoño"
        }else if(mes == 10){
            estacion = "En el mes de "+ mes + " Es Otoño"
        }else if (mes == 11){
            estacion = "En el mes de "+ mes + " Es Otoño"
        }
        break;
    default:
        estacion = "Este mes no existe";
        break;
}

console.log(estacion);