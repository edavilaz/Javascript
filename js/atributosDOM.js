var elemento = document.createElement("div");
var padre = document.getElementById("contenedor");

var referencia = document.getElementsByTagName("div")[0];


elemento.setAttribute("class", "azul");
padre.insertBefore(elemento,referencia);

// se puede agregar directamente el atributo

elemento.className="rojo";
