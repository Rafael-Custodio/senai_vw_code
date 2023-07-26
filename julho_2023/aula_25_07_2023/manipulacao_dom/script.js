/*
ALGORITMO

1 - Pegar os valores dos inputs
2 - Fazer o cálculo do IMC -> valorImc
3 - Gerar a classificação IMC -> classificacaoImc
4 - Organizar os dados do usuário para salvar na lista e gerar a data
5 - Inserir o usuário na lista (salvar no localStorage)
6 - Função para carregar os usuários (localStorage), chamar ao carregar a página
7 - Renderizar o conteúdo da tabela com os usuários cadastrados
8 - Botão para limpar os registros
*/


function calcular(event) {
    event.preventDefault()
    console.log("Foi executada a função calcular");

    let usuario = receberValores()

    let imcCalculado = calcularImc(usuario.altura, usuario.peso)

    let classificacaoImc = classificarImc(imcCalculado)

    console.log(classificacaoImc)
}


function receberValores() {
    //( .trim ) Limpa os espaços em branco, antes e depois do texto = Trata a entrada de dados do usuário
    let nomeRecebido = document.getElementById("nome").value.trim()
    let alturaRecebida = document.getElementById("altura").value
    let pesoRecebido = document.getElementById("peso").value

    let dadosUsuario = {
        nome: nomeRecebido,
        altura: alturaRecebida,
        peso: pesoRecebido
    }
    console.log(dadosUsuario)
    return dadosUsuario
}


function calcularImc(altura, peso) {
    let imc = peso / (altura * altura)

    console.log(imc);
    return imc
}


function classificarImc(imc) {
/*
Resultado               Situação

Abaixo de 18.5          Abaixo do peso
Entre 18.5 e 24.99      Peso normal
Entre 25 e 29.99        Sobrepeso
Acima de 30             Obesidade
*/

if (imc < 18.5) {
    return "Abaixo do peso"
}else if(imc >= 18.5 && imc < 25){
    return "Peso normal"
}else if(imc >= 25 && imc < 30){
    return "Sobpeso"
}else{
    return "Obesidade"    
}
}