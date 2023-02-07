// Hoisting

// var nameOfDog; --> undefined, lo hace por elevacion en forma automática
console.log(nameOfDog); // devuelve undefined 
var nameOfDog = 'Elmo';


//var nombrePerro; // --> undefined
nombrePerro(); // El mejor perrito es undefined

function nombrePerro() {
    console.log(`El mejor perrito es ${elmo}`);
}

var elmo = 'Elmito';