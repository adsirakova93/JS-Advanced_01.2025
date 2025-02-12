function solve (first, second, third){
    let sumLength = 0;
    sumLength += first.length;
    sumLength += second.length;
    sumLength += third.length;
    console.log(sumLength);

    let averageLength = Math.floor(sumLength/3);
    console.log (averageLength);
}

solve('chocolate', 'ice cream', 'cake')
solve ('pasta', '5', '22.3')