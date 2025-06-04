const prompt = require("prompt-sync")();
const valorCompra = Number(prompt("Digite o valor da compra: R$"));

if (valorCompra <= 20) {
  console.log(
    "Voce nao podera parcelas as compras, valor total: " +
      valorCompra.toFixed(2)
  );
} else {
  const aux = Math.floor(valorCompra / 20);
  const parcelas = aux == 0 ? 1 : aux > 6 ? 6 : aux;
  const valorparcela = valorCompra / parcelas;
  console.log(
    "Pode pagar em: " +
      parcelas +
      " parcelas" +
      "\n Valor de R$" +
      valorparcela.toFixed(2) +
      " cada parcela"
  );
}
