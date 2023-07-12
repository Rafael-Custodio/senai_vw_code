/*
3.	Faça um programa que receba um número inteiro do usuário 
e informe se este número é positivo ou negativo.
*/

let prompt = require ("prompt-sync")()
let numero = parseInt(prompt("Digite um numero: "))

console.log("=======================")

if(numero > 0){
    console.log("O numero digitado é POSITIVO.")
}else if(numero == 0){
    console.log("O número digitado foi 0 = NEUTRO/NULO")
}else{
    console.log("O número digitado é NEGATIVO")
}
console.log("=======================")