//[M1S05] Ex 5 - Ordenação Crescente: Crie um novo array chamado numerosOrdenados contendo os mesmos números do array numeros. 
// Em seguida, ordene esse novo array em ordem crescente e imprima-o no console.

//Ex 3:
const prompt = require('prompt-sync')();
let numeros = [];

for(i = 0; i < 5; i++){
    let numero = Number(prompt("Digite um número:"));
    numeros.push(numero);
}

console.log(numeros);

//Ex 5:
let numerosOrdenados = numeros.sort((a,b) => a - b);

console.log(numerosOrdenados);
