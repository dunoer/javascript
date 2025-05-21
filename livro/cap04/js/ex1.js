const frm = document.querySelector("form");
const resp1 = document.querySelector("h3");
const resp2 = document.querySelector("h4");

frm.addEventListener("submit", (e) => {
  e.preventDefault();
  const nome = frm.ialuno.value;
  const nota1 = Number(frm.inota1.value);
  const nota2 = Number(frm.inota2.value);

  const media = (nota1 + nota2) / 2;

  resp1.innerHTML = "Média das Notas: " + media.toFixed(2);
  if (media >= 7) {
    resp2.innerHTML = "Parabens " + nome + "! Você foi aprovado(a)";
    resp2.className = "aprovado";
  } else {
    resp2.innerHTML = "Ops... " + nome + "! Você foi reprovado(a)";
    resp2.className = "reprovado";
  }
});
