function solve(n, m){
    let number1 = Number(n);
    let number2 = Number(m);
    let sum=0;

    for (let index = number1; index <=number2; index++) {
        sum+=index;
    }
    console.log(sum)
}
solve('-8', '20')