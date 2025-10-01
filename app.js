// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Jogo do numero Secreto';

// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = 'Escolha um numero de 1 a 10';

let numeroSecreto = numeroAleatorio();
let tentativas = 1;
console.log(numeroSecreto);
 

function exibirTexto(tag,texto){
   let campo = document.querySelector(tag);
   campo.innerHTML = texto; 
}

function exibirMensagemInicial() { 
    exibirTexto('h1', 'Jogo do número secreto'); 
    exibirTexto('p', 'Escolha um número entre 1 e 10'); I
}
exibirMensagemInicial();



//Código omitido

function verificarChute(){
    let chute = document.querySelector('input').value;
    //Código omitido

    if (chute == numeroSecreto) {

                let palavraTentativa = tentativas > 1 ? 'tentativas': 'tentativa';
                let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`; 
                exibirTexto('p', mensagemTentativas);
                document.getElementById('reiniciar').removeAttribute('disabled');
            
            } else {

                            if (chute > numeroSecreto) {
                                            exibirTexto('p', 'O número secreto é menor');
                            } else {
                                            exibirTexto('p', 'O número secreto é maior');
                            }
                            tentativas++;
                            limpaCampo();
            }
    }
    

function numeroAleatorio(){
    return parseInt(Math.random() * 10 + 1);
    
}

function limpaCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = numeroAleatorio();
    limpaCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);
}