/*
ALGORITMO

1. Pegar os valores
2. Calcular a Idade
      a. Com base no ano
      b. Com mês (EXTRA)
      c. Com dia (EXTRA)

3. Gerar a faixa etária
    Resultado           Faixa
    0 à 12              Criança
    13 à 17             Adolescente
    18 à 65             Adulto
    Acima de 65         Idoso
   
4. Organizar o objeto pessoa para salvar na lista
5. Cadastrar a pessoa na lista
6. Função para carregar as pessoas, carrega a lista do localStorage, chamar ao carregar a página
7. Renderizar o conteúdo da tabela com as pessoas cadastradas
8. Botão para limpar os registros;
*/

function calcular(event) {

    //Previne o recarregar da página
    event.preventDefault()

    console.log("Foi executada a função calcular");

    //Passo 1
    let usuario = receberValores()

    //Passo 2
    let idadeCalculada = calcularIdade(usuario.ano)

    //Passo 3
    let classificacaoEtaria = faixaEtaria(idadeCalculada)
    console.log(classificacaoEtaria);

    //Passo 4
    usuario = organizarDados(usuario, idadeCalculada, classificacaoEtaria)



}


//Passo 1
function receberValores() {
    //( .trim ) Limpa os espaços em branco, antes e depois do texto = Trata a entrada de dados do usuário
    let nomeRecebido = document.getElementById("nome").value.trim()
    let diaRecebido = document.getElementById("dia-nascimento").value
    let mesRecebido = document.getElementById("mes-nascimento").value
    let anoRecebido = document.getElementById("ano-nascimento").value

    let dadosUsuario = {
        nome: nomeRecebido,
        dia: diaRecebido,
        mes: mesRecebido,
        ano: anoRecebido
    }
    console.log(dadosUsuario);
    return dadosUsuario
}


//Passo 2
function calcularIdade(ano) {
    const dataAtual = new Date();
    const anoAtual = dataAtual.getFullYear();

    let calculoIdade = anoAtual - ano

    console.log("Idade: ", calculoIdade);
    return calculoIdade    
}


//Passo 3
function faixaEtaria(idade) {
    /*
    0 à 12              Criança
    13 à 17             Adolescente
    18 à 65             Adulto
    Acima de 65         Idoso
    */

    if (idade <= 12) {
        return "Criança"       
    } else if (idade >= 13 && idade <= 17){
        return "Adolescente"
    }else if (idade >= 18 && idade <= 65){
        return "Adulto"
    } else {
        return "Idoso"        
    }    
}

//Passo 4
function organizarDados(usuarioDados_, calculoIdade_, situacao_) {
    
    let dadosUsuarioAtualizado = {
        ...usuarioDados_,
        idade: calculoIdade_,
        situacao: situacao_
    }
    
    console.log(dadosUsuarioAtualizado);
    return dadosUsuarioAtualizado
}








