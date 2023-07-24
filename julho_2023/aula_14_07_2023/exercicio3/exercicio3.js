// Laço condicional
let prompt = require ("prompt-sync")();

let resposta = prompt ("Você deseja ler um Boa Noite?");

do {
    console.log("Tô nem aí, Boa Noite");
    resposta = prompt ("Você deseja continuar recebendo Boa Noite?");  
} while (resposta =="sim");


