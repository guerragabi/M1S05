//[M1S05] Ex 1 - Acesso simples: Crie um array chamado frutas contendo três frutas diferentes. 
// Em seguida, imprima no console a segunda fruta do array.
// Desafio: utilize a biblioteca prompt-sync para receber cada uma das 3 frutas.

const prompt = require('prompt-sync')();
let frutas = []

for(i = 0; i < 3; i++){
    let fruta = prompt("Digite uma fruta:");
    frutas.push(fruta);
}

console.log(frutas);
console.log(frutas[1]);
