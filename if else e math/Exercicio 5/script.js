const prompt = require("prompt-sync")({ sigint: true });


const number = Number(prompt("Digite um número: "));




// FORMA MAIS SIMPLES

if (number == 0 || number === 4 || number === 7) {
  console.log("Parabéns, voce acertou!");
} else {
  console.log("Voce não acertou");
}




// FORMA MAIS COMPLEXA

// if (number === 0) {
//   console.log("Parabéns, você acertou!");
// } else if (number === 4) {
//   console.log("Parabéns, você acertou!");
// } else if (number === 7) {
//   console.log("Parabens, voce acertou");
// } else {
//   console.log("Voce não acertou");
// }