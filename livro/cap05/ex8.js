const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const num = Number(frm.inum.value);

  for (let i = 1; i <= num; i++) {
    if (i % 2 == 0) {
      resp.innerHTML += "-";
    } else {
      resp.innerHTML += "*";
    }
  }
  resp.classList.add("resp1");
});
