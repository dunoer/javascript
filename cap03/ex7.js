const prompt = require("prompt-sync")();
const num = Number(prompt("Digite um numero: (centena)"));

if (num < 100 || num >= 1000) {
  console.log("Por favor digite um numero maior que 100");
  return;
}
const num1 = Math.floor(num / 100);
const sobra = num % 100;
const num2 = Math.floor(sobra / 10);
const num3 = sobra % 10;
console.log("Numero invertido: " + num3 + num2 + num1);
