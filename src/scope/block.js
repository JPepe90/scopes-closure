// Block Scope

function fruits() {
    if (true) {
        var fruit1 = 'Apple';   // Function Scope
        let fruit2 = 'Kiwi';    // Block Scope
        const fruit = 'Banana';    // Block Scope
    }
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}

/* Esto falla en la linea 10, ya que let define variables que se limitan
a la apertura y cierre de llaves ({}), en este caso del if.*/