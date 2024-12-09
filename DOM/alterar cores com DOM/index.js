const redButton = document.getElementById("btn-red");
const blueButton = document.getElementById("btn-blue");
const h2 = document.querySelector("h2");
const p = document.querySelector("p");
const div = document.querySelector("div");

redButton.addEventListener("click", function () {
  div.style.color = "red";
});

blueButton.addEventListener("click", function () {
  div.style.backgroundColor = "blue";
});
