/*
Operadores lógicos
( || ) OU
( && ) E
( !  ) NÃO
Quero validar se o número digitado pelo usuário
está no intervalo de 10 a 20
*/

// let prompt = require ("prompt-sync")();
// let numero  = parseInt(prompt("Digite um numero: "));

// if(numero >= 10 && numero <= 20){
//     console.log("O numero ESTÁ entre 10 e 20")
// }else{
//     console.log("O numero NÃO está entre 10 e 20")
// }

let prompt = require ("prompt-sync")()
let animal = prompt("Digite o nome do animal para saber o que ele tem a dizer: ")

switch(animal){
    case 'cachorro':
        console.log("au au")
        break;

    case 'gato':
        console.log("miau miau")
        break;

    case 'vaca':
        console.log("muuuuuuuuuuuuuuuuuuu")
        break;
    case 'papagaio':
        console.log("Você foi a culpada desse amor se acabar..........")
        console.log("https://www.youtube.com/shorts/IqM8A7z8siU")
    default:
        console.log("Conheço esse bicho não.")
    
}
