//[M1S05] Ex 4 - Soma de Elementos: Utilizando o array numeros do exercício anterior, 
// calcule e imprima a soma de todos os elementos do array. 
// Utilize o reduce para realizar a soma.

//Ex 3:
const prompt = require('prompt-sync')();
let numeros = [];

for(i = 0; i < 5; i++){
    let numero = Number(prompt("Digite um número:"));
    numeros.push(numero);
}

console.log(numeros);

//Ex 4:
let soma = numeros.reduce((total,num) => total + num, 0);
console.log(soma);
