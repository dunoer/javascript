const frm = document.querySelector("form");
const produto = document.querySelector("#resp1");
const preco = document.querySelector("#resp2");

frm.addEventListener("submit", (e) => {
  const pro = frm.iproduto.value;
  const pre = Number(frm.ipreco.value);

  const promo = pre + pre + pre * 0.5;

  produto.innerHTML = pro + " - Promoção: Leve 3 por R$: " + promo.toFixed(2);
  preco.innerHTML = "O 3º produto custa apenas: R$:" + (pre * 0.5).toFixed(2);

  e.preventDefault();
});
