const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
  e.preventDefault();
  const num = Number(frm.inumero.value);
  let numdivi = 0;

  for (let i = 1; i <= num; i++) {
    if (num % i == 0) {
      numdivi++;
    }
  }
  if (numdivi == 2) {
    resp.innerHTML = " È um numero primo";
  } else {
    resp.innerHTML = "Não é primo";
  }
});
