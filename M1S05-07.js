//[M1S05] Ex 7 - Mapeamento de Elementos: Utilizando o array numeros utilizado nos exercícios anteriores, 
// crie um novo array chamado quadrados que contenha o quadrado de cada número do array numeros. 
// Imprima o array quadrados no console. Use o método map para realizar a criação de um novo array.

//Ex 3:
const prompt = require('prompt-sync')();
let numeros = [];

for(i = 0; i < 5; i++){
    let numero = Number(prompt("Digite um número:"));
    numeros.push(numero);
}

console.log(numeros);

//Ex 7:
let quadrados = numeros.map(n => {
    return n * n;
})

console.log(quadrados);
