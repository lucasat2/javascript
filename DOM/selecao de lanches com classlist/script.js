const lanche1 = document.getElementById("lanche-1");
const lanche2 = document.getElementById("lanche-2");
const lanche3 = document.getElementById("lanche-3");
const lanche4 = document.getElementById("lanche-4");

lanche3.addEventListener("click", () => {
  document.querySelector(".selecionado").classList.remove("selecionado");
  lanche3.classList.add("selecionado");
});

lanche1.addEventListener("click", () => {
  document.querySelector(".selecionado").classList.remove("selecionado");
  lanche1.classList.add("selecionado");
});

lanche2.addEventListener("click", () => {
  document.querySelector(".selecionado").classList.remove("selecionado");
  lanche2.classList.add("selecionado");
});

lanche4.addEventListener("click", () => {
  document.querySelector(".selecionado").classList.remove("selecionado");
  lanche4.classList.add("selecionado");
});
