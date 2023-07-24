import promptSync from "prompt-sync"
let prompt = promptSync()


export function exercicio1() {

    console.log("Exercício 1")
    console.log("Exercício com FOR = Imprimir números de 1 a 10 utilizando o loop.");

    for (let contador = 1; contador < 11; contador++) {
        console.log(contador)
    }
}




export function exercicio2() {

    console.log("Exercício 2");

    console.log("Exercício com FOR = Imprimir números pares de 1 a 10.");
    //for(let contador = 0; contador < 11; contador = contador+2){
    for (let contador = 0; contador <= 10; contador += 2) {
        console.log(contador)
    }
}




export function exercicio3() {

    console.log("Exercício com FOR = Faça um programa que imprima os números ímpares de 0 a 50.");

    //for(let contador = 1; contador < 50; contador = contador+2){
    for (let contador = 1; contador < 50; contador += 2) {
        console.log(contador)
    }
}




export function exercicio4() {

    console.log("Exercício com FOR = Faça um programa que imprima na tela a tabuada de um número qualquer escolhido pelo usuário até o 10.");

    let numero = parseInt(prompt("Digite um número inteiro de 0 a 10: "))

    console.log("========================================")
    console.log(" ")
    console.log("TABUADA DO " + numero)
    console.log(" ")

    for (let i = 0; i <= 10; i * numero) {
        console.log(`${numero} x ${i}  = ` + (i * numero))
        i += 1
    }
}




export function exercicio5() {

    console.log("Exercício com FOR = Imprimir os primeiros 10 números da sequência de Fibonacci.");

    let numero1 = 0
    let numero2 = 1
    let soma = 0

    console.log(numero1)
    console.log(numero2)

    for (let i = 1; i <= 8; i++) {
        soma = numero1 + numero2
        console.log(soma)
        numero1 = numero2
        numero2 = soma
    }
}




export function exercicio6() {

    console.log("Exercício com WHILE = Imprimir números pares de 0 a 20 utilizando o loop.")

    let numero = 0

    while (numero <= 20) {
        console.log(numero)
        numero = numero + 2
    }
}


export function exercicio7() {

    console.log("Exercício com WHILE = Calcular a soma dos números de 1 a 100 utilizando a estrutura.");

    let contador = 1
    let soma = 0
    console.log()

    while (contador <= 100) {
        soma = soma + contador
        //soma += contador    

        console.log(`Passando ${contador} vez, a soma é ${soma}.`)
        //console.log(contador)

        contador++
    }
}



export function exercicio8() {

    console.log("Exercício com WHILE = Faça um programa que receba a idade do usuário, enquanto a resposta do usuário for menor que 18 anos continue a solicitar a idade e mostre uma mensagem quando a idade do usuário for maior que 18.");

    console.log("========================================")
    console.log(" ")

    let idade = parseInt(prompt("Digite a sua idade: "))

    while (idade < 18) {
        idade = parseInt(prompt("Digite a sua idade: "))
    }
    console.log("Você tem 18 anos ou mais.")
    console.log(" ")
    console.log("========================================")

}




export function exercicio9() {

    console.log("Exercício com WHILE = Faça um programa que receba um número do usuário e mostre no console a contagem regressiva até 0.");

    let numero = parseInt(prompt("Digite um número de 1 a 50: "))

    console.log("========================================")
    console.log(" ")
    while (numero >= 0) {
        console.log(numero)
        numero--
    }
    console.log(" ")
    console.log("Saiu do loop")

    console.log(" ")
    console.log("========================================")
}




export function exercicio10() {

    console.log("Exercício com WHILE = Faça um programa que receba um número do usuário e continue a pedir o número se o numero for diferente de 0.");

    let numero = 0

    console.log("========================================")
    console.log(" ")

    numero = parseInt(prompt("Digite um número qualquer: "))

    while (numero != 0) {
        numero = parseInt(prompt("Digite um número qualquer: "))
    }
    console.log(" ")
    console.log("Digitado o 0")
    console.log("Saiu do loop")

    console.log(" ")
    console.log("========================================")
}


















