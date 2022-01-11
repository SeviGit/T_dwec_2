"use strict"


let frase , numero , fr_ascii , 
fr_encriptada , num_ascii;

let espacio ;


//Función que pide la frase al ausuario e imprime los resultados si la frase es correcta.
function pedir_fr(){

    frase = prompt();

    if(palabras4(frase)){
        //Se usa innerHTML para insertar los resultados en un parrafo mediante su id.
        document.getElementById("par1").innerHTML ='Resultados:';
        document.getElementById("par2").innerHTML ='<b>La frase a encriptar es:</b><br> '+frase;
        document.getElementById("par3").innerHTML ='<b>El mensaje en ASCII:</b><br> '+ convertir();
        document.getElementById("par4").innerHTML ='<b>El mensaje en ASCII sumando el número aleatorio 125:</b><br> '+ sumar_125();
    
    }else{
        alert('La frase debe de tener mínimo 4 palabras')
        document.getElementById("par1").innerHTML = '';
        document.getElementById("par2").innerHTML ='';
        document.getElementById("par3").innerHTML ='';
        document.getElementById("par4").innerHTML ='';
    }
    
    
}


/*Función que verifica que la 'frase' tenga más de 4 palabras contando sus espacios obteniendo sus caracteres uno a uno mediante el meétodo charAt() dentro de un bucle*/

function palabras4(fras){  
    espacio = 0;
    for(let i = 0 ; i < fras.length ; i++){
        if(fras.charAt(i) == ' '){
            espacio++;
        }
    }    
    if(espacio < 3){
        return false;
    }else{
        return true;
    }
}


/*Función para convertir los caracteres de la 'frase' en ASCII mediante el método charCodeAt() y lo vamos concadenando a la variable tipo string 'fr_ascii' mediante el método concat()*/

function convertir(){
    
    fr_ascii='';

    for(let i = 0 ; i < frase.length ; i++){
       
        fr_ascii=fr_ascii.concat(frase.charCodeAt(i));           
    }
    return fr_ascii;

}


//Función que genera un número aleatorio

function num_ale(){

    return Math.round((Math.random()*150)+1);

}

/*Función que suma un número aleatorio(num_ale()) a cada caracter ASCII obtenido  con charCodeAt(), si la suma de los doa es más de 255(caracter más alto de ASCII) se le retará en vez de sumar. el resultado lo vamos añadiendo a un string mediante el método concat()*/

function sumar_125(){
    
    fr_encriptada='';

    for(let i = 0 ; i < frase.length ; i++){

        numero=num_ale();
        num_ascii=frase.charCodeAt(i);

        if((num_ascii + numero) <= 255 ){

            fr_encriptada=fr_encriptada.concat(num_ascii + numero);
        }else{
            fr_encriptada=fr_encriptada.concat(num_ascii - numero);

        }
        
    }
    return fr_encriptada;
}
