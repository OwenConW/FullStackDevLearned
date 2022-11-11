      /*La maquina solo entiende 0 y 1, en solucion
HALF ADDER
XOR - AND

AND
A   B    AND
1   1     1
1   0     0       // El and es verdadero(1) solo si los dos elementos son verdaderos(1).
0   1     0
0   0     0


OR

A   B    OR
1   1    1 
1   0    1        // El or es verdadero(1) siempre que uno de los elementos sea verdadero(1). 
0   1    1
0   0    0


XOR

A   B   XOR
1   1    0
1   0    1        // El xor es verdadero(1) siempre que los elementos sean distintos y no iguales.
0   1    1
0   0    0

EJEMPLO:

 19   10011
+24   11000  // VALORES BINARIOS
      43210  // POSICIONES
----  -----

SIMBOLOS DEL SISTEMA:
DECIMAL: 0, 1, 2, 3, 4, 5, 6, 7 ,8 y 9
BINARIO: 0 y 1
QUINARIO: 0, 1, 2, 3 y 4
OCTAL: 0, 1, 2, 3, 4, 5, 6 y 7
HEXADECIMAL: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B ,C, D, E y D


NUMEROS BINARIOS:

FORMULAS

Primer formula: 
DECIMAL A BINARIO
Posiciones de derecha a izquierda arrancando desde 0
La sumatoria del doble del digito elevado al indice
Ejemplo 1: 19:
/2 (anotamos el residuo).
19/2 = 9, resto = 1
9/2 = 4, resto = 1
4/2 = 2, resto = 0
2/2 = 1, resto = 0
1/2 = 0, resto = 1
//    NUMERO BINARIO = Acomodamos de abajo hacia arriba: 10011
*/
//Ejemplo 2: 21:
//21 / 2 = 10, resto = 1
//10 / 2 = 5, resto = 0
//5 / 2 = 2, resto = 1
//2 / 2 = 1, resto = 0
//1 / 2 = 0, resto = 1
//NUMERO BINARIO = 10101

//Segunda formula:
//    BINARIO A DECIMAL
(D * 2 ^ I)
//  Ejemplo: 19   10011
//  1*2^0 + 0*2^1 + 0*2^2 + 1*2^3 + 1*2^4 = 1 + 2 + 0 + 0 + 16 = 19


//-------------------------------------------------------------------------------------------------------

/*JAVA SCRIPT AVANZADO I 

Java Script labura haciendo un proceso con un hilo de ejecucion.

-Syntax parser, se encarga de reveer el archivo para detectar errores y acompaña al interprete.

-Lexical Enviroment, toma lista de lo que hay en las funciones, variables, etc.

-Execution context, se crea cuando se ejecuta la funcion y se destruye cuando se termina, hasta entonces la funcion esta definida. Tiene acceso al outer Enviroment, al Global object y al codigo
dentro del mismo.

-Global context: el navegador, y como cada contexto de ejecucion tiene su propio lexical Enviroment.

-Si en un lexical Enviroment dentro de un Execution context no esta una variable q se usa (por ejemplo), la busca en su outer Enviroment (el ambiente que lo rodea).
Esto se da siempre desde adentro hacia afuera, nunca se podra buscar un valor en el lexical Enviroment de otro context dentro del nuestro.

-Hoisting. Recorre todo el archivo, agarra las *declaraciones* de variables y la *definiciones* de funciones y las eleva arriba de todo, por eso ocurren sucesos raros como poder ejecutar una funcion
a pesar de haberla declarado dsps y consologear una variable a pesar de que esta definida abajo, tira undefined y no errores

-Execution Stack (Pila de ejecucion)

Ejemplo:*/

function b (){
      console.log("B!")
}
function a (){
      b();
}
a()

/*2   b() Execution Context (se creo el nuevo contexto de ejecucion, se ejecuta el codigo y una vez terminado se destruye el contexto, y como a solo tenia que ejecutar b, a tambien se destruye quedando 
    como unico contexto el Global Execution Context)

1   a() Execution Context (al ejecutarse a, se crea el contexto de de ejecucion nuevo, encima del Global, el codigo de a ejecuta el de b, por lo tanto se crea encima de este un nuevo 
    contexto de ejecucion)

0   Global Execution Context (va a estar siempre, y encima del mismo se van a ir apilando contextos y nunca se destruye)

-SCOPE. (Alcanze)
Una variable definida en el contexto global, tiene scope/alcanze global, se puede acceder desde cualquier lugar.
Mientras que una variable definida dentro de un scope nuevo, por ejemplo el de una funcion "{  }" tendra el alcanze todo lo que esta adentro
*/

//   TIPOS DE DATOS:

// Static typing (Java): Hay que asignar que tipo de dato va a ser una string por ejemplo y no se puede reasignar

// Dynamic typing (JavaScript): No se asigna el tipo de dato que va a ser la variable, y se pueden pisar los valores como el tipo de dato,

//   COERCION DE DATOS:

Number("3")       //3
Number(false)     //0
Number(true)      //1
Number(undefined) //NaN
Number(null)      //0
Number("string")  //NaN

/*First Class Function, una funcion se puede tratar como cualquier topo de dato, primitivo, object, function.
Solo que tiene un codigo que es invocable () y puede tener un nombre.*/

// Expressions y Statements.

// Expression:
1 + 1;
a = 3;

// Statement:
if (condicion){
      // bloque de codigo
}

//  Function Statement:

function saludo(){
      console.log("hola");
}

//  Function Expression:

var saludo = function (){
      console.log("hola")
}

//          VALOR Y REFERENCIA

/*Cuando pasamos algo por referencia estamos pasando una referencia al objeto y al modificarlo se modifica la original
En cambio cuando pasamos algo por value pasamos una copia y por mas que modifiquemos la misma, el original no se vera asignado.
Por ejemplo:*/

//    Por valor:

var a = 1;
var b = 2;

a = b;
b = 3;

console.log(a)// ----->  2  <----- si bien modifique b, en a guarde una copia de lo que valia b, y si bien lo modifique no cambio
console.log(b)// ----->  3  <----- aca devuelve el valor de b

// 
//     Por referencia:

var a;
var b = {nombre: "hola"};
a = b;
b.nombre = "Chau";

console.log(a.nombre); //------>  "Chau" <----- el cambio que se hizo afecto al valor, porque apuntan al mismo objeto

//                      THIS
//El valor del this puede cambiar. Es como un flecha que apunta siempre a un objeto.

/*Contexto Global Inicial (this tiene el valor de window (objeto Global)):
console.log(this === window) //true*/

this.a = 37;
console.log(window.a) // 37

//En el contexto de una funcion:

function f1(){
      return this;  // <----- el this sigue haciendo referencia al objeto global porque la funcion f1, pertenece ahi.
}

f1() === window; // global object

//En el contexto de un metodo (funcion dentro de un objeto)

var objeto1 = {
      prop: 37,
      f: function(){
            return this.prop;  //<---- el this ahora hace referencia al objeto "objeto1" que engloba el metodo en el que se encuentra y tiene valor "objeto1".
      }
}

var o = {prop: 37}

function loguea(){
      return this.prop; 
}

o.f = loguea;

console.log(o.f) //37

//Caso     IMPORTANTE:

var nombre = "Fede"
var obj = {
      nombre: "objeto",
      log: function(){
            this.nombre = "cambiado";
            console.log(this) //-----> obj
            console.log(this.nombre)// ---> cambiado

            var cambia = function (str){
                  this.nombre = str;// <------ el this hace referencia a window
            }     
            cambia("Owen")
            console.log(this.nombre) // ----> cambiado <---- Uno esperaria que la propiedad nombre de el objeto obj tenga el valor "Owen" pero el this, en el caso de arriba no hizo referencia al 
                                             //               objeto obj, sino a window, ya que esta alojado en una function guardada en una variable, y no directamente en un metodo de un obj.
      }
}
obj.log();

nombre;// ----> "Owen"

/*EVENT LOOP: simular comportamiento asincronico, si mi codigo tiene un proceso que tarda, se trabaria hasta q se termine, entonces surgen las WebAPIs para ejecutar procesos tediosos, una vez 
terminado/s el/los mismo/s no es devuelto de una ya que mi programa sigue ejecutando otras acciones, por lo tanto se lo devuelve o agrega al "callback queue" ("fila" de los    )esperando a que se libere el Stack
de ejecucion*/

// -------------------------------------------------------------------------------------------------------------

//                            JAVA SCRIPT AVANZADO II 

//CLOSURES (clausuras), cuando se destruye un contexto que tiene una variable, js lo que hace es guardarlo 
//como exepcion porq se da cuenta que va a ser utilizado
//  REQUISITOS:
//1. La funcion debe estar dentro de una funcion, es decir una funcion anidada.
//2. La funcion padre debe tener una variable.
//3. La funcion hijo debe utilizar de alguna manera la var de la funcion padre 
//4. Crear instancia de la funcion hijo 
//Ejemplo 1:

function saludar (saludo){
      //var saludo = "lo que me pasen"
      return function(nombre){                     // la var saludo queda como closure, ya que cuando se destruye js reconoce q luego la necesitara
            //var nombre = "lo que me pasen aca"
            console.log(saludo + " " + nombre);
      }
}

var saludarHola = saludar("Hola"); // Esto devuelve una funcion

saludarHola("Toni");

// Ejemplo 2:

var creaFuncion = function(){
      var arreglo = [];
      
      for(var i = 0; i < 3; i++ ){
            arreglo.push(
                  function(){ 
                  console.log(i)                // la var i del for queda como closure, ya que cuando se destruye js reconoce q luego la necesitara
            })
      }
      return arreglo;
}

var arr = creaFuncion()

arr[0]()
arr[1]()
arr[2]()

//    LLAMAR UNA FUNCION DE EJECUCION INMEDIATA 

(function(j){  // <---- DEFINO UNA FUNCION QUE TOME COMO ARGUMENTO EL PARAMETRO PASADO, IGUALANDO ESTE CON EL QUE NOS PASAN-----|
      //var j = i   <-----------------------------------------------------------------------------------------------------------|
      return function(){console.log(j)}
}(i)) // <---- INVOCO LA FUNCION INMEDIATAMENTE CON UN PARAMETRO  (Ii)


(function() {  // <------INVOCO LA FUNCION INMEDIATAMENTE, SIN TENER ARGUMENTO Y SIN RECIBIR PARAMETROS
   if(true) {                                                                      //                |   
      var instructor = "Franco";                                                     //              |
      console.log(instructor); // "Franco"                                             //            |
   }                                                                                    //           |   
})(); //    <-----------------------------------------------------------------------------------------

//               ES6
class Stack{
      constructor(){
            this.pila = [];
      }
      push(value){
            this.pila.push(value);
      }
}
//            =
//                OLD
function Stack2 (){
      this.pila = [];
}
Stack2.prototype.push = function(value){
      this.pila.push(value);
}

//   --BIND, CALL & APPLY--

//                      BIND  

// Me permite manipular a donde apunta el this

var persona = {
      nombre: "Guille",
      apellido: "gomez"
}

var logNombre = function(){
      console.log(this.nombre);
}

var logNOmbreBind = logNombre.bind(persona);      //<--- dentro de una nueva variable guarde una funcion que utiliza this con el metodo BIND el cual le pase por parametros al objeto que quiero que 
                                                    //    haga referencia
logNOmbreBind()  // "Guille"   

console.log(logNOmbreBind) //function(){
                  //               console.log(persona.nombre);}


// Tambien me permite dejar fijo ciertos parametros.

function multiplica(a, b){
      return a * b
}

var multiplicaPorDos = multiplica.bind(this, 2);     //   <------- Bindea un valor fijo al primer parametro (a)  tmb se puede bindear los demas parametros (b) y mas si hubiera


console.log(multiplicaPorDos)    

/function multiplica(a, b){
      return a * b
}

//                                      CALL 

//  aplica el bind y lo ejecuta, es decir se bindea por una unica vez.

var persona = {
      nombre: "Owen",
      apellido: "Perez"
}

var logNombre = function(){
      console.log(this.nombre);
}

logNombre.call(persona)  // no retorna una nueva funcion, solo la invoca.

//   y tambien se bindean argumentos

var logNombre = function(arg1, arg2){
      console.log(`${arg1} ${this.nombre} ${arg2}`)
}

logNombre.call(persona, "hola", "como estas?")


//                APPLY 

//  es igual que call solo que el segundo parametro de apply es un argumento (el primero tmb es hacia donde quiero q apunte)

var logNombre = function(arg1, arg2){
      console.log(`${arg1} ${this.nombre} ${arg2}`)
}

logNombre.call(persona, ["hola", "como estas?"])

//     -----------------------------------------------------------------------
/*   ESTRUCTURA DE DATOS


RECURSION  
Cuando una funcion dentro del codigo se llama a si misma

FUNDAMENTAL: caso de corte o caso base <----- Siempre se necesita para que no tire error debido a crear infinitos contextos de ejecucion
*/
function factorial(x){
      if(x > -1 && x < 2) return 1; // devolvemos 1 porq 0! = 1 y 1! = 1
      else if(x < 0) return 0;
      return x * factorial(x - 1);
  }
  /* 
  Contextos de ejecucion:
  
  factorial context
  factorial context
  global context
  
  
  4!  <--- Factorial de 4
  =
  4 * 3 * 2 * 1
  =
  4! ---> 4 * 3!
      3! ----> 3 *  2!
          2! ----> 2 *  1!
              1! ---->  1
  
  factorial context1  <-------- retorna un valor, 1
  factorial context2  
  factorial context3
  factorial context4
  global context
  
  factorial(3) ---> 3 * factorial(2) -----> 2 * factorial(1) -----> 1 -----> 2 * 1 ------> 3 * 2 ------> 6 
      
  
                        ESTRUCTURA DE DATOS - PARTE 1

  (Maneras de almacenar datos para diversos fines (buscarlos, ordenarlos de alguna manera))
  
  BUILT-IN DATA STRUCTURES (Ineger, Float, Character, Pointer)
  
  USER DEFINED DATA STRUCTURES
  -ARRAYS
  -LISTS ----> Listas lineales (Stacks, Queues)
   |
   L---------> Listas no lineales (Trees, Graphs)
  -ARCHIVOS
  
  
  */
  
  //                            SET
  
  var arr = [1,2,3,4,4,5,5,1,2]
  var set1 = new Set(arr)
  
  arr // -----> [1,2,3,4,4,5,5,1,2]
  set1 // -----> {1, 2, 3, 4, 5}
  
  // El set hace una copia y sin los duplicados y jamas, aunq se agregen elementos repetidos con el metodo ADD, no se repitiran
  
  // Si hago una add con dos objetos iguales, se agregarian dos veces aunq los objetos tengan el mismo contenido PORQUE SON 
  // DISTINTOS ya que son valores
  // por referencias, para solucionarlo deberia guardarlo en una var y hacer un add de la var.
  
  //                            STACKS 
  
  /*
                               
  LIFO ---->  LAS IN - FIRST OUT ----> ULTIMO QUE ENTRA PRIMERO QUE SALE
  
  Se pueden SIMULAR mediante arrays pero podria haber problemas como hacer un unshift */
  
  var stack = [];
  stack.push(1)       // la pila/stack ahora es [1]
  stack.push(10);     // la pila ahora es [1, 10]
  var i = stack.pop() // la pila es [1]
  console.log(i)
  
  // habria que crear una funcion constructora para crear elementos de tipo stack, donde le creemos los metodos pop y push, por lo tanto no habria unshift, y funcionaria la estructura de dato de tipo stack
  
  
  //                           QUEU
  
  // FIFO -----> FIRST IN FIRST OUT
  
  
  // Se puede SIMULAR mediante arrays tmb pero tmb podrian haber problemas
  
  var queue = [];
  queue.push(1)       // la queue/fila ahora es [1]
  queue.push(10);     // la queue ahora es [1, 10]
  var i = queue.shift() // la queue es [10]
  console.log(i)
  
  // la solucion tmb seria crear una funcion constructora con los metodos push y shift O (enqueue y dequeue)()


//   ESTRUCTURA DE DATOS II

/*                         LISTAS ENLAZADAS

arreglos ----> elementos
objetos -----> propiedades
lista ----> nodo1 ----> nodo2 -----> nodo3

Ni la lista ni los nodos existen como tipo de dato nativo en js, por lo tanto otra vez necesitamos crearlo.

class Lista{
      constructor(){
            this.lenght = 0;
            this.head = null;
      }
      add(data){
            var node = new Node(data);
            var current = this.head;
            if(!current){          // (current === null)
                  this.head = node;
                  this.length++;
                  return node;
            }
            while(current.next){
                  current = current.next
            }
            current.next = node;
            this.length++;
            return node;  
      }
      getAll(){
            var current = this.head;
            if(!current){
                  console.log("La lista esta vacia!");
                  return
            }
            while(current){
                  console.log(current.data);
                  current = current.next;
            }
            return
      }

}

class Node{
      constructor(data){
            this.data = data;
            this.next = null;
      }
}

LISTAS DOBLEMENTE ENLAZADA

Ademas de tener un next, va a tener un prev, es decir, enalaza al sig y al anterior


HASH TABLE

Forma optima y eficiente para guardar informacion en posiciones de mi hash table

  0     1      2      3      4      5      6      7
[                  "rojo" "verde"                   ]      <----"Hash table (ejemplo)"

{num: "dos", color: "rojo"}  -----------> FuncionHash(val){return val.num.length} ---> 3
{num: "tres", color: "verde"}-----------> FuncionHash(val){return val.num.length} ---> 4
{num: "uno", color: "azul"} -----------> FuncionHash(val){return val.num.length} ---> 3

bucket: cada espacio de mi hash

En una hash table se conoce como colicion cuando dos valores diferentes tienen que ser guardados en una misma "posicion"
en el ejemplo de arriba el num "dos" y "uno" tienen un legth de 3, se guarda el primero en la posicion 3 y al darse la situacion
de colicion debera manejarse, hay diversas maneras, como buscar el primer lugar disponible dsps de donde debera ir, otra es definir
una especie de sub estructura como un objeto

  0     1      2             3                    4      5      6      7
[                  {dos: "rojo" uno:"azul"}    "verde"                    ]      <----"Hash table (ejemplo)"

si tendria el problema q me da como resultado un por ejemplo "14", y tengo 7 espacions, podria hacer ese 14 % cantidad de buckets
*/

/*                ESTRUCTURA DE DATOS III
 *  
 * 
 *                           -ARBOLES
 *                               |
 *  ROOT                       ROOT(A)   A CONOCE A B Y A C, Y B/C PARA ARRIBA SOLO A A
 *                    ___________|____________
 *                   |                       |  (LOS HIJOS NO SE CONECTAN ENTRE SI)
 *  LEVEL0           B   <---HIJOS DE A--->  C
 *           ________|________
 *          |                 |
 *  LEVEL1  D                 E
 * 
 * LOS ARBOLES TIENEN NIVELES
 * LOS NODOS FINALES SE CONOCEN COMO HOJAS
 * 
 * 
 *     ARBOLES BINARIOS   (DOS HIJOS O MENOS)  
 * 
 * 
 * -ARBOL BINARIO      VS          ARBOL BINARIO DE BUSQUEDA
 * 
 * arbol con maximo                arbol con maximo dos hijos pero los menores al padre
 * dos hijos                       van a ubicarse en una rama a la izquierda, y los mayores a la derecha
 * 
 * 
 * -ARBOL BINARIO AUTOVALANCEADO
 * AVL TREE
 * SI DIFIERE EN MAS DE UN NIVEL, ES DECIR LA RAMA DE LA IZQUIERDA TIENE UN NIVEL, Y LA DE LA DERECHA 3
 * 
 * 
 *  -ARBOL BINARIO MAX HEAP
 * SE POSICIONAN LOS VALORES MAS ALTOS ARRIBA
 * 
 * RECORRER ALRBOLES
 * 
 *             8
 *        3          10
 *   1         4
 * 
 * PRE-ORDER --> DFS 
 * ROOT-IZQ-DER
 * 8-3-1-4-10
 * 
 * IN-ORDER --> DFS
 * IZQ-ROOT-DER
 * 1-3-4-8-10
 * 
 * POST-ORDER --> DFS
 * IZQ-DER-ROOT
 * 1-4-3-10-8
 * 
 * POR NIVELES --> BFS
* 
 * 
 *               ALOGIRITMOS
 * 
 * Conjunto de instrucciones o reglas bien definidas
 * 
 * -Resolver un problema
 * -Debe ser comprensible
 * -Hacerlo eficientemente
 * 
 * Como medimos la eficiencia de un algoritmo
 * 
 * Tiempo    <--
 * Espacio
 * Otros: 
 *    redes
 *    graficos
 *    hardware
 * 
 * 
 * N = 1/2x
 * log2(2x) = log2N
 * x * log2(2) = log2N
 * x * 1 = log2N
 * x = log2N
 * 
 *  EL MEJOR ALGORITMO ES RELATIVO
 * cota superior asinotitca  O  big O notacion= numero de pasos que nunca voy a poder superar
 * 
 * 
 * Ejemplos:
 */
var max = array[0]; // 1
for(var i = 0; i <= array.length; i++){ // N veces
      if(array[i] > max){ // 1
            max = array[i] // 1
      }
}
console.log(max); // 1

// 1 + N * 2 + 1
// 2 + 2N   <--Despreciamos el 2 y el otro 2
// O(N)

for(var i = 0; i <= array.length; i++){  // N veces
      for(var j = 0; j <= array.length; j++){ // N veces
            if(array[i] === array[j]){ // 1 paso
                  return true; // 1 paso
            }
      }
}

// N * N * 2
// 2N²      <----Se termina despreciando el 2
// O(N²)

// [1,2,3,4], 8

function sumArray(array, n){
      for(var i = 0; i <= array.length; i++){  
            for(var j = 0; j <= array.length; j++){ 
                  if(array[i] + array[j] === n){ 
                        return true; 
                  }
            }
      }
      return false;
}
// O(N²)

// [1,2,3,4], 8

function sumArray(array, n){
      var fin = array.length - 1; // 1
      var ini = 0; //1
      while(ini < fin){ // N veces
            var suma = array[ini] + array[fin]; // 1
            if(suma === n) return true;// 1
            if(suma > n) fin = fin - 1; // 1
            if(suma < n) ini = ini + 1; // 1
      }
      return false; // 1
}
// 7 + N
// O(N)


// Mas EFICIENTE a menos:

/*  O(1), O(log N) 
 *  O(N)
 *  O(N²)
 *  O(2^N)
 *  O(N!)
 */

//                        ALOGIRITMOS DE ORDENAMIENTOS

// BUBLE SORT      INSERTION SORT         SELECTION SORT
//




















