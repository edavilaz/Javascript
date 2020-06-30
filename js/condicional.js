/*Condicionales
if (condición) {
            sentencias

} else if (condición2) {
            sentencias
} else{
            sentencias
}
operadores

< menor que
> mayor que
<= menor o igual que
>= mayor o igual que
== igual que
!= distinto que

&& y - and
|| o - or

*/

var nombre = "enrique";
var edad = 17;

if (nombre== "enrique" && edad >=40) {
    document.write("Bienvenido " + nombre );
} else if (edad <40 && edad >=18){
    document.write("hola aun eres mayor de edad");

} else {
    document.write ("No podrás ingresar");
}

if (edad ==="17"){
    document.write ("true");
}else{
    document.write ("false porque no es el mismo tipo");
}