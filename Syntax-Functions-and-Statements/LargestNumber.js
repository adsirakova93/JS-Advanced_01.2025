function findTheLargestNumber (num1, num2, num3){
if (num1 > num2 && num1> num2){
    result= num1;
}
if (num2> num1 && num2>num3) {
    result=num2;
}
if (num3>num2 && num3>num1) {
    result= num3;
}
console.log(`The largest number is ${result}.`);
}
findTheLargestNumber(5, -3, 16)