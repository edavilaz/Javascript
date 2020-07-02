var elemento = document.createElement("li");
var contenido = document.createTextNode("Texto Nuevo");

elemento.appendChild(contenido);

// para llamar al elemento padre deseado

// var padre = document.getElementById("lista");

// otra forma de llamar al elemento padre
//se usa mucho si deseamos incluir a todas las ListeningStateChangedEvent, por ejemplo. 

// var padre = document.getElementsByTagName("li")[0].parentNode;

// // // incluir el elemento
// // padre.appendChild(elemento);

// //SI DESEAMOS INSERTAR AL INICIO
// var primerelemento = document.getElementsByTagName("li")[0];

// padre.insertBefore(elemento,primerelemento);

// modificaciones innerHTML y textContent
// buscar el primer elemento por id
// var primerelemento = document.getElementById("primero");

// modificando el texto con innerHTML
// primerelemento.innerHTML = "Nuevo texto <b>dolor</b>"; 

// // modificando el texto con textContent
// primerelemento.textContent = "Nuevo texto <b> dolor </b>";

//Reemplazando el NODO

//buscamos elemento padre para reemplazarlo
// var padre = document.getElementsByTagName("li")[0].parentNode;

// var primerelemento = document.getElementsByTagName("li")[0];
// padre.replaceChild (elemento,primerelemento);

// Eliminar un elemento

//buscamos elemento padre
var padre = document.getElementsByTagName("li")[0].parentNode;
var primerelemento = document.getElementsByTagName("li")[0];
padre.removeChild (primerelemento);

