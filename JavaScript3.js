"ARRAYS / ARREGLOS / MATRIZ"

// Son un a lista de elementos o elementos ordenados que pueden ser de los tipos de datos vistos antes
// Los mismos se definen con los [] 
// No son tipos de datos nativos, como los anteriores (numeros, booleanos, strings, undefined, null), si no que es una estructura de dato
// ejemplo :
let array = [1, 2, "toni", true, null, undefined, function(){console.log("Hola")}, [1, 2, 3, 4]];

"Acceder a los elementos"

array[0]  // = 1
array[3]  // = true          los numeros son las posiciones de la lista, se empieza por el 0
array[6]() // = "Hola"       aca lo que estoy haciendo es llamar la posicion 7 del array, en la cual esta guardada la funcion e invocarla.
 
array[0] / 2  // = 0.50

array[2]  // = "toni"        
array[2][0] // = "t"         las strings son como una arreglo de caracteres

"Owen"[0]  // = "O"
"Owen"[2]  // = "e"

array[7] // = [1, 2, 3, 4]
array[7][1] // = 2
array.length // = 8
array[7].length // = 4  ([1, 2, 3, 4])
array[2].length // = 4  (toni)

// los arreglos se cuentan desde 0

array.length // = 8
array[array.length - 1] // = [function]


"Asignar valores"

//Forma litera:

var arreglo = [1, 2, true]; // estamos escribiendo la lista de manera LITERAL a como la queremos

var arreglo2 = [];

arreglo2[0] = "fist element"  // estoy definiendo que en el sub 0 de la lista arreglo 2 hay un string
arreglo2[0] // = "first element"
// se puede pisar, es decir definir de nuevo sin importar el valor que este antes
arreglo2[0] = "Lo piso"
arreglo2[0] // = "Lo piso"

arreglo2[10] = 10;
arreglo2  // = ["Lo piso", <9 empty items>, 10]  = 9 elementos undefined

// Agregar valores usando funciones nativas de los arrays (.push y .pop)

".push()" // la funcion push para con los array lo que hace es agregar 1 o + valores y agregarlos al array en la ultima posicion

let lista = [];
lista // = []
lista.push // = [Function: push]    sabemos que es una funcion, por lo tanto se puede invocar
lista.push(1) 
lista.push(true)
lista.push("Owen")
lista // = [1, true, "Owen"]

".pop()" // La funcion pop para con los array lo que hace es agarrar el elemento del array RETORNARLO y sacarlo

lista[2] // = "Owen"
var nombre = lista [2]  
nombre // = "Owen"
lista // [1, true, "Owen"]

var nombre = lista.pop();    // en este caso, estoy sacando el ultimo elemento del array lista y guardandolo dentro de una variable
nombre // = "Owen"
lista // = [1, true]
 
// si hago un .pop  en el aire, se va a sacar el ultimo elemento del array y perderlo para siempre
lista.pop()
lista // = [1]

let once = lista.pop() + 10
once // = 11
lista // = []

".shift()" // Esta funcion es la misma funcion que .pop solo que a diferencia de ella, esta opera en el primer elemento del array, es decir, RETORNARA y sacara del array el primer elemento

var lista = [1, 4, 6, true];
lista // = [1, 4, 6, true];
lista.unshift() // = [4, 6, true]

".unshift()" // Al igual que shift, .shit es la misma funcion que .push solo que a diferencia de ella, esta opera tambien en el primer elemento del array, es decir agegara un elemento en la
// posicion del array.
var lista = [1, 4, 6, true];
lista // = [1, 4, 6, true]
lista.shift('Owen')
lista // = ["Owen", 1, 4, 6, true]

".join()" // lo que hace es unir todos los elementos de un array en un string.

var lista = ["Hola", "Owen", "todo", "bien"];
lista.join(" "); // "Hola Owen todo bien"
lista // ["Hola", "Owen", "todo", "bien"];
var lista2 = lista.join(" ");
lista2 // = Hola Owen todo bien

".concat()" // lo que hace es unir un array con otros elementos o array que le pasemos.

var lista = ["Hola", "Owen", "todo", "bien"];
lista.concat([1, 2, 3]) // [ "Hola", "Owen", "todo", "bien", 1, 2, 3 ]
lista2 = lista.concat(["como", "andas"]);
lista2 // = [ "Hola", "Owen", "todo", "bien", "como", "andas" ]

"+=" // este termino despues de una variable hace que la variable sume el elemento que reciba y determine el resultado como la misma variable
var nombre = "owen";
nombre += "capo";
nombre // "owencapo"


"Recorriendo un arreglo"

var lista = [1, 2, 3, 4, 5]
//           0  1  2  3  4

for(var i = 0; i < lista.length; i++){
    console.log(lista[i]);
};

// 1
// 2
// 3
// 4
// 5

var lista = [1, 2, 3, 4, 5, 6, 7, 9, 10, "toni", "mati", "chao",];

while(lista.length > 0){
    console.log(lista.pop);
};

// "chao"
// "mati"
// "toni"
// 10
// 9
// 7
// 6
// 5
// 4
// 3
// 2
// 1

lista // = []