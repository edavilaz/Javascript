// Variables globales
//Podemos acceder a ellas desde cualquier parte del código

var variableGlobal = "Esta es Global";

var miFuncion = function(){
    // si no le pongo el var es una variable global
    variableLocal = "Esta es una variable Local";
    


    // alert(variableGlobal);
    // variableGlobal = "Esta es variable Global modificada";
    // alert(variableGlobal);
}

miFuncion();
alert(variableLocal);

// Variables locales
// Creadas dentro de una función, sólo se acceden dentro de una función.


// forma de proteger nuestro código creando una función autoinvocada.

(function(){
    //acá iría todo nuestro código 
}())