// Reasignacion, redeclaracion, inmutabilidad

// ----- VAR -----
var firstName; // undefined
firstName = 'Javier'; // asignamos
console.log(firstName);

var lastName = 'Pepe'; // asigno y declaro
lastName = 'Carlos'; // reasigno
console.log(lastName);

var secondName = 'Javier'; // declaro y asigno
var secondName = 'Carlos'; // re-declaro
console.log(secondName); // Carlos -- No falla

// ----- LET -----
// Trabajando con let
let fruit = 'Apple' // declaro y asigno
fruit = 'Kiwi'; // reasignar
console.log(fruit); // funciona y devuelve Kiwi

let fruit = 'banana'; // --> error! let no permite redeclarar

// ----- CONST -----
// Trabajando con const
const animal = 'Dog'; // declaro y asigno
animal = 'Cat'; // reasigno -- TIRA ERROR!! no permite la reasignacion
const animal = 'Bird'; // tira error, no puedo redeclarar

// inmutabilidad
const vehicles = [];

vehicles.push('R12');
vehicles.push('Ka');
vehicles.push('Gol');

console.log(vehicles); // ['R12','Ka','Gol']

vehicles.pop();
console.log(vehicles); // ['R12','Ka']
