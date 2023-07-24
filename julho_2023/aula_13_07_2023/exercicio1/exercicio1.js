/*
Exercício 1: Verificação de login
Escreva um programa que solicita ao usuário um nome de usuário e uma senha. 
Verifique se o nome de usuário é "admin" e a senha é "senha123". 
Exiba uma mensagem indicando se o login foi bem-sucedido ou não.
*/

let prompt = require ("prompt-sync")()

console.log("=======================")
console.log(" ")

let usuario = prompt("Digite seu Usuário: ")
let senha = prompt("Digite sua Senha: ")

if(usuario == "admin" && senha == "senha123"){
    console.log(" ")
    console.log("LOGIN BEM SUCEDIDO.")
}else{
    console.log(" ")
    console.log("LOGIN OU SENHA INCORRETO(A).")
}
console.log(" ")
console.log("=======================")






