function solve (input, num1, num2){
    let fruit = input;
    let weightInGrams = num1;
    let weightInKilo=weightInGrams/1000;
    let pricePerKilo = num2;
    let price=pricePerKilo*weightInKilo;

    console.log(`I need $${(price).toFixed(2)} to buy ${(weightInKilo).toFixed(2)} kilograms ${fruit}.`)
}
solve('orange', 2500, 1.80)
solve('apple', 1563, 2.35)