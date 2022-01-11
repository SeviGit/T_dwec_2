"use strict"

const cadena='JavaScript es un lenguaje scripting';
let longitud;


    function mostrar(){
        document.getElementById('long').innerHTML = long(cadena);
        document.getElementById('scri').innerHTML = scri(cadena);
        document.getElementById('leng').innerHTML = extraer(cadena);
        document.getElementById('first').innerHTML = first(cadena);
        document.getElementById('end').innerHTML = end(cadena);
        document.getElementById('may').innerHTML = may(cadena);
        document.getElementById('min').innerHTML = min(cadena);
        document.getElementById('replace').innerHTML = replace(cadena);
        document.getElementById('eliminar').innerHTML = eliminar(cadena);
        document.getElementById('eee').innerHTML = eee(cadena);
        document.getElementById('numero').innerHTML = numero();
        document.getElementById('ale').innerHTML = ale();
        document.getElementById('peque').innerHTML = peque();
        
    }

/*1. Mostrar la longitud de la frase. */

    //Se usa la prpiedad .length
    function long(cad){      
        return 'La frase tiene una longitud de ' + cad.length ;
    }
    
/*2. Mostrar en que posición empieza la palabra scripting. */

    //Usamos el método indexOf() y como parámetro 'scripting'
    function scri(cad){      
        return 'Empieza en la posición ' + cad.indexOf('scripting');
    }
    
/*3. Extraer en una variable, la palabra lenguaje. */   
    
    //Con el método substring()le damos como paramatro los indices de donde empieza y acaba el string 'lenguaje'
    function extraer(cad){
        let leng = cad.substring(17, 25);
        return leng;
    }
    
/*4. Mostrar la primera posición de la letra "p". */ 
    
    //Usamos el método indexOf() y como parámetro 'p'
    function first(cad){
        return 'La primera posición de p es ' + cad.indexOf('p');
    }
    
/*5. Mostrar la última posición de la letra "p". */
    
    //Usamos el método LastindexOf() y como parámetro 'p'
    function end(cad){
        return 'La última posición de p es ' + cad.lastIndexOf('p');
    }

 /*6. Mostrar la frase en mayúsculas. */

    //Usamos método toUpperCase().
    function may(cad){
    return cad.toUpperCase();
    }

 /*7. Mostrar la frase en minúsculas. */

  //Usamos método toLowerCase().
    function min(cad){
        return cad.toLowerCase();
    }

 /*8. Reemplazar la palabra "scripting" por "en entorno cliente". */

    //Al métod replace() le damos como parámetro la parte que queremos quitar por la parte que queremos introducir
    function replace(cad){
    return cad.replace('scripting','en entorno cliente')
    }
    
/*9. Eliminar todos los espacios en blanco de la frase.*/

    //Con el método replace() y una expresión regular que se refiere al espacio en blanco, lo cambiamos por una cadena vacia.
    function eliminar(cad){
    return cad.replace(/\s+/g, '');
    }

/*10. Eliminar todas las e tanto mayúsculas como minúsculas.*/
    
    //Con el método replaceAll() le pasamos como parametro e y E, y lo cambiamos por una cadena vacia.
    function eee(cad){
        let res = cad.replaceAll('e' , '');
        res = res.replaceAll('E' , '')
        return res;
    }

/*11.  Mostrar el redondeo al número más cercano del 50.49*/

    function numero(){
        return Math.round(50.49);
    }

/*12.  Mostrar un número aleatorio entre 225 y 550.*/

    // Math.randon() * (max - min) + min; Retorna un número aleatorio entre min (incluido) y max (excluido)
    function ale(){
        let num= Math.random() * (550 - 224) + 224;
        //Lo podemos redondear con Math.round()
        return Math.round(num);
    }

/*13.  Mostrar el número más pequeño de ( 34, 56, -3, -24). */

//Usamos el método Math.min()
function peque(){
    return Math.min( 34, 56, -3, -24);
}