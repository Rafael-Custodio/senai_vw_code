// Aula Objeto
// Atribuição de propriedade (chave e valor) utilizar "dois pontos" ( : )

let prompt = require('prompt-sync')()

let nome_recebido = prompt("Digite seu nome: ")
let idade_recebida = parseInt(prompt("Digite sua idade: "))
let peso_recebido = parseFloat(prompt("Digite seu peso: "))

let pessoa = {
    nome: nome_recebido,
    idade: idade_recebida,
    peso: peso_recebido
}

console.log(`Olá ${pessoa.nome}! Você está com ${pessoa.idade} anos e ${pessoa.peso} kilos.`)
// console.log("Olá " + nome + "! Você está com " + idade + " anos.")




