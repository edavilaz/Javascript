// timeot
// ejecuta una función una vez que el tiempo se acaba

var saludo = function (){
    alert ("Saludo");
};

// llamado de la función con settimeot
// parametro 1 : función
// parámetro 2: tiempo de espera en milisegundos
// setTimeout(saludo,1000);

// setinterval
// parametro 2 se pasa el delay en milisegundos, cada cuanto se ejecutará la función

setInterval(saludo, 3000);