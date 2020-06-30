// numerico
var edad = 19;
var peso = 78.5;
//imprimir variables y texto con tildes invertidas
document.write(`Tu edad es ${edad} y tu peso ${peso} <br>`);
// <br> para dar salto de línea
//string
var nombre = "Enrique";
var apellido = "Davila";
// concatenar
document.write(nombre + " " + apellido); 
document.write("<br>");
// array - arreglo
var amigos = ["Juan","Luis","Pedro"];
//imprimir de acuerdo a la posición
document.write(amigos[1]);
document.write("<br>")
// object
var objeto = {
    color : "Negro",
    tamano : 12
}
// mostrar object.propiedad
document.write(objeto.color);
document.write("<br>")

//boolean
var boleano = true;
document.write(boleano);
document.write("<br>")

//undefined
var auto;
document.write(auto);
document.write("<br>")

// null
var num2 = 10;
var num2 = null;
document.write(num2);
document.write("<br>")
//NaN
var texto2 ="juan";
document.write(texto2 * 2);