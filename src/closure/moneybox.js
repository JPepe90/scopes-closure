// sin Closure falla
/*
function moneyBox(coins) {
    let saveCoins = 0;
    saveCoins += coins;
    console.log(`Moneybox: $ ${saveCoins}`);

    return saveCoins;
}

moneyBox(5);
moneyBox(5);

*/

// Utilizando Closure
function moneyBox() {
    let saveCoins = 0;

    function countCoins(coins) {
        saveCoins += coins;
        console.log(`Moneybox: $ ${saveCoins}`);
    }
    return countCoins;
}

const myMoneyBox = moneyBox();
myMoneyBox(5); // 5
myMoneyBox(5); // 10
myMoneyBox(52); // 62

const moneyBoxAna = moneyBox();
moneyBoxAna(10); 
moneyBoxAna(20);
moneyBoxAna(5);