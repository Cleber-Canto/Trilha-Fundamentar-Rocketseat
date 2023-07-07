//Função anonima ou 
// function expression

//const sum = function(number1, number2) {
    number1 = number1 ? number1 : 0
    number2 = number2 ? number2 : 0
    console.log(number1 + number2)
//}

sum(10, 30)


let total = 0 

const sum = function(number1, number2) {
    let total = number1 + number2
    return total
}

let number1 = 34
let number2 = 25

//console.log(` a soma é ${sum(number1, number2)}`)
//console.log(total)

console.log(`o numero 1 é ${number1}`)
console.log(`o numero 2 é ${number2}`)
console.log(` a soma é ${sum(number1, number2)}`)