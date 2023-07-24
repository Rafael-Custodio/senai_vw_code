let prompt = require ("prompt-sync")()

let resposta = prompt("Voce deseja receber um Boa Noite ? ")

while (resposta == "sim") {
    console.log("Boa Noite")
    resposta = prompt("Você deseja continuar recebendo um Boa Noite?")
}

if (resposta == "nao") {
    console.log("Então não me procure mais!")
}

