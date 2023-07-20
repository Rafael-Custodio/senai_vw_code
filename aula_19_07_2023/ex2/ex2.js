// Aula Função e Objeto
// Atribuição de propriedade (chave e valor) utilizar "dois pontos" ( : )


//Criando a função e definindo os parâmetros
function olaPessoa(nome_, idade_) {
    
    //Criando objeto "pessoa"
    let pessoa = {
    nome: nome_,
    idade: idade_,

}

console.log(`Olá ${pessoa.nome}! Você está com ${pessoa.idade} anos e ${pessoa.peso} kilos.`)
}

//Chamando a função (Invocando) e passando parâmetros ou passando argumentos
olaPessoa("Thiago", 25)
olaPessoa("Jessica", 23)
olaPessoa("Odirlei", 52)

console.log(" ");
console.log("======================");
console.log("======================");
console.log(" ");

import { exercicio1 } from "./moduloExercicio1.js"
exercicio1()

