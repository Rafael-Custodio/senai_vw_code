/*
Exercício 3: Verificação de números em ordem crescente
Escreva um programa que solicita três números ao usuário 
e verifica se eles estão em ordem crescente. 
Exibindo uma mensagem indicando se os números estão em ordem crescente ou não.
*/

let prompt = require ("prompt-sync")()

console.log("=======================")
console.log(" ")

let numero1 = parseInt(prompt("Digite o PRIMEIRO número: "))
let numero2 = parseInt(prompt("Digite o SEGUNDO número: "))
let numero3 = parseInt(prompt("Digite o TERCEIRO número: "))

if(numero1 < numero2 && numero2 < numero3){
    console.log(" ")
    console.log("Os números ESTÃO em ordem crescente.")
}else{
    console.log(" ")
    console.log("Os números NÃO ESTÃO em ordem crescente.")
}
console.log(" ")
console.log("=======================")

