function aggregateElements(arr) {
    // Sum of all elements
    const sum = arr.reduce((acc, num) => acc + num, 0);
    
    // Sum of the inverses of all elements
    const sumOfInverses = arr.reduce((acc, num) => acc + 1 / num, 0);
    
    // Concatenate all elements as strings
    const concat = arr.join('');
    
    // Print results for each operation
    console.log(sum);
    console.log(sumOfInverses);
    console.log(concat);
}
