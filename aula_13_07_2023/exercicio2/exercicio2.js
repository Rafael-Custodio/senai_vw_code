/*
Exercício 2: Verificação de dia da semana
Escreva um programa que solicita ao usuário um número de 1 a 7 
representando um dia da semana e exibe o nome correspondente a esse dia. 
Considere que 1 representa segunda-feira, 2 representa terça-feira e assim por diante.
*/

let prompt = require("prompt-sync")()

console.log("=======================")
console.log(" ")

let numero = parseInt(prompt("Digite um número inteiro de 1 a 7: "))

switch (numero) {
    case 1:
        console.log(" ")
        console.log("SEGUNDA-FEIRA")
        break

    case 2:
        console.log(" ")
        console.log("TERÇA-FEIRA")
        break

    case 3:
        console.log(" ")
        console.log("QUARTA-FEIRA")
        break

    case 4:
        console.log(" ")
        console.log("QUINTA-FEIRA")
        break

    case 5:
        console.log(" ")
        console.log("SEXTA-FEIRA")
        break

    case 6:
        console.log(" ")
        console.log("SÁBADO")
        break

    case 7:
        console.log(" ")
        console.log("DOMINGO")
        break

    default:
        console.log(" ")
        console.log("VOCÊ É BURRO ??");
        console.log("QUAL A DIFICULDADE EM DIGITAR UM NÚMERO DE 1 A 7 ??")

}

console.log(" ")
console.log("=======================")

