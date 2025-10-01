//1-Faça o download de outro projeto clicando neste link e abra no Visual Studio Code.

//2-Altere o conteúdo da tag h1 com document.querySelector e atribua o seguinte texto: Hora do Desafio.
let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do desafio'

//3-Crie uma função que exiba no console a mensagem O botão foi clicado sempre que o botão Console for pressionado.
 //<button onclick="clicar()" class="container__botao">clique</button>
function clicar(){
    console.log('O botão foi clicado');
}
//4-Crie uma função que exiba um alerta com a mensagem: Eu amo JS, sempre que o botão Alerta for pressionado.
 //<button onclick="alerta()" class="container__botao">alerta</button>
function alerta(){
    alert('Eu amo JS');
}
//5-Crie uma função que é executada quando o botão prompt é clicado, perguntando o nome de uma cidade do Brasil. Em seguida, exiba um alerta com a mensagem concatenando a resposta com o texto: Estive em {cidade} e lembrei de você.
 //<button onclick="cidade()" class="container__botao">prompt</button>
 function cidade(){
    let cidade = prompt('Informe sua cidade:');

    alert(`Estive em ${cidade} e lembrei de você.`);

 }
//6- Ao clicar no botão soma, peça 2 números inteiros e exiba o resultado da soma em um alerta.
 //<button onclick="soma()" class="container__botao">soma</button>

 function soma(){
    let valor1= prompt('Informe um numero:');
    let valor2= prompt('Informe outro numero:');

    let resultado = valor1 + valor2;

    alert(`resultado da some é  ${resultado}`);
 }