// ciclo FOR

for (let i=1; i<=20; i++){
    // si es par imprimirá si

    if (i%2==0){

        document.write("SI" + "<br>");
    } else{
      // si es impar imprimirá no
        document.write("NO" + "<br>");
    }
}

// otro for

var dias = ["Lunes","Martes","Miércoles","Jueves","Viernes","Sábado","Domingo"];

for (i=0; i<dias.length; i++){
    document.write(dias[i]+ "<br>");
}

// WHILE
i=0;
while(i<=10){
    document.write(i + "<br>");
    i++;
}