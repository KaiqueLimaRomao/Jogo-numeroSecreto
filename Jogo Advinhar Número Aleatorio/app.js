// -VÁRIAVEIS:
let numerosJaSorteados = [];

let qtndNumeros = 10;

let numeroSecretoGerado = numeroSecreto();
// Variável que guarda o valor gerado pela função "numeroSecreto()".

let tentativasUsuario = 1;
// Váriavel para começar a contagem de tentativas até acertar.




// -FUNÇÕES:
function exibirNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
// Função para alterar textos do html atráves do DOM.

function verificarChute() {
    let chute = document.querySelector('input').value;
    let singularOuPlural = chute > 1 ? 'tentativas' : 'tentativa';

    if (chute == numeroSecretoGerado) {
        exibirNaTela('h1', 'acertou!');
        exibirNaTela('p', `Parabéns você acertou com ${tentativasUsuario} ${singularOuPlural}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecretoGerado) {
            exibirNaTela('p', 'O número é menor');
        } else {
            exibirNaTela('p', 'O número é maior');
        }
        LimparNumeroUsuario();
    }

    tentativasUsuario++;
}
// Função que verifica se o número digitado pelo usuario está certo e altera o texto conforme número de tentativas e se acertar.

function numeroSecreto() {
    let numeroSorteado= parseInt(Math.random() * qtndNumeros + 1);
    let qntdNumerosLista = numerosJaSorteados.length;

if (qntdNumerosLista == qtndNumeros){
    numerosJaSorteados = [];
}

     if(numerosJaSorteados.includes(numeroSorteado)){
        return numeroSecreto()
     }else{
        numerosJaSorteados.push(numeroSorteado);
        return numeroSorteado
     }
}
// Função que gera o número a ser acertado pelo usario.

function LimparNumeroUsuario() {
    chute = document.querySelector('input');
    chute.value = ' ';
}
// Função que limpa a área do usuario digitar um número a cada tentativa.

function mensagemTela() {
    exibirNaTela('h1', 'Jogo do número secreto Kaique');
    exibirNaTela('p', 'Digite um número de 01 a 10'); 
}
// Função para podermos alterar oque está escrito na mensagem da tela inicial sem ter que alterar em todos os campos que ela está presente.

function reiniciarJogo() {
    numeroSecretoGerado = numeroSecreto();
    LimparNumeroUsuario();
    tentativasUsuario = 1;
    mensagemTela();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}
// Função que faz funcionar o botão de reiniciar o jogo ao clicar nele 



    
// -OUTROS:
mensagemTela();