
const donut = document.getElementById('donut');
const bread = document.getElementById('bread');

donut.addEventListener('click', () => {
  donut.classList.toggle('selected');
});

bread.addEventListener('click', () => {
  bread.classList.toggle('selected');
});
