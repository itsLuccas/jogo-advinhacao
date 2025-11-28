/**
 * 
 */
//variáveis globais
const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
console.log(numeroAleatorio);

//funções utilitárias
const obterElemento = (id) => document.getElementById(id);
const validarPalpite = (palpite) => palpite < 0 || palpite > 100 || isNaN(palpite);
const validarTentativas = (tentativas) => tentativas === 0;
const limparInput = () => obterElemento('palpite').value = '';

//obter inputs
const obterPalpite = () => parseInt(obterElemento('palpite').value);
const obterTentativas = () => parseInt(obterElemento('tentativas').textContent);

//atualizar valores
const atualizarTentativas = (tentativas) => obterElemento('tentativas').textContent = tentativas - 1;

//finalizar jogo e recomeçar
const finalizarJogo = () => location.reload();

//comparar palpite
const compararPalpite = (palpite) => {
    if(palpite < numeroAleatorio)
        alert("Seu palpite é menor que o número mágico.")
    if(palpite > numeroAleatorio)
        alert("Seu palpite é maior que o número mágico.")
    if(palpite === numeroAleatorio) {
        alert("Você ganhou o jogo. Iremos resetar o game.")
        finalizarJogo();
    }
}


function chutar() {    
    const palpite = obterPalpite();
    const tentativas = obterTentativas();
    
    if(validarTentativas(tentativas)) {
        alert(`Você perdeu! Sem mais tentativas! O número secreto era: ${numeroAleatorio}`);
        finalizarJogo();
        return;
    }

    if(validarPalpite(palpite)) {
        alert("Valor inválido. O palpite deve ser entre 0 e 100.");
        return;
    }

    compararPalpite(palpite);
    atualizarTentativas(tentativas);
    limparInput();
}