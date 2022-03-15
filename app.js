console.log("Hello World");
function sum (a,b) {
    return a+b
}
console.log(sum(7,3))

module.exports = { sum, fromDollarToYen, fromEuroToDollar, fromYanToPound };

// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}


function fromDollarToYen (dollar) {
    const dollaryen = dollar * oneEuroIs.USD * oneEuroIs.JPY;
    const total = dollaryen.toFixed(2);
    return Number (total);
}


function fromEuroToDollar(euro) {

    const eurodollar = euro / oneEuroIs.USD
    const total = eurodollar.toFixed(2);
    return Number (total);

}

function fromYanToPound(yan) {
    const yanlibra = yan * oneEuroIs.JPY / oneEuroIs.GBP
    const total = yanlibra.toFixed(2);
    return Number (total);

}