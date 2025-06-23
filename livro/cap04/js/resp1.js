const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
  e.preventDefault();
  const num = Number(frm.inumero.value);

  if (num % 2 == 0) {
    resp.innerHTML = "Numero Par";
    resp.classList.add("par");
  } else {
    resp.innerHTML = "Numero Impar";
    resp.classList.add("impar");
  }
});
