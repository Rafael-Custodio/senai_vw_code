//snake_case
//PascalCase
//camelCase

//console.log("Exemplo 1")
// console.log("Hello World!")

//exemplo 2
// console.log("Exemplo 2")
// let prompt = require ("prompt-sync")();
// let nome = prompt("Digite seu nome: ")
// console.log("Olá " + nome)

//exemplo 3
// console.log("Exemplo 3")
// let prompt = require ("prompt-sync")();
// let numero = prompt("Digite um numero: ")
// if(numero == 5){
//     console.log("ACERTOU!!! O numero eh 5")
// } else{
//     console.log("ERROU!!! Esse nao eh o numero 5")
// }

//exemplo 4
console.log("Exemplo 4")
let prompt = require ("prompt-sync")();
let primeiraNota = parseFloat(prompt("Digite a primeira nota: "))
let segundaNota = parseFloat(prompt("Digite a segunda nota: "))
let soma = primeiraNota + segundaNota
let media = soma / 2

console.log("A media dos alunos que vao embora antes da hora eh: " + media)
