const frm = document.querySelector("form");
const resp1 = document.querySelector(".resptempo");
const resp2 = document.querySelector(".resptroco");

frm.addEventListener("submit", (e) => {
  e.preventDefault();
  const valor = Number(frm.ivalor.value);

  if (valor < 1) {
    resp1.innerHTML = "Valor insuficiente";
    resp2.classList.add("oculto");
  } else if (valor >= 1 && valor < 1.75) {
    resp1.innerHTML = "Tempo: 30min";
    const troco = valor - 1;
    if (troco <= 0) {
      resp2.classList.add("oculto");
    } else resp2.innerHTML = "Troco R$: " + troco.toFixed(2);
  } else if (valor >= 1.75 && valor < 3) {
    resp1.innerHTML = "Tempo: 60min";
    const troco = valor - 1.75;
    if (troco <= 0) {
      resp2.classList.add("oculto");
    } else resp2.innerHTML = "Troco R$: " + troco.toFixed(2);
  } else if (valor >= 3) {
    resp1.innerHTML = "Tempo: 120min";
    const troco = valor - 3;
    if (troco <= 0) {
      resp2.classList.add("oculto");
    } else resp2.innerHTML = "Troco R$: " + troco.toFixed(2);
  }
});
