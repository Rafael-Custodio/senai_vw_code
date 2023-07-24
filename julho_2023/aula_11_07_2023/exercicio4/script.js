/*
4.	Faça um programa que receba um número do usuário 
e informe se este número é par ou ímpar.
*/

let prompt = require ("prompt-sync")()
let numero = parseInt(prompt("Digite um numero: "))

console.log("=======================")

if(numero%2 == 0){
    console.log("O numero digitado é PAR.")
}else{
    console.log("O número digitado é ÍMPAR")
}
console.log("=======================")



