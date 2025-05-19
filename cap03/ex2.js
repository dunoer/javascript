const prompt = require("prompt-sync")();
const veiculo = prompt("Digite o Veiculo: ");
const preco = Number(prompt("Digite o preço do Veiculo "));

const entrada = preco * 0.5;
const parcela = (preco * 0.5) / 12;

console.log("Promocao Veiculo :" + veiculo);
console.log("Entrada de R$ " + entrada.toFixed(2));
console.log("+ 12x de R$ " + parcela.toFixed(2));
