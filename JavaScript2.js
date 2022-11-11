"FLUJOS DE CONTROL, OPERADORES LOGICOS, BUCLES FOR"

//expression
1 < 2 // true

1 == 2 // false


//statement (if, else if, for, while)
if(1 > 2 && 2 > 1){
    console.log("uno es menor que dos");
}else {

};

// VERACIDAD

"Datos forzados a verdadeross" // true
true // booleano true
1 // cualquier numero excepto el 0 es true para js, incluso un -10
" " // cualquier string excepto la que esta vacia
{} // un objeto
[] // un array
function a() {} 

"Datos forzados a falsos" // false
false
0
'' // string vacia
undefined
null

//cuando los datos se forzan a booleanos se lo conoce como truthy y falsey
 
//operador de negacion '!'

!true // = false

// ! = not

!!true // = true

// !! = not not

!(2 > 1) // = false

//---------------------------------------


// COMPARACIONES

1 > 2; // false
2 < 3; // true
10 >= 10; // true
100 <= 1; // false


// el tripe === compara el valor y el tipo de dato

1 === 1; // true
1 === '1'; // false
'perro' === 'perro'; // true
'perro' === 'Perro'; // false

// doble igual compara el valor (puede hacer cambios de tipo de dato, ej de numero a string)

1 == '1'; // true
false == 0; //true
'' == 0; // true

1 !== 1; // false
1 !== '1'; // true
'perro' !== 'perro'; // false
'perro' !== 'Perro'; // true

//  !== | !=      no es igual, ej:    1 === 1 = true       1 !== 1  = falso (1 no es distinto a 1)


// OPERADORES LOGICOS

// and/y       &&
// or/o        ||
// not/no      !    



// tabla de la verdad:

//   ___________________________________________
//  |  p    |  q     |  p && q | p || q |  !p   | 
//  | true  | true   |  true   |  true  | false |
//  | true  | false  |  false  |  true  | false |
//  | false | true   |  false  |  true  | true  |
//  | false | false  |  false  | false  | true  |
//  ̣¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨

// si el operador es && (and/y) unicamente cuando ambos sean true arrojara true, en cualquier otro caso siempre sera false
// si el operador es || (or/o) unicamente cuando ambos seas false arrojara false, en cualquier otro caso siempre sera true
// si el operador es ! (not/no) arrojara el resultado opuesto siempre

//   p   |   q       !(!p || !q)       =      <==>    p && q

//   T   |   T         F   |   F      F|T                
//   T   |   F         F   |   T      T|F
//   F   |   T         T   |   F      T|F
//   F   |   F         T   |   T      T|F



"BUCLES FOR" // ¡¡¡¡¡DRY CODDE, DON´T REPEAT YOURSELF, NO TE REPITAS!!!!!

// Tengo que imprimir los numeros del 1 al 10

console.log(1);
console.log(2);
console.log(3);   // MAL! Si bien es una solucion, TE ESTAS REPITIENDO
console.log(4);
//  ... 

for(var i = 1; i <= 10; i++){
    // el bucle for consta de 3 partes
    // var ; condicion de frenado ; paso
    // bloque de codigo que se va a repetir
};
  

// Tengo que imprimir los numeros del 1 al que ingrese el usuario

function imprimir(num){
    for(var n = 1; n <= num; n++){    // hacer tareas repetitivas de manera simple 
        console.log(n);
    };
};

// Imprimir numeros del 1 al que quiera usuarios pero solamente pares

function imprimir2(num){
    for(var a = 1; a <= num; a++){
        if(a % 2 === 0){
            console.log(a);
        };
    };
};

// Imprimir numeros del 1 al que quiera usuarios pero solamente impares

function imprimir3(num){
    for(var i = 1; i <= num; i++){
        if(i % 2 === 1){
            console.log(i);
        };
    };
};

// Imprime numeros del 1 al que el usuario ingrese pero al exeder el 200 finalize la operacion retornando "capacidad maxima alcanzada"

function imprimir4(num){
    for(var i = 1; i <= num; i++){
        console.log(i);
        if( i >= 200){
            return("capacidad maxima alcanzada");
        };
    };
};

// Imprime numero unicamente pares del 1 al que ingrese el usuario sin que se exeda del 500 porque retornara Undefined

function pablo(num){
    for(var i = 1; i <= num; i++){
        if(i % 2 === 0){
            console.log(i);
        };
        if(i >= 500){
            return(undefined);
        };
    };
};

// ejemplo de que las funciones pueden tener mas funciones en su interior:

function pablo(num){
    for(var i = 1; i <= num; i++){
        if(i % 2 === 0){
            console.log(i);
        };
        if(i >= 500){                                // es codigo se ejecutara como todos, al principio gasta que i no sea mayor o igual a 500 solo corroborara si la i es par, si lo es
            for(var j = 1; j < 10; j++){             // se imprimira en la consola, al ser igual o mayor a 500 dara paso al siguiente bucle for el cual imprimira en la pantalla al final
                console.log(j);                      // ñps numeros del 1 al 10, luego retornara undefined
            }
             return(undefined);                      //BUCLE ANIDADO
        }; 
    };                                      
};

// EJEMPLO DE OTRO BUCLE ANIDADO

function matriz(f, c){
    for(i = 0; i < f; i++){
        for(j = 0; j < c; j++){
            console.log(i + "," + j);
        };
    };
};


"BUCLE WHILE"

var i = 0
while(i < 100){                   //mientras que la condicion dea true, el bloque de codigo se va a repetir indefinidas veces
    console.log(i);
    i++;                         //si no le sumo a la var inicial se genera un bucle infinito
}

// -------------------------------------

    function matriz(f, c){ 
        for(i = 0; i < f; i++){ // no se suma i hasta que la condicion for de abajo sea false
            for(j = 0; j < c; j++){  // cuando se le suma i arriba porque esta condicion se vuelve false (j < c) j vuelve a valer 0
                console.log(i + "," + j);
            };
        };
    };
matriz(1, 6)
// =
//0,0
//0,1
//0,2
//0,3
//0,4
//0,5
matriz(5, 6)
// =
//0,0
//0,1
//0,2
//0,3
//0,4
//0,5
//1,0
//1,1
//...
//4,5


function matriz(f, c){ 
    var i = 0
    var j = 0
    while(i < f){
        while(j < c){
            console.log(i + ' ' + j);
            j++;
        }
        j = 0;
        i++;
    };
};
matriz(2, 3)
// =
// 0 0
// 0 1
// 0 2
// 1 0
// 1 1
// 1 2
matriz(5, 6)
//0 0
//0 1
//0 2
//0 3
//0 4
//0 5
//1 0
//1 1
//1 2
//1 3
//1 4
//1 5
//...
//4 5

"DIFERENCIA ENTRE WHILE/FOR"

//FOR cumple una funcion una cantidad de veces determinada, hay que saber la condicion de parada
//WHILE cumple una funcion mientras una condicion sea verdadera, no es necesario tener una condicion de parada

// null esta establecido por nosotros, para decir que algo existe pero no tiene un valor
// mientras que undefined esta establecido por js y significa que algo no existe o no tiene un valor
















