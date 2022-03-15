const {sum} = require("./app.js");

test("sumar 14+9, nos dara 23",function(){
    let total = sum(14,9);
    expect(total).toBe(23);
})

const {fromDollarToYen} = require("./app.js");

test("1 Yen es igual a 1 dollar multiplicado por 153,48", function(){
    let total = fromDollarToYen(1);
    expect(total).toBe(153.48);
})

const {fromEuroToDollar} = require("./app.js");
test("1 euro es igual a 1 dollar multiplicado por 1,2", function(){
    let total = fromEuroToDollar(1);
    expect(total).toBe(0.83);
})

const {fromYanToPound} = require("./app.js");
test("1 Yan es igual a 1 libra multiplicado por 159.875", function(){
    let total = fromYanToPound(1);
    expect(total).toBe(159.88);
})