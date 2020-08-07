//DATE

//   function mostrarFecha(meses,dias)
//   {
//     var num;
//     num=prompt('Ingrese número de mes:','');
//     num=parseInt(num);
//     document.write('Corresponde al mes:'+meses[num-1]);
//     document.write('<br>');
//     document.write('Tiene '+dias[num-1]+' días');
//   }
//   var meses; 
//   meses=new Array(12);
//   meses[0]='Enero';
//   meses[1]='Febrero';
//   meses[2]='Marzo';
//   meses[3]='Abril';
//   meses[4]='Mayo';
//   meses[5]='Junio';
//   meses[6]='Julio';
//   meses[7]='Agosto';
//   meses[8]='Septiembre';
//   meses[9]='Octubre';
//   meses[10]='Noviembre';
//   meses[11]='Diciembre';
//   var dias;
//   dias=new Array(12);
//   dias[0]=31;
//   dias[1]=28;
//   dias[2]=31;
//   dias[3]=30;
//   dias[4]=31;
//   dias[5]=30;
//   dias[6]=31;
//   dias[7]=31;
//   dias[8]=30;
//   dias[9]=31;
//   dias[10]=30;
//   dias[11]=31;
//   mostrarFecha(meses,dias);

//MATH
// var selec=prompt('Ingrese un valor entre 1 y 10','');
//   selec=parseInt(selec); 
//   var num=parseInt(Math.random()*10)+1;
//   if (num==selec)
//     document.write('Ganó el número que se sorteó es el '+ num);
//   else
//     document.write('Lo siento se sorteó el valor '+num+' y usted eligió el '+selec)

//STRING
// var cadena=prompt('Ingrese una cadena:','');
//   document.write('La cadena ingresada es:'+cadena);
//   document.write('<br>');
//   document.write('La cantidad de caracteres son:'+cadena.length);
//   document.write('<br>');
//   document.write('El primer carácter es:'+cadena.charAt(0));
//   document.write('<br>'); 
//   document.write('Los primeros 3 caracteres son:'+cadena.substring(0,3));
//   document.write('<br>'); 
//   if (cadena.indexOf('hola')!=-1)
//     document.write('Se ingresó la subcadena hola');
//   else 
//     document.write('No se ingresó la subcadena hola');
//   document.write('<br>'); 
//   document.write('La cadena convertida a mayúsculas es:'+cadena.toUpperCase());
//   document.write('<br>');
//   document.write('La cadena convertida a minúsculas es:'+cadena.toLowerCase());
//   document.write('<br>'); 


// FORMULARIO
// var contador=0;
//   function incrementar()
//   {
//     contador++;
//     alert('El contador ahora vale :' + contador);
//   }




// function cargar(sueldos){
//     for (var i=0;i<5;i++)
//     {sueldos[i] = parseInt(prompt("Ingresa el sueldo "+(i+1),""));
//     sueldos.push(sueldos[i]);      
//     document.write(sueldos[i]);
//     document.write("<br>");
//     }
// }

// function calcularGastos(sueldos){
//     var suma=0;
//     for (var i=0; i<5;i++){
//         suma = suma + sueldos[i];
//     }
//     document.write (parseInt(suma));
// }


// var sueldos;
// sueldos = new Array(5);
// cargar(sueldos);
// calcularGastos(sueldos); 
