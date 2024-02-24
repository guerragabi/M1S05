//[M1S05] Ex 2 - Adicionar e Remover Elementos: Usando o mesmo array do exercício anterior, adicione mais uma fruta ao array frutas. 
// Em seguida, remova a primeira fruta do array. Imprima o array atualizado no console.

//Ex 1:
const prompt = require('prompt-sync')();
let frutas = []

for(i = 0; i < 3; i++){
    let fruta = prompt("Digite uma fruta:");
    frutas.push(fruta);
}

console.log(frutas);

//Ex 2:
frutas.push(prompt("Digite uma fruta:"));
frutas.shift();

console.log(frutas);
