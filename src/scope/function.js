// Function o Local Scope

function greeting() {
    let userName = 'Javier';
    console.log(userName);

    if (userName === 'Javier') {
        console.log(`Hello ${userName}`);
    }
}

function greeting();
console.log(userName); // Esto falla por Reference error: La variable no fue definida


