//[M1S05] Ex 6 - Filtragem de Elementos: Crie um array chamado pares que contenha apenas os números pares do array numeros criado nos exercícios anteriores. 
// Em seguida, imprima esse novo array no console. Utilize o método filter para realizar a operação de filtragem.

//Ex 3:
const prompt = require('prompt-sync')();
let numeros = [];

for(i = 0; i < 5; i++){
    let numero = Number(prompt("Digite um número:"));
    numeros.push(numero);
}

console.log(numeros);

//Ex 6:
let pares = numeros.filter(n => {
    return n % 2 == 0;
})

console.log(pares);
