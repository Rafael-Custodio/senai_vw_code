// FOR = 5.	Imprimir os primeiros 10 números da sequência de Fibonacci.

let numero1 = 0
let numero2 = 1
let soma = 0

console.log(numero1)
console.log(numero2)

for(let i = 1; i <= 8; i++){
    soma = numero1 + numero2
    console.log(soma)
    numero1 = numero2
    numero2 = soma
}
