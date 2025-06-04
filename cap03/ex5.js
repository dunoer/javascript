const prompt = require("prompt-sync")();
const pessoas = Number(prompt("Nº de Pessoas: "));
const peixes = Number(prompt("Nº de Peixes: "));

let pagar;
if (peixes > pessoas) {
  // prettier-ignore
  pagar = (pessoas * 20) + ((peixes - pessoas) * 12);
  console.log("Total a pagar: R$" + pagar.toFixed(2));
} else {
  pagar = peixes * 20;
  console.log("Total a pagar: R$" + pagar.toFixed(2));
}
