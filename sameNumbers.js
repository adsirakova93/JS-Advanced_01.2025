function solve(string){
    let input=string.toString().split('').map(Number);
    let sum = 0;
    let areSame = true;

    for (let index = 0; index < input.length; index++) {
  
        if(input[index] !== input[0]){
            areSame=false;
        }
        sum+=input[index];

    }
    console.log(areSame);
    console.log(sum);
  
}

solve(2222222)
solve(1234)