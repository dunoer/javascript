const frm = document.querySelector("form");
const resp1 = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
  e.preventDefault();
  const vlpermitida = Number(frm.vlpermitida.value);
  const vlcondutor = Number(frm.vlcondutor.value);

  const porcentagem = ((vlcondutor - vlpermitida) / vlpermitida) * 100;

  if (vlcondutor <= vlpermitida) {
    resp1.innerHTML = "Sem Multa";
    resp1.classList.add("semmulta");
  } else if (porcentagem <= 20) {
    resp1.innerHTML = "Multa Leve";
    resp1.classList.add("multaleve");
  } else {
    resp1.innerHTML = "Multa Grave";
    resp1.classList.add("multagrave");
  }
});
