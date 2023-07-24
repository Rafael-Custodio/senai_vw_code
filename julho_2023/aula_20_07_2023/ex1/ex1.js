/*
Fazer um menu de exercícios utilizando exemplos dado em aula 
(6 exercícios dentro de funções, e incluir nome ou algo de sua 
    preferência para criar um objeto e manipulá-lo)
*/

// Modo ANTIGO de receber informações do usuário
// let prompt = require("prompt-sync")()

//Modo NOVO de receber informações do usuário
import promptSync from "prompt-sync"
import { exercicio1, exercicio2, exercicio3, exercicio4, exercicio5, exercicio6, exercicio7, exercicio8, exercicio9, exercicio10 } from "./moduloEx1.js";

let prompt = promptSync()
let resposta

do {
    console.log(" ")
    console.log("======================================================")
    console.log(" ")
    console.log("Bem vindo ao menu de exercícios!")
    resposta = prompt("Digite um número de 1 a 6 para escolher um exercício, ou 'sair' para sair: ")

    switch (resposta) {
        case "1":
            console.log("Você escolheu o exercício 1.")

            //Chamar (invocar) o exercício 1
            exercicio1()
            break

        case "2":
            console.log("Você escolheu o exercício 2.")

            //Chamar (invocar) o exercício 2
            exercicio2()
            break

        case "3":
            console.log("Você escolheu o exercício 3.")

            //Chamar (invocar) o exercício 3
            exercicio3()
            break

        case "4":
            console.log("Você escolheu o exercício 4.")

            //Chamar (invocar) o exercício 4
            exercicio4()
            break

        case "5":
            console.log("Você escolheu o exercício 5.")

            //Chamar (invocar) o exercício 5
            exercicio5()
            break

        case "6":
            console.log("Você escolheu o exercício 6.")

            //Chamar (invocar) o exercício 6
            exercicio6()
            break

        case "7":
            console.log("Você escolheu o exercício 7.")

            //Chamar (invocar) o exercício 7
            exercicio7()
            break

        case "8":
            console.log("Você escolheu o exercício 8.")

            //Chamar (invocar) o exercício 8
            exercicio8()
            break

        case "9":
            console.log("Você escolheu o exercício 9.")

            //Chamar (invocar) o exercício 9
            exercicio9()
            break

        case "10":
            console.log("Você escolheu o exercício 10.")

            //Chamar (invocar) o exercício 10
            exercicio10()
            break

        default:
            console.log("Você não escolheu nenhum exercício.")
            break
    }

} while (resposta != "sair")

console.log(" ")
console.log("======================================================")
console.log(" ")
