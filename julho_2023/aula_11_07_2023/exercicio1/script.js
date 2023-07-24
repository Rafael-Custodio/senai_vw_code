
/*
1.	Faça um programa que receba o nome, cargo e salário de um funcionário. 
Se o funcionário ganhar abaixo de 1000 reais, calcule o salário acrescido de 10%. 
Ao final exiba o nome, o cargo e o salário desse funcionário.
*/

let prompt = require ("prompt-sync")()
let nome = prompt("Digite o nome do funcionário: ")
let cargo = prompt("Digite o cargo do funcionário: ")
let salario = parseFloat(prompt("Digite o salario do funcionário: "))
let salarioNovo = parseFloat

console.log("=======================")

if(salario < 1000){
    salarioNovo = salario*1.10
    console.log("Funcionário: " + nome)
    console.log("Cargo: " + cargo)
    console.log("Novo salário: " + salarioNovo.toFixed(2))
}else{
    console.log("Funcionário: " + nome)
    console.log("Cargo: " + cargo)
    console.log("Salário: " + salario)
}
console.log("=======================")
