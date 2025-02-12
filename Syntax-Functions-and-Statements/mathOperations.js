function solve (num1, num2, string){
    if (string=="+"){
        result = num1 +num2;
        console.log(result);
    }
    if (string=="-"){
        result = num1-num2;
        console.log(result);
    }
    if(string=="/"){
        result= num1/num2;
        console.log(result);
    }
    if(string=="*"){
        result=num1*num2;
        console.log(result);
    }
    if(string=="%"){
        result=num1%num2;
        console.log(result);
    }
    if(string=="**"){
        result=num1**num2;
        console.log(result);
    }
}
solve(3, 5.5, '*')
solve(5, 6, '+')
