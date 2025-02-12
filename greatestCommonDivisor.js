function GCD (num1, num2){
let a= num1;
let b=num2;

while (b!==0) {
    let temp = b;
    b=a%b;
    a=temp;
}
console.log(a);
}
GCD(15,5)
GCD(2154, 458)
