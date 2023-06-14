function displayDateClock() {
    //Date obtiene la fecha y hora
    let local = new Date(),
    //extraemos cada dato de la fecha y hora
        getHours = local.getHours(),        
        getMinutes = local.getMinutes(),
        getSeconds = local.getSeconds(),

        getDayWeek = local.getDay(),
        getDayDate = local.getDate(),
        getMonth = local.getMonth(),
        getYear = local.getFullYear();

    //hacemos consulta del documento html para imprimir en pantalla cada dato en su div correspondiente
    let dDate = document.querySelector('.date'),
        dHours = document.querySelector('.hours'),
        dAMPM = document.querySelector('.ampm')
        dMinutes = document.querySelector('.minutes'),
        dSeconds = document.querySelector('.seconds');

    //arreglo de los días de la semana
    let week = [
        "Domingo",
        "Lunes",
        "Martes",
        "Miercoles",
        "Jueves",
        "Viernes",
        "Sabado" 
    ];
    
    //arreglo de los meses del año
    let months = [
        "Enero", 
        "Febrero", 
        "Marzo", 
        "Abril", 
        "Mayo", 
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Diciembre"
    ];

    //Hacemos concatenación de la fecha. getDayWeek y getMonth se imprimen como número, los arreglos son para reemplazar el número por el nombre del día y mes.
    dDate.innerHTML = `${week[getDayWeek].toUpperCase()} ${getDayDate} DE ${months[getMonth].toUpperCase()}, ${getYear}`;

    //Condicional para poder usar AM y PM
    if (getHours >= 12) {
        getHours = getHours - 12;
        dAMPM.innerHTML = 'PM'
    } else {
        dAMPM.innerHTML = 'AM'
    }
    
    //Si hora es cero, entonces se convertirá en 12
    if (getHours == 0) {
        getHours = 12;
    };
    
    //se imprime la hora
    dHours.innerHTML = getHours;
    
    //condicional para sumar un cero delante pero cuando minuto corra del 1 al 9
    if (getMinutes < 10) { getMinutes = '0' + getMinutes };
    dMinutes.innerHTML = getMinutes;

    //condicional para sumar un cero delante pero cuando segundo corra del 1 al 9
    if (getSeconds < 10) { getSeconds = '0' + getSeconds };
    dSeconds.innerHTML = getSeconds;
}
//llamamos la función displayDateClock dentro de la función setInterval y hacemos que el reloj se actualice cada 1 segundo
setInterval(displayDateClock, 1000);