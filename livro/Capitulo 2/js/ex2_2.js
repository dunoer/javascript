//cria refernecia aso campos form, elemento h3 e h4
const frm = document.querySelector("form");
const resp1 = document.querySelector("h3");
const resp2 = document.querySelector("h4");

//cria um ouvinte de evento, acionado quando o botao submit for clicado
frm.addEventListener("submit", (e) => {
  const titulo = frm.inTitulo.value; //obtem conteudo do campo
  const duracao = Number(frm.inDuracao.value);

  const horas = Math.floor(duracao / 60); //arredonda o valor para abaixo
  const minutos = duracao % 60; //obtem o resto da divisao
  resp1.innerText = titulo;
  resp2.innerText = horas + "hora(s) e " + minutos + "minuto(s)";
  e.preventDefault();
});
