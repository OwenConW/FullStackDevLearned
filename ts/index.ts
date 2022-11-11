// Lenguaje de Programacion       JavaScript + Static Type

// const/let/var nombreMiVariable : miTipado = Asignacion
let edad: number; // flotante o integer es lo mismo
edad = 19;
edad = 2
let nombre = "owen";
let verdader: boolean = true;

let otroNombre: string = "Owen";

enum Fases{
    Primera,
    Segundo,
    Tercero
}
// Nueva estructura de datos:
// (function (Fases) {
//     Fases[Fases["Primero"] = 0] = "Primero";
//     Fases[Fases["Segundo"] = 1] = "Segundo";
//     Fases[Fases["Tercero"] = 2] = "Tercero";
// })(Fases || (Fases = {}));

enum userActions{
    fetchUser = "FETCH_USER",
    postUser = "POST_USER"
}

// userActions.fetchUser;

// evita errores mostrnadolos antes de la compilacion
// no puedo pisar el valor de mis variables

// TypeScript Compiller o Babel para compilar el codigo a js

console.log(Fases.Primera)


// ################33 COMPILACION ########################3

// tsc  ---> npm install -g typescript

// npx tsc

// npx tsc nombreDeMiArchivo.ts   <-- compila un archivo convirtiendolo en js, pero no es escalable

// npx tsc --init  <--- crea nuestro "package" de configuraciones de ts
//#########################################################


// Existe una configuracion en el package de Ts que te vuelve estricto los null y los undefined, permitiendo que estos puedan 
// unicamente asignados a variables previamente declaradas con este valor


var nulled : null = null
var nombre2 : string = null // esto con la configuracion default rompe




// NUEVAS VAR    ANY Y UNKNOWN

let changingType : any = "Owen";
changingType = 26;
changingType = true;


let unkValue : unknown = "Owen";
unkValue = 26;
unkValue = true;

// SON DIFERENTES:
// Unknown es una variable que nose de que tipo es, solo puedo asignarle valores
let anyValue: any = "Owen";
let unknownValue: unknown = "Owen"; // declaro unknown

let str1: string = anyValue; //TODO OK, PUEDO ASIGNARLO
let str2: string = unknownValue;// ERROR, TYPE "unknown" IS NOT ASSIGNABLE TO TYPE "string"
// Esto rompe porque yo nose que tipo de valor tiene unknowValue dentro 
// Por eso tengo que avisarle que va a ser un error _
let str3: string = unknownValue as string;// ________|

// si quisiera ejecutar un metodo a una var de tipo unknown romperia ya que no va a estar seguro de que se pueda ejecutar

// any desabilita todos los checkeos de typescript

//noImplicitAny --> evitar que pueda llamar las funciones con tipados

function noImplicitAny(firstArg , secondArg){
    // Esto romperia porque nos estarian llegando parametros con any
}

// en package.json ---> scrips "dev": "nodemon index.ts", "build": "tsc"



// $$$$$$$$$$$$$$$$$$$$4 TUPLAS y ARREGLOS $$$$$$$$$$$$$$$$$$$$$$$

// No tienen un largo variable


let tupla: [string, number] = ["Owen", 19];

tupla = ["Robertito", 28];

let arreglo : number[] = [1,2,3,4,5]
let arreglo2 : Array<number> = [1,2,3,4,5]

arreglo.push("a") // error, espera un numero
arreglo.push(2)

// $$$$$$$$$$$$$$$$$$$$$$$ OBJETOS $$$$$$$$$$$$$$$$$$$$$$$$$$$$

let persona = {
    nombre: "Owen",
    apellido: "Bonoris"
}

interface Persona {
    nombre: string;
    apellido: string;
    edad: number
}

let persona2 : Persona = {
    nombre: "Owen",
    apellido: "Bonoris"
}
// va a romper porque no le estoy pasando la edad
let persona3 : Persona = {
    nombre: "Owen",
    apellido: "Bonoris",
    edad: 19
}


interface Hobby{
    nombre: string
}

interface Estudiante extends Persona{
    activo?: boolean;
    salud: (a: string) => void;
    hobbies: Hobby[]
}

//Parametros opcionales:

interface Estudiante extends Persona{
    activo?: boolean; // <-- ese ? vuelve opcional ese parametro, no romperia en caso de que no se pase como hacia.
    salud: (a: string) => void;
    hobbies: Hobby[]
}

// $$$$$$$$$$$$$$$$$$$$$444 CLASES $$$$$$$$$$$$$$$$$$$$$$$$$


class Personas {
    nombre: string;  // estas variables por defecto son publicas
    edad: number;
    constructor(nombre: string, edad: number){
        this.nombre = nombre;
        this.edad = edad;

    }
}

const sumaaaa = (a: unknown, b: any ): unknown => {
    return a + b
}


let result: number = sumaaaa(2, 2) as number


let owen = new Personas("Owen", 19)
owen.nombre // "Owen"  <--- publico

// ATTRIBUTES MODIFIER

class Personas2 {
    private nombre: string;  //
    private edad: number;
    protected email : string
     constructor(nombre: string, edad: number, email?: string ){
        this.nombre = nombre;
        this.edad = edad;
        this.email = email || "desconocido"
     }

}

let owen2 = new Personas2("Owen2", 19)
owen2.nombre 
// Tira error porque solo se puede acceder dentro de la clase, como podria se con un getter

// VAR publica, privada y protegidas

// Protected  solo se puede acceder desde la clase que tiene la variable o las hijas

class Student extends Personas2{
    isActive: boolean
    constructor(nombre: string, edad: number, email: string){
        super(nombre, edad, email)
        this.isActive = false;
    }
    getEmail = () => {
        return this.email
    }
    getErrorPrivate = () => {
        return this.edad
    }
}

// $$$$$$$$$$$$$$$$$$$$$$ FUNCIONES $$$$$$$$$$$$$$$$$$$$$$$$$$$
// function nombre (parametros): number {}     <--- indico tmb que va a retornar
function suma(a, b){
    return a + b
}
// error porque tienen any implicito
function suma2(a: number, b: number): number{
    return a + b
}

function consologea(): void{  // <-- void intuye que la funcion no retornaria nada por ejemplo en React cuando se setea el estado
    console.log("algo")
} 

function throwError(msg: string): never{   // <--- funcion que nunca termina, porque tiene un error
    throw new Error(msg);
}

//  NARROWING

function suma3(a: number | string, b: number | string): number | string | void{
    // return a + b // error
    if(typeof a === "number" && typeof b === "number")return a + b
    if(typeof a === "string" && typeof b === "string")return a + b
}

function suma4(a: number | string, b: number | string): number {
    if(typeof a === "string"){
        a = parseInt(a)
    }
    if(typeof b === "string"){
        b = parseInt(b)
    }
    return a + b
}

// $$$$$$$$$$$$$$$$$$$4 FUNCIONES GENERICAS $$$$$$$$$$$$$$$$$$$$$$$$

function firstElement(arr: any[]){
    return arr[0]    // de esta manera se pierde el tipado en el output
}




function firstElement2<Type>(arr: Type[]): Type{
    return arr[0]
}





let array : number[] = [1, 2, 3, 4]
let arregloStr : string[] = ["a", "b", "c"]


// tipado implicito
let elemento = firstElement2(array) // de esta manera ahora, no se pierde el output ya que en la funcion generica indico 
// que se "adopte" o transfiera el tipo que quiero
let elementoStr = firstElement2<string>(arregloStr) // tipado explicito

function merge<U extends object, V extends object>(obj1: U, obj2: V){
    return{
        ...obj1,
        ...obj2
    }
}
// Al extender un objeto evitaria romperse a la hora de intentar invocarla con un numero o demas, de manera contraria no
// habria manera de saber que es lo que me va a llegar ya que estoy indicando que el tipo se va a "reconocer" dsps

// Las actions de redux son genericas, el axios.post, el axios.get tmb
// axios.get<Persona> -----> response.data ---> va a estar persona y nos va a dar el tipado
// useState tmb utiliza generic functions --->


// ########################### FUNCTION OVERLOADS #################################

// overload son formas de llamar a una funcion de diferentes maneras

function sumaSolucion(a: number, b: string): string;
function sumaSolucion(a: string, b: string): string;
function sumaSolucion(a: string, b: number): string;
function sumaSolucion(a: number, b: number): number{
    return a + b
}

function makeDate(timestamp: number) : Date;
function makeDate(m: number, d: number, y: number): Date;
function makeDate(m0rTimestamp: number, d?: number, y?: number): Date {
    if(d !== undefined && y !== undefined){
        return new Date(y, m0rTimestamp, d);
    }else{
        return new Date(m0rTimestamp)
    }
}

// install @types/react para que se pueda compilar el codigo de ts

// type script se fija que coincidan los tipos y las keys

