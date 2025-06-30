const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
  e.preventDefault();
  const numero = Number(frm.inumero.value);
  let resposta = "Entre " + numero + " e 1:";

  for (let i = numero; i > 1; i--) {
    resposta += +i + ", ";
  }
  resp.innerHTML = resposta + "1.";
});
