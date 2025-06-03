const form = document.querySelector("form");
const resp = document.querySelector("h3");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const horabrasil = Number(form.ihorabrasil.value);
  let horafranca = horabrasil + 5;

  if (horafranca > 24) {
    horafranca = horafranca - 24;
  }
  resp.innerHTML = "Horario na França: " + horafranca.toFixed(2);
});
