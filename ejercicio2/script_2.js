"use strict"

/* Al crear un objeto 'Date' JavaScript generará una fecha de tipo string de la siguiente forma:
"Jue 25 nov 2021 10:30:26 GMT + 0100 (hora estándar de Europa central)".
Nosotros creamos un objeto 'Date' dentro de un bucle for que valla cambiando el año de 2021 hasta 2100 y lo comparamos
 con el string que contenga 6 de diciembre de cada año" */

 let res='Resultado:';

function december_6(){
    
    for(let i =2021 ; i < 2100 ; i++){
    
        if( new Date(i,11,6)=='Mon Dec 06 '+ i +' 00:00:00 GMT+0100 (hora estándar de Europa central)'){               
            res +='<p>En el año '+ i +' el 6 de Diciembre es Lunes</p>';//Creamos un párrafo nuevo por cada resultado
            document.getElementById("par1").innerHTML = res;//Insertamos los párrafos en el documento HTML

        }
    }
}   
     