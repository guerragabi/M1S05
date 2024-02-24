//[M1S05] Ex 3 - Iteração Básica: Crie um array chamado numeros contendo cinco números inteiros. 
// Utilize um loop for para imprimir cada número do array no console.
// Desafio: utilize a biblioteca prompt-sync para receber cada um dos 5 números.

const prompt = require('prompt-sync')();
let numeros = [];

for(i = 0; i < 5; i++){
    let numero = Number(prompt("Digite um número:"));
    numeros.push(numero);
}

for(element of numeros){
    console.log("Número: ", element);
}
