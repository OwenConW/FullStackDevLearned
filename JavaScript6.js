"REAPL" // LEE, EVALUA, IMPRIME, COMIENZA DE NUEVO

// JavaScript trata a las funciones como FIRST CLASS, es decir que las funcines se pueden pasar como argumentos a otras funciones, retornarlas como resultado de una funcion y guardarlas en var u 
// otra estructura de datos

"CALLBACKS" // es cuando pasamos como argumento una funcion a otra funcion

function hola(usuario){
    return("hola " + usuario +"!");
}

function adios(usuario){
    return("adios " + usuario + "!")
}

function crearsaludo(usuario, cb){ // el cb (call back/function dentro de una function) no se pasa invocandola, es decir se pasa function, no functio()
    return(cb(usuario));
}

crearsaludo("Owen", adios) // = "adios owen!"

crearsaludo("Owen", hola) // = "hola owen!"

// puedo invocar la funcion en los parametros de otra funcion, o incluso declarar una funcion en los parametros de la misma, los dos casos el resultado es igual:

crearsaludo("Toni", function saludar(usuario){
    return("Hola " + usuario);
})

"CALLBACKS Y ARRAYS"
// metodo del prototipo array "forEach()" ejecuta la funcion indicada una vez por cada elemento del array

// cuando hacemos un callback, NUNCA, la funcion pasada como parametro no tendra parametros. PARAMETROS en forEach():

"forEach()"//no retorna nada

"currentValue" // El elemento actual siendo preocesado en el array (cada elemento del array)

"index" // El indice del elemento actual siendo preocesado en el array

"array" // El vector en el que forEach() esta siendo aplicado (todo el arreglo)

"EJEMPLO:" //Supongamos que queremos invocar una funcion en todos los elementos los elementos de un arreglo (console.log de cada alumno)

var alumnos = ["mati", "leo", "tincho", "emi", "jimmy", "franco"];

// sin callback

for(var i = 0; i < alumnos.length; i++){         // programacion imperativa
    console.log(alumnos[i]);
}

//con callback

alumnos.forEach(function(elemento, indice){     // programacion declarativa
    console.log(elemento);
})

//-------------------------

"map()"//si retorna (arrays)

//Ejemplo:

var numbers = [1, 5, 10, 15];
var doubles = numbers.map(function(x){
    return(x * 2);
})

doubles // = [2, 10, 20, 30]

//------------------
var alumnos = ["mati", "leo", "tincho", "emi", "jimmy", "franco"];

String.prototype.capitalize = function(){
    return(this.charAt(0).toUpperCase() + this.slice(1)); 
}   // El metodo .toUpperCase() se utiliza para convertir los caracterteres de un string a MAYUSCULA
    // El metodo .charAt() se utiliza para devolver el caracter de un string indicado en una nueva string
    // El metodo .slice() toma un “trozo” de un array, indicado por un índice de inicio y un índice final 
    //(no incluido) Slice no modifica el array original y hace una copia “superficial” con lo que si el array
    // contiene referencias a objetos, slice no clonará esos objetos, sino solo la referencia.
    // los parametos numericos que indicamos son la porcion que se eliminara, el segundo numero (el final) no esta incluido.
    // o sea que si ponemos en un array .slice(1) solo sacara el indice 0, ya que abarcaria de 0-1 pero el 1 no esta incluido.
    // si tuviera var nombres = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa', "owen", "pablo"]; y quisiera dejar solo a ana y vanesa
    // pondrai nombres.slice(3,5)

    
// CON CALLBACKS
var nuevoAlumnos = alumons.map(function(elemento, indice){
    return(elemento.capitalize());
})

// SIN CALLBACKS
var nuevoarray = [];
for(var i = 0; i < alumnos.length; i++){
    nuevoarray.push(alumnos[i].capitalize());
}

"REDUCE()"

// Ejecuta una funcion reductora sobre cada elemento de un array y devuelve un UNICO valor

// La funcion reduce recibe 4 argumentos

"Acumulador (acc)" 

"Valor Actual (cur)"

"Indice Actual (idx)"

"Array (src)"

var nums = [1, 2, 3, 4, 5, 6, 7];

//sin callbacks

var suma = 0;
for(var i = 0; i < nums.length; i++){
    suma = suma + nums[i];
}

//con callbacks

var sumaReduce = nums.reduce(function(acumulador, elemento){
    return(acumulador + elemento);
}, 0);
// el 0 es el segundo parametro, que es el valor con el que el primer parametro (la function) va a usar como primer parametro, en este caso acumulador que seria = 0

//   var sumaReduce = nums.reduce(function(acumulador, elemento){
//      return(acumulador + elemento);
//   }, 0);
//                 |
//                 |
//                 V
//
//        acumulador = 0;
//        return 0 + 1;  -----> acumulador
//        acumulador = 1;
//        return 1 + 2; ------> acumulador
//        acumulador = 3;
//        return 3 + 3; ------> acumulador
//        acumulador = 6
//   (con cada elemento del array)
//   hasta retornar un unico valor (acumulador)

// si quisiera multiplicar, deberia ser 

var sumaReduce = nums.reduce(function(acumulador, elemento){
    return(acumulador * elemento);
}, 1); // <---- se pone uno porque si no pongo nada de segundo parametro o pongo 0, que es lo mismo, siempre retornara 0



