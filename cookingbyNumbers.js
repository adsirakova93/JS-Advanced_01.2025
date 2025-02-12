/*function cook (points, operations, operations, operations, operations, operations){
    let intitalPoint = Number(points);

    const operationsMap= {
        chop:(n) => n/2,
        dice:(n) => Math.sqrt(n),
        spice:(n)=>n+1,
        bake:(n)=>n*3,
        fillet:(n)=>n*0.8
    }

for (let operation of operations){
    num=operationsMap[operation](intitalPoint);
    console.log(intitalPoint);
}
}
cook('32', 'chop', 'chop', 'chop', 'chop', 'chop');
*/
/*function processNumber(start, operations, operations, operations, operations, operations) {
    let num = Number(start);
    
    const operationsMap = {
        chop: (n) => n / 2,
        dice: (n) => Math.sqrt(n),
        spice: (n) => n + 1,
        bake: (n) => n * 3,
        fillet: (n) => n * 0.8
    };

    for (let operation of operations) {
        num = operationsMap[operation](num);
        console.log(num);
    }
}

// Example usage:
processNumber('32', 'chop', 'chop', 'chop', 'chop', 'chop');
// Output: 16 8 4 2 1
*/
function processNumber(start, ...operations) {
    let num = Number(start);
    
    const operationsMap = {
        chop: (n) => n / 2,
        dice: (n) => Math.sqrt(n),
        spice: (n) => n + 1,
        bake: (n) => n * 3,
        fillet: (n) => n * 0.8
    };

    for (let operation of operations) {
        if (operationsMap[operation]) {
            num = operationsMap[operation](num);
            console.log(num);
        } else {
            console.error(`Invalid operation: ${operation}`);
        }
    }
}
processNumber('32', 'chop', 'chop', 'chop', 'chop', 'chop');

