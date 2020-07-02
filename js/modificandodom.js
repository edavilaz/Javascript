var elemento = document.createElement("li");
var contenido = document.createTextNode("Texto Nuevo");

elemento.appendChild(contenido);

// para llamar al elemento padre deseado

// var padre = document.getElementById("lista");

// otra forma de llamar al elemento padre
//se usa mucho si deseamos incluir a todas las ListeningStateChangedEvent, por ejemplo. 

var padre = document.getElementsByTagName("li")[0].parentNode;

// // incluir el elemento
// padre.appendChild(elemento);

//SI DESEAMOS INSERTAR AL INICIO
var primerelemento = document.getElementsByTagName("li")[0];

padre.insertBefore(elemento,primerelemento);