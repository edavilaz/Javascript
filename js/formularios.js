var formulario = document.getElementsByName("formulario")[0];
// se pone el 0 para que traiga el primer elemento.
var elementos = formulario.elements;
var boton = document.getElementById("btn");
// se utiliza e como parámetro para ver el preventDefault
var validarNombre = function(e){
    if (formulario.nombre.value == 0){
        alert ("Completa el campo Nombre");
        e.preventDefault();
    }
};
// con esta se valida si alguno de los radio están seleccionados
var validarRadio = function(e){
    if (formulario.sexo[0].checked == true ||formulario.sexo[1].checked == true ){
       } else {
    alert("Debes escoger tu sexo");
    e.preventDefault();
    }
};

var validarCheckbox = function(e){
    if (formulario.terminos.checked == false) {
        alert("Acepta los términos");
        e.preventDefault();
   }
};


var validar = function(e){
    validarNombre(e);
    validarRadio(e);
    validarCheckbox(e);
}; 

formulario.addEventListener("submit", validar);
