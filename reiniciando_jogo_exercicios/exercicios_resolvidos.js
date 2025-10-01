//Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.
function CalcularIMC(altura,peso){
    let imc = (altura * altura)/peso;
    return imc;
}
// Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.

function CalcularFatorial(numero){
    let fatorial = 1;
    if(numero==0||numero==1){
       return 1;
    }

    for (let i = 2; i <= numero; i++) {
       fatorial *= i;
        
    }
    return fatorial;
}

// Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$5,60.
function ConverterDolar(dolar){
    let cotacaoAtual=5.60;
    let reais = dolar * cotacaoAtual;
    return reais.toFixed(2);
}
// Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.
function CalcularAreaPerimetroRetangulo(comprimento,largura){
    let area = comprimento * largura;
    let perimetro = 2 * (comprimento + largura);

    alert(`Essa é a area ${area}`);
    alert(`Esse é o perímetro ${perimetro}`);

}
// Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.
function CalcularAreaPerimetroCircular(raio){

    pi = 3.14;
    let area = pi * (raio*raio);
    let perimetro = 2 * pi * raio;

    alert(`Essa é a area  de um circulo ${area}`);
    alert(`Esse é o perímetro ${perimetro}`);

}

// Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.

function tabuada(numero){
    let contador = 0;
    while(contador <= numero){
        let resultado= contador * numero;
        console.log(`${contador} X ${numero}= ${resultado}`);
        contador++;

    }
}