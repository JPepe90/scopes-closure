
function greeting() {
    let userName = 'Javier';

    function displayUserName() {
        return `Hola ${userName}`;
    }

    return displayUserName;
}

const g = greeting();
console.log(g); // --> [Function: displayUserName]
console.log(g()); // Hola Javier