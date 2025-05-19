const frm = document.querySelector("form");
const valor = document.querySelector("#resp1");
//const tempo = document.querySelector("#resp2");

frm.addEventListener("submit", (e) => {
  const valor2 = Number(frm.ipreco.value);
  const tempo2 = Number(frm.itempo.value);

  const valorfinal = Math.ceil(tempo2 / 15) * valor2;

  valor.innerHTML = "Valor a pagar R$" + valorfinal.toFixed(2);

  e.preventDefault();
});
