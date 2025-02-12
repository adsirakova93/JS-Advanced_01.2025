function square (input){
if (input === undefined){
    input = 5
}
for (let index = 0; index < input; index++) {
    console.log("* ".repeat(input))
}
}

square(3)
