const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
  e.preventDefault();
  const num = Number(frm.inumero.value);
  const raiz = Math.sqrt(num);

  if (Number.isInteger(raiz)) {
    resp.innerHTML = "Raiz: " + raiz;
  } else {
    resp.innerHTML = "O numero não tem raiz exata";
  }
});
