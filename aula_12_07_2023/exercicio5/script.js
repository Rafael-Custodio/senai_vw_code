/*
5.	Faça um programa receba dois valores e 
imprima qual é o maior número digitado.
*/


let prompt = require ("prompt-sync")()
let numero1 = parseInt(prompt("Digite o PRIMEIRO numero: "))
let numero2 = parseInt(prompt("Digite o SEGUNDO numero: "))

console.log("=======================")

if(numero1 > numero2){
    console.log("O PRIMEIRO numero digitado foi " + numero1 + ", e ele é o maior entre os dois.")
}else{
    console.log("O SEGUNDO numero digitado foi " + numero2 + ", e ele é o maior entre os dois.")
}
console.log("=======================")