const prompt = require("prompt-sync")();
const peso = Number(prompt("Digite o peso da ração em kg: "));
const cons = Number(prompt("Digite o quanto o gato consome por dia em Gr: "));

const dias = Math.floor((peso * 1000) / cons);
const rest = (peso * 1000) % cons;

console.log("Duração em dias da ração: " + dias);
console.log("Sobra em gramas: " + rest);
