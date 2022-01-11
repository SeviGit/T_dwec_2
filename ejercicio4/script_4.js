"use strict"
let cat1,cat2,hipo,ventana;
var p='';


//Función principal, los verificamos y llamamos a las demás funciones
function Pitagoras(){
    let i=true;
    
    while(i==true){
    cat1= prompt('Introduzca el cateto 1');
    cat2= prompt('Introduzca el cateto 2');

    
    
    if(cat1.match(/^[0-9]*$/) && cat2.match(/^[0-9]*$/)){
   
        hipo=calc_hipo(cat1,cat2);
        
        mostrar(cat1,cat2,hipo);
        
   
    }else{
        alert('Los daos tienen que ser números enteros');
    }

    i=confirm('Desea volver a calcular??');
}
}


function comprobar(cat1,cat2){

    if(sNaN(cat1)){
        return true
    }else{
        return false;
    }

}


function mostrar(cat1,cat2,hipo){
    p +='<p>La hipotenusa de los cateto1= '+cat1+' y cateto2= '+cat2+' es '+hipo+'</p>';
    document.getElementById("par1").innerHTML = p;
    
}

function calc_hipo(cat1,cat2){
    return Math.sqrt(Math.pow(cat1,2) + Math.pow(cat2,2));
}

