const botaoBomba = document.getElementById('bomba');
const botaoPneu = document.getElementById('pneu');

let pneuCheio = false;

botaoBomba.addEventListener('click', () => {
  pneuCheio = true;
  botaoPneu.querySelector('img').src = 'pneu_cheio.png';
});

botaoPneu.addEventListener('click', () => {
  if (pneuCheio) {
    alert('VROOM!');
  }
});