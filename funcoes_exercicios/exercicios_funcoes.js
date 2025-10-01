//1-Criar uma função que exibe "Olá, mundo!" no console.
function olaMundo(){
    console.log('olá mundo');
}

//2- Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
function bemVindo(nome){
    alert(`Olá, ${nome}!`);
}

//3- Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
function dobro(numero){
    return numero *2;
}

//4- Criar uma função que recebe três números como parâmetros e retorna a média deles.
function media(n1,n2,n3){
    return (n1+n2+n3)/3;
}
//5- Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
function maior(num1,num2){    
    return num1>num2?num1:num2;
}
//6- Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo
function multiplicacao(numero){
    return numero * numero;
}