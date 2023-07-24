/*
9.	Faça um programa que receba um número do usuário 
e mostre no console a contagem regressiva até 0.
*/

let prompt = require("prompt-sync")()
let numero = parseInt(prompt("Digite um número de 1 a 50: "))


console.log("========================================")
console.log(" ")
while(numero >= 0){
    console.log(numero)
    numero--
}
console.log(" ")
console.log("Saiu do loop")

console.log(" ")
console.log("========================================")

