/*
FOR = 4.	Faça um programa que imprima na tela a tabuada 
de um número qualquer escolhido pelo usuário até o 10.
*/

let prompt = require("prompt-sync")()
let numero = parseInt(prompt("Digite um número inteiro de 0 a 10: "))

console.log("========================================")
console.log(" ")
console.log("TABUADA DO " + numero)
console.log(" ")

for(let i = 0; i <=10; i*numero){   
    console.log(`${numero} x ${i}  = ` + (i*numero))
    i+=1
}
console.log(" ")
console.log("========================================")