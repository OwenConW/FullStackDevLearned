//#region   DOM
/*                     
 * Cuando creamos una pagina se realizan unos procesos
 * 
 * 1. Construccion del DOM
 * 2. Construccion del CSSOM
 * 3. Ejecuta JavaScript
 * 4. Creacion del Render Tree
 * 5. Generacion del Layout
 * 6. Painting
 * 
 * 1. CONSTRUCCION DEL DOM(Document Object Model)
 *  Convierte en "arbol" todas las etiquetas de mi html.
 * 
 * 2. CONSTRUCCION DE CSSOM (CSS Object Model)
 *  Convierte en "arbol" tambien pero con la especificacion de estilos.
 * 
 * 3. EJECUTA JAVASCRIPT      (async para q primero parsee el DOM y luego se ejecute js)
 *  Evita el parseo del DOM (no termina de cargar la pagina)
 * 
 * 4. Creacion del Render Tree
 *  El render tree se queda con los elementos que se van a ver en pantalla siendo una mezcla del DOM y del
 *  CSSOM.
 * 
 * 5. Creacion del Layout
 *  Determina el tamaño/limites del viewport,
 * 
 * 6. Painting
 *  La parte visible se convierten en pixeles que se van pintando
 * 
 * 
 * 
 *  DOM API
 * 
 * El navegador nos da una API para interactuar con el dom usando JavaScript
 * Esta api nos permite:
 * -Inspeccionar los elementos y la estructura del documento.
 * -Modificar la estructura: agregar, modificar o eliminar elementos HTML o atributos
 * -Modificar el contenido del documento.
 * -Modificar los esticlos de CSS.
 * -Agregar o eliminar elementos.
 * -Reaccionar a determinados eventos
 * -Etc...
 * 
 * 
 *  -Objeto document:
 * 
 *  Selectores: getElementById | getElementsByClassName | getElementsByTagName
 *  querySelector("elemento" | ".clase" | "#id")
 *  querySelectorAll()
 * 
 *  Elements 
 *  Los elementos html eredan de otras clases, node, EventTarget
 * 
 *  
 *  -EVENTOS:
 *  Un evento es una señal que algo sucedio. Todos los nodos del DOM pueden generar estas señales.
 *  Un EventListener es el encargado de escuchar por esas señales y hacer algo.
 * 
 *  .addEventListener(evento, funcion)
 * 
 *  Ejemplo:
 * 
 *  var divs = document.getSelectorAll("div")
 *  for(let i = 0; i < divs.length; i++){
 *      divs[i].addEventListener("click", function(e){
 *          alert("Clickeaste: "+ e.target.innerText);
 *      }) 
 *  }
 *  
 *  divs.forEach(function(element){
 *      element.addEventListener("click", function(evento){
 *          if(evento.target.style.background == "gray")
 *              evento.target.style.background == "plum";
 *      }else{
 *            evento.target.style.background  == "gray"
 *           }
 *       })
 *  })
 * 
 *  var count = 4
 *  document.getElementById("add").addEventListener("click", function(e){
 *  var nuevoDiv  = document.createElement("div")
 *  nuevoDiv.setAttribute("class", count)
 *  nuevoDiv.innerText = count
 *  document.body.appendChild(nuevoDiv)
 *  count++
 *  })
 * 
 *  ARRAY = [...ARRAY, x]
 */
//#endregion
//#region   CSS
 /*  Framework: marco de trabajo que facilita el desarrollo.
 * 
 *  Framework CSS: Bootstrap
 *  https://getbootstrap.com/       link de la stylesheet borrarle el min 
 * 
 * 
 *  CSS MEDIA QUERIS
 * 
 *  "Diseños responsive" ---> amoldar la pagina web a la vista de diferentes dispositivos
 *  
 *  @media screen and (max-width 992px){
 *    body{
 *      background-color: blue  
 *    }
 *  }
 *  
 *  @media screen and (max-width 600px){
 *    body{
 *      background-color: black;  
 *    }
 *  }
 * 
 *  Bootstrap Grid System
 * 
 *  col(extra small devices- menos de 576px)
 *  .col-sm-(small devices- mayor o igual a 576px)
 *  .col-md-(medium devices- mayor o igual a 768px)
 *  .col-lg-(large devices- mayor o igual a 992px)
 *  .col-xl-(xlarge devices- mayor o igual a 1200px)
 * 
 * 
 *         CSS PREPROCESSORS
 * 
 *  Que es un preprocesador? Un programa que nos permite utilizar una sintaxis diferente a la de css, hacer
 *  cosas que en principio en css no se podrian hacer y luego la sintaxis se terminaria pasadon a css
 * 
 * -------> {LESS} <--------  Less css
 * 
 *  @nombre: valor;
 *  @color-fondo: #F55;
 *  @width: 10px;
 *  @height: @width, + 10px;
 *  
 *  h1{
 *      background-color: @color-fondo;
 *      width: @width;
 *      height: @heigth;
 *  }
 *  Se pueden ejecutar funciones para el codigo tambien 
 * 
 * 
 * 
 *  ARCHIVO INDEX.less{
 *          @import-> subarchivos
 *  }
 * 
 *  MIXINS:
 *  .important-text{
 *      color: red
 *  }
 * 
 *  .danger{
 *      .important-text()
 *      +nuevas reglas
 *  }
 * 
 *  MIXINS con PARAMETROS
 * 
 *  .bordered(@color; @width){               // para pasarle valores por defecto (@color: red; @width: 20px)
 *      border: @width- solid @color;    
 *  }
 * 
 *  .myArticle{
 *      .bordered(blue; 1px)
 *  }
 *  
 * 
 *  HERENCIA
 * 
 *  &:extend()
 * 
 * FLEX BOX:
 * 
 * flex-direction:
 *  row
 *  row-reverse
 *  column
 *  column-reverse
 * 
 * justify-content:
 *  flex-start
 *  flex-end
 *  center
 *  space-between
 *  space-around
 *  space-evenly
 * 
 * align-items:
 *  flex-start
 *  flex-end
 *  center
 *  baseline
 *  strech 
 * 
 * para elementos individuales
 * 
 * order: num
 * align-self:   mismos valores de align-item
 * 
 * si tenemos muchos elementos encimados
 * 
 * flex-wrap:  nowrap - wrap - wrap-reverse
 * 
 * align content:
 *  flex-start
 *  flex-end
 *  center
 *  space-between
 *  space-around
 *  stretch 
 * 
 * flex-flow
 * flex-flow: column-reverse wrap-reverse;
    justify-content: center;
    align-items: flex-end;
*/
//#endregion
//#region   ES6
/* ECMA: Es una organizacion internacional basada en membresias de estandares para la comunicacion y la
 * informacion
 *    
 * Nuevas Features:
 * let - const
 * Arrow Function
 * Desestructuracion
 * El operador Spread
 * Template Literals
 * 
 * let - const
 * VAR   vive en contextos de ejecucion.
 * LET   vive en bloques de codigo.
 * CONST vive en bloques de codigo y no puede ser pisada.
 * 
 * Arrow Function
 * 
 * var arr = [1, 2, 3, 4]
 * var nuevo = arr.map(n => n + 1)
 * () => codigo
 * (arg1, arg2) => codigo
 * si no pongo llaves, es decir (n => n + 1) es igual a escribir  (n){return n + 1}
 * si tengo una funcion con logica es necesario las llaves y el return, en ese caso de arriba es un return
 * inmediato
 * 
 * var fn = () => {
 *   
 * }
 * 
 * que pasa con el this?
 * 
 * var bob = {
 *     name: "bob",
 *     friends: ["Fede","Fran", "Toni"],
 *     printFriends(){
 *        this.friends.forEach(function(f){
 *         console.log(this.name + " knows " + f)})   // esto devolveria undefined knows fede porque el
 *                                                          this.name no hace referencia al objeto bob porque 
 *              //crear la var that                     ya no esta en el metodo de un objeto, si no en el
 *                                                      callback 
 *     }
 * }
 * 
 * Arrow
 * 
 * var bob = {
 *     name: "bob",
 *     friends: ["Fede","Fran", "Toni"],
 *     printFriends(){
 *        this.friends.forEach(f =>                     // las arrows function bindean automaticamente el 
 *                                                         this al contexto que es creado, por lo que esto 
 *                                                         funcionaria
 *         console.log(this.name + " knows " + f))
 *      }
 * }
 * 
 * problema de eso, es que cuando creamos un metodo en el prototype de una clase, como lo hacemos en el 
 * contexto global, el this hace referencia al contexto global y no a la clase como se esperaria 
 * 
 * HERENCIA DE CLASES
 * class Empleado extends Persona{
 *          constructor(nombre, apellido, empleo, sueldo){
 *             super(nombre, apellido);
 *             this.empleo = empleo;
 *             this.sueldo = sueldo;
 *             }
 * }
 * 
 * Se heredan los metodos sin necesidad de explicarlos
 * 
 * OBJECTS LITERAL:
 *
 * var obj = {};
 * 
 * function crea (nombre, apellido, prop, value){
 *      var obj = {
 *          nombre,           <-- con ES6 si la prop coincide con el valor q me pasan, se puede poner asi
 *          apellido,
 *          [prop]: value     <-- Propiedad dinamica
 *      }
 * }
 * 
 *  var nombre = "fede"
 *  var obj ) {
 *      nombre,
 *      saluda(){
 *          return "Hola"
 *      }
 *  }
 * 
 * 
 * TEMPLATE STRINGS   ` `
 * 
 * DESTRUCTURING
 * 
 * var arr = [1, 2, 3]
 * var [a, b, c] = arr      //   var[a,,c] = arr    (var a = arr[0]. var b = undefined. var c = arr[2])
 * // var a = arr[0]. var b = arr[1]. var c = arr[2]
 * 
 * var obj = {
 *  nombre: "Owen",
 *  apellido: "Perez",
 *  edad: 18
 * }
 * 
 * var {nombre, apellido} = obj
 * // var nombre = "Owen"
 * // var apellido = "Perez"
 * --------------------------
 * var {nombre: name, apellido: surname} = obj
 * // var name = "Owen"
 * // var surname = "Perez"
 * --------------------------
 * function g({nombre}){
 *       console.log(nombre);
 * }
 * g(obj)  ---> "Owen"
 * 
 * 
 * var [a, b, c] = []
 * console.log(a)   ----> no rompe el codigo (error), simplemente tira undefined 
 * 
 * 
 * Default
 * function f(x, y = 1){     <--- Si no pasan parametro le doy un valor default a y
 *    return x + y;
 * }
 * 
 * Rest
 * function f(cantidad, ...palabras){   <---
 *     console.log(cantidad);
 *     console.log(palabras);
 * }
 * f(4, "como", "va", "el", "M2")
 * // 4
 * // ["como", "va", "el", "M2"]
 * 
 * var arr = [1, 2, 3]
 * 
 * function f(x, y, z){
 *      console.log(x + y + z)
 * }
 * 
 * f(...arr)  --> f(1, 2, 3)
 * 
 * Spread
 * var obj = {a: 1}
 * var copia = obj
 * copia.b = 2
 * console.log(obj)   // {a:1, b:2}
 * console.log(copia) // {a:1, b:2}
 * 
 * 
 * var obj = {a: 1}
 * var copia = {...obj}  <----
 * copia.b = 2
 * console.log(obj)   // {a:1}
 * console.log(copia) // {a:1, b:2}
 * 
 * 
 * var arr1 = [1, 2, 3, 4]
 * var arr2 = [5, 6, 7]
 * var arr3 = [...arr1, ...arr2]  ----> [1, 2, 3, 4, 5, 6, 7]
 * 
 * var arr = [1, 2, 3];
 * var copiaarr = arr;
 * copiaarr[3] = "hola";
 * copiaarr  -->[1, 2, 3, "hola"]
 * arr  -->[1, 2, 3, "hola"]
 * 
 * var arr = [1, 2, 3];
 * var copiaarr = [...arr];
 * copiaarr[3] = "hola";
 * copiaarr  -->[1, 2, 3, "hola"];
 * arr  -->[1, 2, 3,];
 * 
 * 
 * Promises
 * .then()  ---> caso de que la promesa se cumpla
 * .catch()  ---> caso de que la promesa se cumpla
 * 
 * 
 * BABEL ---> cuando los navegadores no entienden el codigo actual se necesita de un "traductor"
 */
//#endregion
//#region   AJAX
 /* Protocolos de comunicacion entre front-end y back-end
 *
 * Antes con cada peticion del cliente al servidor se recibia un HTML, con AJAX o demas ahora se recibe 
 * un JSON el cual no recarga la pagina por cada peticion devuelta.
 * 
 *                      METODOS HTTP
 * 
 * get     /pet/{petId}
 * 
 * put     /pet
 * 
 * delete  /pet/{petId}
 * 
 * post    /pet/{petId}/uploadImage
 * 
 * 
 *                      EVENTOS
 * 
 * document.querySelector(".boton") --->  $(".boton")
 * document.querySelector(".boton").addEventListener("click") --->  $().click(function (){$.get})
 * 
 * <div id="respuesta">
 * </div>
 * 
 * var i = 1;
 * $(".boton").click(function{
 * 
 * Si es get o post $.
 * 
 * $.get("link" + i, function(data){
 *     var img = document.createElement("img");
 *     ima.src = data.url;
 *     var title = document.createElement("h3");
 *     text.textContent = data.title;
 *     $("#respuesta").append(img);
 *     $("#respuesta").append(title);
 *     i++
 *    })
 * })
 * 
 * Cualquier otro metodo, como por ejemplo DELETE
 * 
 * $.ajax({
 *  url: link,
 *  type: delete,
 *  success: function.....
 * })
 */
//#endregion
//#region   MODULOS Y BLUNDERS
 /*
 * Modulo:
 * Un modulo es un pedazo de codigo que cumple una tarea especifica y que indica sobre que piezas de 
 * codigo depende(dependencias)
 * 
 * Common JS: Esta manera de importar y exportar codigo de un archivo a otro creado por js, no es 
 * reconicido por el navegador.
 * 
 * 
 * exports.nombre = function x(){}
 * exports.nombre2 = function x2(){}
 * 
 * {
 *  nombre: function x(){}
 *  nombre2: function x2(){}
 * }
 * -----------------------------------
 * var x = require("./direccion.js");
 * 
 * x = 
 *  {
 *  nombre: function x(){}
 *  nombre2: function x2(){}
 * }
 * 
 * x.nombre // function x(){}
 * x.nombre2 // function x2(){}
 * 
 * 
 * 
 *  MODULE EXPORTS
 * module.exports.nombre = function x(){}
 * module.exports.nombre2 = function x2(){}
 * module.exports = function algo (){}         <---- si hago esto termino pisando el objeto module
 * A diferencia del exports (que si lo igualo a una funcion lo ignora) en este caso no, e igual que el
 * exports, no lo reconoce el navegador
 * 
 * 
 *   ES6
 *   
 *  (compatible con los navegadores)
 * 
 * export function n(x){return x+2}
 * export var owen = "Owen"
 * -----------------------------------
 * import {n, owen as OWEN} from "./direccion";
 * 
 * OWEN = "Owen"
 * n = function(x){return x+2}
 * 
 * 
 * y al script de html hay que agregar el atributo que es de type="module"
 * 
 * 
 * export default function myDefault(){
 *      console.log("Default")
 * }
 * 
 * import loquesemecanteelortoponer from "./direccion"
 * 
 * la sintaxis de importar algo sin {} destructurin como antes, es traer el default asignado con el nombre
 * que queramos
 * 
 * loquesemecanteelortoponer = function myDefault(){console.log("Default")}
 * 
 * 
 *      BLUNDERS
 * 
 * Le paso el archivo PADRE, el que no dependa de nadie, y el blunder se encarga de ir creando un archivo
 * unico y recorrer (el grafo de dependencias) todos mi archivos detectando las dependencias del padre y
 * de los hijos a la vez que traduciendo aquel codigo con ES6 que los browsers no suelen entender. Por lo
 * tanto a nuestro html lo unico que le pasariamos en lugar de todos y cada uno de los scripts y en orden,
 * unicamente deberia pasarle como script el archivo traducido blunder
 * 
 * Webpack
 * 
 * npm init
 * 
 * npm install --save-dev webpack webpack-cli
 * 
 * // package.json  <-- dentro de su propiedad scripts creamos la propiedad
 * "build": "webpack"
 * 
 * 
 * crear archivo webpack.config.js
 * El mismo debera tener:
 * 
 * module.exports = {
 *      entry: "./direcciondelarchivopadre",
 *      output:{
 *        path: __dirname + `/browser`,   //dirname es como decir en esta carpeta y lo otro, en la carpeta browser
 *        filename: `bundel.js`
 *      }
 * }
 * 
 * npm run build
 * 
 * Si quiero importar algo que instale, una libreria, un npm instal, lo require("nombre")
 */ 
//#endregion
//#region   REACT INTRO
 /*                                  
 *  Es una libreria de js que es declarativa eficiente y flexible, sirve para trabajar del lado del 
 *  fronted
 * 
 * IMPERATIVO (le decimos COMO queremos que se hagan las cosas):
 * const numbers = [4,2,3,6];
 * let total = 0;
 * for(let i = 0; i < numbers.length; i++){
 *      total += numbers[i]
 * }
 * return numbers;
 * 
 * DECLARATIVO (le decimos QUE queremos que se haga):
 * numbers.reduce((p, c) => p + c)
 *  
 * 
 * React internamente va a tener un virtual DOM, es como si hiciera una copia del DOM del navegador, arbol
 * de nodos html, que la va a utilizar internamente, va a estar comparando el virtual DOM con el DOM, mientras
 * esten iguales no va a hacer ningun tipo de cambio, si se detecta un cambio, analiza donde esta el cambio
 * y re-renderisa los cambios el el DOM del browser, por eso se dice q es EFICIENTE, esta escuchando cambio
 * y lo pinta en el browser sin actualizar la pagina
 * 
 * Es flexible porque separa nuestra plataforman en muchos componentes
 * 
 * Principio de resposabilidad unica, es una ventaja y requerimiento a la hora de trabajar, se espera que
 * cada componente de mi pagina web tenga una unica responsabilidad
 * 
 * Un componente recibe propiedades, hace algo con esas propiedades y devuelve codigo HTML que se va a ver
 * reflejado en el DOM, es decir, en algun sentido cada componente se va a comportar como una funcion
 * 
 * Va a haber dos tipos de componentes, Componentes Funcionales y De clase
 * 
 * Funcional:
 * 
 * function Welcome(props){
 *      return <h1>Hello, {props.name}</h1>
 * }
 * 
 * De Clase:
 * 
 * class Welcome extends React.Component{
 *      render(){
 *          return <h1> Hello, {this.props.name}</h1>
 *      }
 * }
 * 
 * La diferencia es que el componente funcional tiene un return y accede a las propiedades de un objeto 
 * directamente, mientras que los componentes de clase tienen un metodo render donde ahi se encuentra el
 * return y se accede a las propiedades con el this.
 * 
 * React   cosas de mobile y escritorio
 * React-dom  cosas de escritorio
 * React-native    cosas de mobile
 * 
 *  JSX
 * 
 * Es una extension de sintaxis de JS.
 * { } para ejecutar o buscar codigo de Js
 * Para llamar un componente funcional </>
 * El return requiere () si hay saltos de lineas, y ademas es necesario devolver todo dentro de una etiqueta
 * <div> o fragmentos de react <>
 * 
 * function Persona(props){
 *      return (
 *          <h1>
 *              Hola, {props.nombre} {props.apellido}
 *          </h1>
 *      )
 * }
 * 
 * function container(){
 *      return(
 *          <div>
 *              <persona nombre="Owen" apellido="Perez"/>       <--- Asi se llaman los componentes funcionales
 *          </div>                                                y de la misma manera le paso los parametros
 *      )
 * }
 * 
 * 
 * 
 * 
 * Personas = [{Nombre: "Owen"}, {Nombre: "Pablo"}, {Nombre: "Agustina"}]
 * 
 * function Container(){
 *      return (
 *         <div>
 *          {
 *            Personas.map(obj => <persona nombre={obj.nombre})    
 *          }
 *         </div>
 *      )
 * }
 * 
 * ReactDOM.render(   <--- Recibe que quiere pintar y donde
 *  <Container/>,         <-----Ejecuto el componente funcional container declarado arriba
 *  document.getElementById("id")  <---Donde guardo el return de
 * )
 * 
 * 
 * Lo que llamamos argumentos o atributos en funciones en JavaScript, en react y JSX se le llaman PROPS
 * 
 * 
 * WEBPACK 
 * module.exports = {
 *      entry: "./direcciondelarchivopadre",
 *      output:{
 *        path: __dirname + `/dist`,   
 *        filename: `[name].js`
 *      },
 *      module: {
 *          rules: [
 *              {
 *               test: /\.(js|jsx)$/,
 *               exclude: /node_modules/,
 *               use: {
 *                  loader: 'babel-loadre',
 *                  options: {
 *                      presets: ['@babel/presets-react', '@babel/presets-env']
 *                  }
 *               }
 *              }
 *          ]
 *      }
 * }
 * 
 * ----------------------------------------------------------------------------
 * para empezar un proyecto desde 0 npx create react-app
 * prioridad en css
 * tag
 * class
 * id
 * estilo en linea
 * 
 */
//#endregion
//#region   REACT ESTILOS
 /*
 * children en react, vienen por props
 * Normalize.css para aplicar estilos de manera global 
 * letras : fonts:google
 * colores : colorhunt
 * botones: css3buttongenerator
 * import "./normalize.css"
 * creo un archivo global para estilos globales
 * 
 * function App(){
 *  return <h1 classname=""></h1>
 * }
 * 
 * al hacer clases en estilos globales, cualquier clase con ese nombre se le aplicaran
 * los estilos, queramos o no, ya que es global.
 * el global se puede usar para poner cosas que no quiero que cambien, para la fuente
 * para reglas globales.
 * 
 * 
 * variables en css
 * :root {
 *  --primary-color:
 *  --primary-font-color:
 * }
 * .x{
 *  color: var(--primary-font-color)
 * }
 * Se pueden acceder desde cuaquier lado, la ventaja es que siempre utilize las var
 * donde use varias veces algo, solo voy a tener que cambiarlo 1vez
 * 
 * 
 * CSS MODULE, manera de agregar estilos a un componente que no sea de manera global ni inline
 * 
 * LEGACY   importar (gracias a webpack) un archivo css para aplicarle estilo a un componente
 *   
 *  module.exports = {
 *      ....
 *      ....
 *      },
 *      module: {
 *          rules: [
 *              {
 *               test: /\.css$/,
 *               use:['style-loader', 'css-loadre']
 *                  }
 *               }
 *              }
 *          ]
 *      }
 * }
 * PROS: No hay que aprender nada nuevo, compatibilidad
 * CONTRAS: Los estilos son globales, encontra de la filosofia de componentes(modularisados, tarea unica)
 * mismos problemas de organizacion que con CSS
 * 
 * INLINE STYLING
 *  * Propiedades de ultimo recurso, en la propiedad style -> recibe obj
 * 
 *  function App(){
 *  return <h1 classname="a" style{{textTransform: "lowecase"}}></h1>
 * }
 * 
 * como no hay - en js, si tengo As-b pasa a AsB | Font-size a FontSize
 * 
 * 
 * CSS MODULES
 * 
 * Es lo mejor de los dos mundos, podemos definir css local y global.
 * Si no uso npx, configurar webpack.
 * Si uso npx,  los locales .modules.css y los globales .css
 * Importar la var del css desde donde se encuentre.
 * 
 * import s fron "./askfaj.module.css"
 * s = {clases definidas}
 * s.nombredelaclase
 * <Producto className={s.nombredelaclase}/>   1 regla o conjunto de regla
 * <Producto className={`${s.nombredelaclase} ${s.otronombre}`}    + de una
 * Define un hash unico para cada clase => estilos locales
 * 
 * module.exports = {
 *         ......
 *          {
 *              test: /\.css$/,
 *              use: ["style-loader",{
 *                  loader: "css-loader",
 *                  options:{
 *                      modules: true,
 *                      localIdentName: "[path][name]__[local]--[hash:base64:5]",
 *                      camelCase: true,
 *                      ignore: "/node_modules/",
 *                  }
 *              }]
 * 
 *          }
 *      .........
 * }
 * PROS: Componentizado, no hay coliciones, estilos locales.
 * CONTRAS: Perdemos los estilos globales aunq se podria convinar con la primera forma
 * 
 *      test: /\.gcss$/,
 *      use: ["style-loader", "css-loader"],
 * 
 * voy a tener un archivo css en el cual voy a importar en una variable un objeto que va a tener todas las
 * clases, mientras q mi archivo global va a pasar a llamarse gcss al final para que asi se reconozca
 * que son los estilos globales y no hay que exportar ninguna de las reglas ni del global ni de los locales
 * ya que de eso se encarga webpack 
 * 
 * 
 * STYLE COMPONENT
 * 
 * Es un paquete por lo tanto se instala.
 * 
 * consta Producto = styled.div`
 *      color: black;
 *      font-size: 20px;
 * `
 * 
 *  function Product(props){
 *      return (
 *          <Producto> afsfsadg </Producto>
 *      )
 * }
 * 
 */
//#endregion
//#region    -LIFECICLES
 /*  
 *  ESTADOS
 * 
 *  El estado esta dentro del componente, va a ser un valor que el componente va a tener de manera interna,
 *  a diferencia de por ejemplo las props que le llegan
 * 
 *  class Contador extends React.Component{
 *      constructor(props){
 *          super(props);
 *          this.state = {
 *              contador: this.props.numero
 *          }   
 *          this.onButtonClick = this.onButtonClick.bind(this)
 *      }
 *  }
 * 
 * En los componentes de clase de React, los this de los metodos creados no apuntan a nada, en los componentes
 * el this va a apuntar al mismo solo en el render, en los ciclos de vida o en el constructor, por lo tanto
 * se necesita BINDEAR o construir el metodo con arrowfunction:
 * 
 *  onButtonClick = () => {
 *      this.setState((state) => {
 *          return {contador: state.contador + 1}
 *      })
 *  }
 * 
 * NO SE PUEDE MODIFICAR UN ESTADO COMO SI FUERA UNA VARIABLE.
 * 
 * Si tengo que modificar un estado, llamo a la funcion setState({contador: this.state.contador + 1})
 * React trabaja de una manera en la cual esta escuchando cambios, es decir, sus props y su estado, es decir
 * que solamente va a renderizar cuando se detecte un cambio en una de esas dos.
 * 
 * El actualizar un estado lleva un retraso leve, lo cual si conosologeamos desoues de setear nuestro 
 * estado ira siempre mostrando el valor anterior del estado a pesar q este este cambiado, para eso se 
 * le pasa un cb como segun parametro al setState
 * 
 * onButtonClick = () => {
 *      this.setState((state) => {
 *          return {contador: state.contador + 1}
 *      })
 *      console.log(this.state.contador)
 *  }
 * 
 * this.state.contador: 6           console.log = 5
 * 
 * 
 * (en el ejemplo de aca abajo habria que bindear en el constructor el this o usar arrow function)
 * function onButtonClick(){
 *      this.setState({
 *          this.state.contador: this.state.contador + 1
 *      }, function(){
 *          console.log(this.state.contador)
 *       })
 * }
 * 
 * this.state.contador: 6           console.log = 6
 * 
 * 
 * function clickThree(){
 *      this.setState(state => {
 *          return {
 *              contador: state.contador + 1
 *          }
 *      })
 * }
 * //se soluciona la espera de cambio de estado
 * 
 * 
 * NO ES NECESARIO GUARDAR TODO POR ESTADO, SOLO AQUELLO QUE TENGA QUE CAMBIAR Y QUE NECESITE QUE SE 
 * RE-RENDERIZE
 * 
 * onChange va a estar a la escucha de un evento, si creo una funcion que este a la escucha del mismo
 * capture el evento, acceda al "target"(elemento que disparo el evento) y accedo al "value" y a la vez
 * por cada accion actualizo el estado, estoy tomando en tiempo y forma lo que el usuario vaya escribiendo
 * en un input
 * 
 * Por ejemplo: 
 * 
 * Escucha = (event) => {
 *      this.setState({
 *          mensaje: event.target.value
 *      })
 * }
 * 
 * 
 *                                           LIFE CICLES
 * 
 * Montaje
 * Actualizacion (New props, actualizacion en el estado)
 * Desmontaje
 * 
 * Cuando un componente se monte, se ejecuta primeoro el constructor y en segundo lugar el render y un 
 * milisegundo despues se ejecuta componentDidMount
 * 
 * Cuando se actualiza el componenete se re-renderiza, porq se vuelve a renderizar el componente y un 
 * milisegundo despues se ejecuta componentDidUpdate
 * 
 * Y por ultimo finaliza el ciclo de vida cuando el componente no se vaya a mostrar mas y un 
 * milisegundo antes se ejecuta componentWillUnmount
 * 
 * componentDidMount - componentDidUpdate - componentWillUnmount
 * 
 * El flujo de las props, la info, la data fluye desde el componente padre a los hijos pero de los eventos
 * al revez
 * 
 *                                          HOOKS
 * 
 * Los Hooks son una nueva API de React que nos permite tener estado y otras caracteristicas de React
 * 
 * useState (devuelve un valor con estado y una function para actualizarlo)
 * 
 * const {useState, useEffect} = React;
 * 
 * function Contador(props){
 *  const [contador, setContador] = useState(props.contador);
 *  let varContador = 100;
 *  
 *  let incrementarValue = () => {
 *      setContador(contador + 1);       <-- DILEY
 *      setContador(contador + 1);
 *  }
 * 
 *  const incrementarFunction = () => {
 *      setContador((prevState) => prevState + 1);     <-- Suma de a dos
 *      setContador((prevState) => prevState + 1);
 *  }
 * }
 * 
 */
//#endregion
//#region   ROUTING
/* 
 * Dependiendo en la url que me encuentre va a buscar un componente
 * 
 * Libreria React Router
 * 
 * npm i react-router-dom
 * 
 * import {HashRouter, Route} from "react-router-dom"
 * 
 * ReactDOM.render((
 *      <HashRouter>
 *          <App/>
 *      </HashRouter>
 * ))
 * 
 * 
 * HashRouter ----> # 
 * BrowserRouter ----> sin # 
 * 
 * const Root = (
 *  <HashRoute>
 *      <NavBar/>
 *      <Switch>           <--Pregunta en que path esta
 *          <Route path="/home">
 *              <h1>Nashe</h1>
 *          </Route>
 * 
 *          <Route exact path="/">  <--- "exact"amente lo que ponga es lo que se necesita para mostrar
 *          
 *          </Route>
 * 
 *          <Route  strict path="/casa/">     <---- tiene que ser estrictamente igual que se muestra
 *              <h1>Nashe</h1>                          con la barra del final, el exact no
 *          </Route>
 * 
 *          <Route sensitive path="/LoL">        <----tiene en cuenta las mayusculas y minusculas
 *              <h1>Nashe</h1>
 *          <Route>
 *      </Switch>
 * </HashRoute>
 * )        
 * 
 * <Link to="/"> Home </Link>
 * 
 * <NavLink to="/home" activeStyle={{
 *      color: "green"
 * }} Inicio </NavLink>
 * 
 * <NavLink to="/about" activeClassName="Selected"> About </NavLink>
 * 
 * El navlink  funciona igual que el link solo que al este ser ejecutado se le agrega una clase activa
 * o como en el ejemplo se la podemos dar nosotros, y la misma puede recibir reglas de css
 * 
 * 
 * Manera legacy 
 * <Route
 *  path="/home"
 *  component={params}    
 *    />
 *              
 * Tres objetos llegan sin querer ---> Location, History, Params
 * 
 * Puedo quererlos y accederlos de la sig manera:
 * 
 * <Route 
 *      path="/location"
 *      render={(props) => (
 *          <Location {...props} Ejemplo="Alguna otra prop"
 *      )}
 * Esta es la manera de buscar capturar esos tres objetos que nos llegan para a la vez poder pasar nuestras
 * props
 * 
 * Tambien se pueden pasar un "objeto" en lugar de una string en el path
 * 
 * 
 * 
 *  useLocation - useHistory - useParams       <-- importando esto para acceder de la manera actual
 * 
 * 
 * 
 * Se pueden tener ruteos anidados
 * 
 * Redirect       redirecionar a la ubicacion
 * 
 * <Redirect from="" to="">
 * 
 * Prompt      mensajes, condiciones
 * 
 * <Prompt message="Are you sure you want to leave?"
 * 
 * <Prompt 
 * when={estado}
 * messaje={location =>
 *      `Estas seguro de irte ${location.pathname}`}
 * 
 *  <Prompt 
 * messaje={location =>
 *      location.pathname.startsWith("/new")
 *      ? true
 *      : `Estas seguro de irte ${location.pathname}`}
 * 
 */
//#endregion
//#region   FORMS
 /*                                
 * Controlados / No ontrolados
 * 
 * Controlados(Los valores estan bindeados al estado del componente
 * Lo recomienda el equipo de react, Sigue los patrones de React y es mas predecible)
 * 
 * No COntrolados(Sacas el valor del DOM, Facil de hacer, no hay q aprender nada, lo que muestra en el 
 * input no lo podemos controlart y es menos predecible)
 * 
 * La importancia de las keys en los forms es para q pueda reconccer tanto el input como su valor, por 
 * ejemplo a la hora de moverlos, borrarlos, etc
 * 
 * (Las expressiones regulares son para verigicar patrones y caracteres  "regex para x cosa")
 * 
 * /\S+@\S+\.\S+/      string + @ + string + . + string     "owen@gmail.com" cumple la con dicion
 * 
 * usar el metodo .test(valor) para verificar si se cumple la condicion
 * 
 * PREVENT DEFAULT   .preventDefault
 * 
 * DINAMIC INPUTS
 * 
 */
//#endregion
//#region   DIPLOY
 /*              
 * (carpeta .gitignore  es la carpeta q ignora git a la hora de subir el repositorio, ejemplo node_modules
 * el .env   aunque es necesario subir esta carpeta)
 * 
 * ejecutar un npm run build nos da una carpeta build con nuestro proyecto estatico y se podria subirse
 * 
 * otra opcion es vercel.com, loggearse darle el permiso para el repositorio que quiera.
 * 
 * variables de entorno, son variables mas seguras
 * Por ejemplo la api key de mi app guardarla en la carpeta .env con el nombre de REACT_APP al principio
 * y accederlo con process.env.nombrevariableentorno y es neceseario q todas los links tengan el protocolo
 * de cifrado  httpS
 * 
 * Una vez hecho, configurarle a vercel nuestras variables de entorno
 * 
 * 
 */
//#endregion
//#region   REDUX
 /* 
 *                    
 *  ACTION --> STORE(*DISPATCHER ---> *REDUCER) --> NEW STATE 
 * 
 *  se define UI dispara ACTION se manda al REDUCER se actualiza en la STORE que contiene y modifica 
 * el ESTADO se vuelve a definir la UI
 * 
 *  one wey data flow de react que solo el componenete o los componentes padres podian pasar props
 *  a los hijos y una funcion que supiera actualizar el estado de un padre sin redux podria generarse
 *  problemas, para eso y por eso llega la libreria redux.
 * 
 * todos los estados van a estar en un estado global y los componentes que requieran alguno van a acceder
 * 
 * Principios de REDUX
 * 
 *  ° Unica fuente de verdad, el estado de toda tu aplicacion se almacena dentro de un solo store
 * 
 *  ° El estado es de solo lectura, la unica manera de modificar el estado es emitiendo una accion- un 
 * obj describiendo lo que paso
 * 
 *  ° Los cambios se aplican con funciones puras, para especificar como el estado se transforma a partir
 * de las acciones, escribimos reducers puros.
 * 
 * Siempre se termina reotrnando el nuevo estado
 * 
 * 
 *          ACCIONES, bloque de informacion que envia datos dese la app al store
 * 
 * --------------
 * const ADD_TODO = "ADD_TODO"
 * {
 *  type: ADD_TODO,
 *  text: "Build my first Redux app"
 * }
 * --------------
 * Estas acciones que creamos, las enviamos al store con el metodo
 * store.dispatch()
 * 
 * accion = {type: ..., info extra}  <--- como maximo 2 props, type es obligatoria
 * 
 * 
 *                         ACTIONS CREATOR
 * 
 * const ADD_TODO = "ADD_TODO"
 * 
 * function addTodo(text){
 *      return {
 *          type: ADD_TODO,
 *          text    
 *      }
 * }
 * 
 * addTodo("data")
 * 
 * Forma eficiente de crear acciones
 * 
 * 
 *                          DISPATCH()
 * 
 * La funcion es la encargada de enviar la peticion
 * 
 * 
 *                           REDUCER
 * 
 * Es una funcion que retorna el estado, evalua la accion a ejecutar, el estado etc.
 * 
 * const reducer(state, accion){
 *      switch (accion.type)
 *          case ADD_TODO:
 *               return ......
 *          case x:
 *               ...........
 * }
 * 
 * Ejemplo:
 * 
 * 
 *  function todos(state = [], action){
 *      switch (action.type){
 *          case "ADD_TODO":
 *             return [...state, {text: action.text, completed: false}] 
 *          case "COMPLETE_TODO":
 *             return state.map((todo, i) =>{
 *                 if(i === action.index){
 *                     return {
 *                        ...todo,
 *                        completed:true
 *                     }
 *                 }
 *                 return todo
 *             })   
 *      }
 *  }
 * 
 * ATENTO: Siempre hacer una copia del estado viejo, y en la copia hacer lo q quiero
 * 
 * const store = createStore(todos)  <---- store (se necesito importarlo de redux)
 * 
 * Si tengo mas de un reducer puedo usar la funcion combineReducers from redux para combinarlos
 * 
 * export default const todoApp = combineReducers({visibilityFilter, todos})
 * 
 *                           STORE
 * 
 * contiene el estado de la aplicacion.
 * permite el acceso al estado via getState
 * permite que el estado sea actualizado via dispatch(action)
 * registra los listeners via suscribe(listener)
 * maneja la anulacion del registro de los listeners via el retorno de la funcion suscribe(listener)
 * 
 * 
 * import {createStore} from "redux"
 * import todoApp from "./reducers"
 * 
 * const store = createStore(todoApp)
 * 
 * El suscribe se ejecuta siempre que se hace un cambio
 * 
 * 
 */
//#endregion
//#region   REACT-REDUX
/*
 *                            REACT-REDUX
 * 
 * Componentes presentacionales y containers ( Dumbs y Smart)
 * 
 * Smart: 
 * Como funcionan las cosas
 * Poco o nada de DOM
 * Sin estilos
 * Provee datos
 * Invoca las acciones
 * 
 * Dumbs:
 * Como se ven las cosas
 * Trabaja con sus props
 * Generalmente no tienen estado propio(Algunos si)
 * 
 * Los componentes Smart generalmente tendria q estar suscriptos a Redux
 * 
 * Presentacional / Dumb
 * 
 * Proposito: como se ven las cosas
 * Sabde de redux: Por lo general NO
 * Para leer datos: Generalmente lee de props
 * Para cambiar datos: Generalmente invoca callbacks de sus props
 * 
 *  Container / Smart
 * 
 * Proposito: como funcionan las cosas
 * Sabde de redux: Por lo general SI
 * Para leer datos: Generalmente se suscribe a los estados de Redux
 * Para cambiar datos: Generalmente envia acciones a Redux
 * 
 * import { Provider } from "react-redux"
 * 
 * 
 * render(
 *  <Provider store={store}>
 *        *toda mi app* 
 *  </Provider>, 
 * )
 * 
 * Esto permite que cualquier componente de mi app se pueda suscribir a redux
 * 
 *                      CREAR LA STORE CON REACT-REDUX
 * 
 * import {createStore, applyMiddleware} from "redux"
 * import rootReducer from "./reducers"
 * import thunlkMiddleware from "redux-thunk"
 * 
 * const store = createStore(
 *    rootReducer,
 *    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
 *    applyMiddleware(thunkMiddleware)
 * )
 * 
 * El primer parametro es el reducer, el segundo nos va permitir 
 * poder usar la extension devtools del navegador y el ultimo (Middleware) es para
 * cuando necesitamos utilizar acciones asincronicas, por ejemplo ir a una api con 
 * un fetch o demas (dentro de una accion) se utiliza la ultima linea
 * 
 * 
 * con mas de un reducer:
 * 
 *  const store = createStore(
 *    combineReducers({reducer1, reducer2}),
 *    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
 *    applyMiddleware(thunkMiddleware)
 * )
 * 
 * ----------------
 * 
 * El componente se trae las acciones que vaya a usar, pero se da a entender que pasan 
 * por props 
 * 
 * el conect conecta mi componente y espera dos parametros, en primer lugar
 * una parte del estado y en segunda las acciones y si no quiero alguno null
 * 
 * ---
 * const mapStateToProps = (state) => ({
 *      counter: state.count,
 * })
 * // para que mi componente tenga una prop que sea una parte del estado
 * ---
 * 
 * export default connect(mapStateToProps, {accion1, accion2, accion3})(componente)
 * 
 * export default connect(null, {accion1, accion2, accion3})(componente)
 * 
 * export default connect(mapStateToProps, null)(componente)
 * 
 * ----------------
 * 
 * function mapDispatchToProps(dispatch){
 *  return{
 *      increment: () => dispatch(increment())
 *      decrement: () => dispatch(decrement())
 *      reset: () => dispatch(reset())
 *      fetchPost: (num) => dispatch(fetchPost(num))
 *  }
 * }
 * 
 * export default connect(mapStateToProps, mapDispatchToProps)(componente)
 * 
 * -----------------
 * 
 * import * as actionsCreators from "./actions"
 * import {bindActionsCreators}
 * 
 * function mapDispatchToProps(dispatch){
 *  return bindActionsCreators(actionsCreators, dispatch);
 * }
 * 
 * Accion fetch
 * 
 * export function fetchPost(valor){
 *  return function(dispatch){
 *      dispatch(getPost())
 *      axios.get(`https://blabla.bla/bla${valor}`)
 *       .then(r => r.data)
 *       .then(d => dispatch(receivePost(d))
 *       .catch(e => console.log(e))
 *  }
 * }
 * 
 * accion getPost --->{type: "x"} --> loading: true
 * accion receuvePost  ----> {type: "x", action(recivida por props)} --> loading: false, post: action.post
 * 
 * 
 */
//#endregion
//#region   REACT-HOOKS
 /*
 *                                      
 * 
 * Hook de estado ---> useState
 * 
 * const [count, setCount] = useState(0)
 * 
 * -
 * 
 * Hook de efecto ----> useEffect  ---> import from react
 * 
 * Nos permite manejar ciclos de vida en componentes funcionales
 * Se monta el componente (didMount) se ejecuta el useEffect
 * useEffect(() => {}) <--- DidMount && DidUpdate
 * El useEffect pasandole como arg un cb se ejecuta cuando el componente nace y/o cuando se actualiza
 * (didUpadte)
 * 
 * El segundo parametro es lo que se conoce como arreglo de dependencia
 * useEffect(() => {}, [estado]) <--- DidMount && dodUpdate de estado
 * Dentro del arreglo le puedo pasar las props o los estados que quiero que este escuchando sus cambios
 * 
 * useEffect(() => {}, [estado, estado2]) <--- didMount && didUpdate selectivo (de estado o estado 2)
 * 
 * useEffect(() => {}, []) <-- Al estar sus dependencias vacias es equivalente a unicamente el didMount
 * 
 * Ejemplo:
 * 
 * useEffect(() =>{
 *     const funcionx = () => Hacexcosa
 *     hace.otra(cosa)
 *     return () =>{
 *        console.log(xcosa)
 *        hace.otra.puta(cosa)
 *     }
 * }, [])
 * En este caso y en como todos, lo primero que nos tenemos que fijar es si tiene segundo parametro y en 
 * caso de tenerlo que tiene en el array de dependencias, en este caso al estar vacio nos damos cuenta
 * rapidamente que se va a ejecutar cuando se crea, y un detalle importante es que retorna una funcion,
 * la misma se va a ejecutar cuando el componente se desmonte
 * 
 * para hacer un componentWillUnmount seria asi:
 * 
 * useEffect(() => {
 *      return () =>{
 *          x    
 *      }
 * }, [])
 * 
 * 
 * useDispatch, useSelector  from react-redux
 * 
 * const dispatch = useDispatch()
 * 
 * () => dispatch(saveName(name))
 * 
 * Me ahorro el connect y demas. Siendo esto equivalente al mapDispatchToProps
 * 
 * const nameRedux = useSelector(state => state.name)
 * 
 * Me traigo una parte del estado, equivalente al mapStateToProps
 */
//#endregion
//#region   REPASO
/*
 *                      COMO EMPEZAR UN PROYECTO DESDE 0
 * 
 * 
 * npx create-react-app nombre
 * 
 * Instalo react router dom 5.2
 * 
 * lo importo, envuelvo mi app
 * 
 * Para crear un componente, exportar react, decidir si de clase o de funcion, exportarlo
 * 
 * Componente de funcion ----> return
 * Componente de clase ----> render(){return()}
 * 
 * Acceder a las props de un componente de clase --->  this.props.x
 * Acceder a las props de un componente funcional ---> pasar por parametros y acceder
 * 
 *      Ej1 funcional:
 * 
 * function Home(props){
 *      return(
 *          <div>
 *              <p>{props.name}</p>
 *          </div>
 *      )
 * }
 * 
 *      Ej2 funcional:
 * 
 * function Home({name}){
 *      return(
 *          <div>
 *              <p>{name}</p>
 *          </div>
 *      )
 * }
 * 
 *      Ej1 clase:
 * 
 * class Home extends React.Component{
 *      render(){
 *          return{
 *              <div>
 *                  <p>{this.props.name}</p>
 *              </div>
 *          }
 *      }
 * }
 * 
 *      Ej2 clase:
 * 
 * class Home extends React.Component{
 *      render(){
 *      let {name} = this.props
 *          return{
 *              <div>
 *                  <p>{name}</p>
 *              </div>
 *          }
 *      }
 * }
 * 
 * -----------
 * 
 * Ruteo
 * 
 * 
 * <Route path={"/home"} component={Home}/>   <--- Sin props
 * 
 * <Route path={"/home"} render={() => <Home name={"owen"}/>}/>
 * 
 * <Route path={"/home"}>
 *    <Home name={"owen"}/>
 * </Route>
 * 
 * Estados
 * 
 * Funcionales ----> useState ---> let [input, setInput] => React.useState({name: "", lasName:""})
 * 
 * Class ---> constructor(props), super(props), this.state = { name: "", lasName: ""}
 * 
 * Moficar el estado:
 * 
 * Class ----> setState
 * 
 * Funcional  ----> setX
 * 
 * CICLO DE VIDA DE UN COMPONENTE
 * 1.CONSTRUCTOR  
 * 2.RENDER
 * 3.COMPONENTDIDMOUNT SI ESTA DEFINIDA (de clase) // useEffect(() =>{}, []) (de funcion)
 * 
 * POSIBLES CAMBIOS
 * SI HUBO CAMBIO EN UN VALOR DE LA PROP, CAMBIO EN EL ESTADO o FORCEUPDATE() 
 * //UPDATE(si alguna de las anteriores se cumplio, se entra en el capitulo UPDATE)
 *  1. SHOULDCOMPONENTUPDATE  (componente de clase) --> true/false  
 *  2. RENDER()!! again NO el constructor
 *  3. DIDCOMPONENTUPDATE (de clase) // useEffect(() => {}, [dependencis])
 *
 * SI EL COMPONENTE VA A DESAPARECER DEL DOM 
 * // COMPONENTWILLUNMOUNT() (de clase) // useEffect(() => {return () => {}}, []) 
 * 
 * FROMS Y ESTADOS
 * 
 * [input, setInput] = React.useState({
 *  Name: "",
 *  LastName: "",
 *  Age: "",
 *  City: ""
 * })
 * 
 * function handleChange(event){
 *      event.preventDefault();
 *      setInput((prev) => ({ ...prev,
 *                            [event.target.name]: event.target.value
 *                           }))
 * }
 * 
 * const handleSubmit = (event) => {
 *      event.preventDefault();
 * 
 *      setInput({Name: "", LastName: "", Age: "", City: ""})
 * }
 * <form onSubmit={event => handleSubmit(event)}>
 *      <label>Name:</label>
 *      <input type="text" value={input.name} name={"name"} onChange={(event) => handleChange(e)}/>
 * 
 *      <label>LastName:</label>
 *      <input type="text" value={input.LastName} name={"LastName"} onChange={(event) => handleChange(e)}/>
 * 
 *      <label>Age:</label>
 *      <input type="text" value={input.Age} name={"Age"} onChange={(event) => handleChange(e)}/>
 * 
 *      <label>City:</label>
 *      <input type="text" value={input.City} name={"City"} onChange={(event) => handleChange(e)}/>
 * </form> 
 * 
 * 
 *  npm i redux react-redux redux-thunk
 * 
 *  reducer:
 * 
 *  const initialState = {
 *      users: []
 *  }
 * 
 *  export default function rootReducer(state = initialState, action){
 *      switch (action.type){
 *          case CREATE_USER:
 *          return{
 *              ...state,
 *              //users: state.users.concat(action.payload)
 *              users: [...state.users, action.payload]
 *          }
 *      }
 *  }
 * 
 * 
 *  <Provider store={store}></Provider>  <--- en mi app
 * 
 *  action
 * 
 *  const CREATE_USER = "CREATE_USER"
 * 
 *  function createUser(info){
 *      return {
 *          type: CREATE_USER,
 *          payload: info
 *      }
 * }
 * 
 * let dispatch = React.useDispatch()
 * 
 * const handleSubmit = (event) => {
 *      event.preventDefault();
 *      dispatch(createUser(input))
 *      setInput({Name: "", LastName: "", Age: "", City: ""})
 * }
 * 
 *  
 *  function mapDispatchToProps(dispatch){
 *      return{
 *          createUser: (input) => dispatch(createUser(input))
 *      }
 *  }
 *  export default connect(null, mapDispatchToProps)(CreateUser)
 * 
 *  recibo props
 *  
 *  const handleSubmit = (event) => {
 *      event.preventDefault();
 *      props.createUser(input)
 *      setInput({Name: "", LastName: "", Age: "", City: ""})
 * }
 */
//#endregion
//#region   ARRAY RECURSION





import { ownKeys } from "core-js/fn/reflect";

function ArrayRecursion(arr) {
  var ArrayNuevo = [];
  if (!arr.length) return arr;
  ArrayNuevo.push(arr.pop());
  return [...ArrayNuevo, ...ArrayRecursion(arr)];
}
//#endregion