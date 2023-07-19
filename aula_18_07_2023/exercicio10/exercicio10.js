/*
10.	Faça um programa que receba um número do usuário 
e continue a pedir o número se o numero for diferente de 0.
*/

let prompt = require("prompt-sync")()
let numero = 0


console.log("========================================")
console.log(" ")

numero = parseInt(prompt("Digite um número qualquer: "))

while (numero != 0) {
    numero = parseInt(prompt("Digite um número qualquer: "))
}
console.log(" ")
console.log("Digitado o 0")
console.log("Saiu do loop")

console.log(" ")
console.log("========================================")


