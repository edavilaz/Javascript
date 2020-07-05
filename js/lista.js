//este tipo de código se utiliza para proteger nuestro código


(function(){

    // variables

var lista = document.getElementById("lista"),
tareaInput = document.getElementById("tareaInput")
btnNuevaTarea = document.getElementById("btn-agregar");
// Funciones
 var agregarTarea = function () {
    var tarea = tareaInput.value;
    var nuevaTarea = document.createElement("li");
    var enlace = document.createElement("a");
    var contenido = document.createTextNode(tarea);

// verificar si se escribió algo en tarea (input)
    if (tarea === "") {
        tareaInput.setAttribute("placeholder", "Agrega una tarea válida");
        tareaInput.className = "error";
        return false;
    }
    //AGREGAMOS EL CONTENDIDO AL ENLACE
        enlace.appendChild(contenido);
    // AGREGAMOS EL ATRIBUTO HREF
        enlace.setAttribute("href","#");
    // AGREGAMOS EL ENLACE EN LI (nuevaTarea)
        nuevaTarea.appendChild(enlace);
    // agregamos la nuevatarea a la lista
        lista.appendChild(nuevaTarea);
    // limpiar el input luego d eagregar la tarea
        tareaInput.value = "";
    
    for (i=0;i <lista.children.length; i++){
        lista.children[i].addEventListener("click",function(){
            this.parentNode.removeChild (this);
        });
    }

};
 var comprobarInput = function () {
    tareaInput.className = "";
    tareaInput.setAttribute ("placeholder", "Agrega tu Tarea");
};



var eliminarTarea = function () {
    this.parentNode.removeChild(this);
};

// eventos

// Agregar tarea
btnNuevaTarea.addEventListener("click", agregarTarea);


// Comprobar Input
tareaInput.addEventListener("click",comprobarInput);


// Borrando elementos de la lista
//para acceder a los ellemntos de la lista y eliminar el que sea señalado (click)
for (let i = 0; i < lista.children.length; i++) {
    lista.children[i].addEventListener ("click", eliminarTarea);
  
}

}());