//Lenguaje de programacion, estos se destinan a comuncarse con la computadora paradarle ordenes
//-Tipados y No Tipados
// JavaScript se creo originalmente para ser usado en el front-end pero luego de la introduccion del motor V8 de Google mejor la velocidad y el funcionamiento
// haciendo que js sea la lengua franca de la web y llegando al back-end por medio de NodeJS


const { ready } = require("jquery");

//ONSOLA TIPO "REPL" "READ EVALUATE PRINT LOOP"

//_________
//VARIABLES| ("var" "const" "let")   Una variable es una forma de almacenar el valor de algo para usar mas tarde. JavaScript es un lenguaje de tipado dinamico
//---------                           una var se puede configuarar(y restablecer) a cualquier tipo, no necesitamos declarar su tipo al iniciar la variable
const favortiteFood = "Pizza";
let lastName = "Perez";  
var firstName = "Owen";        

//var:   

var firstName = "Owen";   //La variable (var) se puede "pisar" es decir, reasignar, ejemplo:

var nombre = "owen";
nombre // = owen
nombre = "nicolas";
nombre // = nicolas
      
//const:

const favortiteFood = "Pizza";   //Para que una "var" no seas "pisada" se usa CONST, ejemplo:

const PI = 3.1416;

//const define una variable la cualpara siempre mantendra su asignacion


//let:

let ejemplo4   // es una variable muy similar a var pero un poco diferente, por ejemplo difiere al crear un "nivel de scope"

//----------------------------------------------------------------------------------------------

//si utilizamos una var no asignada previamente tirara error ya que no esta definida:

pepe //esta var jamas fue asignada, por lo tanto retornara erorr

//si asignamos una var sin ningun contenido, igualmente la estamos asignando con el valor "undefined":

var nicolas 

//sin escribir el var igualmente se podra asignar una var debido a la flexibilidad de js :

edad = 18;

//----------------------------------------------------------------------------------------------

//TIPOS DE DATOS ASIGNABLES A LAS VARIABLES:

//STRINGS: .charAt devuelve la posicion del caracter que le pasemos como parametro

"sin importar la longitud de la cadena de texto, es un string, por ejemplo esto"

//NUMBERS:

18;

//BOOLEANS:

true, false;

//NULL:

var aburrimiento = null;   //NULL es nada

//UNDEFINED:

var ejemplo

ejenplo // = undefined

//_______________________
//|OPERADORES MATEMATICOS|
//------------------------

// LOS DE TODA LA VIDA: SUMA  +   RESTA  -  MULTIPLICACION  *  DIVISION   /  Y EL IGUAL  =)

// MODULO (   %   )

//JS tiene casteo de datos, es capaz de cambiar el tipo de datos para resolver lo que el usuario pide, ejemplos:

2 + 2;
4

"1" + 1;   //js decide cambiar el 1 de valor numerico a tipo string
"11"

//null + undefined = NaN = Not a Number

// Los operadores son funciones
// TIPOS DE NOTACION
// INFIX o INFIJA (se escribe el operador entre los operandos)
// POSTFIX o POSTFIJA (se escribe el operador a la derecha de los operandos)
// PREFIX o PREFIJA (se escribe el operador a la izquierda de los operandos)
//-------------------------------------------------------------------------------------------


//___________________________________________
// PRECEDENCIA DE OPERADORES Y ASOCIATIVIDAD |
//--------------------------------------------

"PRECEDENCIA:"

"es el orden en que se van a llamar las funciones de los operadores. Estas funciones son llamadas en orden de precedencia"
"(la que tiene mayor precedencia se ejecuta primero)"
// si tenemos mas de un operador, el interprete va a llamar al operador de mayot precedencia primero y despues segira con los demas.

"EJEMPLO"

console.log(3 + 4 * 5);

// el orden de PRECEDENCIA, indica que la multiplicacion (con una procedencia de 15) es mayor que la de la suma (14), resolviendo primero la multiplicacion,
// dejando algo asi por interno:

console.log(3 + 4 * 5);
console.log(3 + 20);
console.log(23);
23


"ASOCIATIVIDAD:"

"es el orden en el que se ejecutan los operadores cuando tienen la misma precedencia, es decir, de izquierda a derecha o de derecha a izquierda"

"EJEMPLO"

var a = 1, b = 2, c = 3;
a = b = c
console.log(a, b, c);

// esto daria como resultado 3, 3, 3, ya que la asociativdad del operadow "=" es de righ-to-left, dejando esta linea como: b = c y luego a = b. siendo todas las var = 3

//__________________________
//OBJETOS GLOBALES Y METODOS|
//---------------------------
// *Para saber los metodos de los objetos uso la consola del navegador escribiento el objeto deseado, por ej console. y arrojara todos sus metodos posibles*

// JavaScript toeme objetos integrados para que los usemos, por ejemplo uno que usamos fue el objeto de consola y su metodo log, como tmb existe el objeto MATH

"MATH COMO OBJETO"

"Metodos:"

".pow" // para elevar el numero

Math.pow(2, 4) = 16;
Math.pow(2, 3) = 8;

".round" // para redondear el numero al entero mas cercano
".floor" // para redondear un numero al numero entero mas cercano hacia abajo
".ceil" // para redondear el numero al entero mas cercano hacia arriba

Math.round(5.3235) = 5
Math.round(6.5632) = 6
Math.floor(5.3235) = 5
Math.floor(6.9999) = 7
Math.ceil(5.00001) = 6
Math.ceil(2.3432) = 3

"Metodo incorporado de un string"

.length // nos devolvera la cantidad de caracteres que tiene esa cadena

var ten = "como andas rey?";
console.log(ten.length); // esto dara como resultado 15 ya que los espacios, signos, letras y cualquier cosa se toma como caracter

//__________
//FUNCTIONS|
//----------

//Agrupar codigo que luego se puede invocar

//FORMAS:

function miFUncion (){
    //bloque de codigo
};


const otrafuncion = function (){
    //bloque de codigo
};


const otramas = () => {     
    //bloque de codigo
};

//EJEMPLO:

function presentar(nombre, edad){                  // <---- esto es definir la funcion
    console.log("Mi nombre es " + nombre);
    console.log("y tengo " + edad + " años!");
};

presentar ("Owen", 18);                        //   <---- y esto invocarla    nombredefunction();

//Lo que retorne sera: Mi nombre es Owen y tengo 18 años!

// si la invoco sin valores, al definir la funcion y haberle pasado los parametros/argumentos "nombre" y "edad" se comportan como variables
// por eso el resultado que retornara sera "undefined"

presentar();

//Lo que retorne sera: Mi nombre es undefined y tengo undefined años!

//_____________________
//FUNCTION - ARGUMENTOS|
//---------------------

var nombre1 = "owen";

function saludar(nombre1){
    console.log("hola " + nombre1);
};

saludar(mati)

// va a retornar hola mati, por cuestion de scope, la var nombre1 esta definida y luego la paso
// como parametro y al ser un scope nuevo por el hecho de q todo lo que este despues de las {} 
// se toma como un scope nuevo y esa vareable no esta definida aunq mas arriba si (otro scope)

// otro ejemplo:

function prueba (){
    var nuevoscope = 12;
};

nuevoscope
 
//retornara error porque no esta definido aunq mas arriba (en otro scope)

var name = "Bonoris";

function sayhi(){
    console.log("hola " + name);
};

sayhi();

// esto retornara hola Bonoris a pesar de que sean scope distintos o tiraria error a 

var name = "Bonoris";

function sayhi(){
    var name;
    console.log("hola " + name);
};

sayhi();

// en este caso retornaria hola undefined


//________________
//FUNCTIONS RETURN|
//-----------------

//Todas las functions retornan algo, el decir no retorna nada en realidad es que retorna "undefined"

function noretorna(){
    var Bro = "rey";
    var rey = "bro";
};


noretorna   // retornaria UNDEFINED como resultado


function retorna(){
    var bro = "rey";
    return bro; 
};

retorna    //retornaria rey como resultado

//_________________
//CONTROL DE FLUJO| 
//-----------------

function manejar(edad){
    if(edad >= 18){
        return(true + "Tienes tu carnet");
    }                                                          //condiciones
    else{
        return(false + "Lo siento no tienes edad para manejar");
    }
    
};

//operadores :
"<     |     <=     |       >      |     >=    |     ===    |    ! =="
// resultados booleanos

1>2 
false

3==3
true

if(true){
    //codigo q siempre se va a ejecutar
};

if(false){
    //cidigo q nunca se va a ejecutar
};


if(edad > 18){
    console.log("Sos viejo");
} else if(edad = 18){
    console.log("Sos adulto");
} else {
    console.log("Sos wachin");
};


//-------------------------------------------------------------------------------------





