const frm = document.querySelector("form");
const medi = document.querySelector("#resp1");
const pre = document.querySelector("#resp2");

frm.addEventListener("submit", (e) => {
  const medicamento = frm.imedicamento.value;
  const preco = Number(frm.ipreco.value);

  const promo = preco * 2;
  medi.innerHTML = "Nome do Medicamento: " + medicamento;
  pre.innerHTML =
    "Comprando em 2 unidades sai por: R$" + Math.floor(promo).toFixed(2);

  e.preventDefault();
});
