// Strict Mode
pi = 3.1416; // asigne y declare aunque no use var, let o const
console.log(pi); // funciona --> 3.1416

// ----------------------------------------------

'use strict';
pi = 3.1416;
console.log(pi); // --> esto falla! por el uso de modo estricto

function myFunction(){
    'use strict';

    return pi = 3.1416;
}

console.log(myFunction()); // -->  devuelve error!