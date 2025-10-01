// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Jogo do numero Secreto';

// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = 'Escolha um numero de 1 a 10';

let numeroSecreto = numeroAleatorio();
console.log(numeroSecreto);
function exibirTexto(tag,texto){
   let campo = document.querySelector(tag);
   campo.innerHTML = texto; 
}

exibirTexto('h1','Jogo do numero Secreto');
exibirTexto('p','Escolha um numero de 1 a 100');

function verificarChute(){
    let chute = document.querySelector('input').value;
    if(chute == numeroSecreto){
        alert('Você acertou');
    }else{
        alert('Você errou!');
    }
    
}

function numeroAleatorio(){
    return parseInt(Math.random() * 100 + 1);
    
}