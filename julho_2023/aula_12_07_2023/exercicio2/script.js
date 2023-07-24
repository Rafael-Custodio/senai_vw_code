/*
2.	Uma empresa decide dar aumento de 30% aos funcionários 
cujo salário é inferior a 500 reais. 
Escreva um programa que receba o salário de um funcionário 
e imprima o valor do salário reajustado 
ou uma mensagem caso o funcionário não tenha direito a aumento.
*/

let prompt = require ("prompt-sync")()
let salario = parseFloat(prompt("Digite o salario do funcionário: "))
let salarioNovo = parseFloat

console.log("=======================")

if(salario < 500){
    salarioNovo = salario*1.30
    console.log("Com reajuste de 30%, o novo salário é: " + salarioNovo.toFixed(2))
}else{
    console.log("Funcionário não tem direito a aumento de 30%.")
    console.log(`Seu salário é de R$ ${salario}.00 e você não tem direito a aumento.`) //interpolação
}
console.log("=======================")




