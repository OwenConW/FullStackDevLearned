"OBJETOS" //coleccion de propiedades (una propiedad es una asociacion entre un nombre o clave (keyvalue) y un valor)

// como se definen objetos?

"De forma literal"

var objeto = {
    //propiedadn1: valor1,
    //...
    //propiedadnx: valorx,
};

"Ejemplo"

var owen = {
    nombre: "Owen",
    apellido: "Perez",
    edad: 18,
    saludar: function(){               // En lenguaje tecnico, una funcion dentro de un objeto, es un metodo de un objeto, en este caso no seria la funcion saludar, si no, el metodo saludar del 
        console.log("Hola, Owen");     // objeto owen
    },
    hobbies: ["Beatbox", "Programar", "Skateboard"],
    cursando: true,
};  

owen["nombre"] | owen["nombre"][0] // = "Owen" |  = "O"
owen["edad"] // = 18
owen["saludar"]() // = "Hola, Owen"

// Un array es un objeto con indice numerico.

"Como acceder a las propiedades de un objeto"

// Bracket Notation

owen["nombre"]
var i = "nombre"
owen[i] // = Owen
//el interprete lee lo que esta dentro de la variable y deduce que quiero acceder a la propiedad nombre guaradada en la variable i


// Dot Notation
owen.nombre 
// El dot notation es LITERAL, por lo tanto lo sucedido por el interprete en el caso anterior daria como resultado UNDEFINED
owen.i // = Undefined

"Asignando valores"

owen.nuevapropiedad = 12345
owen
// =
// { nombre: "Owen",
//   apellido: "Perez",
//   edad: 18,
//   saludar: function()
//   hobbies: ["Beatbox", "Programar", "Skateboard"],
//   cursando: true,
//   nuevapropiedad : 12345 }

"Eliminar una propiedad" //keyword delete

delete owen.nuevapropiedad
owen
// =
// { nombre: "Owen",
//   apellido: "Perez",
//   edad: 18,
//   saludar: function()
//   hobbies: ["Beatbox", "Programar", "Skateboard"],
//   cursando: true }

"This" //keyword this funciona en los objetos para un metodo

// Sin esa keyword el codigo NO ESCALA, ya que te estarias dejando de lado la regla DRY y si se tuviera que hacer un codigo asi para 100 alumnos habria que hacer 100 codigos con 100 metodos.

var persona = {
    nombre: "Owen",
    saludra: function(){
        console.log("Hola " + this.nombre);  //hace referencia a la propiedad nombre del objeto persona
    },
};
 
function saludar(){
    console.log("Hola "+ this.nombre);
};
var pablo = {
    nomnre: "Pablo",
    saludar: saludar,
};
var fabri = {
    nombre: "Fabri",
    saludar: saludar,
};

pablo.saludar() // "Hola Pablo"
fabri.saludar() // "Hola Fabri"

// El THIS hace referencia a la propiedad del objeto que estemos usando, en este caso si usamos el this.nombre, cuando ejecutemos el metodo saludar del objeto pablo, hara referencia 
// a la propiedad nombre del objeto pablo, si fuera el objeto fabri harai referencia a la propiedad nombre del objeto fabri.

// Para evitar errores o fallas en el codigo al usar el THIS podemos usar el patron comun para evitar los mismos, antes de introducir this en una funcion donde no se que valor puede tomar
// antes de entrar a la misma podria hacer lo siguiente.
var objeto = {
    nombre: "Objeto",
    log: function(){
        this.nombre = "Cambiado"; // this se refiere a este objeto, a "obj"
        console.log(this);
    }
}
var that = this // Guardo la referencia a this

var cambia = function( str ){
    that.nombre = str; // Uso la referencia dentro de esta funcion
}

//---------------------

var awas = {
    saludar: saludar,
}

awas.saludar() // = "Hola undefined"

// existe algo que es como un objeto global, todas las variables y demas se guardan ahi.

var nombre = "Nombre" // esto se guarda en el objeto global al igual que la funcion
nombre.saludar() // "Hola Nombre"

var objeto2 = {
    edad: 13,
    getedad: function(){
        return(this.edad * 2);
    },
}

"METODOS" // Functions dentro de los objetos adquieren este nombre

"BUCLES FOR......IN"
//A veces queremos iterar sobre cada par clave-valor en nuestro objeto.

var usuario = {
    username: "Owen",
    password: "NashexDou",
    lovesJavascript: true,
    favoritenumber: 78
};

for(let clave in usuario){
    console.log(clave);
    console.log(usuario[clave]);
};

// NOTA FINAL: "TODO ES UN OBJETO"
























