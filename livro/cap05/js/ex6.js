const frm = document.querySelector("form");
const resp1 = document.querySelector("#outresp1");
const resp2 = document.querySelector("#outresp2");

let resposta = "";
let numContas = 0;
let valorTotal = 0;

frm.addEventListener("submit", (e) => {
  e.preventDefault();
  const descri = frm.idescricao.value;
  const valor = Number(frm.ivalor.value);

  numContas = numContas + 1;
  valorTotal += valor;
  resposta = resposta + descri + " - R$ " + valor.toFixed(2) + "\n";
  resp1.innerHTML =
    resposta + " --------------------------------------------- ";
  resp2.innerHTML =
    numContas + " Conta (s) - Total R$: " + valorTotal.toFixed(2);
  resp2.classList.add("res");

  frm.idescricao.value = "";
  frm.ivalor.value = "";
  frm.idescricao.focus();
});
