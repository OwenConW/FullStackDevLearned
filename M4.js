//#region   DBMS 
/*
BASE DE DATOS RELACIONALES
Almacenar info para que perdure en el tiempo

Datos: Informacion concreta sobre hechos, elementos, etc., que permite estudiarlos, analizarlos o conocerlos.

Base de datos: Una base de datos es un conjunto de datos pertenecientes a un mismo contexto y almacenados sistematicamente para su
posterior uso.

Base de datos relacionales y no relacionales hace referencia a la relacion de los datos entre si.

DBMS ---> DataBase Management System

Un programa o coleccion de programa que se pone entre el usuario y la base de datos, nos va a permitir manejar la data.

SQL ----> Structures Query Language

Modelo Entidad Relacion

Entidad: Representa una "cosa", "objeto", "concepto" del mundo real con existencia independiente.

Atributos: Los atributos son las caracteristicas que definen o identifican una entidad.

Conjunto de relaciones: Una relacion entre varias Entidades. Cada entidad interviene en una relacion con una determinada cardinalidad.

Cardinalidad --> relaciones de:
1 --- 1                           DE 1 A 1
1 --- * / N / M                   DE 1 A MUCHOS
* / N / M ---- * / N / M          DE MUCHOS A MUCHOS

Modelo Relacional Normalizacion:

Primera forma normal (1NF):
Todos los atributos son atómicos. Un atributo es atómico si los elementos del dominio son simples e indivisibles (no se puede subdividir). Y no hay grupos de repeticion.

Por ejemplo, una entidad en una base de datos podria ser un curso a estudiar:

TITULO          AUTOR       NACIONALIDAD AUTOR      FORMATO     TEMAS
Fullstack       Fede        Argentino               Remoto      Base de Datos,
Developer                                                       Node, JavaScript

Estos atributos no son todos atomicos, ya que el atributo temas se puede subdividir.

TITULO          AUTOR       NACIONALIDAD AUTOR      FORMATO     TEMA1               TEMA2       TEMA3
Fullstack       Fede        Argentino               Remoto      Base de Datos      Node         JavaScript
Developer                                                       

Esto se conoce como grupos de repeticion, y podrian traer problemas ya que podria haber mas o menos temas.
Ahora todos los atributos son atomicos e indivisibles pero hay grupo de repeticion.

Si se separa por registros estariamos cumpliendo con la primera forma normal aunque no seria eficiente u ocuparia mucho espacio

TITULO          AUTOR       NACIONALIDAD AUTOR      FORMATO     TEMAS
Fullstack       Fede        Argentino               Remoto      Base de Datos,
Developer 
Fullstack       Fede        Argentino               Remoto      Node
Developer 
Fullstack       Fede        Argentino               Remoto      Java Script
Developer 

Seguna forma normal (2NF):
Cumple con la 1NF, y ademas no hay dependencia parcial entre los atributos. 
(Por ejemplo la nacionalidad depende parcialmente del autor, siendo este una PK)

(PRIMARY KEY, PK): Es un atributo o conjunto de atributos que identifica unívocamente a una fila. 
(dado los ejemplos anteriores podria ser titulo, autor y tema)

TITULO          AUTOR     FORMATO     TEMAS
Fullstack       Fede     Remoto      Base de Datos,
Developer 
Fullstack       Fede     Remoto      Node
Developer 
Fullstack       Fede     Remoto      Java Script
Developer 

AUTOR        NACIONALIDAD
Fede          Argentino

Pero ahora surge un nuevo problema.... y si hubiera un fede colombiano? O.O


TITULO         AUTORID        FORMATO     TEMAS
Fullstack        1             Remoto      Base de Datos,
Developer 
Fullstack        1             Remoto      Node
Developer 
Fullstack        1             Remoto      Java Script
Developer 

ID      AUTOR        NACIONALIDAD
1        Fede          Argentino

Pero el problema es que sigo repitiendo titulo, formato 


TEMAS X CURSO
CursoID             TEMA
1               Base de Datos
1               Node
1               Java Script

AUTORES
ID          AUTOR           NACIONALIDAD    
1           Toni            Argentino   

CURSOS  
ID          TITULO          AUTORID         FORMATO 
1           Fullstack         1             Remoto
.           developer

Las tablas se relacinan entre si, la FOREIGN KEY (FK): Registro que identifica una fila en otra tabla (clave forania)

La tabla se encuentra en Tercera forma normal (3FN) si es 2FN y si no existe ninguna dependencia funcional transitiva en los atributos que no son clave.

La foreing key va a estar siempre del lado de los muchos, por ejemplo en una relacion de 1 a * que podria ser alumnos y cohortes, la foreing key va a estar del lado de los muchos es decir, el alumno, ya que el mismo puede estar en un cohorte, en la relacion de 
1 a 1, es indistinto. Por ultimo en una relacion de * a *   se crea una tabla intermedia, llamada por convencion conjugacion de ambos nombres, por ejemplo ALUMNO-CHECK en donde se va a guardar ambos id, el del alumno y el del check

*/              
//#endregion
//#region   SQL
/*  SQL -->  Structured Query Language
Es un lenguaje de consultas a la base de datos, tiene expresiones y statements parecidos a JS.
Esta compuesto por CLAÚSULAS.
NO OLVIDAR EL WHERE EN UNA CLAUSULA DELETE | UPDATE

commands(OBLIGATORIO ---> ;) y siempre --> '' <-- nunca --> ""

\l                                  | list |
\c name                             | connect |
\dt                                 | ver tablas |
\q                                  | quit |
CREATE DATABASE name;               | crear |
INSERT INTO  name (columnas....)    | insertar en una tabla en determinada columna |
VALUES (valores....)                | estos valores |
SELECT que/* FROM name                | trae algo/todo de tal tabla |


nombre -> tipo de dato --> (particulariadad del campo)
id          serial              PRIMARY KEY


serial: tipo de dato numerico autoincremental
varchar(255): string con un maximo de 255 caracteres
ejemplo:

CREATE TABLE ciudades
(
    id serial PRIMARY KEY, <---(indica que este campo va a ser la primary key de la tabla)
    nombre varchar(255) UNIQUE   <--(UNIQUE, no se puede repetir)
);
CREATE TABLE personas
(
    id serial PRIMARY KEY,    <---(indica que este campo va a ser la primary key de la tabla)
    apellido varchar(255) NOT NULL,   <---(no puede estar vacio) 
    nombre varchar(255) UNIQUE,   <--(UNIQUE, no se puede repetir)
    ciudad integer references ciudades (id)  <---(campo nombre ciudad, tipo de dato integer, que el campo este referenciado a                                             
.                                                 la tabla ciudades mediante el id )
);

INSER INTO ciudades(nombre)
VALUES ('Buenos Aires');

mas de uno -->
INSER INTO Ciudades(nombre)
VALUES ('Buenos Aires'), ('New York'), ('La Paz');

INSER INTO personas(nombre, apellido, ciudad)
VALUES ('Owen', 'Bonoris', 1);

LA ID SIEMPRE SE INCREMENTA, AUNQUE NO SE AGREGE A LA TABLA LO INDICADO POR UN ERROR O CUALQUIER TEMA.

EJEMPLOS:

SELECT DISTINCT apellido FROM personas;
trae la columna de apellidos de la tabla personas sin que se repitan en caso de q lo hiciese en algun caso

SELECT * FROM personas;
trae todo de la tabla personas

SELECT nombre FROM ciudades;
trae la columna nombre de la tabla ciudades

SELECT nombre, apellido FROM personas;
trae la columna nombre y apellido de la tabla personas

SELECT * FROM personas WHERE nombre = 'Owen';
trae todo de la tabla personas donde el nombre sea Owen

SELECT * FROM personas WHERE nombre = 'Owen' AND ciudad IS NULL;
trae todo de la tabla personas con el nombre Owen y que no tenga ciudad

SELECT * FROM personas  WHERE nombre = 'Owen' OR ciudad > 1;
trae todo de la tabla personas con el nombre Owen o que la ciudad id sea mayor a 1

SELECT * FROM personas WHERE apellido LIKE '%lla'
trae de la tablas personas todos aquellos que el apellido termine con lla
%lla -> que termine con 
lla% -> que empieze con
%lla% -> que contenga

ILIKE --> ignora mayusculas y minusculas


SELECT * FROM personas ORDER BY apellidos;
trae toda la tabla personas ordenada en base al apellido(a- z)

SELECT * FROM personas ORDER BY id;
trae toda la tabla personas ordenada por su id(< - >) 

SELECT * FROM personas ORDER BY apellidos DESC;
trae toda la tabla personas ordenada de manera descendente por su apellido(z - a)

SELECT * FROM personas ORDER BY id DESC;
trae toda la tabla personas ordenada de manera descendente por su id(> - <) 

-------

GROUP BY && FUNCIONES DE AGREGACION:

CREATE TABLE empleados
(
    id serial PRIMARY KEY,
    name varchar(25),
    age integer,
    addres varchar(25),
    salary integer
);

INSERT INTO empleados(name, age, addres, salary)
VALUES  ('Paul, 21, 'California', 20000), 
('Allen', 32, 'Texas', 18000),
('Paul', 21, 'Texas', 15000),
('Owen', 19, 'California', 20000);

Si quisiera saber cuanto dinero "inverti o gaste" en la sucursal de texas y en la de california??

SELECT addres, SUM(salary) FROM empleados GRUOP BY addres;
Selecciono la columna direccion y sumo los salarios de la tabla empleados separandolos por direccion

va a dar como resultado:

|    addres       |     sum       |
|-----------------+---------------|
|   California    |     40000     |                    
|     Texas       |     33000     |
(2 filas)

SELECT name, COUNT(*) FROM empleados GROUP BY name;
Selecciono la columna name y cuento todos lo nombres de la tabla empleados separandolos por name



FUNCION DE AGREGACION ---> SUM()  ---> suma
.         ""          ---> COUNT() ---> cuenta
.         ""          ---> AVG()  ----> promedio


SUB-QUERIES (consultas sobre consultas)

SELECT column_name [, column_name]
FROM table1 [,table2]
WHERE column_name OPERATOR
.       (SELECT column_name [, column_name]
.        FROM table1 [,table2]
.       [WHERE])

SELECT * FROM empleados WHERE salary > (SELECT AVG(salary) FROM empleados); <--(trae de la tabla empleados el promedio de la 
.                                                                               columna salary)

trae todas las filas de la tabla empleados donde la columna salary sea mayor al salario de todos los empleados


JOIN --> "UNE/PEGA" dos tablas 

Por ejemplo, en uno de los primeros ejemplos:

CREATE TABLE ciudades
(
    id serial PRIMARY KEY,
    nombre varchar(255) UNIQUE  
);
CREATE TABLE personas
(
    id serial PRIMARY KEY,   
    apellido varchar(255) NOT NULL,  
    nombre varchar(255) UNIQUE,   
    ciudad integer references ciudades (id)
);

INSER INTO ciudades(nombre)
VALUES ('Buenos Aires'),
('La Paz'),
('New York');

SELECT * FROM ciudades;

|    nombre       |      id       |
|-----------------+---------------|
|   Buenos Aires  |       1       |                    
|     La Paz      |       2       |
|    New York     |       3       |
(3 filas)

INSER INTO personas(nombre, apellido, ciudad)
VALUES ('Owen', 'Bonoris', 1)

SELECT * FROM personas;

|     nombre      |      apellido       |     ciudad     |
|-----------------+---------------------+----------------|
|      Owen       |       Bonoris       |       1        |
(1 filas)

Como hago para acordarme en una base de datos enorme que id es cada ciudad? --> JOIN

SELECT * FROM personas
JOIN ciudades ON ciudades.id = personas.ciudad;
trae todo de la tabla personas donde le agregas la tabla ciudades en donde la columna id de la tabla ciudades sea igual a la
columna ciudad de la tabla personas

esto devolveria:

|     nombre      |      apellido       |     ciudad     |   id   |      nombre       |
|-----------------+---------------------+----------------+--------+-------------------|
|      Owen       |       Bonoris       |       1        |    1   |    Buenos Aires   |
(1 filas)

NO CREA, NI MODIFICA, NI AGREGA UNA TABLA, SIMPLEMENTE ES PARA VER LOS DATOS DE ALGUNA MANERA EN PARTICULAR

SELECT apellido, personas.nombre, ciudades.nombre FROM personas 
JOIN ciudades ON ciudades.id = personas.ciudad
trae el campo apellido, el campo nombre de la tabla personas y el nombre de la tabla ciudades donde le agregas la tabla ciudades
donde la columna id de la tabla ciudades sea igual a la columna ciudad de la tabla personas

esto devolveria:

|     apellido      |      nombre       |      nombre       |
|-------------------+-------------------+-------------------|
|      Bonoris      |       Owen        |    Buenos Aires   |
(1 filas)

SELECT apellido, personas.nombre, ciudades.nombre AS ciudad FROM personas 
JOIN ciudades ON ciudades.id = personas.ciudad

|     apellido      |      nombre       |      ciudad       |
|-------------------+-------------------+-------------------|
|      Bonoris      |       Owen        |    Buenos Aires   |
(1 filas)

*******Podria poner un alias a las tablas para escribir menos:  (AS)

SELECT apellido, p.nombre, c.nombre AS ciudad
FROM personas AS p
JOIN ciudades AS c ON c.id = p.id;
=
SELECT apellido, personas.nombre, ciudades.nombre AS ciudad FROM personas 
JOIN ciudades ON ciudades.id = personas.ciudad;

JOIN trae solo la interseccion, es decir aquellas filas que se relacione con la tabla a la que le hago el JOIN
traeria solo las personas que se relacionen con la tabla ciudades (es decir aquellos que tenga una ciudad registrada)


LEFT JOIN trae la interseccion y todo lo de la tabla de la izquierda
traeria las personas q se relacionen con las tablas ciudades (es decir que tengan ciudades) e incluso si hubiera personas que no
esten relacionadas con la tabla ciudades (es decir que no tengan ciudades) tambien y las ciudades mismas de aquellos que si tengan


RIGHT JOIN trae la interseccion y todo lo de la tabla de la derecha
traeria las personas q se relacionen con las tablas ciudades (es decir que tengan ciudades) y si hubiera ciudades que no esten
relacionadas a personas, igualmente las traeria


POSTGRESQL - SQL:
sudo su - postgres
psql

SQLite3

*/
//#endregion
//#region   ORMs
/*  Object-Relational Mapping
ORM traduce una tabla de la db a un object o un object a una tabla

SEQUELIZE -> ORM basado en Promesas

INSTALL ---> npm i sequelize | (postgres) npm i pg pg-hstore

CONNECT

OPCION1:

const { Sequelize } = require("sequelize");

const sequelize = new Sequelize('motor://username:password@host/dbName');
(ejemplo:  postgres://postgres:D3RUT4233444D0Uo@localhost:5432/actors)
OPCION 2:

const { Sequelize } = require("sequelize");

const sequelize = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect:  'postgres, mysql, mariadb, mssql'
})

DATA TYPES

DataTypes.STRING            // VARCHAR(255)
DataTypes.STRING(1234)      // VARCGAR(1234)
DataTypes.TEXT              // TEXT

DataTypes.INTEGER           // INTEGER
DataTypes.FLOAR             // FLOAT

DataTypes.DATE              //  TIMESTAMP WITH TIME ZONE
DataTypes.DATEONLY          // DATE WITHOUT TIME

DataTypes.ENUM('foo', 'bar')    //PUEDE TOMAR SOLO ALGUNO DE LOS VALORES QUE LE PASE ADENTRO

DataTypes.BOOLEAN


DEFINICION DE MODELO --> Modelo es un boceto sobre el cual se van a construir mi tabla

const User = sequelize.define('User', {
    firstName: {
        type: DataTypes.STRING
    },
    lastName: {
        type: DataTypes.STRING
    }
})

-----

class User extends Model {}

User.init({
     firstName: {
        type: DataTypes.STRING
    },
    lastName: {
        type: DataTypes.STRING
    }
}, {
    sequelize,
    modelName: 'User'
})


En un archivo por ejemplo user.js tendria el modelo de mi db de la sig manera:
//user.js
const { DataTypes } = require('sequelize')

module.export = sequelize => {
    sequelize.define('User', {
        firstName: {
            type: DataTypes.STRING
        },
        lastName: {
            type: DataTypes.STRING
        }
    })
}

En otro archivo, que podria ser por ejemplo db.js tendria que importarme el modelo para terminar de crearlo:
//db.js
const { Sequelize } = require("sequelize");
const modelUser = require('url/user.js');

const sequelize = new Sequelize('motor://username:password@host/dbName');
modelUser(sequelize);  //

// SEQUELIZE NO SABE CREAR UNA BASE DE DATOS, LA TENEMOS QUE CREAR, UNA VEZ HECHA (CREATE DATABASE name;) PODEMOS CONECTARLA, 
HACER CONSULTAS, ACTUALIZARLAS, ETC

Una vez creada toca ->

SINCRONIZARLA

tengo que estar parado en mi modelo, como? asi:

---------------------
sequelize.models.User  <--
---------------------

Para que un modelo se vea en una tabla tengo que hacer la sincronizacion

sequelize.models.User.sync()    <-- crea la tabla si no existe o no hace nada si ya existe
-
sequelize.models.User.sync({force: true})  <-- elimina (drop) la tabla y luego la vuelve a crear
-
sequelize.models.User.sync({alter: true})  <-- aplica los cambios necesarios a la tabla actual para que coincida cn el modelo
-
squelize.sync()  --> sincroniza todos mis modelos


CADA VEZ QUE ACTUALIZAMOS, CREAMOS, O DEMAS, UNA TABLA LA CONSOLA SE LLENA DE MSJS, PARA CAMBIARLO, AL MOMENTO DE CREAR UNA 
INSTANCIA, LE PASO UN SEGUNDO PARAMETRO:

const sequelize = new Sequelize('motor://username:password@host/dbName', {
    logging: false;
})


SEQUELIZE AUTOMATICAMENTE TE AGREGA LA COLUMNA UPDATEDAT Y CREATEDAT

si no lo queremos, al momento de crear nuestro modelo, como 3er parametro le pasamos un obj

{
    timestamps: true,
    createdAt: false,
    updatedAt: true
}

{
    timestamps: false
}

COLUMN OPTIONS | OPCIONES   :

allowNull: false
defaultValue: true
unique: true
// el unique permite hacer unica la combinacion de dos columnas, ejemplo nombre apellido
(
    Name: {DataType.STRING, unique:'NombreApellido'}
    LasName: {DataType.STRING, unique:'NombreApellido'}
)
autoIncrement: true 
primaryKey: true   (si la especifico no crea el campo id que crea automaticamente)

module.export = sequelize => {
    sequelize.define('User', {
        firstName: {
            type: DataTypes.STRING.
            unique: true
        },
        lastName: {
            type: DataTypes.STRING
        }
    }, {
        timestamps: true,
        createdAt: false,
        updatedAt: 'actualizado'
    })
}

----------------------------------------------------

PARA CUANDO SE TRABAJA CON BASE DE DATOS Y EXPRESS

En mi archivo db hago un 
module.export = {
    ...sequelize.models,
    db: sequelize,
    Op
}

y en mi archivo que tenga mi sv de exprees

const {db, User, otromodelo, Op} = require('archivodburl')

server.listen(3001, () => {
    console.log('Server running on port 3001');
    db.sync()  /  db.sync({force: true})  / db.sync({alter: true})
})

COMO CREAR UN REGISTRO:

OPCION1: 

const jane = User.build({name: "Jane"});
await jane.save();

OPCION2:

const jane = await User.create({name: "Jane"});

con express 

server.post('/user', async (req, res, next) => {
    const {name , etc} = req.body
    try{
        const newUser = await User.create({
            name,
            etc
        })
        MANERA DE CONSOLOGEAR --->  console.log(newUser.toJSON())
        res.json(newUser)
    }catch(error){
        res.send(error)
    }
})


MODIFICATIONS | MODIFICACIONES :

Buscar o crear:
findOrCreate(    const nweAbilitiesPromise = abilities.map(a => Ability.create(a))
    const newAnilities = await Promise.all(nweAbilitiesPromise))

Actualizar:

const jane = await User.create({name: "Jane"})
jane.name= "Ada";
await jane.save();
-----
await User.update({transformation: 'SS1'}, {
    where: {
        name: 'Goku'
    }
})
ACTUALIZARA TODAS LAS INSTNCIAS QUE COINCIDAN CON LA CLAUSULA WHERE INDICADA. SI NO SE COLOCA NINGUNA CONDICION ACTUALIZARA 
TODOS LOS REGISTROS

Eliminar:

const jane = await User.create({name: "Jane"});
await jane.destroy();
-----
DELETE FROM TABLE
WHERE race = 'Android'
=
await Table.destroy({
    where: {
        race: 'Android'
    }
})
DELETE * FROM TABLE
await Table.destroy()

await Table.destroy({
    truncate: true
})
Si se usa el truncate elimina todos de una, mientras que el distroy sin condiciones igualmente chekea registro por registro

QUERIES - SELECT

SELECT * FROM....
const instancias = await Model.findAll();

SELECT foo, bar FROM....
Model.findAll({
    attributes: ['foo', 'bar']
});

SELECT foo, bar AS baz FROM.....
Model.findAll({
    attributes: ['foo', ['bar', 'baz']]
});

EXCLUIR ALGUN ATRIBUTO:
Model.findAll({
    attributes: { exclude:['foo'] }
});

Ejemplo
const instances = Model.findAll({
    where: {
        clothe: 'orange',
        status: 'good'
    }
})

Ejemplo
const { Op } = require("sequelize");
Model.findAll({
    where:{
        [Op.and]: [
            {clothes: 'orange'},
            {status: 'good'}
        ]
    }
})

BUSCAR POR PRIMARY KEY (null si no lo encuentra)

const instance = await Model.findByPk(4);

BUSCAR UN REGISTRO

const instace = await Model.findOne({
    where: {name: 'Goku'}
});

BUSCA UN REGISTRO Y SI NO ENCUENTRA CREA UNO

const [instance, created] = await Model.findOrCreate({
    where {name: 'Goku'},
    defaults {
        gender: 'M',
        race: 'Saiyan'
    }
})

Si lo encuentra me devuelve la instancia encontrada o creada y un booleando en created (se crea con los valores por default
y la busqueda)

Ejemplo

server.get("/players", asynce (req, res, next) =>{
    const { name } = req.query
    const condition = name
     ? {where: {firstName: name}}
     : {}
    condition.attributes = { exclude: ['actualizado']} //hace referencia a la columna updatedAt modificada
    const players = await Players.findAll(
        condition,
    )
    res.json(players.length ? players : 'Not players found')
})

QUE ES Op? 

OPERADORES

https://sequelize.org/master/manual/model-querying-basics.html#operators

and | algo AND algo
or  | algo OR algo
eq  |=
ne  |!=
is  | es
not | NOT
gt  | >
gte | >=
lt  | <
lte | <=
between |  entre 
notBetween | que no este entr
in      | IN []
notIn   | NOT IN []
like        | LIKE
not like    | NOT LIKE
ilike       | ILIKE

ejemplos
where{
    [Op.and]: [{a: 5}, {b: 6}],            // (a = 5) AND (b = 6)
    [Op.or]: [{a: 5}, {b: 6}],  |          // (a = 5) OR  (b = 6)
}

[Op.eq]: 3          =3
[Op.ne]: 3          !=3
[Op.is]: null       IS NULL
[Op.or]: [5, 6]     x=5 OR x=6


GETTERS
Sirven para modificar la devolucion de los datos registrados en la base de datos sin modificar la misma

si tuviera en mi base de datos la columna EDAD con valores integers tomando por ejemplo el 19
Podria querer devolver ese valor junto al string años, por lo que en la creacion del modelo de mi tabla
en la columna años hacer lo siguiente

module.export = sequelize => {
    sequelize.define('User',{
        firstName: {
            type: DataTypes.STRING.
            unique: true
        },
        edad: {
            type: DataTypes.INTEGER,
            allowNull: false
            get(){
                return this.getDataValue('edad') + ' años';
            }
        }
    })
}
A la hora de mostrar la informacion, si bien en la base de datos en edad tengo un 19, me mostratia '19 años';


SETTERS
Esto al revez, para pasar por un proceso la informacion ANTES de guardarla, para guardarla de una manera en particular

module.export = sequelize => {
    sequelize.define('User',{
        firstName: {
            type: DataTypes.STRING.
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
            set(value){
                this.setDataValue('password', hash(this.username + value));
            }
        }
    })
}

VIRTUAL FIELDS  | CAMPOS VIRTUALES

module.export = sequelize => {
    sequelize.define('User',{
        firstName: {
            type: DataTypes.STRING.
        },
        lastName: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
        fullName: {
            type DataTypes.VIRTUAL,
            get(){
                return `${this.firstName} ${this.lastName}`
            }
            set(value){
                throw new Error('Do not try to set the 'fullName' value!)
            }
        }
    })
}
EL VALOR NO SE VA A GUARDAR EN LA BASE DE DATOS, SE PUEDE OBTENER PORQ ES VIRTUAL PERO NO SETEAR PORQ NUNCA ESTA EN LA DB

VALIDATORS

https://sequelize.org/master/manual/validations-and-constraints.html#validators

validate: {
    is: /^[a-z]+$/i,
    not: /^[a-z]+$/i
    isEmail:
    isUrl:
    isIP:
    isAlpha:
    max:
    min:
    isEven(value){
        if(value % 2 !== 0)throw new Error('Only even values are allowed!')
    }
}

Ejemplo:

module.export = sequelize => {
    sequelize.define('User',{
        firstName: {
            type: DataTypes.STRING.
            unique: true
        },
        edad: {
            type: DataTypes.INTEGER,
            allowNull: false
            get(){
                return this.getDataValue('edad') + ' años';
            }
            validate: {
                min: 18,
                max: 110,
            }
        }
    })
}


ASSOCIATION | ASOCIACIONES

1 : 1
One-To-One

Foo.hasOne(Bar);  --> un Foo tiene un bar
Bar.belongsTo(Foo); --> un bar pertenece a un foo                el que lleva el belong to lleva el campo del id del otro

1 : *
One-To-Many

Team.hasMany(Players);
Player.belongsTo(Team);   el que lleva el belong to lleva el campo del id del otro

* : *
Many-To-Many

Movie.belongstoMany(Actor, { through: 'ActorMovies})Una pelicula tiene muchos actores, se relacionan a travez de la tabla ActorMovies
Actor.belongstoMany(Movie, { through: 'ActorMovies})

el through le especifica mediante que tabla se relacionaran

Si queremos modificar una tabla intermedia deberemos crear el modelo, importarla y aclararle q no cree una tabla intermedia, si no
que use una personal

Movie.belongstoMany(Actor, { through: ActorMovies})
Actor.belongstoMany(Movie, { through: ActorMovies})

esto crea propips metodos

addMovie
addMOvies
setMovie
setMovies
counMovies
hasMovies
removeMovies
createMovies

Ejemplo:

server.put('/transfer', async (req, res, next) => {
    const {idPlayer, codeTeam} = req.body;
    const player = await Player.findByPk(idPlayer);  <-- Busca por primary key el jugador
    res.json(await player.addTeam(codeTeam))  <--- le agrega al player el team que pidan, lo que crea la tabla de relacion PlayerTeam
})
al hacer el addTeam le agrega por ejemplo a messi en su equipo [BARCELONA] a el PARIS [BARCELONA, PARIS]
si hiciera setTeam(codeTeam) pisaria a [BARCELONA] dejando [PARIS]
addTeams ---> acepta un [] y entiende por la s que va a hacer mas de una cosa
MIXINS
Foo.hasOne(Bar)
Foo.belongsTo(Bar)

fooInstance.getBar()
fooInstance.setBar()
fooInstance.createBar()

Esto es para traer la tabla intermedia, pero para hacerlo es mejor a la hora de hacer el get

const captain = await Captain.findOne({
    where: {
        name: 'Jack Sparrow'
    },
    include: Ship        <--- Aca estoy incluyendo la tabla Ship con la cual se esta relacionada
})

captain.name
captain.ship.name

*/
//#endregion
//#region   AUTHENTICATION 
/*
AUTHENTICATION != AUTHORIZATION

AUTHENTICATION -> Demostrar mi persona, autenticarse es demostrar q soy yo

AUTHORIZATION -> Por ser yo estoy autorizado a hacer ciertas cosas y otras no

Cookie -> Herramienta del navegador para guardar informacion mediante un id 

Token -> Codigo unico, es decir una firma inconfundible

HASH -> Algo hasheado no se puede deshashear

ENCRIPTAR -> Algo encriptado lo puedo desencriptar





 


*/
//#endregion