// declaracion
// function saludo(){
//     document.write("Hola que tengas un buen día");
// }

// llamado de la función

// saludo();

// con parámetros

function saludo (nombre){
    document.write ("Hola " + nombre)
}
// llamado con argumento

saludo("Enrique");
document.write("<br>");

// otro ejemplo
function suma (numero1,numero2){
    var num1 = numero1;
    var num2 = numero2;
    return num1+num2;
}
//llamando a la función suma y mostrando en pantalla
document.write( suma(10,20) );
document.write("<br>");

//otra forma

var suma = function(numero1,numero2){
    var numero1 = numero1;
    var numero2 = numero2;
    return numero1 + numero2;
}

document.write("La suma es: " + suma(30,30) );
document.write("<br>");

// otra

function nummaximo(valor1, valor2){
    if (valor1 > valor2){
        return valor1;
    }else {
        return valor2;
    }
}

//llamado a funcion

document.write("El valor Máximo es: "+ nummaximo(1,9));
document.write("<br>");