"use strict"

//Declaración de variables
let ventana ,  move;


function Abrir(){
    
    if(ventana == null){//Creamos la ventana solo si esta no esta creada todavía
        ventana = open("", "ventana"  ,"height=200,width=200,top=150,left=150"); //Creamos la ventana
        ventana.document.write("<h2>Ventana moviéndose</h2>"); //Escribimos en ella
        move=setInterval(Mover,3000); //llamamos a la función Mover cada 3000 milisegundos
    }
}


function Mover(){

    let number1=(Math.random()*199) - 99;  //Con el metodo(Math.random()*199) - 99;  dará un numero entre -99 y 100
    let number2=(Math.random()*199) - 99;
    // usamos los números obtenidos como parámetros y será la cantidad de px que se moverá la ventana
    ventana.moveBy(number1,number2);
    
}

function Parar(){
    
    ventana.document.write("<h2>Ventana parada</h2>");
    clearInterval(move);// Cerramos el intervalo 'move' que creamos en la función Abrir()
}