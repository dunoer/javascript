const frm = document.querySelector("form");
const resp1 = document.querySelector("#outresp1");
const resp2 = document.querySelector("#outresp2");
const resp3 = document.querySelector("#outresp3");

frm.addEventListener("submit", (e) => {
  e.preventDefault();
  const valor = Number(frm.isaque.value);

  if (valor % 10 != 0) {
    alert("Por favor digite um numero divisivel por 10");
    frm.isaque.focus();
    return;
  }
  const notaCem = Math.floor(valor / 100);

  let resto = valor % 100;

  const notacinquenta = Math.floor(resto / 50);
  resto = resto % 50;
  const notadez = Math.floor(resto / 10);

  if (notaCem > 0) {
    resp1.innerHTML = "Notas de R$100: " + notaCem;
  }
  if (notacinquenta > 0) {
    resp2.innerHTML = "Notas de R$50: " + notacinquenta;
  }
  if (notadez > 0) {
    resp3.innerHTML = "Notas de R$10: " + notadez;
  }
});
