const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
  const quilo = Number(frm.ipreco.value);
  const consumo = Number(frm.iconsumo.value);

  const valor = (consumo / 1000) * quilo;
  resp.innerHTML = "Valor a pagar R$ " + valor.toFixed(2);

  e.preventDefault();
});
