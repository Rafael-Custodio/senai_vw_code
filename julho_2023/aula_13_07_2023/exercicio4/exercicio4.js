/*
Exercício 4: Verificação de idade
Escreva um programa que solicita o ano de nascimento de uma pessoa 
e verifica se ela é maior de 18 anos. 
Exiba uma mensagem indicando se a pessoa é maior de idade ou não.
*/


let prompt = require ("prompt-sync")()

console.log("=======================")
console.log(" ")

let anoNascimento = parseInt(prompt("Digite seu ANO DE NASCIMENTO: "))
let idade = 2023-anoNascimento



if(idade>=18 && idade<=100){
    console.log(" ")
    console.log(`Pessoa tem ${idade} anos, portanto, É maior de idade.`)
}else if(idade<0){
    console.log(" ")
    console.log("Digite uma data de nascimento válida.")
}else if(idade>100){
    console.log(" ")
    console.log("OLOKO BICHO.")
    console.log(`Pessoa tem ${idade} anos, portanto, É maior de idade.`)
    console.log("Está vivo ainda ?")
    console.log(" ")
    console.log("Se estiver, parabéns! Deus abençoe e dê muitos anos de vida.")
    console.log("Se não estiver, meus sentimentos.")
}else{
    console.log(" ")
    console.log(`Pessoa tem ${idade} anos, portanto, NÃO É maior de idade.`)
}
console.log(" ")
console.log("=======================")
