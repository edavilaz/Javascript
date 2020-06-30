var amigos = ["Carlos", "Cesar", "Alex"];
// para imprimir 
document.write(amigos[0]);
document.write("<br>");

// imprimiría undefined porque no existe nada en la posición 9
document.write(amigos[9]);
document.write("<br>");

// Cambiar un dato específico
amigos[0] ="Arturo";
document.write(amigos[0]);
document.write("<br>");

// Longitud del array
document.write("El tamaño del arreglo es: " +  amigos.length);
document.write("<br>");

// Crear nuevo elemento

amigos[amigos.length] = "Fernando";
document.write(amigos);
document.write("<br>");

//otra forma
amigos.push("Javier", "Ramon","Oscar");
document.write(amigos);
document.write("<br>");
//Eliminar el último elemento
amigos.pop();
document.write(amigos);
document.write("<br>");

// unir dos arreglos en un tercero
amigos2 = ["Luis", "Fabian", "Raul"];
amigos3 = amigos.concat(amigos2);
document.write(amigos3);
document.write("<br>");

// Para cambiar la separación de los elementos, pondremos espacio : espacio
document.write(amigos.join(" : "));
document.write("<br>");

// ordenar un array
document.write(amigos3.sort());
document.write("<br>");
