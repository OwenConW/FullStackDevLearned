//#region   NODE.JS
/**
 *  Node esta escrito en C++  <--- *
 * 
 * 
 * - Motor V8 Google Chrome
 * 
 *  implementa ECMAScript
 * 
 *  Escrito en C++
 *  
 *  Puede correr por su cuenta y embebido en C++ <--- *
 * 
 *  V8 + libuv
 *  
 *  Manera de organizar codigo para que sea reusable (modulos)
 *  Poder leer y escribir archivos
 *  Leer y escribir en Bases de Datos
 *  Enviar y recibir datos de interntet
 *  Poder interpretar los formatos estandares
 *  Alguna forma e manejar procesos que lleven mucho tiempo
 * 
 *  El motor v8 no puede hacer estas cosas, ahi es donde se mezcla con LIBUV
 * 
 *  NodeJS
 *  Motor v8 chrome(C++), Libuv(C), NodeJS Binding, NodeJS Core Library(JavaScript)
 *  -Herramienta que nos va a permitir trabajar en back end utilizando JS
 * 
 *  Para abrir node en la consola se hace mediante el comando "node"
 * 
 *  Para correr un archivo en la consola, "node archivo.js"
 * 
 *  NPM: Node Package Manager  (Libreria )
 * 
 *  Package.json ---> npm init
 * 
 *  Versionado: Semantic Versioning
 * 
 *  1.3.4
 *  1.3.  4 (<- Patch, Arreglar un error/fix, retro compatible)
 *  1.  3 (<- Minor, nueva funcionalidad, retro compatible) .4
 *  1 (<- Major, Breaking changes ) 3.4
 * 
 * ^1.3.4  <-- solo acepta versiones con cambios en el minor o en el patch
 * ~1.3.4  <-- solo acepta versiones con cambios en el patch
 * 
 * Comandos de npm 
 * npm install / npm i
 * npm update
 * npm audit
 * npm start
 * npm test
 * npmt run {nombreScript}
 * 
 */

//#endregion
//#region   PROMISES
/*
   Una promesa representa el eventual resultado de una operacion asincronica
   Las promesas en js son objetos, que representa y gestiona el lifecycle de una respuesta futura
  
   El objeto mantiene dentro suyo:
  
   status(pending, fulfilled, rejected)
    information(value or a reason)
    
   .then recibe dos argumentos (o podria recivir) el primero succesfullHandler y errorHandler

   fetch(.......)
    .then(res => {          
        console.log(res )  <---- succesfullHandler
    }, err => {
        console.log(err)   <---- errorHandler
    })

   .catch es un .then que solo sabe recibir errores, como hacer un .then(null, () => {})   se encarga de manejar los errores de 
   cualquier error

    var fs = require("fs")

   function promiseFunction(){
       var promise = new Promise(function(resolve, reject){
           fs.readFile("./archivo.txt", "utf8", function(err, data){
               if(err){
                   return reject(Error("Algo se rompio"))
               }
               resolve(data)
           })
       })
       return promise
   }

   Promise.all([p1, p2, p3])  <--- dispara todas las promesas
    .then(value => {
        console.log(values) <--- devuelve un array con los resultados de las promesas ejecutadas en orden sin importar su tardanza
    })

    
 */
//#endregion
//#region   WEB SERVER
/*
  Un servidor web es cualquier computadora o sistema que procese solicitudes (request) y devuelva una respuesta (response) a travez
  del protocolo de red

  Encapsulacion es el hecho de que los datos se van transformando a pedida que viaja

  Protocolos
  TCP/IP model:
  -Application  --> HTTP, FTTP, TELNET, NTP, DHCP, PING
  -Transport <-- Se encarga del transporte seguro --> TCP, YDP  <--- La informacion se va enviando de a poco al servidor, el protocolo
  TCP si algun fragmento de informacion se pierde, la vuelve a enviar, en cambio el YDP manda todo y si se pierde algo fuiste.
  -Network --> IP, ARP, ICMP, IGMP
  -Network Interface --> Ethernet

  Protocolo HTTP 
   http://host:port/path/file
  
  Crear un servidor

  importamos http de http

  http.createServer(function(req, res){                     <-- importa el orden req = request, res = response
      res.writeHead(200, {"Content-Type": "text/plain"})   <-- metodo que escribe en la cabecera, el 200 es el status code
                                                             (estado de la respuesta), y lo otro, el "formato" de la respuesta
      res.end("Hola, mundo!\n")     <-- Mensaje final
  }).listen(3000, "127.0.0.1");    <-- Especificamos que "escuche" en que puerto y que direccion

  ..................

  importamos http de http y fs de fs

  http.createServer(function(req, res){
      res.writeHead(200, {"Content-Type": "text/html"})
      var html = fs.readFileSync(__dirname + "html/index.html")
      res.end(html)
  }).listen(3000, "127.0.0.1")

  va a buscar a al direccion, lee el archivo y lo carga en la var html, q se va a convertir en la respuesta del servidor

  ----------------

importamos http de http y fs de fs

  http.createServer(function(req, res){
      res.writeHead(200, {"Content-Type": "text/html"})
      var html = fs.readFileSync(__dirname + "html/index.html", "utf8")
      var nombre = "Soy Henry!"
      html = html.replace("{nombre}", nombre);
      res.end(html)
  }).listen(3000, "127.0.0.1")

  Cuando no aclaramos la codificacion como en este caso (utf8) lo que se guarda es un BUFFER, es decir el archivo en cuestion pero
  con miles de numeros ilegibles, en el caso anterior no nos interesaba ya que simplemente queriamos mostrarlo, en cambio en este
  caso quiero remplazar la linea del html "{nombre}" por un valor, por lo que es necesario tener codificado a utf8. (replace es un
  metodo de strings que remplaza lo que se ingresa en el primer paramtro por lo que se ingrese en el segundo)

  -------------------------

  importamos http de http y fs de fs

  http.createServer(function(req, res){
      res.writeHead(200, {"Content-Type": "application/json"})
      var obj = {
          nombre: "Owen",
          apellido: "Perez"
        }
      res.end(JSON.stringify(obj))
  }).listen(3000, "127.0.0.1")

  en este caso vamos a mandar una respuesta de json, cuando hacemos el end, haciamos lo inverso a que en el fronted, un objeto js
  lo voy a convertir a JSON, lo que se conoce como cerializarlo (del otro lado, decerializarlo) esto porque el objeto en el fondo
  es una direccion en memoria, si yo envio el objeto, al usuario le llegaria el espacio en memoria y mostraria lo que el mismo tenga
  en dicho espacio

  --------------------------

   importamos http de http y fs de fs

http.createServer(function(req, res){
      
    if(req.url === "/"){
        res.writeHead(200, {"Content-Type":"text/html"})
        var html = fs.readFileSync(__dirname + "/html/index.html")
        res.end(html)
    }

    if(req.url === "/api"){
        res.writeHead(200, {"Content-Type":"application/json"})
        var obj = {
            nombre: "Juan",
            apellido: "Perez"
        };
        res.end(JSON.stringify(obj)
    }

}).listen(3000, "127.0.0.1")

En este caso, estamos usando req, el que va a ser un objeto gigante sobre la informacion de la solicitud, y accedemos a la prop
url

--------------------

importamos http de http y fs de fs

http.createServer(function(req, res){
      
    if(req.url === "/"){
        res.writeHead(200, {"Content-Type":"text/html"})
        var html = fs.readFileSync(__dirname + "/html/index.html")
        res.end(html)
    }

    if(req.url === "/api"){
        res.writeHead(200, {"Content-Type":"application/json"})
        var obj = {
            nombre: "Juan",
            apellido: "Perez"
        };
        res.end(JSON.stringify(obj)
    }else{
        res.writeHead(404)
        res.end()
    }

}).listen(3000, "127.0.0.1")

En este caso se contempla el caso en el que se intente ingresar a una ruta no especificada tirara error

Buscar http content type header

*/
//#endregion
//#region   ADVANCED PROMISES
/*
.then = una nueva promesa
Por eso pueden encadenarse

Cuando a una promesa, le hago un punto then pero este no tiene handler, ni de si se resuelve o si se rechaza, se crea una nueva 
promesa q se va a resolver o a rechazar de la misma manera que la primer promesa

-Si un .then con un handler, retorna un resultado, sea de errorhandler o succeshandler, la nueva promesa se va a resolver o rechazar
com ese resultado retornado.
-Si un .then con un handler, retorna una promesa, la nueva promesa se asimila, y mi nueva promesa es igual a la promesa retornada
-Si un .then con un handler, retorna o arroja un error, la nueva promesa se va a rechazar al error arrojado
*/
//#endregion
//#region   EXPRESS
//Es un framework web rapido, minimalista y flexible --> npm i express

// var express = require("express")
// var app = express()

// app.get("/", (req, res) => {
//     res.send("estoy en /")
// })

// app.get("/html", (req, res) => {
//     res.send("<h1>ESTOY EN HTML</h1>")  //tiene la intelingencia de detectar de esta manera el html
// })

// app.get("/json", (req, res) => {
//     const obj = {nombre: "owen", apellido: "bonoris"}
//     res.json(obj)
// })

// app.get("/status", (req, res) => {
//     res.sendStatus(404)   
// })

// app.get("/msg/status", (req, res) => {
//     res.status(404).send("Algo anda mal")   
// })

// app.get("/user/:name", (req, res) => {
//     res.json({user: req.params.name})   
// })

// //express tiene que ir de lo mas especifico a lo mas variable

// app.get("/ab?cd", (req, res) => {  // el caracter antes del ? se vuelve opcional, esta ruta matcheara con abcd y acd
//     res.json("ab?cd")   
// })

// app.get("/ab*cd", (req, res) => { // el caracter antes del * se puede repetir infinidad de veces, matcheara con abcd, abbcd, abbbcd...
//     res.json("ab*cd")   
// })

// app.get("/query", (req, res) => {
//     console.log(req.query) // ---> si ingreso en la ruta /query?nombre=owen,  esto va a consologear   {nombre: "owen"}
//     res.send("algo")   ///query?nombre=fede&apellido=bonoris  --> {nombre: "owen", apellido: "bonoris"}
// })
 
// //-----------POST---------------

// // Usar postman

// app.post("/users", (req, res) => {
//     console.log(req.body) // express no sabe leer el codigo, por lo tanto entra en juego un middleware
//     const {name, lastName} = req.body
//     res.send(`Usuario ${name} ${lastName} creado con éxito`)
// })

// //--------MIDDLEWARE----------

// app.use(function(req, res, next){
//     console.log("estoy en: ", req.url) //si no le paso una ruta al use, se aplica para todos los get, y la funcion funciona como middleware
//     next() // este next es lo q da el control de nuevo a la ruta, una vez que termine su papel el middleware
// })

// app.use(express.json()) // como estamos usando un middleware ya creado por express, no es necesario el req, el res, el next

// app.post("/users", (req, res) => {
//     console.log(req.body) // esto ahora sera interpretado de manera correcta gracias al middleware de la linea de arriba
//     const {name, lastName} = req.body
//     res.send(`Usuario ${name} ${lastName} creado con éxito`)
// })

// app.listen(3000)

// // manera de modularisar el codigo

// //----archivo x.js
// var express = require("express")
// var router = express.Router()

// module.exports = router.get("/", (req, res) => {
//     console.log("Estoy en html")
//     res.send("<h1>Estoy en /html</h1>")
// })

// //-----archivo rutas

// const getHtml = require("url")

// app.use("html", getHtml)
/*

*/
//#endregion
//#region   TESTING
/*
Sirve testear? --> DEPENDE
TEST:
Unitarios -> testeas cada parte de la app, cada funcion, etc
Integration tests -> testea q todas las partes de la app funcionen integrados
End to End -> como el usuario interactua con la app

Unit testing

Un buen test unitario deberia ser:
•COMPLETAMENTE AUTOMATIZABLE
•PODER EJECUTARSE EN CUALQUIER ORDEN EN CONJUNTO CON OTROS TESTS
•SIEMPRE RETORNA EL MISMO RESULTADO, NO IMPORTA CUANTAS VECES LO CORRA
•ES RAPIDO
•TESTE UN SOLO CONCEPTO LOGICO DEL SISTEMA
•ES FACIL DE ENTENDER AL LEERLO
•ES FACIL DE MANTENER

JEST <- Framework
npm install --save-dev jest

{
 "scripts":{
     "test": "jest"
 }
}

CLI Options

jes test-pattern
jest path/to/test.js
jest -t name-spec

jest --watch
jest --watchAll

jest --verbose
*/

// function sum(a, b){
//     return a + b
// }
// // module.exports = sum
// //------- TEST ARCHIVO

// // const sum = require("archivo.test")

// it("should return 8 if adding 3 and 5", () => {
//     expect(sum(3, 5)).toBe(8)
// })

//Expect devuelve un objeto, donde se pueden invocar los matchers:

/*
 •toBe: igualdad exacta "==="
 •toEqual: verificacion recursiva de cada prop del obj o elemento del arreglo
 •toBeNull, toBeUndefined, toBeDefined
 •toBeTruthy: verifica q el valor sea true, pero no necesariamente el booleano true
 •toBeFalsy: verifica q el valor sea false, pero no necesariamente el booleano false
 •toBeGreaterThan, toBeGreatherThanOrEqual, toBeLessThan, toBeLessThanOrEqual: para numeros
 •toBeCloseTo: para nums decimales
 •toMatch: compara contra una expresion regular o una porcion de string
 •toContain: verifica si dentro de un arreglo existe un elemento
 •toThrow: verifica si la funcion arroja un error

 si se agrega el NOT invierte el proposito

 not.toBe --> que no sea igual a  "!=="

    •it: test
    •xit: skipeo el test
    •decribe: conjunto de tests it's
    •xdecribe: skipea el cojunto de tests it's
    •it.only: hace que ese test sea el unico en ejecutarse, los demas quedaran skipeados

ASINCRONICAS:
it("should resolve to Henry Promise", () => {
    return promisifiedFunction(true).then(data => {
        expect(data).toBe("Henry Promise")
    })
})

it("should resolve to Henry Promise", () => {
    return expect(promisifiedFunction(true).resolves.toBe("Henry Promise"))
})

it("should resolve to Henry Promise", async () => {
    const data = await promisifiedFunction(true)
    return expect(data).toBe("Henry Promise")
})

----------

it("should rejected to Rejected Promise", () => {
    expect.assertions(1)   
    return promisifiedFunction(false).cathc(error => {
        expect(error).toMatch("Rejected Promise")
    })
})

it("should rejected to Rejected Promise", () => {
    return expect(promisifiedFunction(false).rejects.toBe("Rejected Promise"))
})

it("should resolve to Henry Promise", async () => {
    expect.assertions(1)   
    try{
        await promisefiedFunction(false);
    }catch(error){
        expect(error).toMatch("Rejected Promise")
    }
})

*/

//#endregion
//#region   ASYNC AWAIT
/*
      FUNCTIONES GENERADORAS
Funcion que se le puede "poner pausa", "ponerle play"

Sintaxis:

function* generatorFunction(){
    yield  --> pone pausa y devuelve un objeto {value, done}
}
La function devuelve un objeto con el control 

            ASYNC AWAIT

Permite codigo asincrono basado en promesas sin necesidad de encadenar explicitamente promesas

async function asynCall(){
    const result = await resolveAfter2Seconds();
}

una function asyn siempre devuelve una promesa
se le puede poner un await a una funcion

Metodos que aceptan cb (filter, forEach, map, etc) no acepta
Los errores se manejan con un try catch

*/
//#endregion









