const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");
const resp3 = document.querySelector("#outResp3");

frm.addEventListener("submit", (e) => {
  const veiculo = frm.inVeiculo.value;
  const preco = Number(frm.inPreco.value);

  const entrada = preco * 0.5;
  const saldo = entrada / 12;

  resp1.innerHTML = "Modelo Veiculo: " + veiculo;
  resp2.innerHTML = "Entrada: R$ " + entrada.toFixed(2);
  resp3.innerHTML = "Saldo em 12x de: " + saldo.toFixed(2);
  e.preventDefault();
});
