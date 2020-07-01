//DOM - Document Object Model
//Sirve para poder acceder a los elementos más facilmente

// luego s epodran realizar modificaciones a los elementos.
var elementosP = document.getElementsByTagName("p"); 

var segundo = document.getElementById("segundo");

//pasos Creando NOdos al DOM

// 1.CREAR EL ELEMENTO
var elemento = document.createElement("h2");

// 2. CREAR UN NODE DE TEXTO
var contenido = document.createTextNode("Este es un subtítulo");

// 3. AÑADIR EL NODO DE TEXTO AL ELEMENTO
elemento.appendChild(contenido);

// 4. AGREGAR ATRIBUTOS AL ELEMENTO
elemento.setAttribute("align","center");
// 5. AGREGAR EL ELEMENTO AL DOCUMENTO
// antes debemos crear un <div> con id al cual acceder en el html. 
document.getElementById("subtitulo").appendChild(elemento);