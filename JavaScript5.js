"CLASES" // una clase es una plantilla para la creacion de objetos de datos segun un modelo predefinido, se usan para representar entidades o conceptos. "sustantivos del lenguaje"
// ej:   "alumnos", owen es una instancia de la clase alumnos, un objeto, owen es un alumno

"COMO DEFINIR CLASES E INSTACIAS"

// construyendo objetos

"Functions Constructos"

function Persona(){                        
    this.name = "Juan";                   
    this.lastname = "Perez";       
} // no retornan
  // this??

function Car(marca, cv, color){
    this.marca = marca;
    this.cv = cv;
    this.color = color;
} // no retornan
  // this??

"New" // crea un objeto nuevo, invoca la funcion x, hace un bind 

1// var objeto = {};

2// car("audi", 1500, "negro").bind(objeto);   //bind lo que hace es hacer que el this de la funcion car tenga q ser un objeto
//               |
//               V
// lo que hace el bind es remplazar los this por los objetos
//               |
//               V
// function Car(marca, cv, color){
//     objeto.marca = marca;
//     objeto.cv = cv;
//     objeto.color = color;
//}

4// return(objeto);

var owen = new Persona();

var audi = new Car("Audi", 1500, "negro");

// -----------------------------------------

"DEFAULT OPERATOR (||)"

function Car(marca, cv, color){
    this.marca = marca || "Desconocida";  
    this.cv = cv || "Random";
    this.color = color || "Desconocido";
}

marca  ||   "str"
  a    ||     b


//TABLA DE LA VERDAD
// A  ||  B
/////////////
// T  ||  T   // = si A es true, no importa B, es true = A
// T  ||  F   // = A
// F  ||  T   // = si A es false, depende del valor de b, si B es true, es true = B
// F  ||  F   // = B


"SHORCIRCUIT"

marca  &&   "str"
  a    &&     b


//TABLA DE LA VERDAD
// A  &&  B
/////////////
// T  &&  T   // = si A es true define B, si B es true es true
// T  &&  F   // = si A es true define B, si B es false es false
// F  &&  T   // = si A es false define A, es false
// F  &&  F   // = false

// el & tambien se puede usar para ver si un var o un objeto esta vacio
owen && owen.edad
// si el parametro edad de owen existe, retornara el mismo, de lo contrario retornara un error

"PROTOTYPE"
.__proto__ // para saber de que prototipo es (SI TIENE __ NUNCA HAY QUE TOCARLA)
// las propiedades


// Todos los objetos en js tienen una referencia a otro objeto llamado proto.
// Ejemplo:
var array = [1, 2, 3, 4];
array.push(); // <--- ¿De donde sale el .push?  Del prototipo array que es un objeto y tiene propiedades adentro

//CONSTRUCTOR ----> PROPTOTIPE

"Crear una funcion en un prototipo"
// Asi como cuando usamos una string y le aplicamos una funcion que no creamos, por ejemplo .length, la misma esta creada en el prototipo "string", el interprete busca la funcion en el objeto
// y si no encuentra nada revisa en el prototipo, esto es algo que podemos hacer con nuestros constructors que creamos, podemos crearles funciones al prototipo constructor que queramos

//Ejemplo:

function Persona(edad){
    this.edad = edad;
}

Persona.prototype.getEdad = function(){     // esto nos permite que si quisieramos cambiar una parte de la funcion, al todos los objetos ejecutar la misma perteneciente a su prototype, 
    return(this.edad);                      // no deberiamos cambiar mil veces la funcion, estariamos respetando nuestro codigo DRY, DONT REPEAT YOURSELF-
}

var ejemplo = new Persona(22);

ejemplo.__proto__ // = Persona {}; esto es lo mismo que cuando hacemos "asda".__protp__ y nos dice string 
ejemplo.getEdad // = getEdad(22) = 22 esto es lo mismo que cuando hacemos "asda".length    ese .length es una function creada en el prototipo string como explique antes

// ---------------------------------------------------------------------
// Al el interprete primero buscar una funcion en el objeto y al no encontrarla posteriormente pasar al prototipo, nos permite sobrescribir, por ejemplo:

var ejemplo2 = new Persona(18);
ejemplo2.getEdad // = getEdad(18) = 18

ejemplo2.getEdad = function(){       // <--- sobrescribimos la funcion, pasando a hacer que el objeto ejemplo2, del prototipo del constructor Persona tenga su propia funcion
    return(this.edad / 2);           //      y al el interprete buscar la funcion primero en el objeto, nunca se ejecutara la funcion del prototipo
}

ejemplo2.getEdad // = getEdad(18) = 9    *esto porque la function fue sobreescrita*

//-----------------------------------------------

function Persona(nombre, apellido){
    this.nombre = nombre || "Injunado";             // propiedades del objeto que querramos construir, van en el constructor de la clase
    this.apellido = apellido || "Galati";
}
Persona.prototype.getNombre = function(){           // todo lo que sean metodos para con los objetos van a ir en el prototipo de la clase que hayamos creado
    return(this.nombre + " " + this.apellido);
}
var owen = new Persona("Owen", "Bonoris");
var pablo = new Persona("Pablo", "Lerner");
var awita = new Persona("Agustina", "Gomez");

owen.getNombre  // = "Owen Bonoris"
pablo.getNombre // = "Pablo Lerner"
awita.getNombre // = "Agustina Gomez"

function Alumno(nombre, apellido, ciudad, curso){
    Persona.call(this, nombre, apellido, ciudad); // vamos a necesitar el call porque queremos que las propiedades de persona, queden en bajo el objeto que va a devolver el Alumno, y no
                                                   // luego le paso los valores que quiero que reciba el constructor alumno
    
    this.curso = curso;                        // luego le agego los puntos propios de Alumno  
    this.empresa = "Soy Henry";
}
var Owen = new Alumno("OWen", "Bonoris", "Bs As", "Web full stack",);
//--------------------------------------------------

"OBECT.CREATE Y PURE POTOTYPAL INHERITANCE"

var persona = {
        nombre: "Defecto",
        apellido: "Defecto"
}; // un objeto cualquiera

var owen = Object.create(persona); // le paso el objeto que creamos

var obj = {}
Object.assign(obj, {nombre:"Pablo", apellido:"Lerner"}) // el metodo assign te permite agregar propiedades a un objeto pasado por parametros
obj.nombre // = Pablo

"ES6 Y CLASES(CLASS)"

class Persona {
    constructor (nombre, apellido){
        this.nombre = nombre,
        this.apellido = apellido
    }
    saludar(){
        console.log("Hola!" + this.nombre);
    }
}
var owen = new Persona("Owen", "Bonoris");
owen.saludar();

class Empleado extends Persona { // extends es extender una nueva clase de otra ya creada, "empleado" es una "persona"
    constructor(nombre, apellido, empleo, sueldo){
        super(nombre, apellido); // el metodo super nos permite usar le constructor de la clase de la cual estamso herendando o extendiendo
        this.empleo = empleo;
        this.sueldo = sueldo;
    }
}   
var owen = new Empleado("Owen", "Bonoris", "Desarrollador Web", 100);
owen.saludar();
owen.__proto__ // = (empleado)
Empleado.__proto__ // = (persona)
