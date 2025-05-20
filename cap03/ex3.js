const prompt = require("prompt-sync")();
const salario = Number(prompt("Digite seu salario: "));
const tempo = Number(prompt("Digite quantos anos você tem de empresa : "));

const tempofi = Math.floor(tempo / 4);
const salariofi = salario * (tempofi / 100) + salario;

console.log("Seu Salario R$ " + salario.toFixed(2));
console.log(
  "Tempo de empresa em anos: " +
    tempo +
    " corresponde a um aumento de: " +
    tempofi +
    "%"
);
console.log("Salario final com o aumento R$ " + salariofi);
