const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
  e.preventDefault();
  const nome = frm.inome.value;
  const masculino = frm.imasculino.checked;
  const altura = Number(frm.ialtura.value);

  let peso;

  if (masculino == true) {
    peso = 22 * Math.pow(altura, 2);
  } else {
    peso = 21 * Math.pow(altura, 2);
  }

  resp.innerHTML = nome + " Seu peso ideal é: " + peso.toFixed(3) + "kg";
});
