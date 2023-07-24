/*
6.	Faça um programa que receba 4 notas de um aluno, 
calcule e imprima a média aritmética das notas 
e a mensagem de APROVADO para média superior 
ou igual a 7,0 RECUPERAÇÃO para notas entre 5.0 e 7,0 
ou a mensagem de REPROVADO para média inferior a 5,0.
*/

let prompt = require ("prompt-sync")()
let nota1 = parseFloat(prompt("Digite a PRIMEIRA nota: "))
let nota2 = parseFloat(prompt("Digite a SEGUNDA nota: "))
let nota3 = parseFloat(prompt("Digite a TERCEIRA nota: "))
let nota4 = parseFloat(prompt("Digite a QUARTA nota: "))
let media = (nota1+nota2+nota3+nota4)/4

console.log("=======================")
console.log("A MÉDIA das 04 notas digitadas é: " +media.toFixed(2))

if(media >= 7){
    console.log("O aluno está APROVADO.")
}else if(media >= 5 && media < 7){
    console.log("O aluno está de RECUPERAÇÃO.")
}else{
    console.log("O aluno está REPROVADO.")
}
console.log("=======================")
