// variables

var a; // declaramos
var b = 'b'; // declaramos y asignamos
b = 'bb'; // reasignando
var a = 'aa';  // redeclaracion

// Global Scope
var fruit = 'Apple';

function bestFruit() {
    console.log(fruit);
}

bestFruit();


// caso especial de declaracion de variable global
function countries() {
    country = 'Argentina'; // global
    console.log(country);
}

countries();
console.log(country);

/* Si lo ejecuto desde la linea 19 hasta la 25 me devolvera 2 veces 
el dato guardado en la variable country. Es como hacer una declaracion y 
Asignacion global */