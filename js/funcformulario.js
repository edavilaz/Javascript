var suma = function(numero1,numero2){
    // getElementById(id).value sirve para sacar el valor de un elemento en html (id)
    var numero1 = parseFloat(document.getElementById("numero1").value);
 
    var numero2 = parseFloat(document.getElementById("numero2").value);

    var resultado = numero1 + numero2;
    return resultado;

}