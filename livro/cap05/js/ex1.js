const frm = document.querySelector("form");
const numero = document.querySelector("pre");

frm.addEventListener("submit", (e) => {
  e.preventDefault();
  const num1 = Number(frm.inumero.value);
  let resposta = "";
  for (let i = 1; i < 11; i++) {
    resposta += num1 + " x " + i + " = " + num1 * i + "\n";
  }
  numero.innerHTML = resposta;
  numero.classList.add("formatacao");
});
